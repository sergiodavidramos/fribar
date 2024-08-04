import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import Head from 'next/head'
export default () => {
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
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <a>Inicio</a>
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Politicas de privacidad
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="all-product-grid">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="job-main-dt">
                  <h2>Política de privacidad de Fribar</h2>
                  <span>
                    Esta Política de privacidad ("Privacidad") se actualizó
                    por última vez el 4 de agosto de 2024.
                  </span>
                </div>
                <div className="job-des-dt142 policy-des-dt">
                  <h4>Personal Information</h4>
                  <p>
                    En Fribar ("nosotros", "nuestro"), nos comprometemos a
                    proteger y respetar tu privacidad. Esta política de
                    privacidad explica cómo recopilamos, utilizamos y
                    protegemos tu información personal cuando visitas y
                    utilizas nuestro sitio web www.fribar.bo ("el Sitio").
                  </p>
                </div>
                <div className="job-des-dt142 policy-des-dt">
                  <h4>
                    ¿Qué información se recopila o puede recopilarse sobre
                    usted?
                  </h4>
                  <p>
                    Recopilamos varios tipos de información personal cuando
                    utilizas nuestro sitio, incluyendo: <br />
                    <strong> Información de Registro:</strong> Nombre,
                    dirección de correo electrónico, número de teléfono,
                    dirección de envío, y detalles de pago. <br />
                    <strong>Información de Navegación:</strong> tipo de
                    navegador, páginas visitadas. <br />
                    <strong> Información de Compras:</strong> Historial de
                    pedidos, productos comprados, y preferencias de compra
                    asi como tambien productos favoritos.
                  </p>
                </div>
                <div className="job-des-dt142 policy-des-dt">
                  <h4>Uso de la Información</h4>
                  <p>
                    Utilizamos tu información personal para:
                    <br />
                    Procesar y gestionar tus pedidos.
                    <br />
                    Proveer un servicio al cliente eficiente.
                    <br />
                    Personalizar tu experiencia de compra.
                    <br />
                    Enviar notificaciones sobre el estado de tus pedidos y
                    actualizaciones importantes.
                    <br />
                    Mejorar nuestro sitio web y servicios.
                    <br />
                  </p>
                </div>
                <div className="job-des-dt142 policy-des-dt">
                  <h4>Compartir la Información</h4>
                  <p>
                    No vendemos ni alquilamos tu información personal a
                    terceros. Sin embargo, podemos compartir tu información
                    con:
                    <br />
                    Proveedores de servicios que nos ayudan a operar
                    nuestro negocio (por ejemplo, servicios de pago online
                    y entrega).
                    <br />
                    Autoridades legales cuando sea requerido por ley.
                  </p>
                </div>
                <div className="job-des-dt142 policy-des-dt">
                  <h4>Seguridad de la Información</h4>
                  <p>
                    Implementamos medidas de seguridad adecuadas para
                    proteger tu información personal contra el acceso no
                    autorizado, la alteración, divulgación o destrucción.
                  </p>
                </div>
                <div className="job-des-dt142 policy-des-dt">
                  <h4>Tus Derechos</h4>
                  <p>
                    Tienes derecho a acceder, corregir o eliminar tu
                    información personal. Puedes ejercer estos derechos
                    poniéndote en contacto con nosotros a través de
                    team@fribar.bo
                  </p>
                </div>
                <div className="job-des-dt142 policy-des-dt">
                  <h4>Cambios a esta Política de Privacidad</h4>
                  <p>
                    Nos reservamos el derecho de actualizar esta política
                    de privacidad en cualquier momento. Te notificaremos
                    sobre cualquier cambio publicando la nueva política en
                    nuestro sitio web.
                  </p>
                </div>
                <div className="job-des-dt142 policy-des-dt">
                  <h4>Información de contacto</h4>
                  <p>
                    Fribar
                    <br />
                    Calle: final calero 148 esquipa pizagua, zona San
                    Lorenzo , Potosí,
                    <br />
                    Tel.: +591 74231490
                    <br />
                    Correo electrónico: team@fribar.bo
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
