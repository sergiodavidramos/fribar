import Loader from '../Loader'
import { Item } from './Item'
export const Carrousel = ({ productosDescuento }) => (
  <div className="main-banner-slider">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="owl-carousel offers-banner owl-theme">
            {productosDescuento.length > 0 ? (
              productosDescuento.map((producto, index) => (
                <Item key={index} producto={producto} />
              ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
)
