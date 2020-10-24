import Breadcrumb from '../../components/Breadcrumb'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Dashboard from '../../components/Perfil'
import BanerPerfil from '../../components/Perfil/components/BanerPerfil'
import { useContext, useEffect } from 'react'
import UserContext from '../../components/UserContext'
<<<<<<< HEAD
import Head from 'next/head'
import Loader from '../../components/Loader'
=======

>>>>>>> dad12b7d6990a33fd4435fdea6d4ee8f8ee37f1b
export default () => {
  const { user } = useContext(UserContext)
  useEffect(() => {}, [])
  return (
    <>
      <Head>
        <link
          href="/vendor/unicons-2.0.1/css/unicons.css"
          rel="stylesheet"
        />
        <link href="/css/style.css" rel="stylesheet"></link>
        <link href="/css/responsive.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="/css/night-mode.css" rel="stylesheet" />
        {/* Vendor Stylesheets */}
        <link
          href="/vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="/vendor/OwlCarousel/assets/owl.carousel.css"
          rel="stylesheet"
        />
        <link
          href="/vendor/OwlCarousel/assets/owl.theme.default.min.css"
          rel="stylesheet"
        />
        <link
          href="/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/vendor/semantic/semantic.min.css"
        ></link>
      </Head>
      <Header />
      <div className="wrapper-carrito">
        <Breadcrumb />
        <BanerPerfil />
        {user ? <Dashboard user={user} /> : ''}
      </div>
      <Footer />
      <script src="/js/jquery-3.3.1.min.js"></script>
      <script src="/vendor/OwlCarousel/owl.carousel.js"></script>
      <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/vendor/semantic/semantic.min.js"></script>
      <script src="/js/jquery.countdown.min.js"></script>
      <script src="/js/custom.js"></script>
      <script src="/js/product.thumbnail.slider.js"></script>
      <script src="/js/offset_overlay.js"></script>
      <script src="/js/night-mode.js"></script>
    </>
  )
}
