import Header from '../../components/Header'
import SingleProduct from '../../components/SingleProduct'
import { API_URL } from '../../components/Config'
import Breadcrumb from '../../components/Breadcrumb'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'
import Head from 'next/head'
export default ({ producto, productosDestacados }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Fribar: {producto.name}</title>
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1"
        />
        <meta name="format-detection" content="telephone=no"></meta>
        <meta
          name="keywords"
          content="carnicería online, compra carne fresca, ecommerce de carne, productos de primera necesidad, alimentos básicos, artículos esenciales, cortes premium, carne de calidad, entrega a domicilio, minimarket online, supermercado en línea, tienda de comestibles, productos frescos, carne a domicilio, tienda online de alimentos, pagos online"
        />
        <meta name="description" content={producto.detail} />

        <meta property="og:title" content={producto.detail} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={producto.detail} />

        <meta
          property="og:image"
          content={`${API_URL}/upload/facebookAds/facebookAdsPrincipal.png`}
        />
      </Head>
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
    revalidate: 1,
  }
}
