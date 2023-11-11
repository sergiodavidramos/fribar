import { useContext } from 'react'
import UserContext from '../UserContext'
export default () => {
  const { modoNoche } = useContext(UserContext)
  return (
    // <!-- Search Model Start-->
    <div
      id="search_model"
      className="header-cate-model main-gambo-model modal fade"
      tabIndex="-1"
      role="dialog"
      aria-modal="false"
    >
      <div className="modal-dialog search-ground-area" role="document">
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
          <div className="category-model-content modal-content">
            <div className="search-header">
              <form action="#">
                <input
                  type="search"
                  placeholder="Search for products..."
                />
                <button type="submit">
                  <i className="uil uil-search"></i>
                </button>
              </form>
            </div>
            <div
              className={`search-by-cat ${modoNoche ? 'night-mode' : ''}`}
            >
              <a href="#" className="single-cat">
                <div className="icon">
                  <img src="/img/category/icon-1.svg" alt="" />
                </div>
                <div className="text">Fruits and Vegetables</div>
              </a>
              <a href="#" className="single-cat">
                <div className="icon">
                  <img src="/img/category/icon-2.svg" alt="" />
                </div>
                <div className="text"> Grocery & Staples </div>
              </a>
              <a href="#" className="single-cat">
                <div className="icon">
                  <img src="/img/category/icon-3.svg" alt="" />
                </div>
                <div className="text"> Dairy & Eggs </div>
              </a>
              <a href="#" className="single-cat">
                <div className="icon">
                  <img src="/img/category/icon-4.svg" alt="" />
                </div>
                <div className="text"> Beverages </div>
              </a>
              <a href="#" className="single-cat">
                <div className="icon">
                  <img src="/img/category/icon-5.svg" alt="" />
                </div>
                <div className="text"> Snacks </div>
              </a>
              <a href="#" className="single-cat">
                <div className="icon">
                  <img src="/img/category/icon-6.svg" alt="" />
                </div>
                <div className="text"> Home Care </div>
              </a>
              <a href="#" className="single-cat">
                <div className="icon">
                  <img src="/img/category/icon-7.svg" alt="" />
                </div>
                <div className="text"> Noodles & Sauces </div>
              </a>
              <a href="#" className="single-cat">
                <div className="icon">
                  <img src="/img/category/icon-8.svg" alt="" />
                </div>
                <div className="text"> Personal Care </div>
              </a>
              <a href="#" className="single-cat">
                <div className="icon">
                  <img src="/img/category/icon-9.svg" alt="" />
                </div>
                <div className="text"> Pet Care </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  // {/* <-- Search Model End--> */}
}
