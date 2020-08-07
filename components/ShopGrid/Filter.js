export default () => (
  <div className="bs-canvas bs-canvas-right position-fixed bg-cart h-100">
    <div className="bs-canvas-header side-cart-header p-3 ">
      <div className="d-inline-block  main-cart-title">Filters</div>
      <button
        type="button"
        className="bs-canvas-close close"
        aria-label="Close"
      >
        <i className="uil uil-multiply"></i>
      </button>
    </div>
    <div className="bs-canvas-body filter-body">
      <div className="filter-items">
        <div className="filtr-cate-title">
          <h4>Categories</h4>
        </div>
        <div className="filter-item-body scrollstyle_4">
          <div className="cart-radio">
            <ul className="cte-select">
              <li>
                <input type="radio" id="c1" name="category1" />
                <label htmlFor="c1">All</label>
              </li>
              <li>
                <input type="radio" id="c2" name="category1" defaultChecked />
                <label htmlFor="c2">Vegetables & Fruits</label>
              </li>
              <li>
                <input type="radio" id="c3" name="category1" />
                <label htmlFor="c3">Grocery & Staples</label>
              </li>
              <li>
                <input type="radio" id="c4" name="category1" />
                <label htmlFor="c4">Dairy & Eggs</label>
              </li>
              <li>
                <input type="radio" id="c5" name="category1" />
                <label htmlFor="c5">Beverages</label>
              </li>
              <li>
                <input type="radio" id="c6" name="category1" />
                <label htmlFor="c6">Snacks</label>
              </li>
              <li>
                <input type="radio" id="c7" name="category1" />
                <label htmlFor="c7">Home Care</label>
              </li>
              <li>
                <input type="radio" id="c8" name="category1" />
                <label htmlFor="c8">Noodles & Sauces</label>
              </li>
              <li>
                <input type="radio" id="c9" name="category1" />
                <label htmlFor="c9">Personal Care</label>
              </li>
              <li>
                <input type="radio" id="c10" name="category1" />
                <label htmlFor="c10">Pat Care</label>
              </li>
              <li>
                <input type="radio" id="c11" name="category1" />
                <label htmlFor="c11">Mea & Seafood</label>
              </li>
              <li>
                <input type="radio" id="c12" name="category1" />
                <label htmlFor="c12">Electronics</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="filter-items">
        <div className="filtr-cate-title">
          <h4>Brand</h4>
        </div>
        <div className="other-item-body scrollstyle_4">
          <div className="brand-list">
            <div className="search-by-catgory">
              <div className="ui search">
                <div className="ui left icon input swdh10">
                  <input
                    className="prompt srch10"
                    type="text"
                    placeholder="Search by brand.."
                  />
                  <i className="uil uil-search-alt icon icon1"></i>
                </div>
              </div>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="brand_1"
              />
              <label className="custom-control-label" htmlFor="brand_1">
                Brand Name
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="brand_2"
              />
              <label className="custom-control-label" htmlFor="brand_2">
                Brand Name
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="brand_3"
              />
              <label className="custom-control-label" htmlFor="brand_3">
                Brand Name
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="brand_4"
              />
              <label className="custom-control-label" htmlFor="brand_4">
                Brand Name
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="brand_5"
              />
              <label className="custom-control-label" htmlFor="brand_5">
                Brand Name
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="brand_6"
              />
              <label className="custom-control-label" htmlFor="brand_6">
                Brand Name
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="brand_7"
              />
              <label className="custom-control-label" htmlFor="brand_7">
                Brand Name
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="brand_8"
              />
              <label className="custom-control-label" htmlFor="brand_8">
                Brand Name
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="brand_9"
              />
              <label className="custom-control-label" htmlFor="brand_9">
                Brand Name
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="brand_10"
              />
              <label className="custom-control-label" htmlFor="brand_10">
                Brand Name
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-items">
        <div className="filtr-cate-title">
          <h4>Price</h4>
        </div>
        <div className="price-pack-item-body scrollstyle_4">
          <div className="brand-list">
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price_1"
              />
              <label className="custom-control-label" htmlFor="price_1">
                Less than $2 <span className="webproduct">(9)</span>
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price_2"
              />
              <label className="custom-control-label" htmlFor="price_2">
                $2 to $5 <span className="webproduct">(8)</span>
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price_3"
              />
              <label className="custom-control-label" htmlFor="price_3">
                $6 to $10 <span className="webproduct">(12)</span>
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price_4"
              />
              <label className="custom-control-label" htmlFor="price_4">
                $11 to $15 <span className="webproduct">(4)</span>
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price_5"
              />
              <label className="custom-control-label" htmlFor="price_5">
                $15 to $20 <span className="webproduct">(16)</span>
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price_6"
              />
              <label className="custom-control-label" htmlFor="price_6">
                $21 to $25 <span className="webproduct">(18)</span>
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price_7"
              />
              <label className="custom-control-label" htmlFor="price_7">
                More than $25 <span className="webproduct">(25)</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-items">
        <div className="filtr-cate-title">
          <h4>Discount</h4>
        </div>
        <div className="offer-item-body scrollstyle_4">
          <div className="brand-list">
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="offer_1"
              />
              <label className="custom-control-label" htmlFor="offer_1">
                2% - 5% <span className="webproduct">(9)</span>
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="offer_2"
              />
              <label className="custom-control-label" htmlFor="offer_2">
                6% - 10% <span className="webproduct">(5)</span>
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="offer_3"
              />
              <label className="custom-control-label" htmlFor="offer_3">
                11% - 15% <span className="webproduct">(11)</span>
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="offer_4"
              />
              <label className="custom-control-label" htmlFor="offer_4">
                16% - 25% <span className="webproduct">(27)</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-items">
        <div className="filtr-cate-title">
          <h4>Pack Size</h4>
        </div>
        <div className="price-pack-item-body scrollstyle_4">
          <div className="brand-list">
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pack_1"
              />
              <label className="custom-control-label" htmlFor="pack_1">
                1 pc
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pack_2"
              />
              <label className="custom-control-label" htmlFor="pack_2">
                1 pc approx. 400 to 600 gm
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pack_3"
              />
              <label className="custom-control-label" htmlFor="pack_3">
                1 pc approx. 500 to 800 gm
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pack_4"
              />
              <label className="custom-control-label" htmlFor="pack_4">
                Combo 3 Items
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pack_5"
              />
              <label className="custom-control-label" htmlFor="pack_5">
                Combo 4 Items
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pack_6"
              />
              <label className="custom-control-label" htmlFor="pack_6">
                Combo 5 Items
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pack_7"
              />
              <label className="custom-control-label" htmlFor="pack_7">
                2 pcs
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pack_8"
              />
              <label className="custom-control-label" htmlFor="pack_8">
                100 g
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pack_9"
              />
              <label className="custom-control-label" htmlFor="pack_9">
                200 g
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pack_10"
              />
              <label className="custom-control-label" htmlFor="pack_10">
                250 g
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pack_11"
              />
              <label className="custom-control-label" htmlFor="pack_11">
                500g
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pack_12"
              />
              <label className="custom-control-label" htmlFor="pack_12">
                1kg
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pack_13"
              />
              <label className="custom-control-label" htmlFor="pack_13">
                2kg
              </label>
            </div>
            <div className="custom-control custom-checkbox pb2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pack_14"
              />
              <label className="custom-control-label" htmlFor="pack_14">
                3kg
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
