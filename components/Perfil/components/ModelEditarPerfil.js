import { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../../UserContext'
import { API_URL } from '../../Config'
import { notify } from 'react-notify-toast'
import GetImg from '../../GetImg'

const ModelEditarPerfil = ({ user }) => {
  const urlGetImg = `${API_URL}/upload/user`
  const { token, signOut, setUser } = useContext(UserContext)
  const [image, setImage] = useState(null)
  const [imageUpload, setImageUpload] = useState(null)
  const numero = useRef(null)
  const nombre = useRef(null)
  async function editarPerfil() {
    try {
      if (imageUpload) {
        let formData = new FormData()
        formData.append('imagen', imageUpload)
        fetch(`${API_URL}/upload/user/${user._id}`, {
          method: 'PUT',
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            if (res.status === 401) signOut()
            return res.json()
          })
          .then((response) => {
            if (response.error) {
              console.log('---->', response)
              notify.show(response.body, 'error', 2000)
            } else {
              fetch(`${API_URL}/user/${user._id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                  nombre_comp: nombre.current.value,
                  phone: numero.current.value,
                  idPersona: user.idPersona._id,
                }),
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
              })
                .then((res) => {
                  if (res.status === 401) signOut()
                  return res.json()
                })
                .then((response) => {
                  if (response.error) {
                    notify.show(response.body, 'error', 2000)
                  } else {
                    setUser(response.body)
                    notify.show(
                      'Cambios guardados con Exito! ',
                      'success',
                      2000
                    )
                  }
                })
                .catch((e) =>
                  notify.show('No se pudo guardar los cambios', 'error')
                )
            }
          })
          .catch((error) => {
            notify.show('No se pudo subir las imagenes', 'error')
          })
      } else {
        fetch(`${API_URL}/user/${user._id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            nombre_comp: nombre.current.value,
            phone: numero.current.value,
            idPersona: user.idPersona._id,
          }),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
          .then((res) => {
            if (res.status === 401) signOut()
            return res.json()
          })
          .then((response) => {
            if (response.error) {
              console.log(response.body)
              notify.show(response.body, 'error', 2000)
            } else {
              setUser(response.body)
              notify.show('Cambios guardados con Exito! ', 'success', 2000)
            }
          })
          .catch((e) =>
            notify.show('No se pudo guardar los cambios', 'error')
          )
      }
    } catch (error) {
      notify.show('Error en la aplicación al editar perfil', 'error')
    }
  }
  const uploadFile = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
    setImageUpload(e.target.files[0])
  }
  return (
    // <!-- Add Address Model Start-->
    <div
      id="editarPerfil_model"
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
              <h4>Editar información del su perfil</h4>
            </div>
            {user && (
              <div className="add-address-form">
                <div className="checout-address-step">
                  <div className="row">
                    <div className="col-lg-12">
                      <form>
                        <div className="address-fieldset">
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                              <div className="input-group">
                                <div className="custom-file">
                                  <input
                                    type="file"
                                    className="custom-file-input"
                                    id="profile-img"
                                    aria-describedby="inputGroupFileAddon04"
                                    onChange={uploadFile}
                                  />
                                  <label
                                    className="custom-file-label"
                                    htmlFor="profile-img"
                                  >
                                    Cambiar imagen
                                  </label>
                                </div>
                              </div>
                              <div className="add-cate-img-1">
                                {user.google || user.facebook ? (
                                  <img
                                    src={user.img}
                                    alt="Usuario Fribar"
                                  />
                                ) : (
                                  <img
                                    src={
                                      !image
                                        ? GetImg(user.img, urlGetImg)
                                        : image
                                    }
                                    alt="Usuario Fribar"
                                  />
                                )}
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <label className="control-label">
                                  Nombre completo *
                                </label>
                                <input
                                  ref={nombre}
                                  name="nombre"
                                  type="text"
                                  placeholder="Nombre del usuario"
                                  className="form-control input-md"
                                  required
                                  defaultValue={
                                    user ? user.idPersona.nombre_comp : ''
                                  }
                                />
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <label className="control-label">
                                  Telefono *
                                </label>

                                {user.numeroCelularVerificado && (
                                  <label style={{ color: 'red' }}>
                                    <strong>
                                      {'  - '} Tu número ya esta validado.
                                      ¿Quieres cambiarlo igual?
                                    </strong>
                                  </label>
                                )}
                                <input
                                  ref={numero}
                                  name="numero telefonico"
                                  type="number"
                                  placeholder="Numero telefonico"
                                  className="form-control input-md"
                                  required
                                  defaultValue={user ? user.phone : ''}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group mb-0">
                                <div className="address-btns">
                                  <button
                                    className="save-btn14 hover-btn"
                                    type="button"
                                    onClick={editarPerfil}
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    Editar datos
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    /* // <!-- Add Address Model Start--> */
  )
}
export default ModelEditarPerfil
