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
import Link from 'next/link'
import PedidoPendiente from '../components/PedidoPendiente'

const Home = () => {
  let categoriaAletorio
  const {
    categorias,
    productosDescuento,
    productosDestacados,
    productosNuevos,
    ofertas,
  } = useContext(UserContext)
  const [localCategoria, setLocalCategoria] = useState(false)
  const [productosCategoria, setProductosCategoria] = useState([])
  const [pedidos, setPedido] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('fribar-token')
    if (categorias.length > 0) {
      categoriaAletorio =
        categorias[Math.floor(Math.random() * categorias.length)]
      setLocalCategoria(categoriaAletorio)
      getProductosCategoria(categoriaAletorio._id)
    }
    if (token) {
      getMisPedidos(token)
    }
  }, [categorias])
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) =>
          console.log('scope is: ', registration.scope)
        )
    }
  }, [])
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
  async function getMisPedidos(token) {
    const res = await fetch(
      `${API_URL}/pedido/detalle/cliente/id?pagina=1`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Constent-Type': 'application/json',
        },
      }
    )
    const resPedidos = await res.json()
    if (resPedidos.error) {
      notify.show('Error al obtener tus pedidos', 'warning')
      setPedido([])
    } else {
      setPedido(resPedidos.body)
    }
  }

  return (
    <>
      <Head>
        <title>Fribar: Lo mejor en carnes</title>
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
          content="Bienvenido a Fribar, tu ecommerce de confianza para carne fresca tanto de res, pollo, cerdo. Disfruta de nuestra selección de cortes premium, alimentos básicos y artículos esenciales, con entrega rápida y segura. Calidad garantizada a precios competitivos. ¡Haz tu pedido hoy!"
        />

        <meta property="og:title" content="Lo mejor en carnes - Fribar" />
        <meta property="og:url" content="https://www.fribar.bo" />
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
        <Carrousel productosDescuento={productosDescuento} />

        {pedidos.length > 0 && <PedidoPendiente pedidos={pedidos} />}
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

        {ofertas.length > 0 && <MejoresValores ofertas={ofertas} />}
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

// export async function getStaticProps() {
//   try {
//     const resProductosDescuento = await fetch(
//       `${API_URL}/productos/filtrados/descuento`
//     )
//     const resProductosDestacados = await fetch(
//       `${API_URL}/productos/destacados/principales`
//     )
//     const resProductosNuevos = await fetch(
//       `${API_URL}/productos?desde=0&limite=8`
//     )
//     const resOfertas = await fetch(`${API_URL}/offers?state=true`)
//     const proDescuento = await resProductosDescuento.json()
//     const proDestacados = await resProductosDestacados.json()
//     const proNuevos = await resProductosNuevos.json()
//     const ofertas = await resOfertas.json()
//     if (proDescuento.error)
//       return {
//         props: {
//           productosDescuento: [],
//           productosDestacados: proDestacados.body,
//           productosNuevos: proNuevos.body[0],
//           ofertas: ofertas.body,
//         },
//         revalidate: 1,
//       }
//     if (proDestacados.error)
//       return {
//         props: {
//           productosDescuento: proDescuento.body,
//           productosNuevos: proNuevos.body[0],
//           ofertas: ofertas.body,
//           productosDestacados: [],
//         },
//         revalidate: 1,
//       }
//     if (proNuevos.error)
//       return {
//         props: {
//           productosDescuento: proDescuento.body,
//           productosDestacados: proDestacados.body,
//           ofertas: ofertas.body,
//           productosNuevos: [],
//         },
//         revalidate: 1,
//       }
//     if (ofertas.error)
//       return {
//         props: {
//           productosDescuento: proDescuento.body,
//           productosDestacados: proDestacados.body,
//           productosNuevos: proNuevos.body[0],
//           ofertas: [],
//         },
//         revalidate: 1,
//       }
//     return {
//       props: {
//         productosDescuento: proDescuento.body,
//         productosDestacados: proDestacados.body,
//         productosNuevos: proNuevos.body[0],
//         ofertas: ofertas.body,
//       },
//       revalidate: 1,
//     }
//   } catch (error) {
//     return {
//       props: {
//         productosDescuento: [],
//         productosDestacados: [],
//         productosNuevos: [],
//         ofertas: [],
//       },
//     }
//   }
// }
export default Home
