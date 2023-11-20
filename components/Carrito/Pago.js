import Link from 'next/link'
import { API_URL } from '../Config'
import { useContext, useState } from 'react'
import UserContext from '../UserContext'
import { notify } from 'react-notify-toast'
export const Pago = () => {
  const { carrito } = useContext(UserContext)

  const [tipoPago, setTipoPago] = useState(false)

  const handlerPedido = () => {
    console.log('ssssssss', carrito)
    switch (5) {
      case 0:
        fetch(`${API_URL}/detalle`, {
          method: 'POST',
          body: JSON.stringify({
            detalle: [{ producto: carrito[0]._id, cantidad: 1 }],
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then()
        break
      case 1:
        break
      case 2:
        break

      default:
        notify.show('Por favor selecciona un metodo de pago', 'warning')
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
                          onClick={() => setTipoPago(0)}
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
                          onClick={() => setTipoPago(1)}
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
                        <h4>Cash on Delivery</h4>
                        <p>
                          Cash on Delivery will not be available if your
                          order value exceeds $10.
                        </p>
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

                <a
                  className="next-btn16 hover-btn"
                  onClick={handlerPedido}
                >
                  Confirmar pedido
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
