import CartItem from './CartItem'
import { Verificacion } from './Verificacion'
import { AddDireccion } from './AddDireccion'
import { Pago } from './Pago'
import { useContext, useState } from 'react'
import UserContext from '../UserContext'

export default () => {
  const [codigoVerificado, setCodigoVerificado] = useState(false)
  const { user, token } = useContext(UserContext)
  return (
    <div className="wrapper">
      <div className="gambo-Breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Inicio</a>
                  </li>
                  <li
                    className="breadcrumb-item active"
                    aria-current="page"
                  >
                    Completar Compra
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="all-product-grid">
        <div className="container">
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
                  <h4>Order Summary</h4>
                </div>
                <div className="right-cart-dt-body">
                  <CartItem />
                </div>
                <div className="total-checkout-group">
                  <div className="cart-total-dil">
                    <h4>Gambo Super Market</h4>
                    <span>$15</span>
                  </div>
                  <div className="cart-total-dil pt-3">
                    <h4>Delivery Charges</h4>
                    <span>$1</span>
                  </div>
                </div>
                <div className="cart-total-dil saving-total ">
                  <h4>Total Saving</h4>
                  <span>$3</span>
                </div>
                <div className="main-total-cart">
                  <h2>Total</h2>
                  <span>$16</span>
                </div>
                <div className="payment-secure">
                  <i className="uil uil-padlock"></i>Secure checkout
                </div>
              </div>
              <a href="#" className="promo-link45">
                Have a promocode?
              </a>
              <div className="checkout-safety-alerts">
                <p>
                  <i className="uil uil-sync"></i>100% Replacement
                  Guarantee
                </p>
                <p>
                  <i className="uil uil-check-square"></i>100% Genuine
                  Products
                </p>
                <p>
                  <i className="uil uil-shield-check"></i>Secure Payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
