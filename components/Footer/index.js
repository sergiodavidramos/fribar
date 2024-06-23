import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { LoadFile } from '../../components/LoadFile'
import UserContext from '../UserContext'
import { useContext } from 'react'
import Link from 'next/link'

// import { scr } from 'react-script-tag'
export default () => {
  const { categorias, ciudades } = useContext(UserContext)
  const router = useRouter()
  useEffect(() => {
    LoadFile()
  }, [router])
  return (
    <footer className="footer">
      <div className="footer-first-row">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <ul className="call-email-alt">
                <li>
                  <a href="#" className="callemail">
                    <i className="uil uil-dialpad-alt"></i>68386715
                  </a>
                </li>
                <li>
                  <a href="#" className="callemail">
                    <i className="uil uil-envelope-alt"></i>
                    info@fribar.bo
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="social-links-footer">
                <ul>
                  <li>
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
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
                <h4>Método de pago</h4>
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
                    <a href="">política de privacidad</a>
                  </li>
                  <li>
                    <a href="">Términos y condiciones</a>
                  </li>
                  <li>
                    <a href="">Política de reembolso y devolución</a>
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
    </footer>
  )
}
