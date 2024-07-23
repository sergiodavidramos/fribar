import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Loader from '../components/Loader'
import Head from 'next/head'
export default () => {
  const router = useRouter()

  const {
    direccion,
    referenciaDireccion,
    tiempoEstimado,
    numeroTel,
    correo,
    pago,
    total,
    estadoPago,
    idPedido,
  } = router.query

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Header />
      <div className="wrapper">
        <div className="gambo-Breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page">
                      <Link href={'/'}>
                        <a>inicio</a>
                      </Link>
                    </li>

                    <li className={`breadcrumb-item`} aria-current="page">
                      <a style={{ color: '#fff' }}>Pedido Realizado</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {direccion &&
        referenciaDireccion &&
        tiempoEstimado &&
        numeroTel &&
        correo &&
        pago &&
        total &&
        estadoPago ? (
          <div className="all-product-grid">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <div className="order-placed-dt">
                    <i className="uil uil-check-circle icon-circle"></i>
                    <h2>Pedido realizado con éxito</h2>
                    <p>
                      ¡Gracias por su orden! recibirá el pedido -{' '}
                      <span>
                        (Hoy, tiempo estimado de: {tiempoEstimado} minutos
                        😉)
                      </span>
                    </p>
                    <div className="delivery-address-bg">
                      <div className="title585">
                        <div className="pln-icon">
                          <i className="uil uil-telegram-alt"></i>
                        </div>
                        <h4>Su pedido será enviado a esta dirección</h4>
                      </div>
                      <ul className="address-placed-dt1">
                        <li>
                          <p>
                            <i className="uil uil-map-marker-alt"></i>
                            Direccion :
                            <span>
                              {direccion} #000, {referenciaDireccion}
                            </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <i className="uil uil-phone-alt"></i>Número de
                            teléfono :<span>{numeroTel}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <i className="uil uil-envelope"></i>Correo
                            Electrónico :<span>{correo}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <i className="uil uil-card-atm"></i>Metodo de
                            pago :<span>{pago}</span>
                          </p>
                        </li>
                      </ul>
                      <div className="stay-invoice">
                        <div className="st-hm">
                          Quedate en casa<i className="uil uil-smile"></i>
                        </div>
                        <Link href={'/perfil/pedidos'}>
                          <a className="invc-link hover-btn">Ver pedido</a>
                        </Link>
                        <a
                          href={`/factura/${idPedido}`}
                          target="_blank"
                          rel="noreferrer"
                          className="invc-link hover-btn"
                        >
                          Factura
                        </a>
                      </div>
                      {estadoPago === 'true' ? (
                        <div className="placed-bottom-dt">
                          El pago de <span>{total}</span> fue realizado con
                          exito.(❁´◡`❁)
                        </div>
                      ) : (
                        <div className="placed-bottom-dt">
                          El pago de <span>{total} Bs.</span> lo realizarás
                          cuando llegue el delivery con tu pedido.(❁´◡`❁)
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
    </>
  )
}
