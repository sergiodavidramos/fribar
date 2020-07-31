export default () => (
  <div className="cart-item border_radius">
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
        <i className="uil uil-multiply"></i>
      </button>
    </div>
  </div>
);
