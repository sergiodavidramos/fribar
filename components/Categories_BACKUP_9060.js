import Items from './SingleProduct/Items'
import Head from 'next/head'

import { useEffect } from 'react'
import loadjs from 'loadjs'
<<<<<<< HEAD
// const DynamicComponent = dynamic(() => import('../public/vendor/OwlCarousel/owl.carousel'))

export default () => {
    useEffect(() => {
        loadjs('/vendor/semantic/semantic.min.js', () => {
            loadjs('/js/custom.js', () => {
              console.log('sda app')
            })
        })
      }, [])
=======
export default () => {
  useEffect(() => {
    loadjs(
      [
        '/vendor/semantic/semantic.min.js',
        '/vendor/OwlCarousel/owl.carousel.js',
        '/js/custom.js',
        '/js/offset_overlay.js',
      ],
      () => {}
    )
  }, [])
>>>>>>> 928a38fe89ba1d93027ece5e7bef06a030bc2595
  return (
    <div className="section145">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title-tt">
              <div className="main-title-left">
                <span>Comprar por</span>
                <h2>Categorias</h2>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="owl-carousel cate-slider owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: 'translate3d(-1680px, 0px, 0px)',
                    transition: 'all 0.25s ease 0s',
                    width: '100% !important',
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{ width: '0px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-6.svg" alt="" />
                        </div>
                        <h4> Home Care </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-7.svg" alt="" />
                        </div>
                        <h4> Noodles &amp; Sauces </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-8.svg" alt="" />
                        </div>
                        <h4> Personal Care </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-9.svg" alt="" />
                        </div>
                        <h4> Pet Care </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-10.svg" alt="" />
                        </div>
                        <h4> Meat &amp; Seafood </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-11.svg" alt="" />
                        </div>
                        <h4> Electronics </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-1.svg" alt="" />
                        </div>
                        <h4>Vegetables &amp; Fruits</h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-2.svg" alt="" />
                        </div>
                        <h4> Grocery &amp; Staples </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-3.svg" alt="" />
                        </div>
                        <h4> Dairy &amp; Eggs </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-4.svg" alt="" />
                        </div>
                        <h4> Beverages </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-5.svg" alt="" />
                        </div>
                        <h4> Snacks </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-6.svg" alt="" />
                        </div>
                        <h4> Home Care </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-7.svg" alt="" />
                        </div>
                        <h4> Noodles &amp; Sauces </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-8.svg" alt="" />
                        </div>
                        <h4> Personal Care </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-9.svg" alt="" />
                        </div>
                        <h4> Pet Care </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-10.svg" alt="" />
                        </div>
                        <h4> Meat &amp; Seafood </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-11.svg" alt="" />
                        </div>
                        <h4> Electronics </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-1.svg" alt="" />
                        </div>
                        <h4>Vegetables &amp; Fruits</h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-2.svg" alt="" />
                        </div>
                        <h4> Grocery &amp; Staples </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-3.svg" alt="" />
                        </div>
                        <h4> Dairy &amp; Eggs </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-4.svg" alt="" />
                        </div>
                        <h4> Beverages </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-5.svg" alt="" />
                        </div>
                        <h4> Snacks </h4>
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: '210px', marginRight: '30px' }}
                  >
                    <div className="item">
                      <a href="#" className="category-item">
                        <div className="cate-img">
                          <img src="/img/category/icon-6.svg" alt="" />
                        </div>
                        <h4> Home Care </h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <button
                  type="button"
                  role="presentation"
                  className="owl-prev"
                >
                  <i className="uil uil-angle-left"></i>
                </button>
                <button
                  type="button"
                  role="presentation"
                  className="owl-next"
                >
                  <i className="uil uil-angle-right"></i>
                </button>
              </div>
              <div className="owl-dots disabled"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
