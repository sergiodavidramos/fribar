import GetImg from '../GetImg'
import Filter from './Filter'
import expectedRound from 'expected-round'
import React, { useContext, useRef, useState } from 'react'
import UserContext from '../UserContext'
import { notify } from 'react-notify-toast'
import Link from 'next/link'
import { API_URL } from '../Config'
import useAlgoliaInsights from '../UseAlgolia'
import Router from 'next/router'
export default ({
  titulo,
  productos = [],
  page,
  setPage,
  sonTodos,
  categoria = false,
  idCategoria = false,
  cambiarOrden = false,
  ofertas = false,
}) => {
  const { addProductCar, likes, setLikes, token, user, signOut } =
    useContext(UserContext)

  const { sendProductoAgregadoCarrito, sendProductoVisto } =
    useAlgoliaInsights()

  const [cantidad, setCantidad] = useState(0)
  let cantidadAsignado = useRef(
    [...new Array(productos.length > 0 ? productos.length * 12 : 144)].map(
      () => React.createRef()
    )
  )
  function restarCantidad(i, tipoVenta) {
    if (parseFloat(cantidadAsignado.current[i].current.value) > 1)
      cantidadAsignado.current[i].current.value =
        parseFloat(cantidadAsignado.current[i].current.value) - tipoVenta
    setCantidad(cantidadAsignado.current[i].current.value)
  }
  function sumarCantidad(i, tipoVenta) {
    cantidadAsignado.current[i].current.value =
      parseFloat(cantidadAsignado.current[i].current.value) + tipoVenta
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

  function handlerFiltro(fil) {
    console.log(fil)
  }

  function handlerMostrarMas() {
    setPage(page + 1)
  }
  function handlerAgregarAlCarrito(producto, cantidad) {
    if (isNaN(cantidad)) {
      notify.show(
        `Por favor asigne una cantidad para agregar al carrito 😉`,
        'warning'
      )
    } else {
      if (cantidad > producto.stock)
        notify.show(
          `Lo siento solo tengo ${producto.stock} en Stock 🥺`,
          'warning'
        )
      else {
        addProductCar(producto, cantidad)
        sendProductoAgregadoCarrito(producto._id)
        notify.show('🛒 Agregado al Carrito 🛒', 'success', '2')
      }
    }
  }
  function addLiked(idProducto) {
    if (user) {
      if (likes.includes(idProducto)) {
        const resultado = likes.filter((like) => like != idProducto)
        setLikes(resultado)
        actualizarLikedUser(resultado)
      } else {
        setLikes(likes.concat(idProducto))
        actualizarLikedUser(likes.concat(idProducto))
        sendProductoVisto(idProducto)
      }
    } else {
      Router.push('/login')
      notify.show(
        'Por favor inicie sesión primero para agregar sus favoritos',
        'warning'
      )
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
    <>
      <Filter
        handlerFiltro={handlerFiltro}
        nombreCategoria={categoria}
        idCategoria={idCategoria}
      />
      <div className="all-product-grid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-top-dt">
                <div className="product-left-title">
                  <h2>{titulo}</h2>
                </div>
                <a href="" className="filter-btn pull-bs-canvas-right">
                  FILTROS
                </a>

                {ofertas !== true && (
                  <div className="product-sort main-form">
                    <div className="ui selection dropdown vchrt-dropdown">
                      <input
                        name="gender"
                        type="hidden"
                        defaultValue="default"
                      />
                      <i className="dropdown icon d-icon"></i>
                      <div className="text">
                        Ordenar los productos por:{' '}
                      </div>
                      <div className="menu" tabIndex={'-1'}>
                        <div
                          className="item"
                          data-value="0"
                          onClick={() => cambiarOrden(0)}
                        >
                          Popularidad
                        </div>
                        <div
                          className="item"
                          data-value="1"
                          onClick={() => cambiarOrden(1)}
                        >
                          Precio - De barato a caro
                        </div>
                        <div
                          className="item"
                          data-value="2"
                          onClick={() => cambiarOrden(2)}
                        >
                          Precio - De caro a barato
                        </div>
                        <div
                          className="item"
                          data-value="3"
                          onClick={() => cambiarOrden(3)}
                        >
                          Orden - Alfabético
                        </div>
                        <div
                          className="item"
                          data-value="4"
                          onClick={() => cambiarOrden(4)}
                        >
                          Descuento - De mayor a menor
                        </div>
                        <div
                          className="item"
                          data-value="5"
                          onClick={() => cambiarOrden(5)}
                        >
                          Descuento - De menor a mayor
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="product-list-view">
            <div className="row">
              {productos.length > 0 &&
                productos.map(
                  (pro, i) =>
                    pro.ventaOnline && (
                      <div className="col-lg-3 col-md-6" key={i}>
                        <div className="product-item mb-30">
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
                                  title="Me gusta"
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
                              <p
                                style={{ color: 'red', fontSize: '20px' }}
                              >
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
                                  onClick={() =>
                                    restarCantidad(
                                      i,
                                      pro.tipoVenta === 'Unidad' ? 1 : 0.5
                                    )
                                  }
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
                                  ref={cantidadAsignado.current[i]}
                                  onChange={(event) =>
                                    updateLength({
                                      valor: event.target.value,
                                      index: i,
                                      tipoVenta: pro.tipoVenta,
                                    })
                                  }
                                />
                                <input
                                  type="button"
                                  defaultValue="+"
                                  className="plus plus-btn"
                                  onClick={() =>
                                    sumarCantidad(
                                      i,
                                      pro.tipoVenta === 'Unidad' ? 1 : 0.5
                                    )
                                  }
                                />
                              </div>
                              <strong style={{ marginLeft: '10px' }}>
                                {pro.tipoVenta === 'Unidad'
                                  ? 'Uds.'
                                  : 'Kgs.'}
                              </strong>
                              {/* {cantidadAsignado.current[i]
                            ? cantidadAsignado.current[i].current &&
                              (parseFloat(
                                cantidadAsignado.current[i].current.value
                              ) > pro.stock ? (
                                <span className="cart-icon">
                                  <p style={{ color: 'red' }}>
                                    {pro.stock} en Stock
                                  </p>
                                </span>
                              ) : ( */}
                              {cantidadAsignado.current[i] &&
                                pro.stock > 0 && (
                                  <span className="cart-icon">
                                    <i
                                      className="uil uil-shopping-cart-alt"
                                      onClick={() =>
                                        handlerAgregarAlCarrito(
                                          pro,
                                          parseFloat(
                                            cantidadAsignado.current[i]
                                              .current.value
                                          )
                                        )
                                      }
                                    ></i>
                                  </span>
                                )}
                              {/* ))
                            : ''} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              {sonTodos ? (
                <div className="col-md-12">
                  <div className="more-product-btn">
                    Son todos los productos
                  </div>
                </div>
              ) : (
                <div className="col-md-12">
                  <div className="more-product-btn">
                    <button
                      className="show-more-btn hover-btn"
                      onClick={handlerMostrarMas}
                    >
                      Mostrar mas
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
