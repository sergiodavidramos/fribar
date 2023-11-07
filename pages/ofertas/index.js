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
