import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { useEffect, useState, useRef } from 'react'
import { API_URL, mapboxglAccessToken } from '../components/Config'
import { notify } from 'react-notify-toast'
import mapboxgl from 'mapbox-gl'
const nobreNosotros = () => {
  const [sucursales, setSucursales] = useState([])

  mapboxgl.accessToken = mapboxglAccessToken

  const mapContainer = useRef(null)
  var map
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
  function resizeMap() {
    try {
      var geolocate = new mapboxgl.GeolocateControl()
      map = new mapboxgl.Map({
        container: mapContainer.current,
        projection: 'globe',
        style: 'mapbox://styles/mapbox/standard-beta',
        // center: [-90, 40],
        zoom: 0.8,
        center: [-90, 40],
      })
      // if (map.getStyle()) var newStyle = map.getStyle()
      // map.setStyle(newStyle)

      map.on('load', function () {
        map.resize()
        map.setFog({})
        //   map.flyTo({
        //     center: [
        //       ubicacion.coords.longitude,
        //       ubicacion.coords.latitude,
        //     ],
        //     zoom: 15,
        //     duration: 5000, // Animate over 12 seconds
        //     essential: true,
        //   })

        //   const marker = new mapboxgl.Marker({
        //     draggable: true,
        //   })
        //     .setLngLat([
        //       ubicacion.coords.longitude,
        //       ubicacion.coords.latitude,
        //     ])
        //     .addTo(map)

        geolocate.on('geolocate', function (e) {
          var lon = e.coords.longitude
          var lat = e.coords.latitude
          // marker.setLngLat([lon, lat])
          // setBanderaLng(lon)
          // setbanderaLat(lat)
        })
      })
      // The following values can be changed to control rotation speed:

      // At low zooms, complete a revolution every two minutes.
      const secondsPerRevolution = 120
      // Above zoom level 5, do not rotate.
      const maxSpinZoom = 5
      // Rotate at intermediate speeds between zoom levels 3 and 5.
      const slowSpinZoom = 3

      let userInteracting = false
      let spinEnabled = true
      function spinGlobe() {
        const zoom = map.getZoom()
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
          let distancePerSecond = 360 / secondsPerRevolution
          if (zoom > slowSpinZoom) {
            // Slow spinning at higher zooms
            const zoomDif =
              (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom)
            distancePerSecond *= zoomDif
          }
          const center = map.getCenter()
          center.lng -= distancePerSecond
          // Smoothly animate the map over one second.
          // When this animation is complete, it calls a 'moveend' event.
          map.easeTo({ center, duration: 1000, easing: (n) => n })
        }
      }

      // Pause spinning on interaction
      map.on('mousedown', () => {
        userInteracting = true
      })
      map.on('mouseup', () => {
        userInteracting = false
        spinGlobe()
      })

      // These events account for cases where the mouse has moved
      // off the map, so 'mouseup' will not be fired.
      map.on('dragend', () => {
        userInteracting = false
        spinGlobe()
      })
      map.on('pitchend', () => {
        userInteracting = false
        spinGlobe()
      })
      map.on('rotateend', () => {
        userInteracting = false
        spinGlobe()
      })

      // When animation is complete, start spinning if there is no ongoing interaction
      map.on('moveend', () => {
        spinGlobe()
      })
      spinGlobe()
      map.addControl(geolocate)
      map.addControl(new mapboxgl.FullscreenControl())
    } catch (err) {
      console.log('Error en el MAP', err)
    }
  }
  function verUbicacion(suc) {
    map.flyTo({
      center: [suc.direccion.lon, suc.direccion.lat],
      zoom: 15,
      duration: 5000, // Animate over 12 seconds
      essential: true,
    })

    const marker = new mapboxgl.Marker({
      draggable: false,
    })
      .setLngLat([suc.direccion.lon, suc.direccion.lat])
      .addTo(map)
  }
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
                          <div className="panel-heading" id="headingOne">
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                href="#"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                                onClick={() => resizeMap()}
                              >
                                <i className="uil uil-location-point chck_icon"></i>
                                {suc.ciudad.nombre + ' - ' + suc.nombre}
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
                            <div
                              ref={mapContainer}
                              className="map-container"
                            ></div>
                            <div className="panel-body">
                              {suc.descripcion}
                              <br /> <br />
                              Dirección en {suc.ciudad.nombre}:
                              <br />
                              {suc.direccion.direccion}
                              <br /> Click para ver la direccion en el mapa
                              :👉
                              <a
                                style={{ color: 'blue' }}
                                onClick={() => verUbicacion(suc)}
                              >
                                {suc.direccion.lat} , {suc.direccion.lon}
                              </a>
                              <br /> <br />
                              Horario de atencion: {
                                suc.horaApertura
                              } - {suc.horaCierre}
                              <br />
                              <div className="color-pink">
                                Tel: {suc.administrador.phone}
                              </div>
                            </div>
                          </div>
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
      <style jsx>
        {`
          .map-container {
            height: 300px;
          }
        `}
      </style>
    </>
  )
}

export default nobreNosotros
