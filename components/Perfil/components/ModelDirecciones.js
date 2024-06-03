import { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../../UserContext'
import { API_URL } from '../../Config'
import { notify } from 'react-notify-toast'

export default ({ abrirModal, mapboxgl }) => {
  const { token, direcciones, setDirecciones, user, signOut } =
    useContext(UserContext)
  const [otraDireccion, setOtraDireccion] = useState(false)
  const [nombreDireccionSelect, setNombreDireccionSelect] =
    useState('Casa')

  const [banderaLng, setBanderaLng] = useState(null)
  const [banderaLat, setbanderaLat] = useState(null)

  const mapContainer = useRef(null)

  const inputNombreDireccion = useRef(null)
  const inputDireccion = useRef(null)
  const inputDetalleDirecion = useRef(null)
  useEffect(() => {
    resizeMap()
  }, [abrirModal])
  async function agregarDireccion() {
    try {
      if (otraDireccion) {
        const res = await fetch(`${API_URL}/direction`, {
          method: 'POST',
          body: JSON.stringify({
            nombre: inputNombreDireccion.current.value
              ? inputNombreDireccion.current.value
              : 'Casa',
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
        if (res.status === 401) signOut()
        const dir = await res.json()
        if (dir.error)
          notify.show('Error al registrar la direccion', 'error')
        actualizarDireccionPerfil(dir.body._id, dir.body)
      } else {
        const res = await fetch(`${API_URL}/direction`, {
          method: 'POST',
          body: JSON.stringify({
            nombre: nombreDireccionSelect,
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
        const dir = await res.json()
        if (dir.error)
          notify.show('Error al registrar la direccion', 'error')
        actualizarDireccionPerfil(dir.body._id, dir.body)
      }
    } catch (error) {
      notify.show('Error en la aplicacion al registrar direccion', 'error')
    }
  }
  async function actualizarDireccionPerfil(idDireccion, newDire) {
    try {
      const res = await fetch(
        `${API_URL}/user/agregar/direccion/${user._id}`,
        {
          method: 'PATCH',
          body: JSON.stringify({ direccionId: idDireccion }),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      const newUser = await res.json()
      if (newUser.error) {
        console.log(newUser)
        notify.show('Error al actualizar la direccion en usuario', 'error')
      }
      notify.show('Dirección registrada ', 'success')
      setDirecciones(direcciones.concat([newDire]))
    } catch (error) {
      console.log(error)
      notify.show(
        'Error en la aplicacion al actualizar direccion en usuario',
        'error'
      )
    }
  }
  function resizeMap() {
    try {
      if (!'geolocation' in navigator) {
        return notify.show(
          'Tu navegador no soporta el acceso a la ubicación. Intenta con otro',
          'warning',
          5000
        )
      }
      const onUbicacionConcedida = (ubicacion) => {
        var geolocate = new mapboxgl.GeolocateControl()
        var map = new mapboxgl.Map({
          container: mapContainer.current,
          projection: 'globe',
          style: 'mapbox://styles/mapbox/standard-beta',
          center: [ubicacion.coords.longitude, ubicacion.coords.latitude],
          zoom: 0,
          marker: [ubicacion.coords.longitude, ubicacion.coords.latitude],
        })
        // if (map.getStyle()) var newStyle = map.getStyle()
        // map.setStyle(newStyle)

        map.on('load', function () {
          map.resize()
          map.flyTo({
            center: [
              ubicacion.coords.longitude,
              ubicacion.coords.latitude,
            ],
            zoom: 15,
            duration: 5000, // Animate over 12 seconds
            essential: true,
          })

          const marker = new mapboxgl.Marker({
            draggable: true,
          })
            .setLngLat([
              ubicacion.coords.longitude,
              ubicacion.coords.latitude,
            ])
            .addTo(map)

          geolocate.on('geolocate', function (e) {
            var lon = e.coords.longitude
            var lat = e.coords.latitude
            marker.setLngLat([lon, lat])
            setBanderaLng(lon)
            setbanderaLat(lat)
          })
          obtenerUbicacionArrastrar(marker)
        })
        map.addControl(geolocate)

        map.addControl(new mapboxgl.FullscreenControl())
        setBanderaLng(ubicacion.coords.longitude)
        setbanderaLat(ubicacion.coords.latitude)
      }
      const onErrorDeUbicacion = (err) => {
        console.log('Error obteniendo ubicación: ', err)
        return notify.show('Error al obtener la ubicacion', 'error', 5000)
      }
      const opcionesDeSolicitud = {
        enableHighAccuracy: true, // Alta precisión
        maximumAge: 0, // No queremos caché
        timeout: 5000, // Esperar solo 5 segundos
      }
      navigator.geolocation.getCurrentPosition(
        onUbicacionConcedida,
        onErrorDeUbicacion,
        opcionesDeSolicitud
      )
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

  return (
    // <!-- Add Address Model Start-->
    <div
      id="address_model"
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
              <h4>Agregar nueva dirección</h4>
            </div>
            <div className="add-address-form">
              <div className="checout-address-step">
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      ref={mapContainer}
                      className="map-container"
                    ></div>
                    {/* <!-- Multiple Radios (inline) --> */}
                    <div className="form-group">
                      <div className="product-radio">
                        <ul className="product-now">
                          <li>
                            <input
                              type="radio"
                              id="ad1"
                              name="address1"
                              onClick={() => {
                                setOtraDireccion(false)
                                setNombreDireccionSelect('Casa')
                              }}
                              defaultChecked
                            />
                            <label htmlFor="ad1">Casa</label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="ad2"
                              name="address1"
                              onClick={() => {
                                setOtraDireccion(false)
                                setNombreDireccionSelect('Trabajo')
                              }}
                            />
                            <label htmlFor="ad2">Trabajo</label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="ad3"
                              name="address1"
                              onClick={() => {
                                setOtraDireccion(true)
                                setNombreDireccionSelect(false)
                              }}
                            />
                            <label htmlFor="ad3">Otro</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <form className="">
                      <div className="address-fieldset">
                        <div className="row">
                          {otraDireccion && (
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <label className="control-label">
                                  Otro *
                                </label>
                                <input
                                  ref={inputNombreDireccion}
                                  id="flat"
                                  name="flat"
                                  type="text"
                                  placeholder="Ej: Casa de Luis"
                                  className="form-control input-md"
                                  required
                                />
                              </div>
                            </div>
                          )}
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
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group mb-0">
                              <div className="address-btns">
                                <button
                                  onClick={agregarDireccion}
                                  className="save-btn14 hover-btn"
                                  type="button"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  Registar Dirección
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
