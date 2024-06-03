import Head from 'next/head'
import Header from '../components/Header'
import { Carrousel } from '../components/Carrousel'
import Categories from '../components/Categories'
import Destacados from '../components/Destacados'
import MejoresValores from '../components/MejoresValores'
import Footer from '../components/Footer'
import { useEffect, useContext, useState } from 'react'
import * as React from 'react'
import { API_URL } from '../components/Config'
import UserContext from '../components/UserContext'
import { notify } from 'react-notify-toast'
import Loader from '../components/Loader'

const Home = ({
  productosDescuento,
  productosDestacados,
  productosNuevos,
}) => {
  let categoriaAletorio
  const { categorias } = useContext(UserContext)
  const [localCategoria, setLocalCategoria] = useState(false)
  const [productosCategoria, setProductosCategoria] = useState([])

  useEffect(() => {
    if (categorias.length > 0) {
      categoriaAletorio =
        categorias[Math.floor(Math.random() * categorias.length)]
      setLocalCategoria(categoriaAletorio)
      getProductosCategoria(categoriaAletorio._id)
    }
  }, [categorias])

  async function getProductosCategoria(idCategoria) {
    if (idCategoria) {
      const res = await fetch(
        `${API_URL}/productos/${idCategoria}?pagina=1`
      )
      const pro = await res.json()
      if (pro.error) {
        notify.show(
          'Error en el servidor no se pudo obtener los productos por categoria',
          'error'
        )
        console.log(pro)
      } else {
        setProductosCategoria(pro.body)
      }
    }
  }

  return (
    <>
      <Head>
        <title>FriBar</title>
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
        <Carrousel productosDescuento={productosDescuento} />
        <Categories />
        {productosDestacados.length > 0 ? (
          <Destacados
            title="Principales Productos Destacados"
            productos={productosDestacados}
            url="/productos/destacados"
          />
        ) : (
          <Loader />
        )}
        {/* <MejoresValores /> */}

        {localCategoria &&
          (productosCategoria.length > 0 ? (
            <Destacados
              title={localCategoria.name}
              productos={productosCategoria}
              url={localCategoria.name}
              categoriaAleatorio={true}
            />
          ) : (
            <Loader />
          ))}

        {productosNuevos.length > 0 ? (
          <Destacados
            title="Nuevos Productos Agregados"
            productos={productosNuevos}
            url="/productos"
          />
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  try {
    const resProductosDescuento = await fetch(
      `${API_URL}/productos/filtrados/descuento`
    )
    const resProductosDestacados = await fetch(
      `${API_URL}/productos/destacados/principales`
    )
    const resProductosNuevos = await fetch(
      `${API_URL}/productos?desde=0&limite=8`
    )
    const proDescuento = await resProductosDescuento.json()
    const proDestacados = await resProductosDestacados.json()
    const proNuevos = await resProductosNuevos.json()
    if (proDescuento.error)
      return {
        props: {
          productosDescuento: [],
          productosDestacados: proDestacados.body,
          productosNuevos: proNuevos.body[0],
        },
      }
    if (proDestacados.error)
      return {
        props: {
          productosDescuento: proDescuento.body,
          productosNuevos: proNuevos.body[0],
          productosDestacados: [],
        },
      }
    if (proNuevos.error)
      return {
        props: {
          productosDescuento: proDescuento.body,
          productosDestacados: proDestacados.body,
          productosNuevos: [],
        },
      }
    return {
      props: {
        productosDescuento: proDescuento.body,
        productosDestacados: proDestacados.body,
        productosNuevos: proNuevos.body[0],
      },
    }
  } catch (error) {
    return {
      props: {
        productosDescuento: [],
        productosDestacados: [],
        productosNuevos: [],
      },
    }
  }
}
export default Home
