import GetImg from '../GetImg'
import Filter from './Filter'
import expectedRound from 'expected-round'
import React, { useContext, useRef, useState } from 'react'
import UserContext from '../UserContext'

export default ({ titulo, productos = [], page, setPage, sonTodos }) => {
  const { addProductCar, carrito } = useContext(UserContext)

  const [cantidad, setCantidad] = useState(0)
  let totalFiltro = {}
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
  function updateLength({ valor, index }) {
    cantidadAsignado.current[index].current.value = parseFloat(valor)
    setCantidad(cantidadAsignado.current[index].current.value)
  }
  function handlerFiltroOrdenamiento(orden) {
    totalFiltro.orden = orden
  }
  function handlerFiltro(fil) {
    console.log(fil)
  }
  function handlerMostrarMas() {
    setPage(page + 1)
  }
  function handlerAgregarAlCarrito(producto, cantidad) {
    addProductCar(producto, cantidad)
    // console.log('El Carrito', carrito)
  }

  return (
    <>
      <Filter handlerFiltro={handlerFiltro} />
      <div className="all-product-grid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-top-dt">
                <div className="product-left-title">
                  <h2>{titulo}</h2>
                </div>
                <a href="" className="filter-btn pull-bs-canvas-right">
                  Filtros
                </a>
                <div className="product-sort main-form">
                  <div className="ui selection dropdown vchrt-dropdown">
                    <input
                      name="gender"
                      type="hidden"
                      defaultValue="default"
                    />
                    <i className="dropdown icon d-icon"></i>
                    <div className="text">
                      Todos los productos y ordenar por:{' '}
                    </div>
                    <div className="menu">
                      <div
                        className="item"
                        data-value="0"
                        onClick={() => handlerFiltroOrdenamiento(0)}
                      >
                        Popularidad
                      </div>
                      <div
                        className="item"
                        data-value="1"
                        onClick={() => handlerFiltroOrdenamiento(1)}
                      >
                        Precio - De barato a caro
                      </div>
                      <div
                        className="item"
                        data-value="2"
                        onClick={() => handlerFiltroOrdenamiento(2)}
                      >
                        Precio - De caro a barato
                      </div>
                      <div
                        className="item"
                        data-value="3"
                        onClick={() => handlerFiltroOrdenamiento(3)}
                      >
                        Orden - Alfabético
                      </div>
                      <div
                        className="item"
                        data-value="4"
                        onClick={() => handlerFiltroOrdenamiento(4)}
                      >
                        Descuento - De mayor a menor
                      </div>
                      <div
                        className="item"
                        data-value="5"
                        onClick={() => handlerFiltroOrdenamiento(5)}
                      >
                        Descuento - De menor a mayor
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-list-view">
            <div className="row">
              {productos.length > 0 &&
                productos.map((pro, i) => (
                  <div className="col-lg-3 col-md-6" key={i}>
                    <div className="product-item mb-30">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img
                          src={GetImg(
                            pro.img[0],
                            'http://localhost:3001/upload/producto'
                          )}
                          alt={pro.name}
                        />
                        {pro.descuento > 0 && (
                          <div className="product-absolute-options">
                            <span className="offer-badge-1">
                              {pro.descuento}% de descuento
                            </span>
                            <span
                              className="like-icon"
                              title="wishlist"
                            ></span>
                          </div>
                        )}
                      </a>
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
                                (pro.descuento * pro.precioVenta) / 100,
                              -1
                            )
                            .toFixed(2)}
                          {pro.descuento > 0 && (
                            <span>Bs {pro.precioVenta.toFixed(2)}</span>
                          )}
                        </div>

                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                              onClick={() => restarCantidad(i)}
                            />
                            <input
                              type="number"
                              step="1"
                              min="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                              ref={cantidadAsignado.current[i]}
                              onChange={(event) =>
                                updateLength({
                                  valor: event.target.value,
                                  index: i,
                                })
                              }
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                              onClick={() => sumarCantidad(i)}
                            />
                          </div>
                          {cantidadAsignado.current[i].current &&
                            (parseFloat(
                              cantidadAsignado.current[i].current.value
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
                                        cantidadAsignado.current[i].current
                                          .value
                                      )
                                    )
                                  }
                                ></i>
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
