import { useState } from 'react'
export const NavbarMobile = () => {
  const [open, setOpen] = useState(false)
  const handlerMenu = () => {
    setOpen(!open)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3">
      <div className="container-fluid">
        <button
          className="navbar-toggler menu_toggle_btn"
          type="button"
          data-target="#navbarSupportedContent"
          onClick={handlerMenu}
        >
          <i className="uil uil-bars"></i>
        </button>
        <div
          className={`collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu ${
            open ? 'open' : ''
          }`}
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
              <div
                className="ui icon top left dropdown nav__menu"
                tabIndex="0"
              >
                <a className="nav-link" title="Pages">
                  Paginas <i className="uil uil-angle-down"></i>
                </a>
                <div className="menu dropdown_page" tabIndex="-1">
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
              <div
                className="ui icon top left dropdown nav__menu"
                tabIndex="0"
              >
                <a className="nav-link" title="Blog">
                  Blog <i className="uil uil-angle-down"></i>
                </a>
                <div className="menu dropdown_page" tabIndex="-1">
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
  )
}
