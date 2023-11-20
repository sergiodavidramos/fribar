import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../UserContext'
import GetImg from '../GetImg'
import { API_URL } from '../Config'
import Link from 'next/link'
import expectedRound from 'expected-round'
import { notify } from 'react-notify-toast'
let radioCantidad = []
export default () => {
  const {
    carrito,
    cantidades,
    setCantidades,
    total,
    totalConDescuneto,
    elimninarProdcutoCarrito,
    setCostoEnvio,
  } = useContext(UserContext)
  const [infoCostoEnvio, setInfoCostoEnvio] = useState({
    promoEnvio: false,
  })
  const [precioEnvio, setPrecioEnvio] = useState(0)
  let cantidadAsignado = useRef(
    [...new Array(carrito.length > 0 ? carrito.length + 1 : 12)].map(() =>
      React.createRef()
    )
  )
  useEffect(() => {
    const localCantidades = localStorage.getItem('fribar-cantidades')
    const localProductos = localStorage.getItem('fribar-carrito')
    if (localCantidades && localProductos) {
      if (cantidadAsignado.current[0].current) {
        const parseCantidades = JSON.parse(localCantidades)
        for (let i = 0; i < parseCantidades.length; i++) {
          cantidadAsignado.current[i].current.value = parseCantidades[i]
        }
      }
    }

    fetch(`${API_URL}/costo-envio`)
      .then((res) => {
        return res.json()
      })
      .then((resInfoCostoEnvio) => {
        if (resInfoCostoEnvio.error)
          notify.show('Error al obtener el costo de Envio', 'error')
        else {
          setInfoCostoEnvio(resInfoCostoEnvio.body[0])
          if (
            totalConDescuneto >
            resInfoCostoEnvio.body[0].cantidadTotalPromo
          ) {
            setPrecioEnvio(resInfoCostoEnvio.body[0].costoPromo)
            setCostoEnvio(resInfoCostoEnvio.body[0].costoPromo)
          } else {
            setPrecioEnvio(resInfoCostoEnvio.body[0].costoNormal)
            setCostoEnvio(resInfoCostoEnvio.body[0].costoNormal)
          }
        }
      })
  }, [totalConDescuneto, total])
  function cambiarValor(valor, index) {
    cantidadAsignado.current[index].current.value = parseFloat(valor)
    cantidades[index] = parseFloat(valor)
    setCantidades(cantidades, carrito)
  }
  function sumarCantidad(i) {
    if (radioCantidad[i]) {
      cantidadAsignado.current[i].current.value =
        parseFloat(cantidadAsignado.current[i].current.value) +
        radioCantidad[i]
      cantidades[i] = parseFloat(cantidadAsignado.current[i].current.value)
      setCantidades(cantidades, carrito)
    } else
      cantidadAsignado.current[i].current.value =
        parseFloat(cantidadAsignado.current[i].current.value) + 1
    cantidades[i] = parseFloat(cantidadAsignado.current[i].current.value)
    setCantidades(cantidades, carrito)
  }
  function restarCantidad(i) {
    const valorMinimo = carrito[i].tipoVenta === 'Unidad' ? 1 : 0.5
    if (radioCantidad[i]) {
      if (
        parseFloat(cantidadAsignado.current[i].current.value) >
        radioCantidad[i]
      )
        cantidadAsignado.current[i].current.value =
          parseFloat(cantidadAsignado.current[i].current.value) -
          radioCantidad[i]
      cantidades[i] = parseFloat(cantidadAsignado.current[i].current.value)
      setCantidades(cantidades, carrito)
    } else if (
      parseFloat(cantidadAsignado.current[i].current.value) > valorMinimo
    ) {
      cantidadAsignado.current[i].current.value =
        parseFloat(cantidadAsignado.current[i].current.value) - valorMinimo
      cantidades[i] = parseFloat(cantidadAsignado.current[i].current.value)
      setCantidades(cantidades, carrito)
    }
  }
  function eliminarProductoDelCarrito(index) {
    elimninarProdcutoCarrito(index)
  }
  return (
    <div className="bs-canvas bs-canvas-left position-fixed bg-cart h-100">
      <div className="bs-canvas-header side-cart-header p-3 ">
        <div className="d-inline-block  main-cart-title">
          Mi carrito <span>{carrito.length} Productos</span>
        </div>
        <button
          type="button"
          className="bs-canvas-close close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <i className="uil uil-multiply"></i>
        </button>
      </div>
      <div className="bs-canvas-body">
        <div className="cart-top-total">
          <div className="cart-total-dil">
            <h4>Total sin precio de envio</h4>
            <span>{totalConDescuneto.toFixed(2)} Bs</span>
          </div>
          <div className="cart-total-dil pt-2">
            <h4>Precio de envio</h4>
            {precioEnvio === 0 ? (
              <span>Gratis</span>
            ) : (
              <span>{precioEnvio} Bs.</span>
            )}
          </div>
          {infoCostoEnvio.promoEnvio ? (
            <div className="cart-total-dil pt-2">
              <span>{`Envio ${
                infoCostoEnvio.costoPromo === 0
                  ? 'Gratis'
                  : infoCostoEnvio.costoPromo + ' Bs.'
              } por compras mayor a ${
                infoCostoEnvio.cantidadTotalPromo
              } Bs.😉`}</span>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="side-cart-items">
          {carrito.length > 0
            ? carrito.map((producto, index) => (
                <div className="cart-item" key={index}>
                  <div className="cart-product-img">
                    <img
                      src={GetImg(
                        producto.img[0],
                        `${API_URL}/upload/producto`
                      )}
                      alt={producto.name}
                    />

                    {producto.descuento > 0 ? (
                      <div className="offer-badge">
                        {`${producto.descuento}% Desct`}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="cart-text">
                    <h4>{producto.name}</h4>
                    <div className="cart-radio">
                      {producto.tipoVenta === 'Unidad' ? (
                        <ul className="product-now">
                          <li>
                            <input
                              type="radio"
                              id={`${producto._id}-p2`}
                              name={producto.name}
                              onClick={() => {
                                radioCantidad[index] = 1
                              }}
                            />
                            <label htmlFor={`${producto._id}-p2`}>
                              1 Ud.
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id={`${producto._id}-p3`}
                              name={producto.name}
                              onClick={() => {
                                radioCantidad[index] = 2
                              }}
                            />
                            <label htmlFor={`${producto._id}-p3`}>
                              2 Uds
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id={`${producto._id}-p4`}
                              name={producto.name}
                              onClick={() => {
                                radioCantidad[index] = 3
                              }}
                            />
                            <label htmlFor={`${producto._id}-p4`}>
                              3 Uds
                            </label>
                          </li>
                        </ul>
                      ) : (
                        <ul className="product-now">
                          <li>
                            <input
                              type="radio"
                              id={`${producto._id}-p5`}
                              name={producto.name}
                              onClick={() => {
                                radioCantidad[index] = 0.5
                              }}
                            />
                            <label htmlFor={`${producto._id}-p5`}>
                              500g
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id={`${producto._id}-p6`}
                              name={producto.name}
                              onClick={() => {
                                radioCantidad[index] = 1
                              }}
                            />
                            <label htmlFor={`${producto._id}-p6`}>
                              1kg
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id={`${producto._id}-p7`}
                              name={producto.name}
                              onClick={() => {
                                radioCantidad[index] = 2
                              }}
                            />
                            <label htmlFor={`${producto._id}-p7`}>
                              2kg
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id={`${producto._id}-p8`}
                              name={producto.name}
                              onClick={() => {
                                radioCantidad[index] = 3
                              }}
                            />
                            <label htmlFor={`${producto._id}-p8`}>
                              3kg
                            </label>
                          </li>
                        </ul>
                      )}
                    </div>
                    <div className="qty-group">
                      <div className="quantity buttons_added">
                        <input
                          type="button"
                          defaultValue="-"
                          className="minus minus-btn"
                          onClick={() => restarCantidad(index)}
                        />
                        <input
                          ref={cantidadAsignado.current[index]}
                          type="number"
                          step="1"
                          name="quantity"
                          defaultValue={cantidades[index]}
                          className="input-text qty text"
                          onChange={(event) =>
                            cambiarValor(
                              parseFloat(event.target.value),
                              index
                            )
                          }
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="plus plus-btn"
                          onClick={() => sumarCantidad(index)}
                        />
                      </div>
                      <div className="cart-item-price">
                        Bs{' '}
                        {expectedRound
                          .round10(
                            (producto.precioVenta -
                              (producto.descuento * producto.precioVenta) /
                                100) *
                              (cantidadAsignado.current[index].current
                                ? parseFloat(
                                    cantidadAsignado.current[index].current
                                      .value
                                  )
                                : 1),
                            -1
                          )
                          .toFixed(2)}
                        {producto.descuento > 0 && (
                          <span>
                            Bs{' '}
                            {(
                              producto.precioVenta *
                              (cantidadAsignado.current[index].current
                                ? parseFloat(
                                    cantidadAsignado.current[index].current
                                      .value
                                  )
                                : 1)
                            ).toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="cart-close-btn"
                      onClick={() => eliminarProductoDelCarrito(index)}
                    >
                      <i className="uil uil-multiply"></i>
                    </button>
                  </div>
                </div>
              ))
            : ''}
        </div>
      </div>
      <div className="bs-canvas-footer">
        <div className="cart-total-dil saving-total ">
          <h4>Ahorro Total</h4>
          <span>-{(total - totalConDescuneto).toFixed(2)} Bs.</span>
        </div>
        <div className="main-total-cart">
          <h2>Total</h2>
          <span>{(totalConDescuneto + precioEnvio).toFixed(2)} Bs.</span>
        </div>
        <div className="checkout-cart">
          {/* <a href="#" className="promo-code">
            Have a promocode?
          </a> */}
          <Link href={'/pago-seguro'}>
            <a
              className="cart-checkout-btn hover-btn bs-canvas-close"
              //   onClick={() => setModelCategory(false)}
              data-dismiss="modal"
              aria-label="Close"
            >
              Pasar por caja
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
