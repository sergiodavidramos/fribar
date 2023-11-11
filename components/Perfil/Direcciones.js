import { useContext, useEffect, useState } from 'react'
import MenuLef from './components/MenuLef'
import ModelDirecciones from './components/ModelDirecciones'
import UserContext from '../UserContext'
import { notify } from 'react-notify-toast'
import { API_URL, mapboxglAccessToken } from '../Config'
import ModelConfirmarEliminarDireccion from './components/ModelConfirmarEliminarDireccion'
import ModalEditarDireccion from './components/ModalEditarDireccion'
import mapboxgl from 'mapbox-gl'
export default () => {
  const [abrirModal, setAbrilModal] = useState(false)
  const { direcciones, setDirecciones, token, user } =
    useContext(UserContext)
  const [idDireccion, setIdDireccion] = useState(null)
  const [index, setIndex] = useState(null)
  const [direccionEditar, setdireccionEditar] = useState(false)

  mapboxgl.accessToken = mapboxglAccessToken

  useEffect(() => {}, [direcciones])

  return (
    <>
      <ModelDirecciones abrirModal={abrirModal} mapboxgl={mapboxgl} />
      <ModelConfirmarEliminarDireccion
        idDireccion={idDireccion}
        index={index}
        token={token}
        notify={notify}
        direcciones={direcciones}
        setDirecciones={setDirecciones}
        user={user}
      />
      <ModalEditarDireccion
        abrirModal={abrirModal}
        direccion={direccionEditar}
        direcciones={direcciones}
        setDirecciones={setDirecciones}
        token={token}
        index={index}
        mapboxgl={mapboxgl}
      />
      <div className="container">
        <div className="row">
          <MenuLef />
          <div className="col-lg-9 col-md-8">
            <div className="dashboard-right">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title-tab">
                    <h4>
                      <i className="uil uil-location-point"></i>Mis
                      Direcciones
                    </h4>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="pdpt-bg">
                    <div className="pdpt-title">
                      <h4>Mi dirección</h4>
                    </div>
                    <div className="address-body">
                      <a
                        className="add-address hover-btn"
                        data-toggle="modal"
                        data-target="#address_model"
                        onClick={() => {
                          setAbrilModal(!abrirModal)
                        }}
                      >
                        Agregar nueva dirección
                      </a>
                      {direcciones.length > 0 ? (
                        direcciones.map((dir, index) => (
                          <div className="address-item" key={index}>
                            <div className="address-icon1">
                              <i className="uil uil-home-alt"></i>
                            </div>
                            <div className="address-dt-all">
                              {dir.nombre ? (
                                <h4>{dir.nombre}</h4>
                              ) : (
                                <h4>Hogar</h4>
                              )}
                              <p>{dir.direccion}</p>
                              <p>{dir.referencia}</p>
                              <ul className="action-btns">
                                <li>
                                  <a
                                    className="action-btn"
                                    data-toggle="modal"
                                    data-target="#edit_address_model"
                                    onClick={() => {
                                      setAbrilModal(!abrirModal)
                                      setdireccionEditar(dir)
                                      setIndex(index)
                                    }}
                                  >
                                    <i className="uil uil-edit"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="action-btn"
                                    data-toggle="modal"
                                    data-target="#eliminarDireccion_model"
                                    onClick={() => {
                                      setIdDireccion(dir._id)
                                      setIndex(index)
                                    }}
                                  >
                                    <i className="uil uil-trash-alt"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="address-item">
                          <div className="address-icon1"></div>
                          <div className="address-dt-all">
                            <h4>No hay direcciones registrados</h4>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
