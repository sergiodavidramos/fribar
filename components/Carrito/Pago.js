import Link from 'next/link'
import { API_URL, TOKENMAP } from '../Config'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../UserContext'
import { notify } from 'react-notify-toast'
import Loader from '../Loader'
import { useRouter } from 'next/router'
import GetImg from '../GetImg'
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
  } = useContext(UserContext)

  const [tipoPago, setTipoPago] = useState(false)
  const [sucursalAsignado, setSucursalAsignado] = useState(false)
  const [tiempoEstimadoEntrega, setTiempoEstimadoEntrega] = useState(0)
  const [stateButton, setStateButton] = useState(false)
  const [estadoQr, setEstadoQR] = useState(false)
  const [sucursales, setSucursales] = useState([])

  const router = useRouter()

  useEffect(() => {
    getSucursales()
  }, [])
  useEffect(() => {
    if (direccionEnvio) {
      eleccionSucursales()
    }
  }, [direccionEnvio])

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
      setSucursalAsignado(sucursales[0]._id)
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
      case 2:
        notify.show(
          'Se envio el Pedido por favor espere la confirmacion 😊',
          'success'
        )
        const mandarDetalle2 = []
        for (let j = 0; j < carrito.length; j++) {
          mandarDetalle2.push({
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
            tipoPago: 'Tarjeta',
            direccion: direccionEnvio._id,
            detalleVenta: mandarDetalle2,
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
            setStateButton(false)
            router.push({
              pathname: '/pedido-realizado',
              query: {
                direccion: direccionEnvio.direccion,
                referenciaDireccion: direccionEnvio.referencia,
                tiempoEstimado: tiempoEstimadoEntrega,
                numeroTel: user.phone,
                correo: user.email,
                pago: 'Tarjeta',
                total: totalConDescuneto + costoEnvio,
                estadoPago: false,
                idPedido: resPedido.body._id,
              },
            })
            limpiasCarrito()
          })
          .catch((error) => {
            notify.show(
              'Error al registrar el pedido contra entrega',
              'error'
            )
            setStateButton(false)
          })
        break
      case 3:
        if (estadoQr) {
          notify.show(
            'Se envio el Pedido por favor espere la confirmacion 😊',
            'success'
          )
          const mandarDetalle3 = []
          for (let j = 0; j < carrito.length; j++) {
            mandarDetalle3.push({
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
              tipoPago: 'Codigo QR',
              direccion: direccionEnvio._id,
              detalleVenta: mandarDetalle3,
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
              setStateButton(false)
              router.push({
                pathname: '/pedido-realizado',
                query: {
                  direccion: direccionEnvio.direccion,
                  referenciaDireccion: direccionEnvio.referencia,
                  tiempoEstimado: tiempoEstimadoEntrega,
                  numeroTel: user.phone,
                  correo: user.email,
                  pago: 'Codigo QR',
                  total: totalConDescuneto + costoEnvio,
                  estadoPago: false,
                  idPedido: resPedido.body._id,
                },
              })
              limpiasCarrito()
            })
            .catch((error) => {
              notify.show(
                'Error al registrar el pedido contra entrega',
                'error'
              )
              setStateButton(false)
            })
        } else {
          notify.show(
            'El monto generado con el codigo QR aun no se cancelo',
            'warning',
            5000
          )
          setStateButton(false)
        }
        break

      default:
        notify.show('Por favor selecciona un metodo de pago', 'warning')
        setStateButton(false)
    }
  }
  const handlerEstadoQr = () => {
    setTipoPago(3)
    setTimeout(() => {
      setEstadoQR(true)
    }, 25000)
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
                          onClick={() => setTipoPago(2)}
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
                          onClick={handlerEstadoQr}
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
                      <div className="pymnt_title">
                        <h4>
                          Codigo QR - Estado:
                          {!estadoQr ? (
                            <strong style={{ color: 'red' }}>
                              {' '}
                              No Cancelado
                            </strong>
                          ) : (
                            <strong style={{ color: 'green' }}>
                              {' '}
                              Cancelado
                            </strong>
                          )}
                        </h4>
                        <img
                          src={GetImg('qr.png', `${API_URL}/upload/qr`)}
                          alt={'Codigo QR'}
                        />
                        {/* <Loader /> */}
                        {/* <p>
                       
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="form-group return-departure-dts"
                  data-method="card"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="pymnt_title mb-4">
                        <h4>Tarjeta de credito / debito</h4>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-1">
                        <label className="control-label">
                          Nombre Titular*
                        </label>
                        <div className="ui search focus">
                          <div className="ui left icon input swdh11 swdh19">
                            <input
                              className="prompt srch_explore"
                              type="text"
                              name="holdername"
                              defaultValue=""
                              id="holder[name]"
                              required
                              maxLength="64"
                              placeholder="Nombre del titular"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-1">
                        <label className="control-label">
                          Numero de tarjeta*
                        </label>
                        <div className="ui search focus">
                          <div className="ui left icon input swdh11 swdh19">
                            <input
                              className="prompt srch_explore"
                              type="text"
                              name="cardnumber"
                              defaultValue=""
                              id="card[number]"
                              required
                              maxLength="64"
                              placeholder="Número de tarjeta"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group mt-1">
                        <label className="control-label">
                          Mes de expiracion*
                        </label>
                        <select
                          className="ui fluid search dropdown form-dropdown"
                          name="card[expire-month]"
                        >
                          <option value="">Mes</option>
                          <option value="1">Enero</option>
                          <option value="2">Febrero</option>
                          <option value="3">Marzo</option>
                          <option value="4">Abril</option>
                          <option value="5">Mayo</option>
                          <option value="6">Junio</option>
                          <option value="7">Julio</option>
                          <option value="8">Agosto</option>
                          <option value="9">Septiembre</option>
                          <option value="10">Octubre</option>
                          <option value="11">Noviembre</option>
                          <option value="12">Diciembre</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group mt-1">
                        <label className="control-label">
                          Año de expiracion*
                        </label>
                        <div className="ui search focus">
                          <div className="ui left icon input swdh11 swdh19">
                            <input
                              className="prompt srch_explore"
                              type="text"
                              name="card[expire-year]"
                              maxLength="4"
                              placeholder="Año"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group mt-1">
                        <label className="control-label">CVV*</label>
                        <div className="ui search focus">
                          <div className="ui left icon input swdh11 swdh19">
                            <input
                              className="prompt srch_explore"
                              name="card[cvc]"
                              maxLength="3"
                              placeholder="CVV"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {stateButton ? (
                  <div>
                    <Loader />
                  </div>
                ) : (
                  <button
                    type="button"
                    title="Click para confirmar pedido"
                    className="next-btn16 hover-btn"
                    disabled={stateButton}
                    onClick={handlerPedido}
                  >
                    Confirmar pedido
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
