import { API_URL } from '../Config'
import GetImg from '../GetImg'
import Link from 'next/link'

export const Item = ({ producto }) => {
  let setTituloDescuento
  switch (producto.descuento) {
    case 1:
      setTituloDescuento = 'Ofertas del Día: ¡No te lo Pierdas!'
      break
    case 2:
      setTituloDescuento = 'Precios de Locura: ¡Solo por Hoy!'
      break
    case 3:
      setTituloDescuento = '¡Grandes Ofertas, Pequeños Precios!'
      break
    case 4:
      setTituloDescuento = 'Ofertas Flash: ¡Date Prisa, se Agotan Rápido!'
      break
    case 5:
      setTituloDescuento =
        'Ofertas de Fin de Semana: Compra con Inteligencia.'

      break
    case 6:
      setTituloDescuento =
        'Ofertas Exclusivas Online: ¡Compra Ahora y Ahorra!'

      break
    case 7:
      setTituloDescuento = 'Ofertas Irresistibles: ¡Ahorra Ahora!'
      break
    case 8:
      setTituloDescuento = '¡Descuentos Explosivos en Todo el Catálogo!'
      break
    case 9:
      setTituloDescuento = '¡Descuentos que Harán Feliz a tu Bolsillo!'
      break
    case 10:
      setTituloDescuento = 'Ofertas Flash: ¡Date Prisa, se Agotan Rápido!'
      break
    default:
      setTituloDescuento = `Liquidación Total: ¡Hasta un ${producto.descuento}% de Descuento!`
  }
  return (
    <div className="item">
      <div className="offer-item">
        <div className="offer-item-img">
          <div className="gambo-overlay"></div>
          <img
            src={GetImg(producto.img[0], `${API_URL}/upload/producto`)}
            alt={producto.name}
            className="imgClass"
          />
        </div>
        <div className="offer-text-dt">
          <div className="offer-top-text-banner">
            <p>{producto.descuento}% de Descuneto</p>
            <div className="top-text-1">{setTituloDescuento}</div>
            <span>{producto.category.name}</span>
          </div>
          <Link
            href={{
              pathname: '/productos/[nombre]',
              query: {
                nombre: producto.name.toLowerCase().replace(/ /g, '-'),
              },
            }}
          >
            <a className="Offer-shop-btn hover-btn">Compra ahora</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .imgClass {
            object-fit: contain;
            width: 350px;
            height: 250px;
          }
        `}
      </style>
    </div>
  )
}
