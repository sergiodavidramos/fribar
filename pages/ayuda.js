import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import * as React from 'react'
import { LoadFile } from '../components/LoadFile'
import Link from 'next/link'
export default () => {
  useEffect(() => {
    // LoadFile()
  })
  return (
    <>
      <Head>
        <title>FriBar</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1"
        />
        <meta name="format-detection" content="telephone=no"></meta>
        <meta
          name="keywords"
          content="themeforest, theme, html, template"
        />
        <meta
          name="description"
          content="themeforest, theme, html, template"
        />
        <meta property="og:title" content="My page title" key="title" />
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
                      Preguntas frecuentes
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
                <div className="default-title mt-4">
                  <h2>Preguntas frecuentes</h2>
                  <img src="/img/line.svg" alt="Canasta" />
                </div>
                <div
                  className="panel-group accordion pt-1"
                  id="accordion0"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingOne">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          Registro
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapseOne"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        <p>
                          Registrarse en nuestra página es rápido y
                          sencillo. Sigue estos pasos:
                          <br /> 1. Dirígete a la página de inicio de
                          nuestro sitio web:{' '}
                          <Link href={'/registro'}>
                            <a target="_blank">www.fribar.bo/registro.</a>
                          </Link>
                          Haz click Se te redirigirá a un formulario de
                          registro. donde puedes llenar con tus datos para
                          el registro.
                          <br />
                          2. tambien contamos con el registro con
                          diferentes plataformas como Google y Facebook
                          solo puedes hacer clic en uno de ellos. <br />y
                          ¡Listo! Ahora tienes una cuenta en nuestra página
                          y puedes comenzar a disfrutar de nuestros
                          servicios y contenido exclusivo. Si tienes alguna
                          pregunta o necesitas ayuda, no dudes en ponerte
                          en contacto con nuestro equipo de soporte.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingTwo">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Relacionado con tu cuenta
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapseTwo"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        <p>
                          Para asuntos relacionados con tu cuenta en
                          nuestra página, estamos aquí para ayudarte. A
                          continuación, te proporcionamos algunas de las
                          preguntas frecuentes más comunes sobre temas
                          relacionados con la cuenta:
                          <br />
                          1.<strong> Cambiar la contraseña:</strong>
                          <br />
                          Si necesitas cambiar tu contraseña, puedes
                          hacerlo iniciando sesión en tu cuenta y
                          accediendo a tu perfil y luego hacer click en el
                          icono: <i className="uil uil-edit"></i>. Allí te
                          saldra el formulario para cambiar tu contraseña.
                          <br />
                          2. <strong>Recuperar la contraseña:</strong> En
                          caso de que olvides tu contraseña, ve a la página
                          de inicio de sesión y utiliza la opción
                          '¿Olvidaste tu contraseña?' para restablecerla.
                          Sigue las instrucciones proporcionadas. <br />
                          3. <strong>Cerrar tu cuenta:</strong> Si en algún
                          momento decides cerrar tu cuenta en nuestro
                          sitio, contáctanos y te guiaremos a través del
                          proceso de cierre.
                          <br />
                          4.{' '}
                          <strong>
                            Política de privacidad y seguridad:
                          </strong>{' '}
                          Para obtener información detallada sobre cómo
                          protegemos tu privacidad y la seguridad de tu
                          cuenta, te invitamos a consultar nuestra política
                          de privacidad en{' '}
                          <Link href={'/politicas-de-privacidad'}>
                            <a target="_black">
                              www.fribar.bo/politicas-de-privacidad
                            </a>
                          </Link>
                          . <br />
                          Si tienes una pregunta específica o necesitas
                          ayuda adicional con un asunto relacionado con tu
                          cuenta, no dudes en ponerte en contacto con
                          nuestro equipo de soporte. Estamos aquí para
                          brindarte asistencia y resolver tus inquietudes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingThree">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Pago
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapseThree"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        <p>
                          ¡Gracias por tu interés en asuntos relacionados
                          con el pago en nuestra tienda en línea! A
                          continuación, te proporcionamos información
                          importante sobre el proceso de pago y otros temas
                          relacionados:
                          <br />
                          1. <strong>Métodos de Pago:</strong> Aceptamos
                          varios métodos de pago, incluyendo tarjetas de
                          crédito/débito (Visa, MasterCard), codigo QR y
                          otros. Puedes seleccionar tu método de pago
                          preferido durante el proceso de compra en el
                          carrito de compras.
                          <br />
                          2. <strong>Seguridad en el Pago:</strong> Nuestra
                          página utiliza tecnología de seguridad avanzada
                          para proteger tus datos financieros. Puedes estar
                          seguro de que tus transacciones son seguras.{' '}
                          <br />
                          3.{' '}
                          <strong>
                            Facturación y Confirmación de Pedidos:
                          </strong>{' '}
                          Después de realizar un pedido, recibirás una
                          confirmación por correo electrónico que incluirá
                          un resumen de tu compra y detalles de
                          facturación. Asegúrate de revisar esta
                          información para cualquier corrección necesaria.
                          <br />
                          4. <strong>Problemas con el Pago:</strong> Si
                          experimentas problemas durante el proceso de
                          pago, como una tarjeta rechazada o dificultades
                          técnicas, comunícate con nuestro equipo de
                          soporte de inmediato. Estamos aquí para ayudarte
                          a resolver cualquier problema de pago.
                          <br />
                          5.{' '}
                          <strong>
                            Política de Devoluciones y Reembolsos:
                          </strong>{' '}
                          Para obtener información sobre nuestra política
                          de devoluciones y reembolsos en caso de que no
                          estés satisfecho con tu compra, consulta{' '}
                          <Link href={'/politicas-de-privacidad'}>
                            <a target="_black">
                              www.fribar.bo/politicas-de-privacidad
                            </a>
                          </Link>
                          . <br />
                          6. <strong> Preguntas sobre el Pago:</strong> Si
                          tienes preguntas específicas sobre el proceso de
                          pago, los precios, los cargos adicionales o
                          cualquier otro tema relacionado con el pago, no
                          dudes en ponerte en contacto con nuestros.
                          Estamos aquí para responder a tus preguntas y
                          brindarte la asistencia necesaria.
                          <br /> Esperamos que esta información te sea útil
                          para realizar tus compras en nuestra tienda en
                          línea. Si necesitas ayuda adicional o tienes
                          inquietudes específicas, no dudes en
                          contactarnos.
                          <br />
                          ¡Estamos aquí para servirte!"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingfour">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapsefour"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapsefour"
                        >
                          Relacionado con la entrega
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapsefour"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingfour"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        <p>
                          Estamos encantados de que estés interesado en
                          obtener información sobre la entrega de tus
                          productos en nuestra tienda en línea. Aquí tienes
                          detalles importantes relacionados con el proceso
                          de entrega:
                          <br />
                          1. <strong>Opciones de Envío:</strong> Ofrecemos
                          diferentes opciones de envío para adaptarnos a
                          tus necesidades. Durante el proceso de compra,
                          podrás seleccionar la opción de envío que mejor
                          te convenga, envío exprés o recogida en tienda si
                          está disponible.
                          <br />
                          2. <strong>Tiempo de Entrega:</strong> El tiempo
                          de entrega varía según la opción de envío
                          seleccionada y tu ubicación. En la página de
                          detalles del producto o en el carrito de compras,
                          encontrarás una estimación del tiempo de entrega
                          para tu pedido.
                          <br />
                          3. <strong>Seguimiento de Envíos:</strong>
                          Proporcionamos información de seguimiento para
                          que puedas rastrear el estado de tu pedido. Tan
                          pronto como tu pedido sea enviado, podras hacer
                          el seguimiento.
                          <br />
                          4. <strong>Entrega Segura:</strong> Nos
                          preocupamos por la seguridad de tu pedido.
                          Trabajamos con servicios de entrega confiables
                          que garantizan que tus productos lleguen a ti de
                          manera segura y en buenas condiciones.
                          <br />
                          5. <strong>Costos de Envío:</strong> Los costos
                          de envío pueden variar según la opción de envío y
                          la ubicación de entrega. Puedes revisar los
                          costos de envío en el carrito de compras antes de
                          finalizar tu pedido.
                          <br />
                          6. <strong>Dirección de Entrega:</strong>
                          Asegúrate de proporcionar la dirección de entrega
                          correcta durante el proceso de compra. Si
                          necesitas modificar la dirección de entrega
                          después de realizar un pedido, puedes hacerlo
                          ingresando a tu perfil y opcion de Mis
                          direcciones. <br />
                          7. <strong>Problemas con la Entrega:</strong> Si
                          experimentas problemas con la entrega, como
                          retrasos o productos dañados, no dudes en ponerte
                          en contacto con nuestro equipo. Estamos aquí para
                          ayudarte a resolver cualquier problema
                          relacionado con la entrega.
                          <br />
                          <br /> Esperamos que esta información te sea útil
                          para realizar tus compras en nuestra tienda en
                          línea. Si tienes alguna pregunta adicional o
                          necesitas asistencia específica, no dudes en
                          comunicarte con nosotros. Estamos comprometidos
                          en garantizar que tu experiencia de compra sea lo
                          más satisfactoria posible.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingfive">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapsefive"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapsefive"
                        >
                          Relacionado con el pedido
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapsefive"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingfive"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        <p>
                          Estamos encantados de que estés interesado en
                          obtener información sobre tus pedidos en nuestra
                          tienda en línea. A continuación, te
                          proporcionamos detalles importantes relacionados
                          con los pedidos:
                          <br />
                          1. <strong>Estado del Pedido:</strong> Puedes
                          verificar el estado de tu pedido en cualquier
                          momento iniciando sesión en tu cuenta y visitando
                          la sección 'Mis Pedidos'. Allí podrás ver si el
                          pedido está en proceso, enviado o entregado.
                          <br />
                          2. <strong>Confirmación del Pedido:</strong>{' '}
                          Después de realizar un pedido, recibirás una
                          confirmación por correo electrónico que incluirá
                          un resumen de tu compra, detalles del producto y
                          una estimación del tiempo de entrega. Asegúrate
                          de revisar esta confirmación para cualquier
                          corrección necesaria.
                          <br />
                          3. <strong>Problemas con el Pedido: </strong>
                          Si experimentas algún problema con tu pedido,
                          como productos dañados o faltantes, retrasos en
                          la entrega, o cualquier otro problema, no dudes
                          en ponerte en contacto con nuestro equipo de
                          soporte. Estamos aquí para resolver cualquier
                          problema relacionado con tu pedido.
                          <br />
                          4. <strong>Facturación del Pedido: </strong> El
                          detalle de facturación de tu pedido se encuentra
                          en la seccion de Mis pedidos. Si necesitas una
                          factura impresa, puedes imprimirlo en la misma
                          ingresando a tu pedido
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingsix">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapsesix"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapsesix"
                        >
                          Relacionado con el cliente
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapsesix"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingsix"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        <p>
                          Estamos comprometidos en brindar la mejor
                          experiencia posible a nuestros clientes en
                          nuestra tienda en línea. Aquí tienes información
                          importante relacionada con el servicio al
                          cliente:
                          <br />
                          1. <strong>Servicio al Cliente:</strong> Nuestro
                          equipo de atención al cliente está disponible
                          para ayudarte con cualquier pregunta, inquietud o
                          problema que puedas tener. Puedes contactarnos a
                          través de{' '}
                          <a
                            aria-label="Chat por WhatsApp"
                            href="https://wa.me/+59174231490"
                            target="_black"
                          >
                            <img
                              alt="Chat por WhatsApp"
                              src="/img/WhatsAppButtonGreenSmall.svg"
                            />
                          </a>
                          <a />.
                          <br />
                          2. <strong>Soporte Técnico:</strong> Si
                          experimentas problemas técnicos mientras navegas
                          por nuestro sitio o realizas una compra, nuestro
                          equipo de soporte técnico está listo para
                          ayudarte. Comunícate con ellos para resolver
                          cualquier problema técnico.
                          <br />
                          3. <strong>Preguntas Frecuentes (FAQ): </strong>
                          Tenemos una sección de Preguntas Frecuentes (FAQ)
                          en nuestro sitio web donde encontrarás respuestas
                          a muchas preguntas comunes. Te recomendamos
                          visitar esta sección para obtener información
                          inmediata sobre una variedad de temas. 4. 4.{' '}
                          <strong>Comentarios y Sugerencias: </strong>{' '}
                          Valoramos la retroalimentación de nuestros
                          clientes. Si tienes sugerencias para mejorar
                          nuestros productos o servicios, o simplemente
                          deseas compartir tus comentarios, no dudes en
                          ponerte en contacto con nosotros. Tu opinión es
                          importante para nosotros.
                          <br />
                          5. <strong>Seguridad del Cliente: </strong>
                          Implementamos medidas de seguridad para proteger
                          tu información personal y financiera. Puedes
                          estar seguro de que tus datos están seguros
                          cuando compras en nuestra tienda.
                          <br />
                          <br />
                          Estamos comprometidos en brindar un excelente
                          servicio al cliente y garantizar que tengas una
                          experiencia de compra satisfactoria. Si tienes
                          alguna pregunta adicional o necesitas asistencia
                          específica, no dudes en comunicarte con nosotros.
                          Tu satisfacción es nuestra prioridad
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingseven">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapseseven"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapseseven"
                        >
                          Relacionado con el remmbolso
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapseseven"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingseven"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        <p>
                          Entendemos que a veces los reembolsos pueden ser
                          necesarios en el proceso de compra. Aquí tienes
                          información importante relacionada con los
                          reembolsos:
                          <br />
                          1. <strong>Política de Reembolsos:</strong>{' '}
                          Nuestra política de reembolsos se encuentra
                          disponible en{' '}
                          <Link href={'/politicas-de-privacidad'}>
                            <a target="_black">
                              www.fribar.bo/politicas-de-privacidad
                            </a>
                          </Link>
                          . Te recomendamos revisarla para entender los
                          términos y condiciones específicos que se aplican
                          a los reembolsos.
                          <br />
                          2. <strong>Solicitar un Reembolso:</strong> Si
                          deseas solicitar un reembolso, comunícate con
                          nuestro equipo de atención al cliente lo antes
                          posible. Puedes hacerlo a través de:{' '}
                          <a
                            aria-label="Chat por WhatsApp"
                            href="https://wa.me/+59174231490"
                            target="_black"
                          >
                            <img
                              alt="Chat por WhatsApp"
                              src="/img/WhatsAppButtonGreenSmall.svg"
                            />
                          </a>
                          <a />
                          <br />
                          3. <strong>Proceso de Reembolso: </strong>
                          Una vez que hayas solicitado un reembolso,
                          nuestro equipo revisará tu solicitud y la
                          procesará de acuerdo con nuestra política. El
                          tiempo que lleva completar el proceso de
                          reembolso puede variar según las circunstancias y
                          la forma de pago original.
                          <br />
                          4. <strong>Método de Reembolso: </strong> Los
                          reembolsos generalmente se realizan a través del
                          mismo método de pago que utilizaste para hacer la
                          compra. Si eso no es posible, trabajaremos
                          contigo para encontrar una solución adecuada.
                          <br />
                          5.{' '}
                          <strong>
                            Comunicación sobre el Reembolso:{' '}
                          </strong>
                          Mantendremos una comunicación abierta contigo
                          durante todo el proceso de reembolso. Te
                          informaremos sobre el estado de tu solicitud y
                          cualquier acción que debas tomar.
                          <br />
                          4. <strong>
                            Problemas con el Reembolso:
                          </strong>{' '}
                          Si tienes alguna pregunta o experimentas
                          problemas con tu reembolso, no dudes en ponerte
                          en contacto con nuestro equipo de atención al
                          cliente. Estamos aquí para ayudarte a resolver
                          cualquier problema relacionado con los
                          reembolsos.
                          <br />
                          <br />
                          Estamos comprometidos en garantizar que el
                          proceso de reembolso sea lo más sencillo y
                          eficiente posible para nuestros clientes. Si
                          tienes alguna pregunta adicional o necesitas
                          asistencia específica, no dudes en comunicarte
                          con nosotros. Tu satisfacción es nuestra
                          prioridad.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingeight">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapseeight"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapseeight"
                        >
                          ¿Como funciona?
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapseeight"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingeight"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        <p>
                          Nos complace que estés interesado en conocer cómo
                          funciona nuestra página de comercio electrónico.
                          Aquí tienes una descripción general de nuestro
                          proceso:
                          <br />
                          1. <strong>
                            Navegación y Exploración:
                          </strong>{' '}
                          Puedes comenzar tu experiencia visitando nuestra
                          página web{' '}
                          <Link href={'/'}>
                            <a target="_black">www.fribar.bo</a>
                          </Link>
                          . Explora nuestra amplia gama de productos y
                          servicios navegando por las categorías,
                          utilizando la barra de búsqueda o consultando
                          nuestras ofertas destacadas.
                          <br />
                          2. <strong>Selección de Productos: </strong> Una
                          vez que encuentres un producto que te interese,
                          haz clic en él para obtener detalles adicionales,
                          incluyendo imágenes, descripciones y precios.
                          Puedes añadir los productos que desees a tu
                          carrito de compras.
                          <br />
                          3. <strong>Carrito de Compras: </strong>
                          En el carrito de compras, revisa los productos
                          que has seleccionado y verifica la cantidad. Aquí
                          también podrás aplicar códigos de descuento si
                          los tienes. Cuando estés listo para comprar,
                          procede al proceso de pago. <br />
                          4. <strong>Proceso de Pago: </strong> Durante el
                          proceso de pago, proporciona la información de
                          envío y facturación necesaria. Selecciona el
                          método de pago que prefieras, como tarjetas de
                          crédito, PayPal u otros métodos disponibles.
                          <br />
                          5. <strong>Confirmación de la Orden: </strong>
                          Después de completar el pago, recibirás una
                          confirmación de la orden por correo electrónico.
                          Esta confirmación incluirá un resumen de tu
                          compra y detalles de la orden, incluyendo el
                          tiempo estimado de entrega.
                          <br />
                          6. <strong>Procesamiento y Entrega: </strong>
                          Nuestro equipo procesará tu orden y se encargará
                          de la entrega. Utilizamos métodos de envío
                          seguros y confiables para asegurarnos de que tu
                          pedido llegue a ti de manera eficiente y en
                          buenas condiciones.
                          <br />
                          7. <strong>Atención al Cliente: </strong>
                          Durante todo el proceso, nuestro equipo de
                          atención al cliente está disponible para
                          responder a tus preguntas, ayudarte con problemas
                          o brindarte cualquier asistencia adicional que
                          necesites.
                          <br />
                          8. <strong>Reembolsos y Devoluciones: </strong>
                          Si por alguna razón no estás satisfecho con tu
                          compra, ofrecemos una política de reembolsos y
                          devoluciones{' '}
                          <Link href={'/politicas-de-privacidad'}>
                            <a target="_black">
                              www.fribar.bo/politicas-de-privacidad
                            </a>
                          </Link>{' '}
                          para garantizar tu satisfacción.
                          <br />
                          Estamos comprometidos en brindarte una
                          experiencia de compra sencilla y segura en
                          nuestra página de comercio electrónico. Si tienes
                          alguna pregunta adicional o necesitas asistencia
                          específica, no dudes en comunicarte con nosotros.
                          Tu satisfacción es nuestra prioridad y estamos
                          aquí para servirte.
                        </p>
                      </div>
                    </div>
                  </div>
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
