import { useContext, useEffect, useState } from 'react'
import MenuLef from '../Perfil/components/MenuLef'
import { API_URL } from '../Config'
import { notify } from 'react-notify-toast'
import UserContext from '../UserContext'
import Loader from '../Loader'
import io from 'socket.io-client'
import ModalEstado from './components/ModalEstado'
import ModalMapaSeguimiento from './components/ModalMapaSeguimiento'
let banPedidos = []
let socket
export default () => {
  const { signOut } = useContext(UserContext)
  const [pedidos, setPedido] = useState([])
  const [page, setPage] = useState(1)
  const [sonTodos, setSonTodos] = useState(false)
  const [urlAminacion, setUrlAnimacion] = useState({
    url: 'https://lottie.host/435826dd-41cb-47ab-bee6-22344a9c49f2/1xIEhNhrfp.json',
    titulo: '😊Pedido recibido gracias por tu preferencia😊',
  })

  const [direccionDelPedido, setDireccionDelPedido] = useState(false)
  const [direccionSucursal, setDireccionSucursal] = useState(false)
  const [imgCliente, setImgCliente] = useState(false)
  const [idPedido, setIdPedido] = useState(false)
  const [estadoPedido, setEstadoPedido] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('fribar-token')
    if (token) {
      getMisPedidos(page, token)
    } else {
      signOut()
    }
  }, [page])
  useEffect(() => {
    const user = localStorage.getItem('fribar-user')
    if (!user) {
      signOut()
    } else {
      const u = JSON.parse(user)
      socketInitializer(u._id)
      return () => socket.disconnect()
    }
    // Revisar esta parte pr que sale error
  }, [])
  async function getMisPedidos(pagina = 1, token) {
    const res = await fetch(
      `${API_URL}/pedido/detalle/cliente/id?pagina=${pagina}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Constent-Type': 'application/json',
        },
      }
    )
    if (res.status === 401) signOut()
    const resPedidos = await res.json()
    if (resPedidos.error) {
      notify.show('Error al obtener tus pedidos', 'warning')
      setPedido([])
    } else {
      for (let pedido of resPedidos.body) {
        let auxSubTotal = 0
        let auxFecha = new Date(pedido.fecha)
        auxFecha.setMinutes(auxFecha.getMinutes() + 30)
        pedido.fecha = new Date(pedido.fecha)
        pedido.fechaEntrega = auxFecha
        for (let auxDetalle of pedido.detallePedido.detalle) {
          auxSubTotal += auxDetalle.subTotal
        }
        pedido.subTotal = auxSubTotal
      }

      if (!resPedidos.body.length > 0) setSonTodos(true)
      setPedido(pedidos.concat(resPedidos.body))
      banPedidos = banPedidos.concat(resPedidos.body)
    }
  }
  function obtenerNombreMes(numero) {
    let miFecha = new Date()
    if (0 < numero && numero <= 12) {
      miFecha.setMonth(numero - 1)
      return new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(
        miFecha
      )
    } else {
      return null
    }
  }
  function handlerMostrarMasPedidos() {
    setPage(page + 1)
  }
  async function socketInitializer(id) {
    socket = io(API_URL, {
      transports: ['websocket'],
    })

    // Standard socket management
    socket.on('connect', () => {
      console.log('Connected to the server')
    })

    socket.on(`actualizar-${id}`, (estadoPedido) => {
      setPedido([])
      for (let i = 0; i < banPedidos.length; i++) {
        if (banPedidos[i]._id === estadoPedido.idPedido) {
          banPedidos[i].state = estadoPedido.state
        }
      }
      if (Notification.permission === 'granted') {
        let notificacion
        switch (estadoPedido.state) {
          case 0:
            notificacion = new Notification('Su pedido fue recibido ☺', {
              icon: '/public/img/logo-pantalla-pequeña.svg',
              body: 'Gracias por su preferencia',
            })
            break
          case 1:
            notificacion = new Notification(
              'Su pedido esta ciendo Preparado',
              {
                icon: '/public/img/logo-pantalla-pequeña.svg',
                body: 'En unos minutito su pedido estara listo',
              }
            )
            break
          case 2:
            notificacion = new Notification('Su pedido esta en Camino', {
              icon: '/public/img/logo-pantalla-pequeña.svg',
              body: 'Preparate para recibir tu pedido...',
            })
            break
          case 3:
            notificacion = new Notification('Su pedido fue entregado', {
              icon: '/public/img/logo-pantalla-pequeña.svg',
              body: 'Buen provecho! y gracias por su preferencia',
            })
            break
          case 4:
            notificacion = new Notification('Su pedido fue Cancelado', {
              icon: '/public/img/logo-pantalla-pequeña.svg',
              body: 'Lo sentimos no pudimos procesar su pedido',
            })
            break
        }
        notificacion.onclick = function () {
          window.open('https://www.fribar.bo/perfil/pedidos')
        }
      }
      setPedido(banPedidos)
    })

    // socket.on('disconnect', () => {
    //   console.log('Disconnected from the server')
    // })
  }
  return (
    <>
      <ModalEstado url={urlAminacion.url} titulo={urlAminacion.titulo} />
      <ModalMapaSeguimiento
        direccionDelPedido={direccionDelPedido}
        direccionSucursal={direccionSucursal}
        idPedido={idPedido}
        socket={socket}
        estadoPedido={estadoPedido}
        imgCliente={imgCliente}
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
                      <i className="uil uil-box"></i>Mis Pedidos
                    </h4>
                  </div>
                </div>

                {pedidos.length > 0 ? (
                  <div className="col-lg-12 col-md-12">
                    {pedidos.map((pedidoCliente, index) => (
                      <div className="pdpt-bg" key={index}>
                        <div className="pdpt-title">
                          <h6>
                            {`Fecha de entrega: ${pedidoCliente.fecha.getDate()} de ${obtenerNombreMes(
                              pedidoCliente.fecha.getMonth() + 1
                            )}, de : ${pedidoCliente.fecha.getHours()}:${pedidoCliente.fecha.getMinutes()} a ${pedidoCliente.fechaEntrega.getHours()}:${pedidoCliente.fechaEntrega.getMinutes()}`}
                          </h6>
                        </div>
                        <div className="order-body10">
                          <ul className="order-dtsll">
                            <li>
                              <div className="order-dt-img">
                                <img
                                  src="/img/groceries.svg"
                                  alt="Productos"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="order-dt47">
                                <h4>
                                  Fribar -{' '}
                                  {pedidoCliente.idSucursal.ciudad.nombre}
                                </h4>
                                <p>Entregado - Fribar</p>
                                <div className="order-title">
                                  {
                                    pedidoCliente.detallePedido.detalle
                                      .length
                                  }{' '}
                                  Productos
                                  <span
                                    data-inverted=""
                                    data-tooltip={pedidoCliente.detallePedido.detalle.map(
                                      (d) => ' ' + d.producto.name
                                    )}
                                    data-position="top center"
                                  >
                                    ?
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="total-dt">
                            <div className="total-checkout-group">
                              <div className="cart-total-dil">
                                <h4>Sub Total</h4>
                                <span>
                                  {pedidoCliente.subTotal.toFixed(2)}
                                </span>
                              </div>
                              <div className="cart-total-dil pt-3">
                                <h4>Costo de entrega</h4>
                                <span>
                                  {pedidoCliente.costoDelivery === 0
                                    ? 'Gratis'
                                    : pedidoCliente.costoDelivery}
                                </span>
                              </div>
                            </div>
                            <div className="main-total-cart">
                              <h2>Total</h2>
                              <span>
                                {pedidoCliente.total.toFixed(2)} Bs
                              </span>
                            </div>
                          </div>
                          <div className="track-order">
                            <h4>Estado del pedido</h4>
                            <div
                              className="bs-wizard"
                              style={{ borderBottom: 0 }}
                            >
                              <div
                                className={`bs-wizard-step ${
                                  pedidoCliente.state >= 0
                                    ? 'complete'
                                    : 'disabled'
                                }`}
                              >
                                <div className="text-center bs-wizard-stepnum">
                                  Recibido
                                </div>
                                <div className="progress">
                                  <div className="progress-bar"></div>
                                </div>
                                <a
                                  data-toggle="modal"
                                  data-target="#estadoPedidoModal"
                                  className="bs-wizard-dot"
                                  onClick={() =>
                                    setUrlAnimacion({
                                      url: 'https://lottie.host/435826dd-41cb-47ab-bee6-22344a9c49f2/1xIEhNhrfp.json',
                                      titulo:
                                        '😊Pedido recibido gracias por tu preferencia😊',
                                    })
                                  }
                                ></a>
                              </div>
                              <div
                                className={`bs-wizard-step ${
                                  pedidoCliente.state >= 1
                                    ? 'complete'
                                    : 'disabled'
                                }`}
                              >
                                <div className="text-center bs-wizard-stepnum">
                                  Preparando
                                </div>
                                <div className="progress">
                                  <div className="progress-bar"></div>
                                </div>
                                <a
                                  data-toggle="modal"
                                  data-target="#estadoPedidoModal"
                                  onClick={() =>
                                    setUrlAnimacion({
                                      url: 'https://lottie.host/312172b9-5901-432f-a2e7-d6dc604dafeb/M917mhieYk.json',
                                      titulo:
                                        '🛒Tu pedido esta siendo preparado🛒',
                                    })
                                  }
                                  className="bs-wizard-dot"
                                ></a>
                              </div>
                              <div
                                className={`bs-wizard-step ${
                                  pedidoCliente.state >= 2
                                    ? 'complete'
                                    : 'disabled'
                                }`}
                              >
                                <div className="text-center bs-wizard-stepnum">
                                  En camino
                                </div>
                                <div className="progress">
                                  <div className="progress-bar"></div>
                                </div>
                                <a
                                  data-toggle="modal"
                                  data-target="#mapaSeguimientoModal"
                                  className="bs-wizard-dot"
                                  onClick={() => {
                                    setDireccionDelPedido(
                                      pedidoCliente.direction
                                    )
                                    setDireccionSucursal(
                                      pedidoCliente.idSucursal.direccion
                                    )
                                    setIdPedido(pedidoCliente._id)
                                    setEstadoPedido(pedidoCliente.state)
                                    setImgCliente(
                                      pedidoCliente.cliente.img
                                        ? pedidoCliente.cliente.img
                                        : false
                                    )
                                  }}
                                ></a>
                              </div>
                              <div
                                className={`bs-wizard-step ${
                                  pedidoCliente.state >= 3
                                    ? 'complete'
                                    : 'disabled'
                                }`}
                              >
                                <div className="text-center bs-wizard-stepnum">
                                  Entregado
                                </div>
                                <div className="progress">
                                  <div className="progress-bar"></div>
                                </div>
                                <a className="bs-wizard-dot"></a>
                              </div>
                            </div>
                            <h5 style={{ textAlign: 'center' }}>
                              👆<br></br>
                              Click en los puntos para hacer seguimiento
                            </h5>
                          </div>
                          {/* <div className="alert-offer">
                          <img src="/img/ribbon.svg" alt="" />
                          Cashback of $2 will be credit to Gambo Super
                          Market wallet 6-12 hours of delivery.
                        </div> */}
                          <div className="call-bill">
                            <div className="delivery-man">
                              Chico de la entrega -{' '}
                              <a href="#">
                                <i className="uil uil-phone"></i> Llamanos
                              </a>
                            </div>
                            <div className="order-bill-slip">
                              <a
                                href={`/factura/${pedidoCliente._id}`}
                                target="_blank"
                                rel="noreferrer"
                                className="bill-btn5 hover-btn"
                              >
                                Ver Factura
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {sonTodos ? (
                      <div className="col-md-12">
                        <div className="more-product-btn">
                          Son todos los Pedidos
                        </div>
                      </div>
                    ) : (
                      <div className="col-md-12">
                        <div className="more-product-btn">
                          <button
                            className="show-more-btn hover-btn"
                            onClick={handlerMostrarMasPedidos}
                          >
                            Mostrar mas Pedidos
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Loader />
                    <div className="col-lg-12 col-md-12">
                      <div className="pdpt-bg">
                        <div className="pdpt-title">
                          <h3>Aun no tiene ni un pedido registrado</h3>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
