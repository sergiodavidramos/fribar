import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'
import { API_URL } from '../../components/Config'
import ShopGrid from '../../components/ShopGrid'
import GetImg from '../../components/GetImg'
export default ({ oferta }) => {
  return (
    <>
      <Head>
        <title>{oferta.titulo}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1"
        />
        <meta name="format-detection" content="telephone=no"></meta>
        <meta
          name="keywords"
          content="ofertas carne fresca, ecommerce de carne, ofertas en productos de primera necesidad, ofertas en alimentos básicos, ofertas en artículos esenciales,ofertas en cortes premium, ofertas en carne de calidad, entrega a domicilio, minimarket online, supermercado en línea, tienda de comestibles, productos frescos, carne a domicilio, tienda online de alimentos, pagos online"
        />
        <meta name="description" content={oferta.description} />

        <meta property="og:title" content={oferta.titulo} />
        <meta property="og:url" content="https://www.fribar.bo" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={oferta.description} />

        <meta
          property="og:image"
          content={GetImg(oferta.img, `${API_URL}/upload/oferta`)}
        />
      </Head>
      <Header />
      <div className="wrapper">
        <Breadcrumb />
        <div className="all-product-grid mb-14">
          <div className="container">
            <div className="row">
              <ShopGrid
                titulo={oferta.titulo}
                productos={oferta.productos}
                sonTodos={true}
                ofertas={true}
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
  const res = await fetch(`${API_URL}/offers?state=true`)
  const offers = await res.json()
  const paths = offers.body.map((offer) => ({
    params: { titulo: offer.titulo.toLowerCase().replace(/ /g, '-') },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${API_URL}/offers/buscar/${params.titulo.replace(/-/g, ' ')}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const offer = await res.json()
  if (!offer) {
    return {
      notFound: true,
    }
  }
  return { props: { oferta: offer.body[0] } }
}
