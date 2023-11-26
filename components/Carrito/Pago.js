import Link from 'next/link'
import { API_URL, TOKENMAP } from '../Config'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../UserContext'
import { notify } from 'react-notify-toast'
import Loader from '../Loader'
import { useRouter } from 'next/router'
export const Pago = () => {
  const {
    carrito,
    cantidades,
    token,
    direccionEnvio,
    user,
    totalConDescuneto,
  } = useContext(UserContext)

  const [tipoPago, setTipoPago] = useState(false)
  const [sucursalAsignado, setSucursalAsignado] = useState(false)
  const [tiempoEstimadoEntrega, setTiempoEstimadoEntrega] = useState(0)
  const [stateButton, setStateButton] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (direccionEnvio) getSucursales()
  }, [direccionEnvio])

  const getSucursales = async () => {
    const res = await fetch(`${API_URL}/sucursal/all`)
    const suc = await res.json()
    const lonUser = direccionEnvio.lon
    const latUser = direccionEnvio.lat
    let mayorDistancia = 0
    let sucElegido = false
    let tiempo = 30
    if (suc.body.length > 1) {
      for (let suc of suc.body) {
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
      console.log('La sucursal', sucElegido)
      setSucursalAsignado(sucElegido._id)
      setTiempoEstimadoEntrega(tiempo)
    } else {
      setSucursalAsignado(suc.body[0]._id)
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
            console.log('LA RESPUESTA', resPedido)
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
                total: totalConDescuneto,
                estadoPago: false,
                idPedido: resPedido.body._id,
              },
            })
          })
          .catch((error) => {
            notify.show(
              'Error al registrar el pedido contra entrega',
              'error'
            )
            setStateButton(false)
          })
        break
      case 2:
        break
      case 3:
        break

      default:
        notify.show('Por favor selecciona un metodo de pago', 'warning')
        setStateButton(false)
    }
  }
  return (
    <div className="checkout-step">
      <div className="checkout-card" id="headingFour">
        <span className="checkout-step-number">3</span>
        <h4 className="checkout-step-title">
          <button
            className="wizard-btn collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
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
                          onClick={() => setTipoPago(3)}
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
                        <h4>Codigo QR</h4>
                        <Loader />
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
