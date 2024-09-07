import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import * as React from 'react'
import Link from 'next/link'
import Breadcrumb from '../../components/Breadcrumb'
import { API_URL } from '../../components/Config'
import GetImg from '../../components/GetImg'
import { notify } from 'react-notify-toast'
export default () => {
  const [ofertas, setOfertas] = useState([])
  function getOfertas() {
    fetch(`${API_URL}/offers?state=true`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((datos) => setOfertas(datos.body))
      .catch((err) => {
        notify.show(
          'Error en el servidor no se pudo obtener las ofertas',
          'error'
        )
      })
  }
  useEffect(() => {
    // LoadFile()
    getOfertas()
  }, [])
  return (
    <>
      <Head>
        <title>Ofertas Fribar</title>
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
        <meta
          name="description"
          content="Bienvenido a Fribar, tu ecommerce de confianza para carne fresca tanto de res, pollo, cerdo. Disfruta de nuestra selección de cortes premium, alimentos básicos y artículos esenciales, con entrega rápida y segura. Calidad garantizada a precios competitivos. ¡Haz tu pedido hoy!"
        />

        <meta property="og:title" content="Ofertas - Fribar" />
        <meta property="og:url" content="https://www.fribar.bo" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Ofertas Fribar, Las mejores ofertas en carne fresca y productos de primera necesidad. Ofrecemos cortes premium, alimentos básicos y artículos esenciales con entrega rápida y segura. Calidad garantizada a precios competitivos. ¡Haz tu pedido hoy!"
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
              <div className="col-lg-12 col-md-12">
                <div className="default-title mt-4">
                  <h2>Ofertas</h2>
                  <img src="/img/line.svg" alt="canasta" />
                </div>
              </div>
              {ofertas.length > 0 ? (
                ofertas.map((ofer) => (
                  <div className="col-lg-4">
                    <Link
                      href={`/ofertas/${ofer.titulo
                        .toLowerCase()
                        .replace(/ /g, '-')}`}
                    >
                      <a className="offers-item">
                        <div className="offer-img">
                          <img
                            src={GetImg(
                              ofer.img,
                              `${API_URL}/upload/oferta`
                            )}
                            alt={ofer.titulo}
                          />
                        </div>
                        <div className="offers-text">
                          <h4>
                            📢 {ofer.titulo}! Hasta {ofer.descuento}% de
                            descuento
                          </h4>
                          <p>{ofer.description}</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="col-lg-12 col-md-12">
                  <div className="default-title mt-4">
                    <h2>No hay ofertas disponibles</h2>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
