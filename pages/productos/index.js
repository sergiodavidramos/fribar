import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'
import { API_URL } from '../../components/Config'
import ShopGrid from '../../components/ShopGrid'
import { useEffect, useState } from 'react'
import { notify } from 'react-notify-toast'
import Loader from '../../components/Loader'
export default ({ productosNuevos }) => {
  const [productos, setProductos] = useState(productosNuevos)
  const [page, setPage] = useState(1)
  const [sonTodos, setSonTodos] = useState(false)

  const getProductosPorPagina = async () => {
    const res = await fetch(
      `${API_URL}/productos?desde=${12 * (page - 1)}&limite=${12}`
    )
    const pro = await res.json()
    if (pro.error)
      notify.show(
        'Error en el servidor no se pudo obtener los productos por categoria',
        'error'
      )
    else {
      if (!pro.body[0].length > 0) setSonTodos(true)
      setProductos(productos.concat(pro.body[0]))
    }
  }
  useEffect(() => {
    if (page > 1) getProductosPorPagina()
  }, [page])
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
              {productosNuevos.length > 0 ? (
                <ShopGrid
                  titulo="Productos Nuevos"
                  productos={productos}
                  page={page}
                  setPage={setPage}
                  sonTodos={sonTodos}
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
  const res = await fetch(`${API_URL}/productos?desde=0&limite=12`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const productosNuevos = await res.json()
  return {
    props: { productosNuevos: productosNuevos.body[0], isFallback: true },
  }
}
