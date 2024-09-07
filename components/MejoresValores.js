import moment from 'moment'
import Link from 'next/link'
import GetImg from './GetImg'
import { API_URL } from './Config'
export default ({ ofertas }) => {
  return (
    <div className="section145">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title-tt">
              <div className="main-title-left">
                <span>Ofertas</span>
                <h2>Mejores Valores</h2>
              </div>
            </div>
          </div>
          {ofertas.map((ofer, index) => {
            if (ofer.agotarStock === true) {
              return (
                <div className="col-lg-4 col-md-6" key={index}>
                  <Link
                    href={`/ofertas/${ofer.titulo
                      .toLowerCase()
                      .replace(/ /g, '-')}`}
                  >
                    <a className="best-offer-item">
                      <img
                        src={GetImg(ofer.img, `${API_URL}/upload/oferta`)}
                        alt={ofer.titulo}
                      />
                    </a>
                  </Link>
                </div>
              )
            } else {
              if (
                moment(ofer.fecha).add(1, 'days').format() >=
                moment().format()
              ) {
                return (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <Link
                      href={`/ofertas/${ofer.titulo
                        .toLowerCase()
                        .replace(/ /g, '-')}`}
                    >
                      <a className="best-offer-item offr-none">
                        <img
                          src={GetImg(
                            ofer.img,
                            `${API_URL}/upload/oferta`
                          )}
                          alt={ofer.titulo}
                        />
                        <div className="cmtk_dt">
                          <div
                            className="product_countdown-timer offer-counter-text"
                            data-countdown={moment(ofer.fecha)
                              .add(1, 'days')
                              .format('YYYY/MM/DD')}
                          ></div>
                        </div>
                      </a>
                    </Link>
                  </div>
                )
              }
            }
          })}
        </div>
      </div>
    </div>
  )
}
