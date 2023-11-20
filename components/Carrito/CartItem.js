import { useContext, useEffect, useState } from 'react'
import UserContext from '../UserContext'
import GetImg from '../GetImg'
import { API_URL } from '../Config'
import expectedRound from 'expected-round'

export default () => {
  const { total, elimninarProdcutoCarrito } = useContext(UserContext)
  const [lista, setLista] = useState([])
  const [cant, setCant] = useState([])
  useEffect(() => {
    const listaLocal = localStorage.getItem('fribar-carrito')
    const cantidadLocal = localStorage.getItem('fribar-cantidades')
    if (listaLocal && cantidadLocal) {
      setLista(JSON.parse(listaLocal))
      setCant(JSON.parse(cantidadLocal))
    }
  }, [total])

  function eliminarProductoDelCarrito(index) {
    elimninarProdcutoCarrito(index)
  }
  return (
    <>
      {lista.length > 0
        ? lista.map((pro, index) => (
            <div className="cart-item border_radius" key={index}>
              <div className="cart-product-img">
                <img
                  src={GetImg(pro.img[0], `${API_URL}/upload/producto`)}
                  alt={pro.name}
                />
                <div className="offer-badge">
                  {`${pro.descuento}% Desct`}
                </div>
              </div>
              <div className="cart-text">
                <h4 style={{ marginRight: '20px' }}>{pro.name}</h4>
                <div className="cart-item-price">
                  Bs{' '}
                  {expectedRound
                    .round10(
                      (pro.precioVenta -
                        (pro.descuento * pro.precioVenta) / 100) *
                        parseFloat(cant[index]),
                      -1
                    )
                    .toFixed(2)}
                  {pro.descuento > 0 && (
                    <span>
                      Bs{' '}
                      {(pro.precioVenta * parseFloat(cant[index])).toFixed(
                        2
                      )}
                    </span>
                  )}
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
    </>
  )
}
