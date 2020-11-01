import { Item } from './Item'
export const Carrousel = () => (
  <div className="main-banner-slider">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="owl-carousel offers-banner owl-theme">
            {[1, 2].map((index) => (
              <Item key={index} id={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)
