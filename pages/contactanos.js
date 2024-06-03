import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { useEffect, useState } from 'react'
import { API_URL } from '../components/Config'
import { notify } from 'react-notify-toast'
import InformacionDireccion from '../components/Contactanos/informacionDireccion'
const nobreNosotros = () => {
  const [sucursales, setSucursales] = useState([])
  const [cargarMapa, setCargarMapa] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/sucursal/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((sucursales) => {
        setSucursales(sucursales.body)
      })
      .catch((error) => {
        notify.show('Error al obtener las sucursales', 'error')
      })
  }, [])

  function handlerSubmit(event) {
    let target = event.target
    event.preventDefault()
    target[0].value = ''
    target[1].value = ''
    target[2].value = ''
    notify.show('Petición Enviada', 'success')
  }
  return (
    <>
      <Header />
      <div className="wrapper">
        <Breadcrumb />
        <div className="all-product-grid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="panel-group accordion" id="accordion0">
                  {sucursales.length > 0
                    ? sucursales.map((suc, index) => (
                        <div className="panel panel-default" key={index}>
                          <div
                            className="panel-heading"
                            id={`headingOne${index}`}
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                data-target={`#collapseOne${index}`}
                                aria-expanded="false"
                                aria-controls={`collapseOne${index}`}
                                onClick={() => setCargarMapa(!cargarMapa)}
                              >
                                <i className="uil uil-location-point chck_icon"></i>
                                {suc.ciudad.nombre + ' - ' + suc.nombre}
                              </a>
                            </div>
                          </div>
                          <InformacionDireccion
                            suc={suc}
                            index={index}
                            cargarMapa={cargarMapa}
                          />
                        </div>
                      ))
                    : ''}
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact-title">
                  <h2>Enviar solicitud de servicio al cliente</h2>
                  <p>
                    Si tiene alguna pregunta sobre nuestro servicio o tiene
                    algún problema que informar, envíe una solicitud y nos
                    comunicaremos con usted lo antes posible.
                  </p>
                </div>
                <div className="contact-form">
                  <form onSubmit={handlerSubmit}>
                    <div className="form-group mt-1">
                      <label className="control-label">
                        Nombre Completo*
                      </label>
                      <div className="ui search focus">
                        <div className="ui left icon input swdh11 swdh19">
                          <input
                            className="prompt srch_explore"
                            type="text"
                            name="sendername"
                            id="sendername"
                            required
                            placeholder="Tu nombre completo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-1">
                      <label className="control-label">
                        Correo Eléctronico*
                      </label>
                      <div className="ui search focus">
                        <div className="ui left icon input swdh11 swdh19">
                          <input
                            className="prompt srch_explore"
                            type="email"
                            name="emailaddress"
                            id="emailaddress"
                            required
                            placeholder="Tu correo electrónico"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group mt-1">
                      <div className="field">
                        <label className="control-label">Mensaje*</label>
                        <textarea
                          rows="2"
                          className="form-control"
                          id="sendermessage"
                          name="sendermessage"
                          required
                          placeholder="Escribe tu mensaje"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      className="next-btn16 hover-btn mt-3"
                      type="submit"
                      data-btntext-sending="Sending..."
                    >
                      Enviar peticion
                    </button>
                  </form>
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
