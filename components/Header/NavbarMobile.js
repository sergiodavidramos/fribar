import { useState } from 'react'
import Link from 'next/link'
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
              <Link href="/">
                <a className="nav-link active" title="Inicio">
                  Inicio
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/nuevos-productos">
                <a className="nav-link new_item" title="Nuevos productos">
                  Nuevos Productos
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/destacados">
                <a className="nav-link" title=" Productos Destacados">
                  Productos Destacados
                </a>
              </Link>
            </li>
            {open && (
              <>
                <li className="nav-item">
                  <Link href="/ofertas">
                    <a className="nav-link" title="Ofertas">
                      Ofertas
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/ayuda">
                    <a className="nav-link" title="Ayuda">
                      Ayuda
                    </a>
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <div
                className="ui icon top left dropdown nav__menu"
                tabIndex="0"
              >
                <a className="nav-link" title="Pages">
                  Sobre nosotros <i className="uil uil-angle-down"></i>
                </a>
                <div className="menu dropdown_page" tabIndex="-1">
                  <Link href="/sobre-fribar">
                    <a className="item channel_item page__links active">
                      Sobre Fribar
                    </a>
                  </Link>
                  <Link href="/solicitar-producto">
                    <a className="item channel_item page__links">
                      Solicitar un producto
                    </a>
                  </Link>
                  <Link href="/contactanos">
                    <a
                      className="item channel_item page__links"
                      title="Contact"
                    >
                      Contactanos
                    </a>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
