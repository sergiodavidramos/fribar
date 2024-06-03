import mapboxgl from 'mapbox-gl'
import { API_URL, mapboxglAccessToken } from '../../Config'
import { useEffect, useRef } from 'react'
import GetImg from '../../GetImg'
export default ({
  direccionDelPedido,
  direccionSucursal,
  idPedido,
  socket,
  estadoPedido,
  imgCliente,
}) => {
  mapboxgl.accessToken = mapboxglAccessToken
  const mapContainer = useRef(null)
  useEffect(() => {
    resizeMapEditar()
  }, [direccionDelPedido, estadoPedido])
  function resizeMapEditar() {
    try {
      if (!'geolocation' in navigator) {
        return notify.show(
          'Tu navegador no soporta el acceso a la ubicación. Intenta con otro',
          'warning',
          5000
        )
      }
      if (direccionDelPedido) {
        var map = new mapboxgl.Map({
          container: mapContainer.current,
          projection: 'globe',
          style: 'mapbox://styles/mapbox/standard-beta',
          center: [direccionDelPedido.lon, direccionDelPedido.lat],
          zoom: 16,
        })

        map.on('load', function () {
          const iconDelivery = document.createElement('div')
          iconDelivery.className = 'markerDelivery'
          const iconSucursal = document.createElement('div')
          iconSucursal.className = 'markerSucursal'
          map.resize()
          //   marcador del cliente
          const iconCliente = document.createElement('div')
          iconCliente.className = 'markerCliente'
          iconCliente.style.backgroundImage = `url(${GetImg(
            imgCliente,
            API_URL + '/upload/user'
          )})`
          const markerUsuario = new mapboxgl.Marker(iconCliente, {
            draggable: false,
            // color: '#' + Math.floor(Math.random() * 16777215).toString(16),
          })
            .setLngLat([direccionDelPedido.lon, direccionDelPedido.lat])
            .addTo(map)

          if (estadoPedido === '2' || estadoPedido === 2) {
            // Marcador de la sucursal
            const markerSucursal = new mapboxgl.Marker(iconSucursal, {
              draggable: false,
            })
              .setLngLat([direccionSucursal.lon, direccionSucursal.lat])
              .addTo(map)
            map.addControl(new mapboxgl.FullscreenControl())

            // marcador deliver
            const markerDelivery = new mapboxgl.Marker(iconDelivery, {
              draggable: false,
            })
              .setLngLat([direccionSucursal.lon, direccionSucursal.lat])
              .addTo(map)

            map.fitBounds(
              [
                [direccionDelPedido.lon, direccionDelPedido.lat],
                [direccionSucursal.lon, direccionSucursal.lat],
              ],
              {
                padding: 100,
              }
            )
            socket.on(`delivery-${idPedido}`, (ubicacionDelivery) => {
              markerDelivery.setLngLat([
                ubicacionDelivery.longitud,
                ubicacionDelivery.latitud,
              ])
            })
          }
        })
      }
    } catch (err) {
      console.log('Error en el MAP', err)
    }
  }
  return (
    <div
      id="mapaSeguimientoModal"
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
              <h4>Tu pedido llegara pronto</h4>
            </div>
            <div>
              <div className="checout-address-step">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="address-fieldset">
                      <div
                        ref={mapContainer}
                        className="map-container"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .map-container {
            height: 500px;
          }
        `}
      </style>
    </div>
  )
}
