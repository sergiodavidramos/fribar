import Head from 'next/head'
import Header from '../components/Header'
import { Carrousel } from '../components/Carrousel'
import Categories from '../components/Categories'
import Destacados from '../components/Destacados'
import MejoresValores from '../components/MejoresValores'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import * as React from 'react'
import { LoadFile } from '../components/LoadFile'
const Home = () => {
  useEffect(() => {
    LoadFile()
  })
  return (
    <>
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
      </Head>
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
    </>
  )
}

export default Home
