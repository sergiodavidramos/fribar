import Head from 'next/head'
import Header from '../components/Header'
import Carrousel from '../components/Carrousel'
import Categories from '../components/Categories'
import Destacados from '../components/Destacados'
import MejoresValores from '../components/MejoresValores'
import Footer from '../components/Footer'
import  { useEffect } from 'react'
import * as React from "react"

const Home = () => {
  useEffect(() => {
    import ('owl.carousel');

  }, [])
  return (
    <>
 
 

      <Header />
      <div className="wrapper">
        <Carrousel />
        <Categories />
        <Destacados title="Principales Productos Destacados" />
        <MejoresValores />
        <Destacados title="Verduras y Frutas Frescas" />
        <Destacados title="Nuevos Productos Agregados" />
      </div>
      <Footer />
      <Head>
        <title>FriFolly</title>
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

   
        <script src="/js/jquery-3.3.1.min.js"></script>
        <script src="/vendor/OwlCarousel/owl.carousel.js"></script>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/vendor/semantic/semantic.min.js"></script>
        <script src="/js/jquery.countdown.min.js"></script>
        <script src="/js/custom.js"></script>
        <script src="/js/product.thumbnail.slider.js"></script>
        <script src="/js/offset_overlay.js"></script>
        <script src="/js/night-mode.js"></script>
 
      </Head>
    </>
  )
}

export default Home
