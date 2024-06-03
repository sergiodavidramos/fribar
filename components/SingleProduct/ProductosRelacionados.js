import Link from 'next/link'
import GetImg from '../GetImg'
import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../UserContext'
import useAlgoliaInsights from '../UseAlgolia'
import { notify } from 'react-notify-toast'

let radioCantidad = []
export default ({ productRelation, index }) => {
  const { addProductCar } = useContext(UserContext)

  const { sendProductoAgregadoCarrito } = useAlgoliaInsights()

  const [cantidad, setCantidad] = useState(0)
  let cantidadAsignado = useRef(
    [
      ...new Array(
        productRelation.length > 0 ? productRelation.length : 8
      ),
    ].map(() => React.createRef())
  )

  function sumarCantidad(i) {
    if (radioCantidad[i]) {
      cantidadAsignado.current[i].current.value =
        parseFloat(cantidadAsignado.current[i].current.value) +
        radioCantidad[i]
      setCantidad(cantidadAsignado.current[i].current.value)
    } else
      cantidadAsignado.current[i].current.value =
        parseFloat(cantidadAsignado.current[i].current.value) + 1
    setCantidad(cantidadAsignado.current[i].current.value)
  }
  function restarCantidad(i, tipoVenta) {
    const valorMinimo = tipoVenta === 'Unidad' ? 1 : 0.5
    if (radioCantidad[i]) {
      if (
        parseFloat(cantidadAsignado.current[i].current.value) >
        radioCantidad[i]
      )
        cantidadAsignado.current[i].current.value =
          parseFloat(cantidadAsignado.current[i].current.value) -
          radioCantidad[i]
      setCantidad(cantidadAsignado.current[i].current.value)
    } else if (
      parseFloat(cantidadAsignado.current[i].current.value) > valorMinimo
    ) {
      cantidadAsignado.current[i].current.value =
        parseFloat(cantidadAsignado.current[i].current.value) - valorMinimo
      setCantidad(cantidadAsignado.current[i].current.value)
    }
  }
  function cambiarValor(valor, index, tipoVenta) {
    if (valor === '')
      cantidadAsignado.current[index].current.value =
        tipoVenta === 'Unidad' ? 1 : 0.5
    else {
      cantidadAsignado.current[index].current.value = parseFloat(valor)
      setCantidad(cantidadAsignado.current[index].current.value)
    }
  }
  function handlerAgregarAlCarrito(producto, cantidad) {
    producto._id = producto.objectID
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
        sendProductoAgregadoCarrito(producto.objectID)
        notify.show('🛒 Agregado al Carrito 🛒', 'success', '2')
      }
    }
  }
  return (
    <div className="cart-item border_radius">
      <Link
        href={{
          pathname: '/productos/[nombre]',
          query: {
            nombre: productRelation.name.toLowerCase().replace(/ /g, '-'),
          },
        }}
      >
        <a className="cart-product-img">
          <img
            src={GetImg(
              productRelation.img[0],
              'http://localhost:3001/upload/producto'
            )}
            alt={productRelation.name}
          />
          {productRelation.descuento > 0 ? (
            <div className="offer-badge">
              {`${producto.descuento}% Desct`}
            </div>
          ) : (
            ''
          )}
        </a>
      </Link>
      <div className="cart-text">
        <h4>{productRelation.name}</h4>
        <div className="cart-radio">
          {productRelation.tipoVenta === 'Unidad' ? (
            <ul className="kggrm-now">
              <li>
                <input
                  type="radio"
                  id={`${productRelation.objectID}-p2`}
                  name={productRelation.name}
                  onClick={() => {
                    radioCantidad[index] = 1
                  }}
                />
                <label htmlFor={`${productRelation.objectID}-p2`}>
                  1 Ud.
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id={`${productRelation.objectID}-p3`}
                  name={productRelation.name}
                  onClick={() => {
                    radioCantidad[index] = 2
                  }}
                />
                <label htmlFor={`${productRelation.objectID}-p3`}>
                  2 Ud.
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id={`${productRelation.objectID}-p4`}
                  name={productRelation.name}
                  onClick={() => {
                    radioCantidad[index] = 3
                  }}
                />
                <label htmlFor={`${productRelation.objectID}-p4`}>
                  3 Ud.
                </label>
              </li>
            </ul>
          ) : (
            <ul className="kggrm-now">
              <li>
                <input
                  type="radio"
                  id={`${productRelation.objectID}-p5`}
                  name={productRelation.name}
                  onClick={() => {
                    radioCantidad[index] = 0.5
                  }}
                />
                <label htmlFor={`${productRelation.objectID}-p5`}>
                  500g
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id={`${productRelation.objectID}-p6`}
                  name={productRelation.name}
                  onClick={() => {
                    radioCantidad[index] = 1
                  }}
                />
                <label htmlFor={`${productRelation.objectID}-p6`}>
                  1kg
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id={`${productRelation.objectID}-p7`}
                  name={productRelation.name}
                  onClick={() => {
                    radioCantidad[index] = 2
                  }}
                />
                <label htmlFor={`${productRelation.objectID}-p7`}>
                  2kg
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id={`${productRelation.objectID}-p8`}
                  name={productRelation.name}
                  onClick={() => {
                    radioCantidad[index] = 3
                  }}
                />
                <label htmlFor={`${productRelation.objectID}-p8`}>
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
              onClick={() =>
                restarCantidad(index, productRelation.tipoVenta)
              }
            />
            <input
              ref={cantidadAsignado.current[index]}
              type="number"
              step="1"
              name="quantity"
              defaultValue={1}
              className="input-text qty text"
              onChange={(event) =>
                cambiarValor(
                  event.target.value,
                  index,
                  productRelation.tipoVenta
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
            $12 <span>$15</span>
          </div>
          <span className="cart-icon">
            <i
              className="uil uil-shopping-cart-alt"
              onClick={() =>
                handlerAgregarAlCarrito(
                  productRelation,
                  parseFloat(cantidadAsignado.current[index].current.value)
                )
              }
            ></i>
          </span>
        </div>
      </div>
    </div>
  )
}
