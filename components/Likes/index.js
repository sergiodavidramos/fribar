import MenuLef from '../Perfil/components/MenuLef'
import { useContext } from 'react'
import UserContext from '../UserContext'

export default () => {
  const { user } = useContext(UserContext)
  return (
    <div className="container">
      <div className="row">
        <MenuLef />
        <div className="col-lg-9 col-md-8">
          <div className="dashboard-right">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title-tab">
                  <h4>
                    <i className="uil uil-heart"></i>Tus me gusta
                  </h4>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="pdpt-bg">
                  <div className="wishlist-body-dtt">
                    {user && user.favoritos.length > 0 ? (
                      <div className="cart-item">
                        <div className="cart-product-img">
                          <img src="" alt="" />
                          <div className="offer-badge">4% OFF</div>
                        </div>
                        <div className="cart-text">
                          <h4>Product Title Here</h4>
                          <div className="cart-item-price">
                            $15 <span>$18</span>
                          </div>
                          <button type="button" className="cart-close-btn">
                            <i className="uil uil-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="cart-item">
                        <h4>Aun no tienes productos favoritos 😐</h4>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
