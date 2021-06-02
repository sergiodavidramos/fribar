import { useContext } from 'react'
import UserContext from '../UserContext'
export default () => {
  const { stateModel } = useContext(UserContext)
  return (
    // <!-- Category Model Start-->
    <div
      id="category_model"
      className="header-cate-model main-gambo-model modal fade"
      tabIndex="-1"
      role="dialog"
      aria-modal="false"
    >
      <div className="modal-dialog category-area" role="document">
        <div className="category-area-inner">
          <div className="modal-header">
            <button
              type="button"
              className="close btn-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="uil uil-multiply"></i>
            </button>
          </div>

          {stateModel ? (
            <div className="category-model-content modal-content">
              <div className="cate-header">
                <h4>Seleccionar Categoria</h4>
              </div>
              <ul className="category-by-cat">
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="/img/category/icon-1.svg" alt="" />
                    </div>
                    <div className="text"> Fruits and Vegetables </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="/img/category/icon-2.svg" alt="" />
                    </div>
                    <div className="text"> Grocery & Staples </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="/img/category/icon-3.svg" alt="" />
                    </div>
                    <div className="text"> Dairy & Eggs </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="/img/category/icon-4.svg" alt="" />
                    </div>
                    <div className="text"> Beverages </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="/img/category/icon-5.svg" alt="" />
                    </div>
                    <div className="text"> Snacks </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="/img/category/icon-6.svg" alt="" />
                    </div>
                    <div className="text"> Home Care </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="/img/category/icon-7.svg" alt="" />
                    </div>
                    <div className="text"> Noodles & Sauces </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="/img/category/icon-8.svg" alt="" />
                    </div>
                    <div className="text"> Personal Care </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="/img/category/icon-9.svg" alt="" />
                    </div>
                    <div className="text"> Pet Care </div>
                  </a>
                </li>
              </ul>
              <a href="#" className="morecate-btn">
                <i className="uil uil-apps"></i>More Categories
              </a>
            </div>
          ) : (
            <div className="category-model-content modal-content">
              <div className="cate-header">
                <h4>Agregar tu nueva Dirección</h4>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label className="control-label">Name*</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="form-control input-md"
                    required=""
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label className="control-label">Email Address*</label>
                  <input
                    id="email1"
                    name="email1"
                    type="text"
                    placeholder="Email Address"
                    className="form-control input-md"
                    required=""
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label className="control-label">
                    Flat / House / Office No.*
                  </label>
                  <input
                    id="flat"
                    name="flat"
                    type="text"
                    placeholder="Address"
                    className="form-control input-md"
                    required=""
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label className="control-label">
                    Street / Society / Office Name*
                  </label>
                  <input
                    id="street"
                    name="street"
                    type="text"
                    placeholder="Street Address"
                    className="form-control input-md"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label className="control-label">Pincode*</label>
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    placeholder="Pincode"
                    className="form-control input-md"
                    required=""
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label className="control-label">Locality*</label>
                  <input
                    id="Locality"
                    name="locality"
                    type="text"
                    placeholder="Enter City"
                    className="form-control input-md"
                    required=""
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .main-gambo-model {
          background-image: -webkit-linear-gradient(
            left,
            rgba(230, 92, 91, 0.9),
            rgba(245, 93, 44, 0.9)
          );
          background-image: linear-gradient(
            to right,
            rgba(230, 92, 91, 0.9),
            rgba(245, 93, 44, 0.9)
          );
        }

        .category-area-inner .modal-header {
          border-bottom: 0;
        }

        .category-area-inner .btn-close {
          color: #fff !important;
          opacity: 1 !important;
          padding: 30px 0 15px !important;
          font-size: 30px !important;
          cursor: pointer !important;
        }

        .category-model-content {
          background: #fff;
          border: 0 !important;
          border-radius: 0 !important;
        }

        .catey__icon {
          display: none;
        }

        .search__icon {
          display: none;
        }

        .sub-header-icons-list {
          display: inline-block;
          font-size: 20px;
        }

        .cate__btn {
          font-size: 20px;
          color: #8f91ac !important;
          padding: 20px 20px 19px;
        }

        .cate__btn:hover {
          color: #f55d2c !important;
        }

        .search__btn {
          font-size: 20px;
          color: #fff !important;
          padding: 20px 20px 21px;
          background: #2b2f4c;
        }

        /* --- Category Mode --- */

        .cate-header {
          background: #2b2f4c;
          color: #fff;
          padding: 15px 20px;
        }

        .cate-header h4 {
          font-size: 18px;
          font-weight: 500;
          line-height: 24px;
        }

        .category-by-cat {
          width: 100%;
          display: inline-table;
        }

        .category-by-cat li {
          width: 33.333%;
          vertical-align: middle;
          display: inline-block;
          list-style: none;
          float: left;
        }

        .single-cat-item {
          text-align: center;
          padding: 20px 10px;
          display: block;
        }

        .single-cat-item:hover {
          background: #f9f9f9;
        }

        .single-cat-item .text {
          font-size: 14px;
          font-weight: 500;
          color: #2b2f4c;
        }

        .single-cat-item .icon {
          width: 100%;
          text-align: center;
          margin-bottom: 15px;
        }

        .single-cat-item .icon img {
          width: 50px;
        }

        .morecate-btn {
          display: block;
          text-align: center;
          border-top: 1px solid #efefef;
          padding: 20px;
          font-size: 16px;
          font-weight: 500;
          color: #2b2f4c;
        }

        .morecate-btn i {
          margin-right: 5px;
        }

        .morecate-btn:hover {
          color: #f55d2c !important;
        }

        .search-ground-area {
          max-width: 400px !important;
        }

        .search-header {
          position: relative;
          width: 100%;
          border-bottom: 1px solid #efefef;
        }

        .search-header input {
          width: 100%;
          border: 0;
          padding: 20px;
          position: relative;
        }

        .search-header button {
          position: absolute;
          right: 0px;
          background: transparent;
          border: 0;
          padding: 17px;
          font-size: 20px;
        }

        .search-by-cat {
          width: 100%;
          height: 321px;
          overflow: hidden scroll;
        }

        .search-by-cat .single-cat {
          -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=85)';
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-bottom: 0;
          -webkit-transition: all 0.25s;
          transition: all 0.25s;
          padding: 15px 20px;
        }

        .search-by-cat .single-cat .icon {
          background-color: #f9f9f9;
          border-radius: 5%;
          color: #fff;
          font-size: 22px;
          height: 50px;
          line-height: 47px;
          text-align: center;
          width: 50px;
        }

        .search-by-cat .single-cat .icon img {
          width: 30px;
        }

        .search-by-cat .single-cat .text {
          color: #2b2f4c;
          font-weight: 400;
          padding-left: 20px;
          font-size: 16px;
        }

        .search-by-cat .single-cat:hover .text {
          color: #f55d2c;
        }
      `}</style>
    </div>
    // /* <!-- Category Model End--> */
  )
}
