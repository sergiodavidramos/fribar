import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useEffect } from 'react'
import * as React from 'react'
import { LoadFile } from '../../components/LoadFile'
import Link from 'next/link'
export default () => {
  useEffect(() => {
    // LoadFile()
  })
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
        <div className="gambo-Breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href={'/'}>
                        <a>Inicio</a>
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Ofertas
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="all-product-grid mb-14">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="default-title mt-4">
                  <h2>Ofertas</h2>
                  <img src="/img/line.svg" alt="canasta" />
                </div>
              </div>
              <div className="col-lg-4">
                <Link href={''}>
                  <a className="offers-item">
                    <div className="offer-img">
                      <img src="/img/offers/img-1.jpg" alt="" />
                    </div>
                    <div className="offers-text">
                      <h4>📢 Offer Title Here!</h4>
                      <p>
                        Up to 25% off on Vegetables & Fruits & much more
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
