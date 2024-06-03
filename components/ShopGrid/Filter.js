import UserContext from '../UserContext'
import { useContext, useEffect, useState } from 'react'
import { API_URL } from '../Config'
export default ({
  handlerFiltro,
  totalFiltro,
  nombreCategoria,
  idCategoria = false,
}) => {
  const { categorias } = useContext(UserContext)
  const [infoProveedores, setInfoProveedores] = useState([])
  const [infoPrecios, setInfoPrecios] = useState([])
  const [infoDescuentos, setInfoDescuentos] = useState([])

  const [checkedProveedor, setCheckedProveedor] = useState(true)
  const [checkedPrecios, setCheckedPrecios] = useState(true)
  const [checkedDescuentos, setCheckedDescuentos] = useState(true)

  const [productosPorPrecio, setProductosPorPrecio] = useState([])
  const [productosPorDescuento, setProductosPorDescuento] = useState([])
  let prodPre = []
  let prodDes = []

  useEffect(() => {
    if (idCategoria) {
      categoriaSeleccionado(idCategoria)
    }
  }, [])
  const categoriaSeleccionado = async (idCat) => {
    try {
      prodPre = []
      prodDes = []
      const res = await fetch(
        `${API_URL}/productos/informacion/filtro?categoria=${idCat}`
      )
      const datos = await res.json()
      if (datos.error) {
        console.log(datos)
        notify.show(
          'Error al obtener la informacion del filtro',
          'warning'
        )
      } else {
        console.log('Prove', datos.body[0])
        console.log('Precios', datos.body[1])
        console.log('Descuentos', datos.body[2])
        setInfoProveedores(datos.body[0])
        for (let p of datos.body[1]) {
          if (p._id <= 10) {
            prodPre[0] = prodPre[0] ? prodPre[0] + p.count : p.count
          }
          if (p._id > 10 && p._id <= 20) {
            prodPre[1] = prodPre[1] ? prodPre[1] + p.count : p.count
          }
          if (p._id > 20 && p._id <= 30) {
            prodPre[2] = prodPre[2] ? prodPre[2] + p.count : p.count
          }
          if (p._id > 30 && p._id <= 40) {
            prodPre[3] = prodPre[3] ? prodPre[3] + p.count : p.count
          }
          if (p._id > 40 && p._id <= 50) {
            prodPre[4] = prodPre[4] ? prodPre[4] + p.count : p.count
          }
          if (p._id > 50) {
            prodPre[5] = prodPre[5] ? prodPre[5] + p.count : p.count
          }
        }
        for (let d of datos.body[2]) {
          if (d._id <= 5 && d._id > 0) {
            prodDes[0] = prodDes[0] ? prodDes[0] + d.count : d.count
          }
          if (d._id > 5 && d._id <= 10) {
            prodDes[1] = prodDes[1] ? prodDes[1] + d.count : d.count
          }
          if (d._id > 10 && d._id <= 15) {
            prodDes[2] = prodDes[2] ? prodDes[2] + d.count : d.count
          }
          if (d._id > 15 && d._id <= 20) {
            prodDes[3] = prodDes[3] ? prodDes[3] + d.count : d.count
          }
          if (d._id > 20) {
            prodDes[5] = prodDes[5] ? prodDes[5] + d.count : d.count
          }
        }
        setProductosPorPrecio(prodPre)
        setProductosPorDescuento(prodDes)

        setInfoPrecios(datos.body[1])
        setInfoDescuentos(datos.body[2])
      }
    } catch (error) {
      alert(error)
    }
  }
  const proveedorSeleccionado = (idProveedor) => {
    if (checkedProveedor) {
      console.log('IdProveedor Seleccionado', idProveedor)
    }
  }
  const precioSeleccionado = (rangoPrecios) => {
    if (checkedPrecios) {
      console.log('Preco Seleccionado', rangoPrecios)
    }
  }
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
                {categorias.length > 0
                  ? categorias.map((categoria, index) => (
                      <li key={index}>
                        <input
                          defaultChecked={
                            categoria.name === nombreCategoria
                              ? true
                              : false
                          }
                          type="radio"
                          id={`c${index + 1}`}
                          name="category1"
                          onClick={() =>
                            categoriaSeleccionado(categoria._id)
                          }
                        />
                        <label htmlFor={`c${index + 1}`}>
                          {categoria.name}
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
                {infoProveedores.length > 0 &&
                  infoProveedores.map((prove, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={`brand${index}`}
                        onChange={() => {
                          setCheckedProveedor(!checkedProveedor)
                          proveedorSeleccionado(prove.idProveedor[0][0])
                        }}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={`brand${index}`}
                      >
                        {prove.proveedores[0]}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="filter-items">
          <div className="filtr-cate-title">
            <h4>Precios</h4>
          </div>
          <div className="price-pack-item-body scrollstyle_4">
            <div className="brand-list">
              {productosPorPrecio[0] && (
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`price1`}
                    onChange={() => {
                      precioSeleccionado([0, 10])
                      setCheckedPrecios(!checkedPrecios)
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`price1`}
                  >
                    Menos que: 10 Bs.
                    <span className="webproduct">
                      ({productosPorPrecio[0] ? productosPorPrecio[0] : 0})
                    </span>
                  </label>
                </div>
              )}
              {productosPorPrecio[1] && (
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`price2`}
                    onChange={() => {
                      precioSeleccionado([9, 20])
                      setCheckedPrecios(!checkedPrecios)
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`price2`}
                  >
                    De: 10 Bs. a 20 Bs.
                    <span className="webproduct">
                      ({productosPorPrecio[1] ? productosPorPrecio[1] : 0})
                    </span>
                  </label>
                </div>
              )}
              {productosPorPrecio[2] && (
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`price3`}
                    onChange={() => {
                      precioSeleccionado([19, 30])
                      setCheckedPrecios(!checkedPrecios)
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`price3`}
                  >
                    De: 20 Bs. a 30 Bs.
                    <span className="webproduct">
                      ({productosPorPrecio[2] ? productosPorPrecio[2] : 0})
                    </span>
                  </label>
                </div>
              )}
              {productosPorPrecio[3] && (
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`price4`}
                    onChange={() => {
                      precioSeleccionado([29, 40])
                      setCheckedPrecios(!checkedPrecios)
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`price4`}
                  >
                    De: 30 Bs. a 40 Bs.
                    <span className="webproduct">
                      ({productosPorPrecio[3] ? productosPorPrecio[3] : 0})
                    </span>
                  </label>
                </div>
              )}
              {productosPorPrecio[4] && (
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`price5`}
                    onChange={() => {
                      precioSeleccionado([39, 50])
                      setCheckedPrecios(!checkedPrecios)
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`price5`}
                  >
                    De: 40 Bs. a 50 Bs.
                    <span className="webproduct">
                      ({productosPorPrecio[4] ? productosPorPrecio[4] : 0})
                    </span>
                  </label>
                </div>
              )}
              {productosPorPrecio[5] && (
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`price6`}
                    onChange={() => {
                      precioSeleccionado([49, 1000])
                      setCheckedPrecios(!checkedPrecios)
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`price6`}
                  >
                    Mas de: 50 Bs.
                    <span className="webproduct">
                      ({productosPorPrecio[5] ? productosPorPrecio[5] : 0})
                    </span>
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="filter-items">
          <div className="filtr-cate-title">
            <h4>Descuentos</h4>
          </div>
          <div className="offer-item-body scrollstyle_4">
            <div className="brand-list">
              {productosPorDescuento[0] && (
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="offer_1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="offer_1"
                  >
                    Menos que: 5%{' '}
                    <span className="webproduct">
                      (
                      {productosPorDescuento[0]
                        ? productosPorDescuento[0]
                        : 0}
                      )
                    </span>
                  </label>
                </div>
              )}
              {productosPorDescuento[1] && (
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="offer_2"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="offer_2"
                  >
                    5% - 10%{' '}
                    <span className="webproduct">
                      (
                      {productosPorDescuento[1]
                        ? productosPorDescuento[1]
                        : 0}
                      )
                    </span>
                  </label>
                </div>
              )}
              {productosPorDescuento[2] && (
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="offer_3"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="offer_3"
                  >
                    10% - 15%{' '}
                    <span className="webproduct">
                      (
                      {productosPorDescuento[2]
                        ? productosPorDescuento[2]
                        : 0}
                      )
                    </span>
                  </label>
                </div>
              )}
              {productosPorDescuento[3] && (
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="offer_4"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="offer_4"
                  >
                    15% - 20%{' '}
                    <span className="webproduct">
                      (
                      {productosPorDescuento[3]
                        ? productosPorDescuento[3]
                        : 0}
                      )
                    </span>
                  </label>
                </div>
              )}
              {productosPorDescuento[4] && (
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="offer_5"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="offer_5"
                  >
                    Mayor al: 20%{' '}
                    <span className="webproduct">
                      (
                      {productosPorDescuento[4]
                        ? productosPorDescuento[4]
                        : 0}
                      )
                    </span>
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
