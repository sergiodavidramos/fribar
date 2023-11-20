import { useContext } from 'react'
import UserContext from './UserContext'
import Loader from './Loader'
import GetImg from './GetImg'
import { API_URL } from './Config'
import Link from 'next/link'
export default () => {
  const { categorias } = useContext(UserContext)

  return (
    <div className="section145">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title-tt">
              <div className="main-title-left">
                <span>Comprar por:</span>
                <h2>Categorias</h2>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="owl-carousel cate-slider owl-theme">
              {categorias.length > 0 ? (
                categorias.map((cate, index) => (
                  <div className="item" key={index}>
                    <Link
                      href={{
                        pathname: '/[nombreCategoria]',

                        query: {
                          nombreCategoria: cate.name
                            .toLowerCase()
                            .replace(/ /g, '-'),
                        },
                      }}
                    >
                      <a href="shop_grid.html" className="category-item">
                        <div className="cate-img">
                          <img
                            src={GetImg(
                              cate.img,
                              `${API_URL}/upload/categoria`
                            )}
                            alt={cate.description}
                          />
                        </div>
                        <h4>{cate.name}</h4>
                      </a>
                    </Link>
                  </div>
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
}
