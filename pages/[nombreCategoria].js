import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { API_URL } from '../components/Config'
import ShopGrid from '../components/ShopGrid'
import { useEffect, useState } from 'react'
import { notify } from 'react-notify-toast'
export default ({ categoria }) => {
  const [productos, setProductos] = useState([])
  const [page, setPage] = useState(1)
  const [sonTodos, setSonTodos] = useState(false)
  const getProductosPorCategoria = async () => {
    const res = await fetch(
      `${API_URL}/productos/${categoria._id}?pagina=${page}`
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
  const cambiarPagina = () => {
    console.log('ENTRE A QUI')
    // setPage(page + 1)
  }
  useEffect(() => {
    getProductosPorCategoria()
  }, [categoria._id, page])

  return (
    <>
      <Head>
        <title>{categoria.name}</title>
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
              <ShopGrid
                titulo={categoria.name}
                productos={productos}
                page={page}
                setPage={setPage}
                sonTodos={sonTodos}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/categoria?status=true`)
  const categorias = await res.json()
  const paths = categorias.body.map((cate) => ({
    params: {
      nombreCategoria: cate.name.toLowerCase().replace(/ /g, '-'),
    },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${API_URL}/categoria/buscar/${params.nombreCategoria.replace(
      /-/g,
      ' '
    )}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const cate = await res.json()
  if (!cate) {
    return {
      notFound: true,
    }
  }
  return { props: { categoria: cate.body[0] } }
}
