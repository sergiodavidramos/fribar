import { API_URL, TOKENMAP } from '../Config'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../UserContext'
import { notify } from 'react-notify-toast'
import Loader from '../Loader'
import { useRouter } from 'next/router'
import IframePagosNet from './IframePagosNet'
export const Pago = () => {
  const {
    carrito,
    cantidades,
    token,
    direccionEnvio,
    user,
    totalConDescuneto,
    costoEnvio,
    limpiasCarrito,
    generarQR,
    setGenerarQR,
    ciudad,
    signOut,
  } = useContext(UserContext)

  const [tipoPago, setTipoPago] = useState(0)
  const [sucursalAsignado, setSucursalAsignado] = useState(false)
  const [tiempoEstimadoEntrega, setTiempoEstimadoEntrega] = useState(0)
  const [stateButton, setStateButton] = useState(false)
  const [sucursales, setSucursales] = useState([])
  const [infoPago, setInfoPago] = useState(false)
  const [infoPagoTarjeta, setInfoPagoTarjeta] = useState(false)
  const [estadoBoton, setEstadoBoton] = useState(false)

  const router = useRouter()

  useEffect(() => {
    getSucursales()
  }, [])
  useEffect(() => {
    if (direccionEnvio) {
      eleccionSucursales()
    }
  }, [direccionEnvio])
  useEffect(() => {
    if (tipoPago === 2) {
      generarTarjeta()
    }
    if (tipoPago === 3) {
      generarQr()
    }
  }, [totalConDescuneto, generarQR, tipoPago])

  const getSucursales = async () => {
    let indexSucursal = []
    try {
      const res = await fetch(`${API_URL}/sucursal/all`)
      const sucursal = await res.json()
      for (let s = 0; s < sucursal.body.length; s++) {
        for (let p = 0; p < carrito.length; p++) {
          const res = await fetch(
            `${API_URL}/inventario/buscar/producto-sucursal?idProducto=${carrito[p]._id}&idSucursal=${sucursal.body[s]._id}`,
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          )
          if (res.status === 401) {
            notify.show('Cuenta Bloqueada', 'error')
            signOut()
          }
          const productoEncontrado = await res.json()
          if (productoEncontrado.body.length <= 0) {
            indexSucursal.push(s)
          }
        }
      }
      const aux = new Set(indexSucursal)
      let indexEliminar = [...aux]
      for (let i of indexEliminar) {
        sucursal.body.splice(i, 1)
      }
      setSucursales(sucursal.body)
    } catch (error) {
      console.log(error)
      notify.show('Error al obtener las sucursales', 'error')
    }
  }
  const eleccionSucursales = async () => {
    const lonUser = direccionEnvio.lon
    const latUser = direccionEnvio.lat
    let mayorDistancia = 0
    let sucElegido = false
    let tiempo = 30
    if (sucursales.length > 1) {
      sucElegido = sucursales[0]
      for (let suc of sucursales) {
        const sucLon = suc.direccion.lon
        const sucLat = suc.direccion.lat
        const urlMapBox = `https://api.mapbox.com/directions/v5/mapbox/driving/${sucLon},${sucLat};${lonUser},${latUser}?alternatives=false&geometries=geojson&language=en&overview=full&steps=true&access_token=${TOKENMAP}`
        const resDatosMapa = await fetch(urlMapBox)
        const datosMapa = await resDatosMapa.json()
        if (datosMapa.routes[0].distance / 1000 > mayorDistancia) {
          mayorDistancia = datosMapa.routes[0].distance / 1000
        } else {
          sucElegido = suc
          tiempo = datosMapa.routes[0].duration / 60
        }
      }
      setSucursalAsignado(sucElegido._id)
      setTiempoEstimadoEntrega(tiempo)
    } else {
      setSucursalAsignado(sucursales.length > 0 ? sucursales[0]._id : '')
      setTiempoEstimadoEntrega(30)
    }
  }
  const handlerPedido = () => {
    setStateButton(true)
    switch (tipoPago) {
      case 1:
        notify.show(
          'Se envio el Pedido por favor espere la confirmacion 😊',
          'success'
        )
        const mandarDetalle = []
        for (let j = 0; j < carrito.length; j++) {
          mandarDetalle.push({
            producto: carrito[j]._id,
            cantidad: cantidades[j],
            tipoVenta: carrito[j].tipoVenta,
            precioVenta: carrito[j].precioVenta,
            descuento: carrito[j].descuento,
            idSucursal: sucursalAsignado,
          })
        }
        fetch(`${API_URL}/pedido`, {
          method: 'POST',
          body: JSON.stringify({
            idSucursal: sucursalAsignado,
            duracionEstimadaEntrega: tiempoEstimadoEntrega,
            tipoPago: 'Contra Entrega',
            direccion: direccionEnvio._id,
            detalleVenta: mandarDetalle,
            estadoPago: false,
          }),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
          .then((res) => {
            if (res.error)
              notify.show('Error al registrar el pedido 😓', 'error')
            return res.json()
          })
          .then((resPedido) => {
            if (resPedido.error) {
              notify.show(
                'Error en el servidor al realizar el pedido',
                'error'
              )
              setStateButton(false)
            } else {
              setStateButton(false)
              router.push({
                pathname: '/pedido-realizado',
                query: {
                  direccion: direccionEnvio.direccion,
                  referenciaDireccion: direccionEnvio.referencia,
                  tiempoEstimado: tiempoEstimadoEntrega,
                  numeroTel: user.phone,
                  correo: user.email,
                  pago: 'Contra Entrega',
                  total: totalConDescuneto + costoEnvio,
                  estadoPago: false,
                  idPedido: resPedido.body._id,
                },
              })
              limpiasCarrito()
            }
          })
          .catch((error) => {
            notify.show(
              'Error al registrar el pedido contra entrega',
              'error'
            )
          })
        break
      default:
        notify.show('Por favor selecciona un metodo de pago', 'warning')
        setStateButton(false)
    }
  }
  const generarQr = async () => {
    const pago = await fetch(`${API_URL}/pedido/pago-electronico/qr`, {
      method: 'POST',
      body: JSON.stringify({
        total: totalConDescuneto + costoEnvio,
        generarQR: generarQR,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    const resPago = await pago.json()
    if (resPago.error) {
      console.log('ERROR--->', resPago)
      notify.show(
        'Error al generar QR por favor seleccione otro metodo de pago',
        'error'
      )
    } else {
      if (resPago.body.codigoError === 0) {
        setInfoPago(resPago.body.idTransaccion)
      } else {
        if (resPago.body.descripcionError === 'Recaudacion duplicada') {
          setInfoPago(false)
        }
      }
    }
  }
  const generarTarjeta = async () => {
    const pago = await fetch(
      `${API_URL}/pedido/pago-electronico/tarjeta`,
      {
        method: 'POST',
        body: JSON.stringify({
          total: totalConDescuneto + costoEnvio,
          generarQR: generarQR,
          ciudad: ciudad.nombre,
          direccion: direccionEnvio.direccion,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )
    const resPago = await pago.json()
    if (resPago.error) {
      console.log('ERROR--->', resPago)
      notify.show(
        'Error al generar Tarjeta por favor seleccione otro metodo de pago',
        'error'
      )
    } else {
      if (resPago.body.codigoError === 0) {
        console.log('entre al pago con tarjeta REALIZADO EXITOSAMENTO')
        setInfoPagoTarjeta(resPago.body.idTransaccion)
      } else {
        if (resPago.body.descripcionError === 'Recaudacion duplicada') {
          console.log('ENTRE AL ERROR ', resPago.body)
          setInfoPagoTarjeta(false)
        }
      }
    }
  }
  const handlerGenerarQR = () => {
    setEstadoBoton(true)
    setGenerarQR()
    setEstadoBoton(false)
  }
  const handlerGenerarPagoTarjeta = () => {
    setEstadoBoton(true)
    setGenerarQR()
    setEstadoBoton(false)
  }
  return (
    <div className="checkout-step">
      <div className="checkout-card" id="headingFour">
        <span className="checkout-step-number">3</span>
        <h4 className="checkout-step-title">
          <button
            className="wizard-btn collapsed"
            type="button"
            // data-toggle="collapse"
            // data-target="#collapseFour"
            // aria-expanded="false"
            // aria-controls="collapseFour"
          >
            Pago
          </button>
        </h4>
      </div>
      <div
        id="collapseFour"
        className="collapse"
        aria-labelledby="headingFour"
        data-parent="#checkout_wizard"
      >
        <div className="col-lg-12 col-md-12">
          <div className="form-group mb-0">
            <div className="address-btns">
              <button
                className="save-btn14 hover-btn"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Atras
              </button>
            </div>
          </div>
        </div>
        <div className="checkout-step-body">
          <div className="payment_method-checkout">
            <div className="row">
              <div className="col-md-12">
                <div className="rpt100">
                  <ul className="radio--group-inline-container_1">
                    <li>
                      <div className="radio-item_1">
                        <input
                          id="cashondelivery2"
                          name="paymentmethod"
                          type="radio"
                          data-minimum="50.0"
                          onClick={() => setTipoPago(1)}
                        />
                        <label
                          htmlFor="cashondelivery2"
                          className="radio-label_1"
                        >
                          Pagar en la entrega
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="radio-item_1">
                        <input
                          id="card1"
                          value="card"
                          name="paymentmethod"
                          type="radio"
                          data-minimum="50.0"
                          onClick={() => {
                            console.log(tipoPago)
                            setTipoPago(2)
                            console.log(tipoPago)
                            if (infoPagoTarjeta === false) generarTarjeta()
                          }}
                        />
                        <label htmlFor="card1" className="radio-label_1">
                          Tarjeta de credito / debito
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="radio-item_1">
                        <input
                          id="cashondelivery1"
                          value="cashondelivery"
                          name="paymentmethod"
                          type="radio"
                          data-minimum="50.0"
                          onClick={() => {
                            setTipoPago(3)
                            if (infoPago === false) generarQr()
                          }}
                        />
                        <label
                          htmlFor="cashondelivery1"
                          className="radio-label_1"
                        >
                          QR
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>

                <div
                  className="form-group return-departure-dts"
                  data-method="cashondelivery"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      {tipoPago === 3 && infoPago ? (
                        <IframePagosNet
                          infoPago={infoPago}
                          url="https://web.sintesis.com.bo/iframe-simple-pagosnet/#/payQr"
                          tipoPago="qr"
                          sucursalAsignado={sucursalAsignado}
                          tiempoEstimado={tiempoEstimadoEntrega}
                          idDireccion={direccionEnvio._id}
                          nombreDireccion={direccionEnvio.direccion}
                          refDireccion={direccionEnvio.referencia}
                          nombreCiudad={ciudad.nombre}
                          costoEnvio={costoEnvio}
                        />
                      ) : (
                        <button
                          type="button"
                          title="Generar nuevo QR"
                          className="next-btn16 hover-btn"
                          onClick={handlerGenerarQR}
                          disabled={estadoBoton}
                        >
                          Generar codigo QR
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className="form-group return-departure-dts"
                  data-method="card"
                >
                  <div className="row">
                    {tipoPago === 2 && infoPagoTarjeta ? (
                      <IframePagosNet
                        infoPago={infoPagoTarjeta}
                        url="https://web.sintesis.com.bo/payment-cybersource/#/cybersource"
                        tipoPago="tarjeta"
                        sucursalAsignado={sucursalAsignado}
                        tiempoEstimado={tiempoEstimadoEntrega}
                        idDireccion={direccionEnvio._id}
                        nombreDireccion={direccionEnvio.direccion}
                        refDireccion={direccionEnvio.referencia}
                        nombreCiudad={ciudad.nombre}
                        costoEnvio={costoEnvio}
                        token={token}
                      />
                    ) : (
                      <button
                        type="button"
                        title="Generar nuevo QR"
                        className="next-btn16 hover-btn"
                        onClick={handlerGenerarPagoTarjeta}
                        disabled={estadoBoton}
                      >
                        Generar pago con Tarjeta
                      </button>
                    )}
                  </div>
                </div>
                {stateButton ? (
                  <div>
                    <Loader />
                  </div>
                ) : (
                  tipoPago === 1 && (
                    <button
                      type="button"
                      title="Click para confirmar pedido"
                      className="next-btn16 hover-btn"
                      disabled={stateButton}
                      onClick={handlerPedido}
                    >
                      Confirmar pedido
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
