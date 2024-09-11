import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { notify } from 'react-notify-toast'
import UserContext from '../components/UserContext'
import { API_URL } from '../components/Config'
import IframePagosNet from '../components/Carrito/IframePagosNet'
import Head from 'next/head'
export default () => {
  const {
    user,
    carrito,
    cantidades,
    token,
    totalConDescuneto,
    setGenerarQR,
    generarQR,
    limpiasCarrito,
    direccionEnvio,
  } = useContext(UserContext)

  const [volverGenerarPago, setVolverGenerarPago] = useState(false)
  const [infoPago, setInfoPago] = useState(false)
  const [estadoBoton, setEstadoBoton] = useState(false)

  const [idTransaccion, setIdTransaccion] = useState(false)
  const [sucursalAsignado, setSucursalAsignado] = useState(false)
  const [tiempoEstimado, setTiempoEstimado] = useState(false)
  const [idDireccion, setIdDireccion] = useState(false)
  const [ciudad, setCiudad] = useState(false)
  const [direccion, setDireccion] = useState(false)
  const [refDireccion, setRefDireccion] = useState(false)
  const [tipoPago, setTipoPago] = useState(false)
  const [costoEnvio, setCostoEnvio] = useState(0)

  const router = useRouter()
  const { datos, success } = router.query
  useEffect(() => {
    const datosTransaccion = datos ? datos.split('_') : []
    if (success == 'true' && datosTransaccion.length > 0 && token) {
      console.log('ESTADO TRANSACCION----->', success)
      console.log('DATOS TRANSACCION----->', datosTransaccion)
      console.log('TOKEN TRANSACCION----->', token)
      if (datosTransaccion[0] === 'qr') {
        notify.show(
          'Se envio el Pedido gracias por su compra 😊',
          'success'
        )
        const mandarDetalle3 = []
        for (let j = 0; j < carrito.length; j++) {
          mandarDetalle3.push({
            producto: carrito[j]._id,
            cantidad: cantidades[j],
            tipoVenta: carrito[j].tipoVenta,
            precioVenta: carrito[j].precioVenta,
            descuento: carrito[j].descuento,
            idSucursal: datosTransaccion[2],
          })
        }

        fetch(`${API_URL}/pedido`, {
          method: 'POST',
          body: JSON.stringify({
            idSucursal: datosTransaccion[2],
            duracionEstimadaEntrega: parseInt(datosTransaccion[3]),
            tipoPago: 'Codigo QR',
            direccion: datosTransaccion[4],
            detalleVenta: mandarDetalle3,
            estadoPago: true,
          }),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
          .then((res) => {
            if (res.error)
              notify.show('Error al registrar el pedido 😓', 'error')
            return res.json()
          })
          .then((resPedido) => {
            window.top.location.href = `https://www.fribar.bo/pedido-realizado?direccion=${
              atosTransaccion[5]
            }&
              referenciaDireccion=${
                datosTransaccion[7]
              }&tiempoEstimado=${parseInt(
              datosTransaccion[3]
            )}&numeroTel=${user.phone}&
              correo=${user.email}&pago=Codigo%20QR&total=${
              totalConDescuneto + parseInt(datosTransaccion[8])
            }&estadoPago=true&idPedido=${resPedido.body._id}`
            // router.push({
            //   pathname: '/pedido-realizado',
            //   query: {
            //     direccion: datosTransaccion[5],
            //     referenciaDireccion: datosTransaccion[7],
            //     tiempoEstimado: parseInt(datosTransaccion[3]),
            //     numeroTel: user.phone,
            //     correo: user.email,
            //     pago: 'Codigo QR',
            //     total: totalConDescuneto + costoEnvio,
            //     estadoPago: true,
            //     idPedido: resPedido.body._id,
            //   },
            // })
            limpiasCarrito()
          })
          .catch((error) => {
            notify.show(
              'Error al registrar el pedido contra entrega',
              'error'
            )
          })
      }
      if (datosTransaccion[0] === 'tarjeta') {
        notify.show(
          'Se envio el Pedido gracias por su compra 😊',
          'success'
        )
        const mandarDetalle3 = []
        for (let j = 0; j < carrito.length; j++) {
          mandarDetalle3.push({
            producto: carrito[j]._id,
            cantidad: cantidades[j],
            tipoVenta: carrito[j].tipoVenta,
            precioVenta: carrito[j].precioVenta,
            descuento: carrito[j].descuento,
            idSucursal: datosTransaccion[2],
          })
        }

        fetch(`${API_URL}/pedido`, {
          method: 'POST',
          body: JSON.stringify({
            idSucursal: datosTransaccion[2],
            duracionEstimadaEntrega: parseInt(datosTransaccion[3]),
            tipoPago: 'Tarjeta',
            direccion: datosTransaccion[4],
            detalleVenta: mandarDetalle3,
            estadoPago: true,
          }),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
          .then((res) => {
            if (res.error)
              notify.show('Error al registrar el pedido 😓', 'error')
            return res.json()
          })
          .then((resPedido) => {
            router.push({
              pathname: '/pedido-realizado',
              query: {
                direccion: datosTransaccion[5],
                referenciaDireccion: datosTransaccion[7],
                tiempoEstimado: parseInt(datosTransaccion[3]),
                numeroTel: user.phone,
                correo: user.email,
                pago: 'Tarjeta',
                total: totalConDescuneto + parseInt(datosTransaccion[8]),
                estadoPago: true,
                idPedido: resPedido.body._id,
              },
            })
            limpiasCarrito()
          })
          .catch((error) => {
            notify.show(
              'Error al registrar el pedido contra entrega',
              'error'
            )
          })
      }
    } else {
      if (datosTransaccion.length > 0) {
        setTipoPago(datosTransaccion[0])
        setIdTransaccion(datosTransaccion[1])
        setSucursalAsignado(datosTransaccion[2])
        setTiempoEstimado(parseInt(datosTransaccion[3]))
        setIdDireccion(datosTransaccion[4])
        setDireccion(datosTransaccion[5])
        setCiudad(datosTransaccion[6])
        setRefDireccion(datosTransaccion[7])
        setCostoEnvio(parseInt(datosTransaccion[8]))
      }
      setVolverGenerarPago(true)
    }
  }, [success, datos, token])

  const generarQr = async () => {
    const pago = await fetch(`${API_URL}/pedido/pago-electronico/qr`, {
      method: 'POST',
      body: JSON.stringify({
        total: totalConDescuneto + costoEnvio,
        generarQR: generarQR,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    const resPago = await pago.json()
    if (resPago.error) {
      console.log('ERROR--->', resPago)
      notify.show(
        'Error al generar QR por favor seleccione otro metodo de pago'
      )
    } else {
      if (resPago.body.codigoError === 0) {
        setInfoPago(resPago.body.idTransaccion)
        setVolverGenerarPago(false)
      } else {
        if (resPago.body.descripcionError === 'Recaudacion duplicada') {
          setInfoPago(false)
          setVolverGenerarPago(true)
        }
      }
    }
  }
  const generarTarjeta = async () => {
    const pago = await fetch(
      `${API_URL}/pedido/pago-electronico/tarjeta`,
      {
        method: 'POST',
        body: JSON.stringify({
          total: totalConDescuneto + costoEnvio,
          generarQR: generarQR,
          ciudad: ciudad,
          direccion: direccion,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )
    const resPago = await pago.json()
    if (resPago.error) {
      console.log('ERROR--->', resPago)
      notify.show(
        'Error al generar QR por favor seleccione otro metodo de pago'
      )
    } else {
      if (resPago.body.codigoError === 0) {
        setVolverGenerarPago(false)
        setInfoPago(resPago.body.idTransaccion)
      } else {
        if (resPago.body.descripcionError === 'Recaudacion duplicada') {
          setInfoPago(false)
          setVolverGenerarPago(true)
        }
      }
    }
  }
  function handlerGenerarQr() {
    setEstadoBoton(true)
    setGenerarQR()
    generarQr()
    setEstadoBoton(false)
  }
  function handlerGenerarTargeta() {
    setEstadoBoton(true)
    setGenerarQR()
    generarTarjeta()
    setEstadoBoton(false)
  }
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      {volverGenerarPago && infoPago === false ? (
        <div className="container">
          <div className="row justify-content-center">
            <h4
              style={{
                color: 'red',
                marginTop: '15px',
                width: '100%',
                textAlign: 'center',
              }}
            >
              No se pudo realizar el pago.
            </h4>

            {tipoPago === 'qr' ? (
              <button
                type="button"
                title="Volver a codigo QR"
                className="next-btn16 hover-btn"
                onClick={() => handlerGenerarQr()}
                disabled={estadoBoton}
              >
                Generar nuevo codigo QR
              </button>
            ) : (
              <button
                type="button"
                title="Volver a pago con tarjeta"
                className="next-btn16 hover-btn"
                onClick={() => handlerGenerarTargeta()}
                disabled={estadoBoton}
              >
                Generar nuevo pago
              </button>
            )}
          </div>
        </div>
      ) : tipoPago === 'qr' ? (
        <IframePagosNet
          infoPago={infoPago}
          url="https://web.sintesis.com.bo/iframe-simple-pagosnet/#/payQr"
          tipoPago="qr"
          sucursalAsignado={sucursalAsignado}
          tiempoEstimado={tiempoEstimado}
          idDireccion={idDireccion}
          nombreDireccion={direccion}
          refDireccion={refDireccion}
          nombreCiudad={ciudad.nombre}
          costoEnvio={costoEnvio}
        />
      ) : (
        <IframePagosNet
          infoPago={infoPago}
          url="https://web.sintesis.com.bo/payment-cybersource/#/cybersource"
          tipoPago="tarjeta"
          sucursalAsignado={sucursalAsignado}
          tiempoEstimado={tiempoEstimado}
          idDireccion={idDireccion}
          nombreDireccion={direccion}
          refDireccion={refDireccion}
          nombreCiudad={ciudad}
          costoEnvio={costoEnvio}
        />
      )}
    </>
  )
}
