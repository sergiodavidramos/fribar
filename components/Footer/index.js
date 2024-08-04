import { useEffect, useState } from 'react'
import { LoadFile } from '../../components/LoadFile'
import UserContext from '../UserContext'
import { useContext } from 'react'
import Link from 'next/link'
import { API_URL } from '../Config'
export default () => {
  const { categorias, ciudades } = useContext(UserContext)
  const [comunicado, setComunicado] = useState(false)
  useEffect(() => {
    LoadFile()
    getComunicado()
  }, [])
  async function getComunicado() {
    const res = await fetch(`${API_URL}/comunicado/all`)
    const getCominucado = await res.json()
    if (getCominucado.error === false) {
      if (getCominucado.body.length > 0) {
        if (getCominucado.body[0].state === true)
          setComunicado(getCominucado.body[0])
      }
    }
  }
  return (
    <footer className="footer">
      <div className="footer-first-row">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <ul className="call-email-alt">
                <li>
                  <a
                    href="https://wa.me/59174231490"
                    className="callemail"
                  >
                    <i className="uil uil-dialpad-alt"></i>74231490
                  </a>
                </li>
                <li>
                  <a href="mailto:team@fribar.bo" className="callemail">
                    <i className="uil uil-envelope-alt"></i>
                    team@fribar.bo
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="social-links-footer">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/fribarbolivia/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/fribarbolivia/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@fribarbolivia"
                      target="_blank"
                    >
                      <i className="fab fa-tiktok"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-second-row">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="second-row-item">
                <h4>Categorias</h4>
                <ul>
                  {categorias.length > 0 &&
                    categorias.map((cate, index) => (
                      <li key={index}>
                        <Link
                          href={{
                            pathname: '/[nombreCategoria]',
                            query: {
                              nombreCategoria: cate.name
                                .toLowerCase()
                                .replace(/ /g, '-'),
                            },
                          }}
                        >
                          <a>{cate.name}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="second-row-item">
                <h4>Enlaces útiles</h4>
                <ul>
                  <li>
                    <Link href="/sobre-fribar">
                      <a>Sobre nosotros</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/productos">
                      <a>Nuevos Productos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/productos/destacados">
                      <a>Productos Destacados</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/ofertas'}>
                      <a>Ofertas</a>
                    </Link>
                  </li>

                  <li>
                    <Link href={'/ayuda'}>
                      <a>Preguntas más frecuentes</a>
                    </Link>
                  </li>

                  <li>
                    <Link href={'/contactanos'}>
                      <a>Contacta con nosotros</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="second-row-item">
                <h4>Ciudades Principales</h4>
                <ul>
                  {ciudades.length > 0 &&
                    ciudades.map((datosCiudad, index) => (
                      <li key={index}>
                        <Link href={'/contactanos'}>
                          <a>{datosCiudad.nombre}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="second-row-item-app">
                <h4>Métodos de pago</h4>
                <div className="footer-payments">
                  <ul id="paypal-gateway" className="financial-institutes">
                    <li className="financial-institutes__logo">
                      <img
                        alt="Visa"
                        title="Visa"
                        src="/img/footer-icons/pyicon-1.svg"
                      />
                    </li>
                    <li className="financial-institutes__logo">
                      <img
                        alt="MasterCard"
                        title="MasterCard"
                        src="/img/footer-icons/pyicon-2.svg"
                      />
                    </li>
                    <li className="financial-institutes__logo">
                      <img
                        alt="Pago QR"
                        title="Pago QR"
                        src="/img/footer-icons/pago-con-codigo-qr.png"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="second-row-item-payment">
                <h4>Newsletter</h4>
                <div className="newsletter-input">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email Address"
                    className="form-control input-md"
                    required=""
                  />
                  <button
                    className="newsletter-btn hover-btn"
                    type="submit"
                  >
                    <i className="uil uil-telegram-alt"></i>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-last-row">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-bottom-links">
                <ul>
                  <li>
                    <Link href={'/politicas-de-privacidad'}>
                      <a>Política de privacidad</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/terminos-condiciones'}>
                      <a>Términos y condiciones</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/politicas-reembolso-devolucion'}>
                      <a>Política de reembolso y devolución</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="copyright-text">
                <i className="uil uil-copyright"></i>Copyright 2024{' '}
                <b>Fribar</b> . Todos los derechos reservados
              </div>
            </div>
          </div>
        </div>
      </div>
      {comunicado !== false && (
        <div
          id="aviso_model"
          className="header-cate-model main-gambo-model modal fade show"
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
              <div className="category-model-content modal-content">
                <div className="cate-header">
                  <h4>Comunicado</h4>
                </div>

                <div className="add-address-form">
                  <div className="checout-address-step">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="top-text-1">
                          {comunicado.titulo} <br />
                          <br />
                          {comunicado.cuerpo}
                          <br />
                          <br />
                          {comunicado.final}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              background: #c4c4c4;
            }
            .single-cat-item-noche:hover {
              background: 'black';
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
      )}
    </footer>
  )
}
