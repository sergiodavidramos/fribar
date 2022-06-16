import Header from '../components/Header'
import Footer from '../components/Footer'
import { LoadFile } from '../components/LoadFile'
const nobreNosotros = () => {
  //   LoadFile()
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="col-lg-12">
          <div className="default-title">
            <h2>Sobre Nosotros</h2>
            <img src="/img/line.svg" alt="" />
          </div>
        </div>
        <div className="life-gambo">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="default-title left-text">
                  <h2>Misión </h2>
                  <img src="/img/line.svg" alt="" />
                </div>
                <div className="about-content">
                  <p>
                    Comercializar productos de consumo masivo de excelente
                    calidad a los mejores precios del mercado, brindando la
                    mejor opción en surtido, orientado a satisfacer las
                    necesidades de los clientes, acompañado de un buen
                    servicio y atención. Para ello debemos anticiparnos en
                    forma coherente a las expectativas del mercado,
                    potenciando como ventaja competitiva la calidad e
                    inocuidad de los productos y el desarrollo de marcas
                    apreciadas por sus clientes. A partir de lo anterior,
                    nuestra tarea es generar valor agregado y ser factor de
                    crecimiento para la comunidad.
                  </p>
                </div>
                <div className="default-title left-text">
                  <h2>Visión </h2>
                  <p>Los clientes merecen algo mejor</p>
                  <img src="/img/line.svg" alt="" />
                </div>
                <div className="about-content">
                  <p>
                    Ser una de las empresas líderes a nivel nacional,
                    ofreciendo siempre productos de excelente calidad, al
                    mejor precio, con tiendas amplias, cómodas y modernas,
                    que brinden seguridad y confianza a nuestros clientes
                    que son nuestra razón de ser. Asimismo, nos
                    visualizamos desarrollando talentos y habilidades en
                    nuestros colaboradores, en un ambiente laboral de
                    excelencia, motivados por satisfacer continuamente las
                    necesidades de clientes y consumidores; así como la
                    mutua colaboración con nuestros proveedores.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-img">
                  <img src="/img/about.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="about-steps-group white-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="about-step">
                  <div className="about-step-img">
                    <img src="/img/about/icon-1.svg" alt="" />
                  </div>
                  <h4>400+</h4>
                  <p>
                    People have joined the Gambo team in the past six
                    months
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="about-step">
                  <div className="about-step-img">
                    <img src="/img/about/icon-2.svg" alt="" />
                  </div>
                  <h4>2x</h4>
                  <p>Rate of growth in our monthly user base</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="about-step">
                  <div className="about-step-img">
                    <img src="/img/about/icon-3.svg" alt="" />
                  </div>
                  <h4>10 days</h4>
                  <p>Time taken to launch in 8 cities across India</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="about-step">
                  <div className="about-step-img">
                    <img src="/img/about/icon-4.svg" alt="" />
                  </div>
                  <h4>95k</h4>
                  <p>App downloads on iOS and Android</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="how-order-gambo">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="default-title">
                  <h2>Como hago un pedido?</h2>
                  <p>Como hago un pedido en Fribar</p>
                  <img src="/img/line.svg" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="how-order-steps">
                  <div className="how-order-icon">
                    <i className="uil uil-search"></i>
                  </div>
                  <h4>
                    Busque productos Fribar utilizando la función de
                    búsqueda
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="how-order-steps">
                  <div className="how-order-icon">
                    <i className="uil uil-shopping-basket"></i>
                  </div>
                  <h4>Añadir artículo al carrito de compra</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="how-order-steps">
                  <div className="how-order-icon">
                    <i className="uil uil-stopwatch"></i>
                  </div>
                  <h4>
                    Ten listo tu pedido en un tiempo de entregade 30
                    minutos como maximo.
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="how-order-steps">
                  <div className="how-order-icon">
                    <i className="uil uil-money-bill"></i>
                  </div>
                  <h4>
                    Seleccione la opción de pago adecuada (Efectivo,
                    Master, visa, Tarjeta de crédito,Paypal)
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="how-order-steps">
                  <div className="how-order-icon">
                    <i className="uil uil-truck"></i>
                  </div>
                  <h4>
                    Sus productos serán entregados a domicilio según su
                    pedido.
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="how-order-steps">
                  <div className="how-order-icon">
                    <i className="uil uil-smile"></i>
                  </div>
                  <h4>Consumidores felices</h4>
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

export default nobreNosotros
