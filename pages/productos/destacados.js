import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'
import { API_URL } from '../../components/Config'
import ShopGrid from '../../components/ShopGrid'
import { useEffect, useState } from 'react'
import { notify } from 'react-notify-toast'
import Loader from '../../components/Loader'
export default ({ productosDestacados }) => {
  const [productos, setProductos] = useState(productosDestacados)
  const [page, setPage] = useState(1)
  const [sonTodos, setSonTodos] = useState(false)
  const [ordenSeleccionado, setOrdenSeleccionado] = useState(false)

  const getProductosPorPagina = async (orden) => {
    const res = await fetch(
      `${API_URL}/productos/destacados/principales?pagina=${
        orden ? page - 1 : page
      }&orden=${orden ? orden : ''}`
    )
    const pro = await res.json()
    if (pro.error)
      notify.show(
        'Error en el servidor no se pudo obtener los productos por categoria',
        'error'
      )
    else {
      if (!pro.body.length > 0) setSonTodos(true)
      setProductos(productos.concat(pro.body))
    }
  }
  useEffect(() => {
    if (page > 1) {
      getProductosPorPagina(ordenSeleccionado)
    }
  }, [page, ordenSeleccionado])
  function cambiarOrden(orden) {
    setProductos([])
    setPage(2)
    setOrdenSeleccionado(orden)
    setSonTodos(false)
  }
  return (
    <>
      <Head>
        <title>Productos nuevos</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1"
        />
        <meta name="format-detection" content="telephone=no"></meta>
        <meta
          name="keywords"
          content="themeforest, theme, html, template"
        />
        <meta
          name="description"
          content="themeforest, theme, html, template"
        />
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header />
      <div className="wrapper">
        <Breadcrumb />
        <div className="all-product-grid mb-14">
          <div className="container">
            <div className="row">
              {productosDestacados.length > 0 ? (
                <ShopGrid
                  titulo="Principales Productos Destacados"
                  productos={productos}
                  page={page}
                  setPage={setPage}
                  sonTodos={sonTodos}
                  cambiarOrden={cambiarOrden}
                />
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `${API_URL}/productos/destacados/principales?pagina=1`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const productosDestacados = await res.json()
  return {
    props: { productosDestacados: productosDestacados.body },
  }
}
