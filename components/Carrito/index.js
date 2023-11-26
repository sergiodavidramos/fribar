import CartItem from './CartItem'
import { Verificacion } from './Verificacion'
import { AddDireccion } from './AddDireccion'
import { Pago } from './Pago'
import { useContext, useState } from 'react'
import UserContext from '../UserContext'
import Loader from '../Loader'

export default () => {
  const [codigoVerificado, setCodigoVerificado] = useState(false)
  const { user, token, total, totalConDescuneto, costoEnvio, cantidades } =
    useContext(UserContext)
  return (
    <>
      <div className="all-product-grid">
        <div className="container">
          {cantidades.length > 0 ? (
            <div className="row">
              <div className="col-lg-8 col-md-7">
                <div
                  id="checkout_wizard"
                  className="checkout accordion left-chck145"
                >
                  <Verificacion
                    user={user}
                    token={token}
                    setCodigoVerificado={setCodigoVerificado}
                    codigoVerificado={codigoVerificado}
                  />
                  {user ? (
                    <>
                      <AddDireccion />
                      <Pago />
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="pdpt-bg mt-0">
                  <div className="pdpt-title">
                    <h4>Resumen del pedido</h4>
                  </div>
                  <div className="right-cart-dt-body">
                    <CartItem />
                  </div>
                  <div className="total-checkout-group">
                    <div className="cart-total-dil">
                      <h4>Sub Total</h4>
                      <span>{totalConDescuneto.toFixed(2)}</span>
                    </div>
                    <div className="cart-total-dil pt-3">
                      <h4>Costo de envio</h4>
                      {costoEnvio === 0 ? (
                        <span>Gratis</span>
                      ) : (
                        <span>{costoEnvio}</span>
                      )}
                    </div>
                  </div>
                  <div className="cart-total-dil saving-total ">
                    <h4>Ahorro Total</h4>
                    <span>-{(total - totalConDescuneto).toFixed(2)}</span>
                  </div>
                  <div className="main-total-cart">
                    <h2>Total</h2>
                    <span>
                      {(totalConDescuneto + costoEnvio).toFixed(2)}
                    </span>
                  </div>
                  <div className="payment-secure">
                    <i className="uil uil-padlock"></i>Pago seguro
                  </div>
                </div>
                {/* <a href="#" className="promo-link45">
              Have a promocode?
            </a> */}
                <div className="checkout-safety-alerts">
                  <p>
                    <i className="uil uil-sync"></i>Garantía de reemplazo
                    del 100%
                  </p>
                  <p>
                    <i className="uil uil-check-square"></i>Productos 100%
                    genuinos
                  </p>
                  <p>
                    <i className="uil uil-shield-check"></i>Pagos seguros
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="pdpt-title">
                <h4>
                  Por favor agrege productos al carrito para seguir con el
                  pago
                </h4>
              </div>
              <Loader />
            </>
          )}
        </div>
      </div>
    </>
  )
}
