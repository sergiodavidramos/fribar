export default () => {
  return (
    <header
      className="brk-header brk-header_style-2 brk-header_skin-2 d-lg-flex flex-column position-fixed brk-header_color-white"
      style={{ display: "none" }}
      data-logo-src="img/logo-dark-2.png"
      data-bg-mobile="img/brk-bg-mobile-menu.jpg"
    >
      <div
        className="brk-header__main-bar brk-header_border-bottom"
        style={{ height: "72px" }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-auto pr-40 align-self-lg-stretch order-6 order-lg-first">
              <div className="brk-info-menu-open brk-info-menu-open_skin-2 brk-header__item">
                <span className="brk-lines">
                  <span className="brk-center-line"></span>
                </span>
                <div className="brk-info-menu-open__title">Side Menu</div>
              </div>
            </div>
            <div className="col-lg-auto align-self-lg-stretch">
              <nav className="brk-nav brk-header__item">
                <ul className="brk-nav__menu">
                  <li className="brk-nav__children brk-nav__full-width">
                    <a href="/" data-brk-library="component__tabs">
                      <span>Home</span>
                    </a>
                    <div className="brk-nav__mega-menu brk-nav-drop-down">
                      <div className="bg-white">
                        <div
                          className="brk-tabs brk-tabs-hovers"
                          data-index="0"
                        >
                          <ul className="brk-tabs-nav font__family-open-sans">
                            <li className="brk-tab font__weight-bold">
                              <i className="fa fa-tasks"></i>
                              Demos
                            </li>
                            <li className="brk-tab font__weight-bold">
                              <i className="fa fa-trophy"></i>
                              HomePages
                            </li>
                            <li className="brk-tab font__weight-bold">
                              <i className="fa fa-life-ring"></i>
                              Support & Info
                            </li>
                          </ul>
                          <div className="brk-tabs-content">
                            <div className="brk-tab-item">
                              <div className="row no-gutters">
                                <div className="col-lg">
                                  <div className="brk-nav__header font__family-montserrat">
                                    Check
                                  </div>
                                  <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                                    <ul className="brk-header-list font__family-montserrat">
                                      <li>
                                        <a href="/demo_agency_animation.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-paper-plane"></i>
                                          </span>
                                          Agency Animation
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_agency_fluid.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-tint"></i>
                                          </span>
                                          Agency Fluid
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_agency_modern.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-gift"></i>
                                          </span>
                                          Agency Modern
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_agency_urban.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-university"></i>
                                          </span>
                                          Agency Urban
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_art.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-newspaper"></i>
                                          </span>
                                          Art
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_saas.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-camera-retro"></i>
                                          </span>
                                          SAAS
                                          <span className="brk-header-list__info bg-success font__family-montserrat">
                                            Ver. 1.5
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_winter_trip_agency.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-snowflake"></i>
                                          </span>
                                          Winter Trip Agency
                                          <span className="brk-header-list__info bg-success font__family-montserrat">
                                            Ver. 1.6
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg">
                                  <div className="brk-nav__header font__family-montserrat">
                                    Out
                                  </div>
                                  <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                                    <ul className="brk-header-list font__family-montserrat">
                                      <li>
                                        <a href="/demo_construction.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-home"></i>
                                          </span>
                                          Construction
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_creative_agency.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fab fa-angrycreative"></i>
                                          </span>
                                          Creative Agency
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_freelance_blog.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-user-friends"></i>
                                          </span>
                                          Freelance Blog
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_freelance_portfolio.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-portrait"></i>
                                          </span>
                                          Freelance Portfolio
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_logistic.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-truck"></i>
                                          </span>
                                          Logistic
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_website_agency.html">
                                          <span className="brk-header-list__icon">
                                            <i className="far fa-images"></i>
                                          </span>
                                          Website Agency
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_winter_trip_agency_cta.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-snowflake"></i>
                                          </span>
                                          Winter Event Anounce
                                          <span className="brk-header-list__info bg-success font__family-montserrat">
                                            Ver. 1.7
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg">
                                  <div className="brk-nav__header font__family-montserrat">
                                    Our
                                  </div>
                                  <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                                    <ul className="brk-header-list font__family-montserrat">
                                      <li>
                                        <a href="/demo_shop_clothes.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-tshirt"></i>
                                          </span>
                                          Shop Clothes
                                          <span className="brk-header-list__info bg-warning font__family-montserrat">
                                            Shop
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_shop_drone.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fab fa-phoenix-squadron"></i>
                                          </span>
                                          Shop Drone
                                          <span className="brk-header-list__info bg-warning font__family-montserrat">
                                            Shop
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_shop_electronics.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-bolt"></i>
                                          </span>
                                          Shop Electronics
                                          <span className="brk-header-list__info bg-warning font__family-montserrat">
                                            Shop
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_shop_modern.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-people-carry"></i>
                                          </span>
                                          Shop Modern
                                          <span className="brk-header-list__info bg-warning font__family-montserrat">
                                            Shop
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_shop_trendy.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-dollar-sign"></i>
                                          </span>
                                          Shop Trendy
                                          <span className="brk-header-list__info bg-warning font__family-montserrat">
                                            Shop
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_shop_video.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-video"></i>
                                          </span>
                                          Shop Video
                                          <span className="brk-header-list__info bg-warning font__family-montserrat">
                                            Shop
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg">
                                  <div className="brk-nav__header font__family-montserrat">
                                    Demos
                                  </div>
                                  <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                                    <ul className="brk-header-list font__family-montserrat">
                                      <li>
                                        <a href="/demo_magazine.html">
                                          <span className="brk-header-list__icon">
                                            <i className="far fa-window-restore"></i>
                                          </span>
                                          Magazine
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_photography.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-camera-retro"></i>
                                          </span>
                                          Photography
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_product_landing.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fab fa-product-hunt"></i>
                                          </span>
                                          Product Landing
                                          <span className="brk-header-list__info bg-success font__family-montserrat">
                                            New
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_product_sport.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-futbol"></i>
                                          </span>
                                          Sports Products
                                          <span className="brk-header-list__info bg-success font__family-montserrat">
                                            New
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_spa.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-dove"></i>
                                          </span>
                                          Spa & Beauty
                                          <span className="brk-header-list__info bg-success font__family-montserrat">
                                            New
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_minimalistic_portfolio.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-camera-retro"></i>
                                          </span>
                                          Portfolio Minimalistic
                                          <span className="brk-header-list__info bg-success font__family-montserrat">
                                            Ver. 1.3
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/demo_travel_agency.html">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-plane"></i>
                                          </span>
                                          Travel Agency
                                          <span className="brk-header-list__info bg-success font__family-montserrat">
                                            Ver. 1.1
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="brk-tab-item">
                              <div className="row no-gutters">
                                <div className="col-lg d-none d-lg-block">
                                  <div className="brk-nav__header font__family-montserrat">
                                    Preview
                                  </div>
                                  <div
                                    className="brk-element-base brk-header_border-right text-center lazyload"
                                    data-bg="img/662x295.jpg"
                                    style={{ height: "calc(100% - 76px)" }}
                                  >
                                    <div className="brk-element-base__before"></div>
                                    <div
                                      className="brk-element-base__after lazyload"
                                      data-bg="img/shape-01.png"
                                    ></div>
                                    <div className="brk-element-base__content center-absolute">
                                      <div className="mb-20">
                                        <img src="img/logo.svg" alt="alt" />
                                      </div>
                                      <div className="pb-10">
                                        <a
                                          href="#"
                                          className="btn btn-inside-out btn-md border-radius-25 font__family-open-sans font__weight-bold btn-inside-out-invert"
                                          data-brk-library="component__button"
                                        >
                                          <span className="before">
                                            Purchase
                                          </span>
                                          <span className="text">Click Me</span>
                                          <span className="after">
                                            Purchase
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg">
                                  <div className="brk-nav__header font__family-montserrat">
                                    Our
                                  </div>
                                  <div
                                    className="brk-header_border-right pt-lg-20 pb-lg-60 pb-20"
                                    style={{ height: "calc(100% - 76px)" }}
                                  >
                                    <ul className="brk-header-list font__family-montserrat">
                                      <li>
                                        <a href="home-page-1.html">
                                          <span className="brk-header-list__icon">
                                            <i
                                              className="fa fa-male"
                                              aria-hidden="true"
                                            ></i>
                                          </span>
                                          Home page 1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="home-page-2.html">
                                          <span className="brk-header-list__icon">
                                            <i
                                              className="fa fa-cube"
                                              aria-hidden="true"
                                            ></i>
                                          </span>
                                          Home page 2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="home-page-3.html">
                                          <span className="brk-header-list__icon">
                                            <i
                                              className="fa fa-qrcode"
                                              aria-hidden="true"
                                            ></i>
                                          </span>
                                          Home page 3
                                        </a>
                                      </li>
                                      <li>
                                        <a href="home-page-4.html">
                                          <span className="brk-header-list__icon">
                                            <i
                                              className="fa fa-sign-language"
                                              aria-hidden="true"
                                            ></i>
                                          </span>
                                          Home page 4
                                        </a>
                                      </li>
                                      <li>
                                        <a href="home-page-5.html">
                                          <span className="brk-header-list__icon">
                                            <i
                                              className="fa fa-university"
                                              aria-hidden="true"
                                            ></i>
                                          </span>
                                          Home page 5
                                        </a>
                                      </li>
                                      <li>
                                        <a href="home-page-6.html">
                                          <span className="brk-header-list__icon">
                                            <i
                                              className="fa fa-cube"
                                              aria-hidden="true"
                                            ></i>
                                          </span>
                                          Home page 6
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg">
                                  <div className="brk-nav__header font__family-montserrat">
                                    Home
                                  </div>
                                  <div
                                    className="brk-header_border-right pt-lg-20 pb-lg-60 pb-20"
                                    style={{ height: "calc(100% - 76px)" }}
                                  >
                                    <ul className="brk-header-list font__family-montserrat">
                                      <li>
                                        <a href="/">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-archive"></i>
                                          </span>
                                          Home page 7
                                          <span className="brk-header-list__info bg-info font__family-montserrat">
                                            SOON
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-archive"></i>
                                          </span>
                                          Home page 8
                                          <span className="brk-header-list__info bg-info font__family-montserrat">
                                            SOON
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-archive"></i>
                                          </span>
                                          Home page 9
                                          <span className="brk-header-list__info bg-info font__family-montserrat">
                                            SOON
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-archive"></i>
                                          </span>
                                          Home page 10
                                          <span className="brk-header-list__info bg-info font__family-montserrat">
                                            SOON
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-archive"></i>
                                          </span>
                                          Home page 11
                                          <span className="brk-header-list__info bg-info font__family-montserrat">
                                            SOON
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-archive"></i>
                                          </span>
                                          Home page 12
                                          <span className="brk-header-list__info bg-info font__family-montserrat">
                                            SOON
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg">
                                  <div className="brk-nav__header font__family-montserrat">
                                    Pages
                                  </div>
                                  <div
                                    className="brk-header_border-right pt-lg-20 pb-lg-60 pb-20"
                                    style={{ height: "calc(100% - 76px)" }}
                                  >
                                    <ul className="brk-header-list font__family-montserrat">
                                      <li>
                                        <a href="/">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-archive"></i>
                                          </span>
                                          Home page 13
                                          <span className="brk-header-list__info bg-info font__family-montserrat">
                                            SOON
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-archive"></i>
                                          </span>
                                          Home page 14
                                          <span className="brk-header-list__info bg-info font__family-montserrat">
                                            SOON
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-archive"></i>
                                          </span>
                                          Home page 15
                                          <span className="brk-header-list__info bg-info font__family-montserrat">
                                            SOON
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-archive"></i>
                                          </span>
                                          Home page 16
                                          <span className="brk-header-list__info bg-info font__family-montserrat">
                                            SOON
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-archive"></i>
                                          </span>
                                          Home page 17
                                          <span className="brk-header-list__info bg-info font__family-montserrat">
                                            SOON
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/">
                                          <span className="brk-header-list__icon">
                                            <i className="fas fa-archive"></i>
                                          </span>
                                          Home page 18
                                          <span className="brk-header-list__info bg-info font__family-montserrat">
                                            SOON
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="brk-tab-item">
                              <div className="row">
                                <div className="col-lg-5">
                                  <div className="mt-30 mb-30 pr-15 pr-lg-0 pl-15 pl-lg-15">
                                    <img
                                      className="lazyload"
                                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                      data-src="img/tiles-simple-1.jpg"
                                      alt="alt"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-7">
                                  <div className="pr-15 pr-lg-0 pl-15 pl-lg-15">
                                    <h2 className="font__family-montserrat text-uppercase font__size-24 mb-40 mt-30">
                                      How Glossier Hacked Social Media
                                    </h2>
                                    <p className="brk-dark-font-color text-left mb-20">
                                      On a Thursday afternoon in late spring,
                                      32-year-old Glossier founder and CEO Emily
                                      Weiss rides the elevator to the penthouse
                                      level of her company's downtown Manhattan
                                      headquarters. She's a thoroughly
                                      millennial girlboss in jeans, sneakers and
                                      a royal blue sweatshirt with weiss
                                      embroidered in small white script. Her
                                      hair is pulled back in a ponytail, and for
                                      the founder of a beauty products company,
                                      she wears notably little makeup - just
                                      some mascara and possibly a swipe of
                                      Glossier Lip Gloss, a recent product
                                      release touted online as having a "fuzzy
                                      doe-foot applicator."
                                    </p>
                                    <p className="brk-dark-font-color text-left mb-20">
                                      A former teen model, Weiss is beautiful
                                      but not intimidating, either by nature or
                                      by design (probably a little of both).
                                      After all, her company’s popularity is
                                      directly related to her ability to
                                      cultivate a feeling of friendship with and
                                      among her customers. Just enough
                                      relatability is key.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#about">
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a href="#collections">
                      <span>Collections</span>
                    </a>
                  </li>
                  <li className="brk-nav__children brk-nav__drop-down-effect">
                    <a href="#">
                      <span>Shop</span>
                    </a>
                    <ul className="brk-nav__sub-menu brk-nav-drop-down font__family-montserrat">
                      <li className="dd-effect">
                        <a href="shop-components-flip.html">Shop flip</a>
                      </li>
                      <li className="dd-effect">
                        <a href="shop-components-grid.html">Shop grid</a>
                      </li>
                      <li className="dd-effect">
                        <a href="shop-components-grid-filter.html">
                          Shop grid-filter
                        </a>
                      </li>
                      <li className="dd-effect">
                        <a href="shop-components-honeycomb.html">
                          Shop honeycomb
                        </a>
                      </li>
                      <li className="dd-effect">
                        <a href="shop-components-item-sidebar.html">
                          Shop item with sidebar
                        </a>
                      </li>
                      <li className="dd-effect">
                        <a href="shop-components-list.html">Shop list</a>
                      </li>
                      <li className="dd-effect">
                        <a href="shop-components-masonry.html">Shop masonry</a>
                      </li>
                      <li className="dd-effect">
                        <a href="demo_product_landing.html">
                          Shop single product item
                        </a>
                      </li>
                      <li className="dd-effect">
                        <a href="shop-components-row.html">Shop row</a>
                      </li>
                      <li className="dd-effect">
                        <a href="shop-components-tiles.html">Shop tiles</a>
                      </li>
                      <li className="dd-effect">
                        <a href="cart.html">Shop cart</a>
                      </li>
                      <li className="dd-effect">
                        <a href="checkout.html">Shop checkout</a>
                      </li>
                      <li className="dd-effect">
                        <a href="shop-components-compare.html">Shop Compare</a>
                      </li>
                    </ul>
                  </li>
                  <li className="brk-nav__children brk-nav__full-width brk-nav__drop-down-effect">
                    <a href="#">
                      <span>Elements</span>
                    </a>
                    <div className="brk-nav__mega-menu brk-nav-drop-down">
                      <div className="bg-white">
                        <div className="row no-gutters">
                          <div className="col-xl-2 col-lg-4">
                            <div className="brk-nav__header font__family-montserrat">
                              ELEMENTS
                            </div>
                            <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                              <ul className="brk-header-list font__family-montserrat">
                                <li className="dd-effect">
                                  <a href="accordions.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-id-card"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Accordions
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="alerts.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-university"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Alerts
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="app.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-cube"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    App
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="backgrounds.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="far fa-gem"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Backgrounds
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="breadcrumbs.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-life-ring"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Breadcrumbs
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="buttons.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-male"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Buttons
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="CFA.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-sign-language"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    CFA
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="content-sliders.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-qrcode"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Content sliders
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4">
                            <div className="brk-nav__header font__family-montserrat">
                              ELEMENTS
                            </div>
                            <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                              <ul className="brk-header-list font__family-montserrat">
                                <li className="dd-effect">
                                  <a href="countdown.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-university"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Countdown
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="counter.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-cube"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Counter
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="counter-dark.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="far fa-gem"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Counter dark
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="delimiters.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-id-card"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Delimiters
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="dividers.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-life-ring"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Dividers
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="flip-boxes.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-male"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Flip boxes
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="form-controls.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-tasks"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Form controls
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="google-maps.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-map"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Google maps
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4">
                            <div className="brk-nav__header font__family-montserrat">
                              ELEMENTS
                            </div>
                            <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                              <ul className="brk-header-list font__family-montserrat">
                                <li className="dd-effect">
                                  <a href="image-caption-parallax.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-sign-language"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Image caption
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="image-frames.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-qrcode"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Image frames
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="image-map.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-university"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Image map
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="icons.html">
                                    <span className="brk-header-list__icon">
                                      <i className="fab fa-font-awesome-alt"></i>
                                    </span>
                                    Icons
                                    <span className="brk-header-list__info bg-success font__family-montserrat">
                                      New
                                    </span>
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="info-box.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-cube"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Info box
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="lists.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="far fa-gem"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Lists
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="logo.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="far fa-gem"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Logo
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="media-embeds.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-id-card"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Media embeds
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="pagination.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-life-ring"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pagination
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4">
                            <div className="brk-nav__header font__family-montserrat">
                              ELEMENTS
                            </div>
                            <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                              <ul className="brk-header-list font__family-montserrat">
                                <li className="dd-effect">
                                  <a href="parallax.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-tasks"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Parallax
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="parallax-video.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-sign-language"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Parallax video
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="pricing-tables.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-qrcode"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pricing tables
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="progress-circles.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-university"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Progress circles
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="promo.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-id-card"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Promo
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="section-titles.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-cube"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Section titles
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="sequence.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="far fa-gem"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Sequence
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="services.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-id-card"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Services
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="shape-box.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-male"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Shape box
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4">
                            <div className="brk-nav__header font__family-montserrat">
                              ELEMENTS
                            </div>
                            <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                              <ul className="brk-header-list font__family-montserrat">
                                <li className="dd-effect">
                                  <a href="sliders.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-male"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Sliders
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="social.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-id-card"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Social
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="steps.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-cube"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Steps
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="tabbed-contents.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-sign-language"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Tabbed contents
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="tables.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-qrcode"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Tables
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="tabs.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="far fa-gem"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Tabs
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="tags.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-tasks"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Tags
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="team.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-university"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Team
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="progress-bars.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-university"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Progress bars
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4">
                            <div className="brk-nav__header font__family-montserrat">
                              ELEMENTS
                            </div>
                            <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                              <ul className="brk-header-list font__family-montserrat">
                                <li className="dd-effect">
                                  <a href="team-member.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-tasks"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Team-member
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="testimonials.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-university"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Testimonials
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="tiles.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-male"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Tiles
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="timelines.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-life-ring"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Timelines
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="titles.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-id-card"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Titles
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="typing-rotator.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fab fa-adversal"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Typing rotator
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="svg-pattern.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fab fa-adversal"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Blocks transition
                                  </a>
                                </li>
                                <li className="dd-effect">
                                  <a href="panels.html">
                                    <span className="brk-header-list__icon">
                                      <i
                                        className="fa fa-male"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Panels
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#contact">
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-auto align-self-lg-center d-none d-lg-block brk-align-center">
              <a
                href="/"
                className="brk-header__logo brk-header__item @@modifier"
              >
                <img
                  className="brk-header__logo-1 lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  data-src="img/logo-1.png"
                  alt="alt"
                />
                <img
                  className="brk-header__logo-2 lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  data-src="img/logo-dark-1.png"
                  alt="alt"
                />
              </a>
            </div>
            <div className="col-lg-auto align-self-lg-stretch text-lg-right brk-align-right">
              <div className="brk-header__element brk-header__element_skin-1 brk-header__item">
                <a href="tel:88002003040" className="brk-header__element--wrap">
                  <i className="far fa-phone"></i>
                  <span className="brk-header__element--label d-lg-none">
                    8 800 200 30 40
                  </span>
                </a>
              </div>
              <div className="brk-mini-cart brk-header__item">
                <a href="cart.html" className="brk-mini-cart__open d-flex">
                  <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                  <span className="brk-mini-cart__label font__family-montserrat font__weight-medium text-uppercase letter-spacing-60 font__size-10 opacity-80">
                    My cart
                  </span>
                  <span className="brk-mini-cart__title">Shopping Cart</span>
                  <span className="brk-mini-cart__count">4</span>
                </a>
                <div className="brk-mini-cart__menu">
                  <div className="brk-mini-cart__header">
                    <span className="font__family-montserrat font__weight-bold font__size-18">
                      Your Cart
                    </span>
                  </div>
                  <div className="brk-mini-cart__products">
                    <div className="brk-mini-cart__product">
                      <div className="brk-mini-cart__product--img">
                        <img
                          className="lazyload"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="img/95x95_1.jpg"
                          alt="alt"
                        />
                      </div>
                      <div className="brk-mini-cart__product--title-price">
                        <a href="#">
                          <h4 className="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">
                            Some shop item
                          </h4>
                        </a>
                        <span className="brk-mini-cart__product--old-price font__family-montserrat">
                          $26.00
                        </span>
                        <span className="brk-mini-cart__product--price font__family-montserrat">
                          $16.00
                        </span>
                      </div>
                      <div className="brk-quantity">
                        <span className="brk-quantity__arrows minus"></span>
                        <input
                          className="brk-quantity__value"
                          name="quantity"
                          type="text"
                          defaultValue={2}
                        />
                        <span className="brk-quantity__arrows plus"></span>
                      </div>
                      <a
                        href="#"
                        className="brk-mini-cart__product--remove remove"
                      >
                        <i
                          className="fa fa-times-circle"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="brk-mini-cart__product">
                      <div className="brk-mini-cart__product--img">
                        <img
                          className="lazyload"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="img/95x95_2.jpg"
                          alt="alt"
                        />
                      </div>
                      <div className="brk-mini-cart__product--title-price">
                        <a href="#">
                          <h4 className="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">
                            Some shop item
                          </h4>
                        </a>
                        <span className="brk-mini-cart__product--old-price font__family-montserrat">
                          $26.00
                        </span>
                        <span className="brk-mini-cart__product--price font__family-montserrat">
                          $16.00
                        </span>
                      </div>
                      <div className="brk-quantity">
                        <span className="brk-quantity__arrows minus"></span>
                        <input
                          className="brk-quantity__value"
                          name="quantity"
                          type="text"
                          defaultValue="2"
                        />
                        <span className="brk-quantity__arrows plus"></span>
                      </div>
                      <a
                        href="#"
                        className="brk-mini-cart__product--remove remove"
                      >
                        <i
                          className="fa fa-times-circle"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="brk-mini-cart__product">
                      <div className="brk-mini-cart__product--img">
                        <img
                          className="lazyload"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="img/95x95_3.jpg"
                          alt="alt"
                        />
                      </div>
                      <div className="brk-mini-cart__product--title-price">
                        <a href="#">
                          <h4 className="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">
                            Some shop item
                          </h4>
                        </a>
                        <span className="brk-mini-cart__product--old-price font__family-montserrat">
                          $26.00
                        </span>
                        <span className="brk-mini-cart__product--price font__family-montserrat">
                          $16.00
                        </span>
                      </div>
                      <div className="brk-quantity">
                        <span className="brk-quantity__arrows minus"></span>
                        <input
                          className="brk-quantity__value"
                          name="quantity"
                          type="text"
                          defaultValue="2"
                        />
                        <span className="brk-quantity__arrows plus"></span>
                      </div>
                      <a
                        href="#"
                        className="brk-mini-cart__product--remove remove"
                      >
                        <i
                          className="fa fa-times-circle"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="brk-mini-cart__product">
                      <div className="brk-mini-cart__product--img">
                        <img
                          className="lazyload"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="img/95x95_4.jpg"
                          alt="alt"
                        />
                      </div>
                      <div className="brk-mini-cart__product--title-price">
                        <a href="#">
                          <h4 className="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">
                            Some shop item
                          </h4>
                        </a>
                        <span className="brk-mini-cart__product--old-price font__family-montserrat">
                          $26.00
                        </span>
                        <span className="brk-mini-cart__product--price font__family-montserrat">
                          $16.00
                        </span>
                      </div>
                      <div className="brk-quantity">
                        <span className="brk-quantity__arrows minus"></span>
                        <input
                          className="brk-quantity__value"
                          name="quantity"
                          type="text"
                          defaultValue="2"
                        />
                        <span className="brk-quantity__arrows plus"></span>
                      </div>
                      <a
                        href="#"
                        className="brk-mini-cart__product--remove remove"
                      >
                        <i
                          className="fa fa-times-circle"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                  <div className="brk-mini-cart__links">
                    <div className="brk-mini-cart__links--wrap">
                      <a
                        className="brk-mini-cart__links--cart"
                        href="cart.html"
                      >
                        <i className="fa fa-shopping-basket"></i> Cart
                      </a>
                      <a
                        className="brk-mini-cart__links--checkout"
                        href="checkout.html"
                      >
                        Proceed to checkout{" "}
                        <i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brk-header__element brk-header__element_skin-1 brk-header__item">
                <a href="#" className="brk-header__element--wrap">
                  <i className="far fa-heart"></i>
                  <span className="brk-header__element--label d-lg-none">
                    My wishlist
                  </span>
                  <span className="brk-header__compare brk-header__compare_white">
                    6
                  </span>
                </a>
              </div>
              <a
                href="#"
                className="btn btn-inside-out btn- ml-20 mr-10 brk-header__item brk-header__btn btn-sm-1 border-radius-25 font__family-open-sans font__weight-bold m-0 pl-30 pr-30"
                data-brk-library="component__button"
              >
                <span className="before">
                  Buy now{" "}
                  <span className="font__family-times-new-roman text-lowercase font__style-italic">
                    for
                  </span>{" "}
                  39$
                </span>
                <span className="text">Click Me</span>
                <span className="after">
                  Buy now{" "}
                  <span className="font__family-times-new-roman text-lowercase font__style-italic">
                    for
                  </span>{" "}
                  39$
                </span>
              </a>
              <div className="brk-lang brk-lang_interactive brk-header__item">
                <span className="brk-lang__selected">
                  US <i className="fa fa-caret-down" aria-hidden="true"></i>
                </span>
                <span className="brk-lang__open">
                  <i className="fa fa-language"></i> Language{" "}
                  <span className="brk-lang__active-lang text-white brk-bg-primary">
                    US
                  </span>
                </span>
                <ul className="brk-lang__option">
                  <li>
                    <a href="#">UA</a>
                  </li>
                  <li>
                    <a href="#">US</a>
                  </li>
                  <li>
                    <a href="#">PL</a>
                  </li>
                  <li>
                    <a href="#">ES</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brk-info-menu">
        <div className="brk-info-menu__bar">
          <button className="brk-info-menu__close"></button>
          <h3 className="brk-info-menu__header font__family-montserrat font__weight-bold font__size-21">
            More info
          </h3>
          <div
            className="brk-categories mb-20"
            data-brk-library="component__widgets"
          >
            <div className="brk-categories__list font__family-open-sans font__size-14 font__weight-normal">
              <a href="#" className="brk-categories__item">
                <span className="brk-categories__item-name">General</span>
                <span className="brk-categories__item-count">12</span>
              </a>
              <a href="#" className="brk-categories__item active">
                <span className="brk-categories__item-name">Mockups</span>
                <span className="brk-categories__item-count">14</span>
              </a>
              <a href="#" className="brk-categories__item">
                <span className="brk-categories__item-name">HTML & CSS</span>
                <span className="brk-categories__item-count">18</span>
              </a>
              <a href="#" className="brk-categories__item">
                <span className="brk-categories__item-name">Logo</span>
                <span className="brk-categories__item-count">21</span>
              </a>
              <a href="#" className="brk-categories__item">
                <span className="brk-categories__item-name">Web Design</span>
                <span className="brk-categories__item-count">6</span>
              </a>
            </div>
          </div>
          <h3 className="brk-info-menu__header font__family-montserrat font__weight-bold font__size-21">
            Our instagram
          </h3>
          <div
            className="default-slider dots-base-skin dots-base-color slick-loading mt-15"
            data-slick='{"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "autoplay": false, "autoplaySpeed": 4000}'
            data-brk-library="slider__slick"
          >
            <div>
              <div className="brk-header-slider">
                <div className="brk-header-slider__img">
                  <img src="img/309x206_1.jpg" alt="alt" />
                </div>
                <div className="brk-header-slider__content">
                  <img
                    className="lazyload"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    data-src="img/head-icon.png"
                    alt="alt"
                  />
                  <div className="brk-header-slider__content--title">
                    <h4 className="font__family-montserrat font__weight-bold font__size-16">
                      @berserk
                    </h4>
                    <span className="font__size-14">17 Hours ago</span>
                  </div>
                </div>
                <p className="brk-header-slider__text font__size-14 line__height-21">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                  eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra
                </p>
              </div>
            </div>
            <div>
              <div className="brk-header-slider">
                <div className="brk-header-slider__img">
                  <img
                    className="lazyload"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    data-src="img/309x206_2.jpg"
                    alt="alt"
                  />
                </div>
                <div className="brk-header-slider__content">
                  <img
                    className="lazyload"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    data-src="img/head-icon.png"
                    alt="alt"
                  />
                  <div className="brk-header-slider__content--title">
                    <h4 className="font__family-montserrat font__weight-bold font__size-16">
                      @berserk
                    </h4>
                    <span className="font__size-14">17 Hours ago</span>
                  </div>
                </div>
                <p className="brk-header-slider__text font__size-14 line__height-21">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                  eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra
                </p>
              </div>
            </div>
            <div>
              <div className="brk-header-slider">
                <div className="brk-header-slider__img">
                  <img
                    className="lazyload"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    data-src="img/309x206_3.jpg"
                    alt="alt"
                  />
                </div>
                <div className="brk-header-slider__content">
                  <img
                    className="lazyload"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    data-src="img/head-icon.png"
                    alt="alt"
                  />
                  <div className="brk-header-slider__content--title">
                    <h4 className="font__family-montserrat font__weight-bold font__size-16">
                      @berserk
                    </h4>
                    <span className="font__size-14">17 Hours ago</span>
                  </div>
                </div>
                <p className="brk-header-slider__text font__size-14 line__height-21">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                  eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
