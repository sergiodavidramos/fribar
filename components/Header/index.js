import ModelCategory from "./ModelCategory";
import SearchModel from "./SearchModel";
import CartSidebar from "./CartSidebar";
import Logo from "./Logo";
import LogoHorizontal from "./LogoHorizontal";
import Location from "./Location";

export default () => {
  return (
    <>
      <ModelCategory />
      <SearchModel />
      <CartSidebar />

      <header className="header clearfix">
        <div className="top-header-group">
          <div className="top-header">
            <div className="res_main_logo">
              <a href="/">
                <img src="/images/dark-logo-1.svg" alt="" />
                <Logo />
              </a>
            </div>
            <div className="main_logo" id="logo">
              <a href="/">
                {/* <img src="images/logo.svg" alt="" /> */}
                <LogoHorizontal />
              </a>
            </div>
            <div className="select_location">
              <div className="ui inline dropdown loc-title">
                <div className="text">
                  <i className="uil uil-location-point"></i>
                  Potosí
                </div>
                <i className="uil uil-angle-down icon__14"></i>
                <div className="menu dropdown_loc">
                  <Location />
                  <Location />
                  <Location />
                  <Location />
                </div>
              </div>
            </div>

            <div className="search120">
              <div className="ui search">
                <div className="ui left icon input swdh10">
                  <input
                    className="prompt srch10"
                    type="text"
                    placeholder="Search for products.."
                  />
                  <i className="uil uil-search-alt icon icon1"></i>
                </div>
              </div>
            </div>
            <div className="header_right">
              <ul>
                <li>
                  <a href="#" className="offer-link">
                    <i className="uil uil-phone-alt"></i>65487706
                  </a>
                </li>
                <li>
                  <a href="offers.html" className="offer-link">
                    <i className="uil uil-gift"></i>Ofertas
                  </a>
                </li>
                <li>
                  <a href="faq.html" className="offer-link">
                    <i className="uil uil-question-circle"></i>Ayuda
                  </a>
                </li>
                <li>
                  <a
                    href="dashboard_my_wishlist.html"
                    className="option_links"
                    title="Wishlist"
                  >
                    <i className="uil uil-heart icon_wishlist"></i>
                    <span className="noti_count1">3</span>
                  </a>
                </li>
                {false ? (
                  <li className="ui dropdown">
                    <a href="#" className="opts_account">
                      <img src="images/avatar/img-5.jpg" alt="" />
                      <span className="user__name">Sergio David Ramos</span>
                      <i className="uil uil-angle-down"></i>
                    </a>
                    <div className="menu dropdown_account">
                      <div className="night_mode_switch__btn">
                        <a href="#" id="night-mode" className="btn-night-mode">
                          <i className="uil uil-moon"></i> Night mode
                          <span className="btn-night-mode-switch">
                            <span className="uk-switch-button"></span>
                          </span>
                        </a>
                      </div>
                      <a
                        href="dashboard_overview.html"
                        className="item channel_item"
                      >
                        <i className="uil uil-apps icon__1"></i>Dashbaord
                      </a>
                      <a
                        href="dashboard_my_orders.html"
                        className="item channel_item"
                      >
                        <i className="uil uil-box icon__1"></i>My Orders
                      </a>
                      <a
                        href="dashboard_my_wishlist.html"
                        className="item channel_item"
                      >
                        <i className="uil uil-heart icon__1"></i>My Wishlist
                      </a>
                      <a
                        href="dashboard_my_wallet.html"
                        className="item channel_item"
                      >
                        <i className="uil uil-usd-circle icon__1"></i>My Wallet
                      </a>
                      <a
                        href="dashboard_my_addresses.html"
                        className="item channel_item"
                      >
                        <i className="uil uil-location-point icon__1"></i>My
                        Address
                      </a>
                      <a href="offers.html" className="item channel_item">
                        <i className="uil uil-gift icon__1"></i>Offers
                      </a>
                      <a href="faq.html" className="item channel_item">
                        <i className="uil uil-info-circle icon__1"></i>Faq
                      </a>
                      <a href="sign_in.html" className="item channel_item">
                        <i className="uil uil-lock-alt icon__1"></i>Logout
                      </a>
                    </div>
                  </li>
                ) : (
               'hola'
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-header-group">
          <div className="sub-header">
            <div className="ui dropdown">
              <a
                href="#"
                className="category_drop hover-btn"
                data-toggle="modal"
                data-target="#category_model"
                title="Categories"
              >
                <i className="uil uil-apps"></i>
                <span className="cate__icon">Seleccionar Categoria</span>
              </a>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light py-3">
              <div className="container-fluid">
                <button
                  className="navbar-toggler menu_toggle_btn"
                  type="button"
                  data-target="#navbarSupportedContent"
                >
                  <i className="uil uil-bars"></i>
                </button>
                <div
                  className="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav main_nav align-self-stretch">
                    <li className="nav-item">
                      <a
                        href="index.html"
                        className="nav-link active"
                        title="Home"
                      >
                        Inicio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="shop_grid.html"
                        className="nav-link new_item"
                        title="New Products"
                      >
                        Nuevos Productos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="shop_grid.html"
                        className="nav-link"
                        title="Featured Products"
                      >
                        Productos Destacados
                      </a>
                    </li>
                    <li className="nav-item">
                      <div className="ui icon top left dropdown nav__menu">
                        <a className="nav-link" title="Pages">
                          Paginas <i className="uil uil-angle-down"></i>
                        </a>
                        <div className="menu dropdown_page">
                          <a
                            href="dashboard_overview.html"
                            className="item channel_item page__links"
                          >
                            Account
                          </a>
                          <a
                            href="about_us.html"
                            className="item channel_item page__links"
                          >
                            About Us
                          </a>
                          <a
                            href="shop_grid.html"
                            className="item channel_item page__links"
                          >
                            Shop Grid
                          </a>
                          <a
                            href="single_product_view.html"
                            className="item channel_item page__links"
                          >
                            Single Product View
                          </a>
                          <a
                            href="checkout.html"
                            className="item channel_item page__links"
                          >
                            Checkout
                          </a>
                          <a
                            href="request_product.html"
                            className="item channel_item page__links"
                          >
                            Product Request
                          </a>
                          <a
                            href="order_placed.html"
                            className="item channel_item page__links"
                          >
                            Order Placed
                          </a>
                          <a
                            href="bill.html"
                            className="item channel_item page__links"
                          >
                            Bill Slip
                          </a>
                          <a
                            href="sign_in.html"
                            className="item channel_item page__links"
                          >
                            Sign In
                          </a>
                          <a
                            href="sign_up.html"
                            className="item channel_item page__links"
                          >
                            Sign Up
                          </a>
                          <a
                            href="forgot_password.html"
                            className="item channel_item page__links"
                          >
                            Forgot Password
                          </a>
                          <a
                            href="contact_us.html"
                            className="item channel_item page__links"
                          >
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <div className="ui icon top left dropdown nav__menu">
                        <a className="nav-link" title="Blog">
                          Blog <i className="uil uil-angle-down"></i>
                        </a>
                        <div className="menu dropdown_page">
                          <a
                            href="our_blog.html"
                            className="item channel_item page__links"
                          >
                            Our Blog
                          </a>
                          <a
                            href="blog_no_sidebar.html"
                            className="item channel_item page__links"
                          >
                            Our Blog Two No Sidebar
                          </a>
                          <a
                            href="blog_left_sidebar.html"
                            className="item channel_item page__links"
                          >
                            Our Blog with Left Sidebar
                          </a>
                          <a
                            href="blog_right_sidebar.html"
                            className="item channel_item page__links"
                          >
                            Our Blog with Right Sidebar
                          </a>
                          <a
                            href="blog_detail_view.html"
                            className="item channel_item page__links"
                          >
                            Blog Detail View
                          </a>
                          <a
                            href="blog_left_sidebar_single_view.html"
                            className="item channel_item page__links"
                          >
                            Blog Detail View with Sidebar
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="contact_us.html"
                        className="nav-link"
                        title="Contact"
                      >
                        Contactanos
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="catey__icon">
              <a
                href="#"
                className="cate__btn"
                data-toggle="modal"
                data-target="#category_model"
                title="Categories"
              >
                <i className="uil uil-apps"></i>
              </a>
            </div>
            <div className="header_cart order-1">
              <a
                href="#"
                className="cart__btn hover-btn pull-bs-canvas-left"
                title="Cart"
              >
                <i className="uil uil-shopping-cart-alt"></i>
                <span>Carrito</span>
                <ins className="cart-count">2</ins>
                <i className="uil uil-angle-down"></i>
              </a>
            </div>
            <div className="search__icon order-1">
              <a
                href="#"
                className="search__btn hover-btn"
                data-toggle="modal"
                data-target="#search_model"
                title="Search"
              >
                <i className="uil uil-search"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
