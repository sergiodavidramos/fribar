import Destacados from '../Destacados'
import { API_URL } from '../Config'
import GetImg from '../GetImg'
import { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../UserContext'
import expectedRound from 'expected-round'
import { notify } from 'react-notify-toast'
export default ({ producto }) => {
  const { addProductCar, likes, setLikes, token, user, signOut } =
    useContext(UserContext)
  const [unidades, setUnidades] = useState(1)
  let cantidadAsignado = useRef(null)

  function agregarAlCarrito(producto, cantidad) {
    if (parseFloat(cantidad) > producto.stock)
      notify.show(
        `Lo siento solo hay ${
          producto.stock + ' ' + producto.tipoVenta
        } en Stock ☹`,
        'warning'
      )
    else {
      if (cantidad === '')
        notify.show(
          'Por favor asigne una cantidad al producto para agregar al carrito',
          'warning'
        )
      else {
        addProductCar(producto, parseFloat(cantidad))
        notify.show('🛒 Agregado al Carrito 🛒', 'success', '2')
      }
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
      if (datos.error)
        notify.show('Error al agrefar a favoritos', 'warning')
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    const deta = producto.detail
    document.querySelector('#infoProduct').innerHTML = deta
  }, [producto])
  return (
    <>
      {/* <IconBar /> */}
      {producto && (
        <div className="wrapper-single">
          <div className="all-product-grid">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product-dt-view">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div id="sync1" className="owl-carousel owl-theme">
                          {producto.img &&
                            producto.img.map((i, index) => (
                              <div className="item" key={index}>
                                <img
                                  src={GetImg(
                                    i,
                                    `${API_URL}/upload/producto`
                                  )}
                                  alt={producto.name}
                                />
                              </div>
                            ))}

                          <div className="owl-nav"></div>
                          <div className="owl-dots disabled"></div>
                        </div>

                        <div id="sync2" className="owl-carousel owl-theme">
                          {producto.img &&
                            producto.img.map((i, index) => (
                              <div className="item" key={index}>
                                <img
                                  src={GetImg(
                                    i,
                                    `${API_URL}/upload/producto`
                                  )}
                                  alt=""
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-8">
                        <div className="product-dt-right">
                          <h2> {producto.name}</h2>
                          <div className="no-stock">
                            <p className="stock-qty">
                              {producto.stock}
                              <span>(En Stock)</span>
                            </p>
                          </div>
                          <div className="product-radio">
                            {producto.tipoVenta === 'Unidad' ? (
                              <ul className="product-now">
                                <li>
                                  <input
                                    type="radio"
                                    id="p2"
                                    name="product1"
                                    onClick={() => setUnidades(1)}
                                  />
                                  <label htmlFor="p2">1 Ud.</label>
                                </li>
                                <li>
                                  <input
                                    type="radio"
                                    id="p3"
                                    name="product1"
                                    onClick={() => {
                                      setUnidades(2)
                                      if (
                                        parseFloat(
                                          cantidadAsignado.current.value
                                        ) === 1
                                      )
                                        cantidadAsignado.current.value = 2
                                    }}
                                  />
                                  <label htmlFor="p3">2 Uds.</label>
                                </li>
                                <li>
                                  <input
                                    type="radio"
                                    id="p4"
                                    name="product1"
                                    onClick={() => {
                                      setUnidades(3)
                                      if (
                                        parseFloat(
                                          cantidadAsignado.current.value
                                        ) === 1
                                      )
                                        cantidadAsignado.current.value = 3
                                    }}
                                  />
                                  <label htmlFor="p4">3 Uds.</label>
                                </li>
                              </ul>
                            ) : (
                              <ul className="product-now">
                                <li>
                                  <input
                                    type="radio"
                                    id="p1"
                                    name="product1"
                                    onClick={() => {
                                      setUnidades(0.5)
                                      if (
                                        parseFloat(
                                          cantidadAsignado.current.value
                                        ) === 1
                                      )
                                        cantidadAsignado.current.value = 0.5
                                    }}
                                  />
                                  <label htmlFor="p1">500g</label>
                                </li>
                                <li>
                                  <input
                                    type="radio"
                                    id="p2"
                                    name="product1"
                                    onClick={() => setUnidades(1)}
                                  />
                                  <label htmlFor="p2">1kg</label>
                                </li>
                                <li>
                                  <input
                                    type="radio"
                                    id="p3"
                                    name="product1"
                                    onClick={() => {
                                      setUnidades(2)
                                      if (
                                        parseFloat(
                                          cantidadAsignado.current.value
                                        ) === 1
                                      )
                                        cantidadAsignado.current.value = 2
                                    }}
                                  />
                                  <label htmlFor="p3">2kg</label>
                                </li>
                                <li>
                                  <input
                                    type="radio"
                                    id="p4"
                                    name="product1"
                                    onClick={() => {
                                      setUnidades(3)
                                      if (
                                        parseFloat(
                                          cantidadAsignado.current.value
                                        ) === 1
                                      )
                                        cantidadAsignado.current.value = 3
                                    }}
                                  />
                                  <label htmlFor="p4">3kg</label>
                                </li>
                              </ul>
                            )}
                          </div>
                          <div className="product-group-dt">
                            <ul>
                              <li>
                                <div className="main-price color-discount">
                                  Precio{' '}
                                  {producto.descuento > 0 &&
                                    ' con descuento Bs:'}
                                  <span>
                                    {' '}
                                    {expectedRound
                                      .round10(
                                        producto.precioVenta -
                                          (producto.descuento *
                                            producto.precioVenta) /
                                            100,
                                        -1
                                      )
                                      .toFixed(2)}
                                  </span>
                                </div>
                              </li>

                              {producto.descuento > 0 && (
                                <li>
                                  <div className="main-price mrp-price">
                                    Precio actual Bs:
                                    <span>
                                      {producto.precioVenta.toFixed(2)}
                                    </span>
                                  </div>
                                </li>
                              )}
                            </ul>
                            <ul className="gty-wish-share">
                              <li>
                                <div className="qty-product">
                                  <div className="quantity buttons_added">
                                    <input
                                      type="button"
                                      defaultValue="-"
                                      className="minus minus-btn"
                                      onClick={() => {
                                        if (
                                          producto.tipoVenta === 'Unidad'
                                        ) {
                                          if (
                                            parseFloat(
                                              cantidadAsignado.current
                                                .value
                                            ) > unidades
                                          )
                                            if (
                                              parseFloat(
                                                cantidadAsignado.current
                                                  .value
                                              ) > 1
                                            )
                                              cantidadAsignado.current.value =
                                                parseFloat(
                                                  cantidadAsignado.current
                                                    .value
                                                ) - unidades
                                        } else {
                                          if (
                                            parseFloat(
                                              cantidadAsignado.current
                                                .value
                                            ) > 0.5
                                          )
                                            if (
                                              parseFloat(
                                                cantidadAsignado.current
                                                  .value
                                              ) > unidades
                                            )
                                              cantidadAsignado.current.value =
                                                parseFloat(
                                                  cantidadAsignado.current
                                                    .value
                                                ) - unidades
                                        }
                                      }}
                                    />
                                    <input
                                      type="number"
                                      step="1"
                                      min="1"
                                      name="quantity"
                                      defaultValue={1}
                                      className="input-text qty text"
                                      ref={cantidadAsignado}
                                    />
                                    <input
                                      type="button"
                                      defaultValue="+"
                                      className="plus plus-btn"
                                      onClick={() => {
                                        cantidadAsignado.current.value =
                                          parseFloat(
                                            cantidadAsignado.current.value
                                          ) + unidades
                                      }}
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span
                                  className={`like-icon save-icon ${
                                    likes.includes(producto._id)
                                      ? 'liked'
                                      : ''
                                  }`}
                                  title="wishlist"
                                  onClick={() => addLiked(producto._id)}
                                ></span>
                              </li>
                            </ul>
                            <ul className="ordr-crt-share">
                              <li>
                                <button
                                  className="add-cart-btn hover-btn"
                                  onClick={() =>
                                    agregarAlCarrito(
                                      producto,
                                      cantidadAsignado.current.value
                                    )
                                  }
                                >
                                  <i className="uil uil-shopping-cart-alt"></i>
                                  Agregar al carrtio
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="pdp-details">
                            <ul>
                              <li>
                                <div className="pdp-group-dt">
                                  <div className="pdp-icon">
                                    <i className="uil uil-usd-circle"></i>
                                  </div>
                                  <div className="pdp-text-dt">
                                    <span>
                                      {' '}
                                      Precio más bajo garantizado
                                    </span>
                                    <p>
                                      Obtén el reembolso de la diferencia
                                      si lo encuentras más barato en otro
                                      lugar.
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="pdp-group-dt">
                                  <div className="pdp-icon">
                                    <i className="uil uil-cloud-redo"></i>
                                  </div>
                                  <div className="pdp-text-dt">
                                    <span>
                                      {' '}
                                      Devoluciones y reembolsos fáciles
                                    </span>
                                    <p>
                                      Devuelva los productos en la puerta y
                                      obtenga un reembolso en segundos.
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="pdpt-bg">
                    <div className="pdpt-title">
                      <h4>More Like This</h4>
                    </div>
                    <div className="pdpt-body scrollstyle_4">
                      <div className="cart-item border_radius">
                        <a
                          href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                          className="cart-product-img"
                        >
                          <img src="images/product/img-6.jpg" alt="" />
                          <div className="offer-badge">4% OFF</div>
                        </a>
                        <div className="cart-text">
                          <h4>Product Title Here</h4>
                          <div className="cart-radio">
                            <ul className="kggrm-now">
                              <li>
                                <input type="radio" id="k1" name="cart1" />
                                <label htmlFor="k1">0.50</label>
                              </li>
                              <li>
                                <input type="radio" id="k2" name="cart1" />
                                <label htmlFor="k2">1kg</label>
                              </li>
                              <li>
                                <input type="radio" id="k3" name="cart1" />
                                <label htmlFor="k3">2kg</label>
                              </li>
                              <li>
                                <input type="radio" id="k4" name="cart1" />
                                <label htmlFor="k4">3kg</label>
                              </li>
                            </ul>
                          </div>
                          <div className="qty-group">
                            <div className="quantity buttons_added">
                              <input
                                type="button"
                                defaultValue="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step="1"
                                name="quantity"
                                defaultValue="1"
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="plus plus-btn"
                              />
                            </div>
                            <div className="cart-item-price">
                              $12 <span>$15</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cart-item border_radius">
                        <a
                          href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                          className="cart-product-img"
                        >
                          <img src="images/product/img-2.jpg" alt="" />
                          <div className="offer-badge">6% OFF</div>
                        </a>
                        <div className="cart-text">
                          <h4>Product Title Here</h4>
                          <div className="cart-radio">
                            <ul className="kggrm-now">
                              <li>
                                <input type="radio" id="k5" name="cart2" />
                                <label htmlFor="k5">0.50</label>
                              </li>
                              <li>
                                <input type="radio" id="k6" name="cart2" />
                                <label htmlFor="k6">1kg</label>
                              </li>
                              <li>
                                <input type="radio" id="k7" name="cart2" />
                                <label htmlFor="k7">2kg</label>
                              </li>
                            </ul>
                          </div>
                          <div className="qty-group">
                            <div className="quantity buttons_added">
                              <input
                                type="button"
                                defaultValue="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step="1"
                                name="quantity"
                                defaultValue="1"
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="plus plus-btn"
                              />
                            </div>
                            <div className="cart-item-price">
                              $24 <span>$30</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cart-item border_radius">
                        <a
                          href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                          className="cart-product-img"
                        >
                          <img src="images/product/img-5.jpg" alt="" />
                        </a>
                        <div className="cart-text">
                          <h4>Product Title Here</h4>
                          <div className="cart-radio">
                            <ul className="kggrm-now">
                              <li>
                                <input type="radio" id="k8" name="cart3" />
                                <label htmlFor="k8">0.50</label>
                              </li>
                              <li>
                                <input type="radio" id="k9" name="cart3" />
                                <label htmlFor="k9">1kg</label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  id="k10"
                                  name="cart3"
                                />
                                <label htmlFor="k10">1.50kg</label>
                              </li>
                            </ul>
                          </div>
                          <div className="qty-group">
                            <div className="quantity buttons_added">
                              <input
                                type="button"
                                defaultValue="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step="1"
                                name="quantity"
                                defaultValue="1"
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="plus plus-btn"
                              />
                            </div>
                            <div className="cart-item-price">$15</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="pdpt-bg">
                    <div className="pdpt-title">
                      <h4>Detalles del Producto</h4>
                    </div>
                    <div className="pdpt-body scrollstyle_4">
                      <div className="pdct-dts-1" id="infoProduct">
                        <div className="pdct-dt-step">
                          <h4>Descripción</h4>
                          <p>Escriba la descripcion a qui ...</p>
                        </div>
                        <div className="pdct-dt-step">
                          <h4>Beneficios</h4>
                          <div className="product_attr">
                            Escriba intro del beneficio a qui ...
                            <br />
                            Escriba el beneficio a qui ...
                            <br />
                            Escriba el beneficio a qui ...
                            <br />
                            Escriba el beneficio a qui ...
                            <br />
                            Escriba el beneficio a qui ...
                            <br />
                          </div>
                        </div>
                        <div className="pdct-dt-step">
                          <h4>Vendedor</h4>
                          <div className="product_attr">
                            Escriba el vendedor a qui ...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Destacados />
    </>
  )
}
