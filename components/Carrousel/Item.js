export const Item = ({ id }) => (
  <div className="item">
    <div className="offer-item">
      <div className="offer-item-img">
        <div className="gambo-overlay"></div>
        <img src="/img/banners/offer-1.jpg" alt="" />
      </div>
      <div className="offer-text-dt">
        <div className="offer-top-text-banner">
          <p>6% Off {id}</p>
          <div className="top-text-1">Buy More & Save More</div>
          <span>Fresh Vegetables</span>
        </div>
        <a href="#" className="Offer-shop-btn hover-btn">
          Shop Now
        </a>
      </div>
    </div>
  </div>
)
