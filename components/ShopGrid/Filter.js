import UserContext from '../UserContext'
import { useContext } from 'react'

export default ({ handlerFiltro }) => {
  const { categorias } = useContext(UserContext)
  const handlerEliminarFiltroCategoria = () => {}

  return (
    <div className="bs-canvas bs-canvas-right position-fixed bg-cart h-100">
      <div className="bs-canvas-header side-cart-header p-3 ">
        <div className="d-inline-block  main-cart-title">Filtrar</div>
        <button
          type="button"
          className="bs-canvas-close close"
          aria-label="Close"
        >
          <i className="uil uil-multiply"></i>
        </button>
      </div>
      <div className="bs-canvas-body filter-body">
        <div className="filter-items">
          <div className="filtr-cate-title">
            <h4>Categorias</h4>
          </div>
          <div className="filter-item-body scrollstyle_4">
            <div className="cart-radio">
              <ul className="cte-select">
                <li>
                  <input
                    type="radio"
                    id="c0"
                    name="category1"
                    defaultChecked
                    onClick={handlerEliminarFiltroCategoria}
                  />
                  <label htmlFor="c0">Toda las categorias</label>
                </li>
                {categorias.length > 0
                  ? categorias.map((categoria, index) => (
                      <li key={index}>
                        <input
                          type="radio"
                          id={`c${index + 1}`}
                          name="category1"
                          //   defaultChecked={
                          //     cate === categoria.name.toLowerCase() &&
                          //     'checked'
                          //   }
                        />
                        <label htmlFor={`c${index + 1}`}>
                          {categoria.name}
                          {/* {cate._id} */}
                        </label>
                      </li>
                    ))
                  : ''}
              </ul>
            </div>
          </div>
        </div>
        <div className="filter-items">
          <div className="filtr-cate-title">
            <h4>Marca</h4>
          </div>
          <div className="other-item-body scrollstyle_4">
            <div className="brand-list">
              <div className="search-by-catgory">
                <div className="ui search">
                  <div className="ui left icon input swdh10">
                    <input
                      className="prompt srch10"
                      type="text"
                      placeholder="Buscar por Marca"
                    />
                    <i className="uil uil-search-alt icon icon1"></i>
                  </div>
                </div>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="brand_1"
                />
                <label className="custom-control-label" htmlFor="brand_1">
                  Nombre marca
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-items">
          <div className="filtr-cate-title">
            <h4>Precio</h4>
          </div>
          <div className="price-pack-item-body scrollstyle_4">
            <div className="brand-list">
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price_1"
                />
                <label className="custom-control-label" htmlFor="price_1">
                  Menos que: Bs 10 <span className="webproduct">(9)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price_2"
                />
                <label className="custom-control-label" htmlFor="price_2">
                  Bs 10 a Bs 15 <span className="webproduct">(8)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price_3"
                />
                <label className="custom-control-label" htmlFor="price_3">
                  Bs 10 a Bs 15 <span className="webproduct">(12)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price_4"
                />
                <label className="custom-control-label" htmlFor="price_4">
                  Bs 10 a Bs 15 <span className="webproduct">(4)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price_5"
                />
                <label className="custom-control-label" htmlFor="price_5">
                  Bs 10 a Bs 15 <span className="webproduct">(16)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price_6"
                />
                <label className="custom-control-label" htmlFor="price_6">
                  Bs 10 a Bs 15 <span className="webproduct">(18)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price_7"
                />
                <label className="custom-control-label" htmlFor="price_7">
                  Más que Bs 50 <span className="webproduct">(25)</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-items">
          <div className="filtr-cate-title">
            <h4>Descuento</h4>
          </div>
          <div className="offer-item-body scrollstyle_4">
            <div className="brand-list">
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="offer_1"
                />
                <label className="custom-control-label" htmlFor="offer_1">
                  2% - 5% <span className="webproduct">(9)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="offer_2"
                />
                <label className="custom-control-label" htmlFor="offer_2">
                  6% - 10% <span className="webproduct">(5)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="offer_3"
                />
                <label className="custom-control-label" htmlFor="offer_3">
                  11% - 15% <span className="webproduct">(11)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="offer_4"
                />
                <label className="custom-control-label" htmlFor="offer_4">
                  16% - 25% <span className="webproduct">(27)</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
