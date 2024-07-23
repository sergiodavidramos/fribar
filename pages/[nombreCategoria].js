import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { API_URL } from '../components/Config'
import ShopGrid from '../components/ShopGrid'
import { useEffect, useState } from 'react'
import { notify } from 'react-notify-toast'
export default ({ categoria, params }) => {
  const [productos, setProductos] = useState([])
  const [page, setPage] = useState(1)
  const [sonTodos, setSonTodos] = useState(false)
  const [ordenSeleccionado, setOrdenSeleccionado] = useState(false)

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
      setProductos(pro.body)
      setPage(1)
      setSonTodos(false)
    }
  }
  const getProductosPorPagina = async (orden = false) => {
    const res = await fetch(
      `${API_URL}/productos/${categoria._id}?pagina=${page}&orden=${
        orden ? orden : ''
      }`
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
    getProductosPorCategoria()
  }, [params.nombreCategoria])
  useEffect(() => {
    getProductosPorPagina(ordenSeleccionado)
  }, [page, ordenSeleccionado])
  function cambiarOrden(orden) {
    setProductos([])
    setPage(1)
    setOrdenSeleccionado(orden)
    setSonTodos(false)
  }
  return (
    <>
      <Head>
        <title>Fribar-{categoria.name}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1"
        />
        <meta name="format-detection" content="telephone=no"></meta>

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1"
        />
        <meta name="format-detection" content="telephone=no"></meta>
        <meta
          name="keywords"
          content="carnicería online, compra carne fresca, ecommerce de carne, productos de primera necesidad, alimentos básicos, artículos esenciales, cortes premium, carne de calidad, entrega a domicilio, minimarket online, supermercado en línea, tienda de comestibles, productos frescos, carne a domicilio, tienda online de alimentos, pagos online"
        />
        <meta name="description" content={categoria.description} />

        <meta property="og:title" content={categoria.name} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={categoria.description} />

        <meta
          property="og:image"
          content={`${API_URL}/upload/facebookAds/facebookAdsPrincipal.png`}
        />
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
                categoria={categoria.name}
                idCategoria={categoria._id}
                cambiarOrden={cambiarOrden}
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
  return { props: { categoria: cate.body[0], params } }
}
