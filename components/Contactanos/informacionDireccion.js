import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { mapboxglAccessToken } from '../Config'
const InformacionDireccion = ({ suc, index, cargarMapa }) => {
  mapboxgl.accessToken = mapboxglAccessToken
  const mapContainer = useRef(null)
  var map
  useEffect(() => {
    resizeMap()
  }, [cargarMapa])
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

  return (
    <>
      <div
        id={`collapseOne${index}`}
        className="panel-collapse collapse"
        role="tabpanel"
        aria-labelledby={`headingOne${index}`}
        data-parent="#accordion0"
      >
        <div ref={mapContainer} className="map-container"></div>
        <div className="panel-body">
          {suc.descripcion}
          <br /> <br />
          Dirección en {suc.ciudad.nombre}:
          <br />
          {suc.direccion.direccion}
          <br /> Click para ver la direccion en el mapa :👉
          <a style={{ color: 'blue' }} onClick={() => verUbicacion(suc)}>
            {suc.direccion.lat} , {suc.direccion.lon}
          </a>
          <br /> <br />
          Horario de atencion: {suc.horaApertura} - {suc.horaCierre}
          <br />
          <div className="color-pink">Tel: {suc.administrador.phone}</div>
        </div>
      </div>
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
export default InformacionDireccion
