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
                      Politicas de reembolso y devolución
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
                  <h2>Política de devoluciones y reembolsos de Fribar</h2>
                  <span>
                    Esta Política de reembolso y devolución ("Reembolso -
                    Devolución") se actualizaron por última vez el 4 de
                    agosto de 2024.
                  </span>
                </div>
                <div className="job-des-dt142 policy-des-dt">
                  <p>
                    En Fribar, nos esforzamos por ofrecer productos de la
                    más alta calidad y la mejor experiencia de compra. Sin
                    embargo, entendemos que en ocasiones puede ser
                    necesario devolver un producto. A continuación, se
                    detallan nuestras políticas de reembolso y devolución:
                  </p>
                </div>
                <div className="job-des-dt142 policy-des-dt">
                  <h4>Devoluciones</h4>
                  <ul style={{ listStyleType: 'disc' }}>
                    <li>
                      <p>
                        <strong>Condiciones de Devolución: </strong>
                        Aceptamos devoluciones de productos dentro de 1 día
                        posterior a la entrega, siempre y cuando los
                        productos estén en su estado original, sin abrir,
                        sin usar, y en el empaque original.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Productos No Retornables: </strong>
                        Por razones de higiene y seguridad, no podemos
                        aceptar devoluciones de productos perecederos, todo
                        tipo de carnes frescas, productos abiertos o
                        productos personalizados.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="job-des-dt142 policy-des-dt">
                  <h4>Proceso de Devolución</h4>
                  <ul style={{ listStyleType: 'disc' }}>
                    <li>
                      <p>
                        <strong>Solicitar una Devolución: </strong>
                        Para iniciar una devolución, contáctanos en
                        team@fribar.bo o llamando al 74231490 con tu número
                        de pedido y los detalles del producto que deseas
                        devolver.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Aprobación de Devolución: </strong>
                        Una vez que tu solicitud de devolución sea
                        aprobada, te proporcionaremos instrucciones
                        detalladas sobre cómo devolver el producto.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Envío de Devolución: </strong>
                        Eres responsable de la devolución.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="job-des-dt142 policy-des-dt">
                  <h4>Reembolsos</h4>
                  <ul style={{ listStyleType: 'disc' }}>
                    <li>
                      <p>
                        <strong>Elegibilidad de Reembolso: </strong>
                        Una vez recibida e inspeccionada tu devolución, te
                        comunicaremos sobre la aprobación o rechazo de tu
                        reembolso. Si es aprobado, se procesará el
                        reembolso y se aplicará automáticamente a tu método
                        de pago original en ese momento.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="job-des-dt142 policy-des-dt">
                  <h4>Cambios</h4>
                  <p>
                    Productos Defectuosos o Dañados: Si recibiste un
                    producto defectuoso o dañado, contáctanos
                    inmediatamente a cualquiera de nuestros contactos con
                    una foto del producto y tu número de pedido.
                    Evaluaremos el problema y te ofreceremos un reemplazo o
                    reembolso.
                  </p>
                </div>
                <div className="job-des-dt142 policy-des-dt">
                  <h4>Excepciones / Artículos no retornables</h4>
                  <ul style={{ listStyleType: 'disc' }}>
                    <li>
                      <p>
                        <strong>Productos Perecederos: </strong>
                        No se pueden devolver productos perecederos como
                        alimentos frescos y todo tipo de carnes.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Productos Abiertos: </strong>
                        No se aceptan devoluciones de productos que han
                        sido abiertos o usados.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Artículos en Oferta: </strong>
                        Solo se pueden reembolsar los artículos de precio
                        regular; desafortunadamente, los artículos en
                        oferta no se pueden reembolsar.
                      </p>
                    </li>
                  </ul>
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
