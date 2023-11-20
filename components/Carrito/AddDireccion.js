import { useContext, useEffect, useState } from 'react'
import UserContext from '../UserContext'
import mapboxgl from 'mapbox-gl'
import ModelDirecciones from '../Perfil/components/ModelDirecciones'
import { mapboxglAccessToken } from '../Config'
export const AddDireccion = () => {
  const { direcciones, direccionEnvio, setDireccionEnvio } =
    useContext(UserContext)
  const [direc, setDirec] = useState([])
  const [abrirModal, setAbrilModal] = useState(false)

  mapboxgl.accessToken = mapboxglAccessToken

  useEffect(() => {
    const localDirecciones = localStorage.getItem('user-direcciones')
    if (localDirecciones) setDirec(JSON.parse(localDirecciones))
  }, [direcciones])
  return (
    <>
      <ModelDirecciones abrirModal={abrirModal} mapboxgl={mapboxgl} />
      <div className="checkout-step">
        <div className="checkout-card" id="headingTwo">
          <span className="checkout-step-number">2</span>
          <h4 className="checkout-step-title">
            <button
              className="wizard-btn collapsed"
              type="button"
              //   data-toggle="collapse"
              //   data-target="#collapseTwo"
              //   aria-expanded="false"
              //   aria-controls="collapseTwo"
            >
              Dirección de entrega
            </button>
          </h4>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#checkout_wizard"
        >
          <div className="checkout-step-body">
            <p>
              Seleccione una de sus direcciones registrados o registre uno
              nuevo y seleccione. "El boton de Siguiente aparecerá una ves
              elija una direcion"
            </p>
            <div className="checout-address-step">
              <div className="row">
                <div className="col-lg-12">
                  <form className="">
                    <div className="form-group">
                      <div className="product-radio">
                        <ul className="product-now">
                          {direc.length > 0 &&
                            direc.map((direccion, index) => (
                              <li key={index}>
                                <input
                                  type="radio"
                                  id={direccion._id}
                                  name="address1"
                                  onClick={() =>
                                    setDireccionEnvio(direccion)
                                  }
                                />
                                <label htmlFor={direccion._id}>
                                  {direccion.nombre}
                                  <br />
                                  <small>{direccion.direccion}</small>
                                </label>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    <div className="address-fieldset">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-lg-5">
                            <button
                              type="button"
                              data-toggle="modal"
                              data-target="#address_model"
                              className="login-btn hover-btn"
                              onClick={() => {
                                setAbrilModal(!abrirModal)
                              }}
                            >
                              Agregar Nueva Dirección
                            </button>
                          </div>
                        </div>

                        {direccionEnvio && (
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <div className="address-btns">
                                <a
                                  className="collapsed ml-auto next-btn16 hover-btn"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#checkout_wizard"
                                  href="#collapseFour"
                                >
                                  Siguiente
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
