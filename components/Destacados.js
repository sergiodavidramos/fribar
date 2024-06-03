import Link from 'next/link'
import GetImg from './GetImg'
import expectedRound from 'expected-round'
import React, { useContext, useRef, useState } from 'react'
import UserContext from './UserContext'
import { API_URL } from './Config'
import { notify } from 'react-notify-toast'
import useAlgoliaInsights from './UseAlgolia'

export default ({ title, productos, url, categoriaAleatorio = false }) => {
  const { addProductCar, likes, setLikes, token, user, signOut } =
    useContext(UserContext)
  const [cantidad, setCantidad] = useState(0)

  const { sendProductoAgregadoCarrito, sendProductoVisto } =
    useAlgoliaInsights()

  let cantidadAsignado = useRef(
    [...new Array(productos.length > 0 ? productos.length : 12)].map(() =>
      React.createRef()
    )
  )

  function restarCantidad(i) {
    if (parseFloat(cantidadAsignado.current[i].current.value) > 1)
      cantidadAsignado.current[i].current.value =
        parseFloat(cantidadAsignado.current[i].current.value) - 1
    setCantidad(cantidadAsignado.current[i].current.value)
  }
  function sumarCantidad(i) {
    cantidadAsignado.current[i].current.value =
      parseFloat(cantidadAsignado.current[i].current.value) + 1
    setCantidad(cantidadAsignado.current[i].current.value)
  }
  function updateLength({ valor, index, tipoVenta }) {
    if (valor === '') {
      cantidadAsignado.current[index].current.value =
        tipoVenta === 'Unidad' ? 1 : 0.5
    } else {
      cantidadAsignado.current[index].current.value = parseFloat(valor)
      setCantidad(cantidadAsignado.current[index].current.value)
    }
  }
  function handlerAgregarAlCarrito(producto, cantidad) {
    if (cantidad > producto.stock)
      notify.show(
        `Lo siento solo tengo ${producto.stock} en Stock 🥺`,
        'warning'
      )
    else {
      addProductCar(producto, cantidad)
      sendProductoAgregadoCarrito(producto._id)
      notify.show('🛒 Agregado al Carrito 🛒', 'success', 2)
    }
  }
  function addLiked(idProducto) {
    if (likes.includes(idProducto)) {
      const resultado = likes.filter((like) => like != idProducto)
      setLikes(resultado)
      actualizarLikedUser(resultado)
    } else {
      setLikes(likes.concat(idProducto))
      actualizarLikedUser(likes.concat(idProducto))
      sendProductoVisto(idProducto)
    }
  }
  async function actualizarLikedUser(likes) {
    try {
      const res = await fetch(`${API_URL}/user/${user._id}`, {
        method: 'PATCH',
        body: JSON.stringify({ favoritos: likes }),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      if (res.status === 401) signOut()
      const datos = await res.json()
      if (datos.error) {
        console.log(datos)
        notify.show('Error al agrefar a favoritos', 'warning')
      }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className="section145">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title-tt">
              <div className="main-title-left">
                <span>Para Ti</span>
                <h2>{title}</h2>
              </div>
              <Link
                href={
                  categoriaAleatorio
                    ? {
                        pathname: '/[nombreCategoria]',

                        query: {
                          nombreCategoria: url
                            .toLowerCase()
                            .replace(/ /g, '-'),
                        },
                      }
                    : url
                }
              >
                <a className="see-more-btn">Ver Todo</a>
              </Link>
            </div>
          </div>
          <div className="col-md-12">
            <div className="owl-carousel featured-slider owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: 'translate3d(0px, 0px, 0px)',
                    transition: 'all 0s ease 0s',
                    width: '2360px',
                  }}
                >
                  {productos.map((pro, index) => (
                    <div
                      className="owl-item active"
                      style={{ width: '285px', marginRight: '10px' }}
                      key={index}
                    >
                      <div className="item">
                        <div className="product-item">
                          <Link
                            href={{
                              pathname: '/productos/[nombre]',
                              query: {
                                nombre: pro.name
                                  .toLowerCase()
                                  .replace(/ /g, '-'),
                              },
                            }}
                          >
                            <a className="product-img">
                              <img
                                src={GetImg(
                                  pro.img[0],
                                  `${API_URL}/upload/producto`
                                )}
                                alt={pro.name}
                              />
                              <div className="product-absolute-options">
                                {pro.descuento > 0 && (
                                  <span className="offer-badge-1">
                                    {pro.descuento}% de descuento
                                  </span>
                                )}
                                <span
                                  className={`like-icon ${
                                    likes.includes(pro._id) ? 'liked' : ''
                                  }`}
                                  title="wishlist"
                                  onClick={() => addLiked(pro._id)}
                                ></span>
                              </div>
                            </a>
                          </Link>
                          <div className="product-text-dt">
                            {pro.stock > 0 ? (
                              <p>
                                Disponible<span>(En Stock)</span>
                              </p>
                            ) : (
                              <p style={{ color: 'red' }}>
                                No disponible<span>(En Stock)</span>
                              </p>
                            )}
                            <h4>{pro.name}</h4>
                            <div className="product-price">
                              Bs{' '}
                              {expectedRound
                                .round10(
                                  pro.precioVenta -
                                    (pro.descuento * pro.precioVenta) /
                                      100,
                                  -1
                                )
                                .toFixed(2)}
                              {pro.descuento > 0 && (
                                <span>
                                  Bs {pro.precioVenta.toFixed(2)}
                                </span>
                              )}
                            </div>
                            <div className="qty-cart">
                              <div className="quantity buttons_added">
                                <input
                                  type="button"
                                  defaultValue="-"
                                  className="minus minus-btn"
                                  onClick={() => restarCantidad(index)}
                                />
                                <input
                                  type="number"
                                  step="1"
                                  min={
                                    pro.tipoVenta === 'Unidad'
                                      ? '1'
                                      : '0.5'
                                  }
                                  name="quantity"
                                  defaultValue="1"
                                  className="input-text qty text"
                                  ref={cantidadAsignado.current[index]}
                                  onChange={(event) =>
                                    updateLength({
                                      valor: event.target.value,
                                      index: index,
                                      tipoVenta: pro.tipoVenta,
                                    })
                                  }
                                />
                                <input
                                  type="button"
                                  defaultValue="+"
                                  className="plus plus-btn"
                                  onClick={() => sumarCantidad(index)}
                                />
                              </div>
                              <span className="cart-icon">
                                <i
                                  className="uil uil-shopping-cart-alt"
                                  onClick={() =>
                                    handlerAgregarAlCarrito(
                                      pro,
                                      parseFloat(
                                        cantidadAsignado.current[index]
                                          .current.value
                                      )
                                    )
                                  }
                                ></i>
                              </span>
                              {/* {cantidadAsignado.current[index].current &&
                                (parseFloat(
                                  cantidadAsignado.current[index].current
                                    .value
                                ) > pro.stock ? (
                                  <span className="cart-icon">
                                    <p style={{ color: 'red' }}>
                                      {pro.stock} en Stock
                                    </p>
                                  </span>
                                  
                                ) : (
                                  <span className="cart-icon">
                                    <i
                                      className="uil uil-shopping-cart-alt"
                                      onClick={() =>
                                        handlerAgregarAlCarrito(
                                          pro,
                                          parseFloat(
                                            cantidadAsignado.current[index]
                                              .current.value
                                          )
                                        )
                                      }
                                    ></i>
                                  </span>
                                ))} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="owl-nav">
                <button
                  type="button"
                  role="presentation"
                  className="owl-prev disabled"
                >
                  <i className="uil uil-angle-left"></i>
                </button>
                <button
                  type="button"
                  role="presentation"
                  className="owl-next"
                >
                  <i className="uil uil-angle-right"></i>
                </button>
              </div>
              <div className="owl-dots disabled"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
