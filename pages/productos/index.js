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
  const [ordenSeleccionado, setOrdenSeleccionado] = useState(false)

  const getProductosPorPagina = async (orden) => {
    const res = await fetch(
      `${API_URL}/productos?desde=${
        12 * (orden ? page - 2 : page - 1)
      }&limite=${12}&orden=${orden ? orden : ''}`
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
    if (page > 1) getProductosPorPagina(ordenSeleccionado)
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
        <title>Fribar:Productos nuevos</title>
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
        <meta
          name="description"
          content="Todos los productos, tu ecommerce de confianza para carne fresca tanto de res, pollo, cerdo. Disfruta de nuestra selección de cortes premium, alimentos básicos y artículos esenciales, con entrega rápida y segura. Calidad garantizada a precios competitivos. ¡Haz tu pedido hoy!"
        />
        <meta property="og:title" content="Lo mejor en carnes - Fribar" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Descubre Fribar, tu ecommerce de confianza para carne fresca y productos de primera necesidad. Ofrecemos cortes premium, alimentos básicos y artículos esenciales con entrega rápida y segura. Calidad garantizada a precios competitivos. ¡Haz tu pedido hoy!"
        />

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
              {productosNuevos.length > 0 ? (
                <ShopGrid
                  titulo="Productos Nuevos"
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
