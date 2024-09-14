import { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../../UserContext'
import { API_URL } from '../../Config'
import { notify } from 'react-notify-toast'

export default ({
  abrirModal,
  direccion = false,
  direcciones,
  setDirecciones,
  token,
  index,
  mapboxgl,
}) => {
  const { signOut } = useContext(UserContext)

  const [banderaLng, setBanderaLng] = useState(null)
  const [banderaLat, setbanderaLat] = useState(null)

  const mapContainer = useRef(null)

  const inputNombreDireccion = useRef(null)
  const inputDireccion = useRef(null)
  const inputDetalleDirecion = useRef(null)

  useEffect(() => {
    resizeMapEditar()
    if (direccion) {
      setBanderaLng(direccion.lon)
      setbanderaLat(direccion.lat)
    }
  }, [abrirModal, direccion, token])

  async function actualizarDireccionPerfil(nuevaDireccion) {
    direcciones[index] = nuevaDireccion
    setDirecciones(direcciones)
  }

  function resizeMapEditar() {
    try {
      var geolocate = new mapboxgl.GeolocateControl({
        showUserLocation: false,
      })
      var map = new mapboxgl.Map({
        container: mapContainer.current,
        projection: 'globe',
        style: 'mapbox://styles/mapbox/standard-beta',
        center: [
          direccion ? direccion.lon : 0,
          direccion ? direccion.lat : 0,
        ],
        zoom: 16,
      })

      map.on('load', function () {
        map.resize()
        const marker = new mapboxgl.Marker({
          draggable: true,
        })
          .setLngLat([
            direccion ? direccion.lon : 0,
            direccion ? direccion.lat : 0,
          ])
          .addTo(map)

        geolocate.on('geolocate', function (e) {
          var lon = e.coords.longitude
          var lat = e.coords.latitude
          marker.setLngLat([lon, lat])
          setBanderaLng(lon)
          setbanderaLat(lat)
        })
        map.addControl(geolocate)
        obtenerUbicacionArrastrar(marker)
        map.addControl(new mapboxgl.FullscreenControl())
      })
    } catch (err) {
      console.log('Error en el MAP', err)
    }
  }

  const obtenerUbicacionArrastrar = (marker) => {
    marker.on('drag', () => {
      const lnglat = marker.getLngLat()
      setBanderaLng(lnglat.lng)
      setbanderaLat(lnglat.lat)
    })
  }

  function actualizarDireccion() {
    fetch(`${API_URL}/direction/${direccion._id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        nombre: inputNombreDireccion.current.value,
        direccion: inputDireccion.current.value,
        lat: banderaLat,
        lon: banderaLng,
        referencia: inputDetalleDirecion.current.value,
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
          notify.show(response.body.message, 'error', 2000)
        } else {
          notify.show('Se actualizo la Dirección con exito', 'success')
          actualizarDireccionPerfil(response.body)
        }
      })
      .catch((e) => {
        notify.show('No se pudo guardar los cambios', 'error')
      })
  }
  return (
    // <!-- Add Address Model Start-->
    <div
      id="edit_address_model"
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
              <h4>Editar Dirección</h4>
            </div>
            <div className="add-address-form">
              <div className="checout-address-step">
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      ref={mapContainer}
                      className="map-container"
                    ></div>

                    <form>
                      <div className="address-fieldset">
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <label className="control-label">
                                ¿Que nombre le damos a la Dirección? *
                              </label>
                              <input
                                ref={inputNombreDireccion}
                                id="flat"
                                name="flat"
                                type="text"
                                placeholder="Ej: Casa de Luis"
                                className="form-control input-md"
                                required
                                defaultValue={direccion.nombre}
                              />
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <label className="control-label">
                                Direccion / Piso / No. Departamento *
                              </label>
                              <input
                                ref={inputDireccion}
                                id="flat"
                                name="flat"
                                type="text"
                                placeholder="Direccion"
                                className="form-control input-md"
                                required
                                defaultValue={direccion.direccion}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <label className="control-label">
                                Refencia / Indicacione para la entrega *
                              </label>
                              <input
                                ref={inputDetalleDirecion}
                                id="street"
                                name="street"
                                type="textarea"
                                placeholder="Referencia"
                                className="form-control input-md"
                                required
                                defaultValue={direccion.referencia}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group mb-0">
                              <div className="address-btns">
                                <button
                                  onClick={actualizarDireccion}
                                  className="save-btn14 hover-btn"
                                  type="submit"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  Editar Dirección
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
          </div>
        </div>
        <style jsx>
          {`
            .map-container {
              height: 300px;
            }
          `}
        </style>
      </div>
    </div>
    /* // <!-- Add Address Model Start--> */
  )
}
