import Header from '../../components/Header'
import SingleProduct from '../../components/SingleProduct'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { API_URL } from '../../components/Config'
import Breadcrumb from '../../components/Breadcrumb'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'
export default ({ producto, productosDestacados }) => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Breadcrumb />
        {producto ? (
          <SingleProduct
            producto={producto}
            productosDestacados={productosDestacados}
          />
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
    </>
  )
}
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/productos/all`)
  const productos = await res.json()
  const paths = productos.body.map((product) => ({
    params: { nombre: product.name.toLowerCase().replace(/ /g, '-') },
  }))
  return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
  const res = await fetch(
    `${API_URL}/productos/buscar/${params.nombre.replace(/-/g, ' ')}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const resProductosDestacados = await fetch(
    `${API_URL}/productos/destacados/principales`
  )
  const product = await res.json()
  const proDestacados = await resProductosDestacados.json()
  if (!product) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      producto: product.body[0],
      productosDestacados: proDestacados.body,
    },
  }
}
