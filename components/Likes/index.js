import MenuLef from '../Perfil/components/MenuLef'

export default () => (
  <div className="container">
    <div className="row">
      <MenuLef />
      <div className="col-lg-9 col-md-8">
        <div className="dashboard-right">
          <div className="row">
            <div className="col-md-12">
              <div className="main-title-tab">
                <h4>
                  <i className="uil uil-heart"></i>Shopping Wishlist
                </h4>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="pdpt-bg">
                <div className="wishlist-body-dtt">
                  <div className="cart-item">
                    <div className="cart-product-img">
                      <img src="images/product/img-11.jpg" alt="" />
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
                  <div className="cart-item">
                    <div className="cart-product-img">
                      <img src="images/product/img-2.jpg" alt="" />
                      <div className="offer-badge">1% OFF</div>
                    </div>
                    <div className="cart-text">
                      <h4>Product Title Here</h4>
                      <div className="cart-item-price">
                        $9.9 <span>$10</span>
                      </div>
                      <button type="button" className="cart-close-btn">
                        <i className="uil uil-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item">
                    <div className="cart-product-img">
                      <img src="images/product/img-14.jpg" alt="" />
                    </div>
                    <div className="cart-text">
                      <h4>Product Title Here</h4>
                      <div className="cart-item-price">$12</div>
                      <button type="button" className="cart-close-btn">
                        <i className="uil uil-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
