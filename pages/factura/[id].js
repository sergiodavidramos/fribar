import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { API_URL } from '../../components/Config'
import { notify } from 'react-notify-toast'
export default () => {
  const router = useRouter()
  let subTotal = 0
  const [pedido, setPedido] = useState(false)
  const [fecha, setFecha] = useState(false)
  var fechaLocal
  useEffect(() => {
    const { id } = router.query
    const user = localStorage.getItem('fribar-user')
    const token = localStorage.getItem('fribar-token')
    if (!user && !token) router.push('/')
    if (id) {
      fetch(`${API_URL}/pedido/detalle/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => {
          if (res.error)
            notify.show('Error al obtener los datos del pedido', 'error')
          return res.json()
        })
        .then((datos) => {
          setPedido(datos.body)
          setFecha(datos.body.fecha)
        })
        .catch((error) => {
          console.log(erro)
          notify.show(
            'Error en el servidor al obtener los datos del pedido'
          )
        })
    }
  }, [router])

  function print() {
    window.print()
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
  return (
    <>
      <Head>
        <title>FriBar - Factura</title>
      </Head>
      <header className="header clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-header-group">
                <div
                  className="top-header"
                  style={{ justifyContent: 'center' }}
                >
                  <div className="res_main_logo" style={{ width: '90px' }}>
                    <a href="index.html">
                      <img src="/img/logoFrom.svg" alt="Fribar" />
                    </a>
                  </div>
                  <div className="main_logo ml-0" id="logo">
                    <a href="index.html">
                      <img src="/img/logoFrom.svg" alt="Fribar" />
                    </a>
                    <a href="index.html">
                      <img
                        className="logo-inverse"
                        src="/img/logo-noche.svg"
                        alt="Fribar"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {pedido && (
        <div className="bill-dt-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="bill-detail">
                  <div className="bill-dt-step">
                    <div className="bill-title">
                      <h4>Productos</h4>
                    </div>
                    <div className="bill-descp">
                      <div className="itm-ttl">
                        {pedido.detallePedido.detalle.length} Productos
                      </div>
                      {pedido.detallePedido.detalle.map((det, index) => (
                        <span className="item-prdct" key={index}>
                          {det.producto.name} {'->'} {det.cantidad}
                          {det.producto.tipoVenta === 'Unidad'
                            ? 'Uds.'
                            : 'Kg'}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bill-dt-step">
                    <div className="bill-title">
                      <h4>Dirección de entrega</h4>
                    </div>
                    <div className="bill-descp">
                      <div className="itm-ttl">
                        {pedido.direction.nombre}
                      </div>
                      <p className="bill-address">
                        #0000, {pedido.direction.direccion} ,{' '}
                        {pedido.direction.referencia}
                      </p>
                    </div>
                  </div>
                  <div className="bill-dt-step">
                    <div className="bill-title">
                      <h4>Detale del pago</h4>
                    </div>
                    <div className="bill-descp">
                      <div className="total-checkout-group p-0 border-top-0">
                        <div className="cart-total-dil">
                          <h4>Subtotal</h4>
                          {pedido.detallePedido.detalle.map((d) => {
                            subTotal += d.subTotal
                          })}
                          <span>{subTotal} Bs.</span>
                        </div>
                        <div className="cart-total-dil pt-3">
                          <h4>Delivery Charges</h4>
                          <span>
                            {pedido.costoDelivery === 0
                              ? 'Gratis'
                              : pedido.costoDelivery}
                          </span>
                        </div>
                      </div>
                      <div className="main-total-cart pl-0 pr-0 pb-0 border-bottom-0">
                        <h2>Total</h2>
                        <span>{pedido.total} Bs.</span>
                      </div>
                    </div>
                  </div>
                  <div className="bill-dt-step">
                    <div className="bill-title">
                      <h4>Detalles del pedido</h4>
                    </div>
                    <div className="bill-descp">
                      <p className="bill-dt-sl">
                        <b>{pedido.idSucursal.nombre}</b> -{' '}
                        <span className="dly-loc">
                          {pedido.idSucursal.ciudad.nombre}
                        </span>{' '}
                        -{' '}
                        <span className="dlr-ttl25">
                          {pedido.total} Bs.
                        </span>
                      </p>
                      <p className="bill-dt-sl">
                        PEDIDO ID -{' '}
                        <span className="descp-bll-dt">{pedido._id}</span>
                      </p>
                      <p className="bill-dt-sl">
                        Productos -{' '}
                        <span className="descp-bll-dt">
                          {pedido.detallePedido.detalle.length}
                        </span>
                      </p>
                      <p className="bill-dt-sl">
                        Fecha -{' '}
                        <span className="descp-bll-dt">
                          {fecha &&
                            new Date(fecha).getDate() +
                              '-' +
                              obtenerNombreMes(
                                new Date(fecha).getMonth() + 1
                              ) +
                              '-' +
                              new Date(fecha).getFullYear()}{' '}
                          ,{' '}
                          {new Date(fecha).getUTCHours() +
                            ':' +
                            new Date(fecha).getUTCMinutes()}
                          {/* 26 May 2020 , Tuesday, 3.00PM - 5.00PM */}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="bill-dt-step">
                    <div className="bill-title">
                      <h4>Opcion de pago</h4>
                    </div>
                    <div className="bill-descp">
                      <p className="bill-dt-sl">
                        <span className="dlr-ttl25 mr-1">
                          <i className="uil uil-check-circle"></i>
                        </span>
                        {pedido.tipoPago}
                      </p>
                    </div>
                  </div>
                  <div className="bill-dt-step">
                    <div className="bill-bottom">
                      <div className="thnk-ordr">
                        Gracias por su pedido
                      </div>
                      <a className="print-btn hover-btn" onClick={print}>
                        Imprimir
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
