import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import UserContext from '../components/UserContext'
import Router from 'next/router'
import Notifications from 'react-notify-toast'
import '../public/vendor/unicons-2.0.1/css/unicons.css'
import '../public/css/style.css'
import '../public/css/responsive.css'
import '../public/css/night-mode.css'
//  Vendor Stylesheets
import '../public/vendor/fontawesome-free/css/all.min.css'
import '../public/vendor/OwlCarousel/assets/owl.carousel.css'
import '../public/vendor/OwlCarousel/assets/owl.theme.default.min.css'
import '../public/vendor/bootstrap/css/bootstrap.min.css'
import '../public/vendor/semantic/semantic.min.css'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      token: null,
      categorias: [],
      sid: false,
    }
  }
  setSitNav = (sid) => {
    this.setState({
      sid,
    })
  }
  getCategorias = async () => {
    try {
      const res = await fetch('http://localhost:3001/categoria')
      const categorias = await res.json()
      this.setState({
        categorias: categorias.body,
      })
    } catch (err) {
      this.setState({
        categorias: [],
      })
    }
  }
  componentDidMount() {
    require ('owl.carousel/dist/assets/owl.carousel.css');
    require('owl.carousel')
    this.getCategorias()
    const user = localStorage.getItem('frifolly-user')
    const token = localStorage.getItem('frifolly-token')
    if (user && token) {
      this.setState({
        user: JSON.parse(user),
        token,
      })
    }
  }

  signIn = (user, token) => {
    localStorage.setItem('frifolly-user', JSON.stringify(user))
    localStorage.setItem('frifolly-token', token)
    this.setState(
      {
        user,
        token,
      },
      () => {
        Router.push('/')
      }
    )
  }

  setUser = (user) => {
    localStorage.setItem('frifolly-user', JSON.stringify(user))
    this.setState({
      user,
    })
  }
  signOut = () => {
    localStorage.removeItem('frifolly-user')
    localStorage.removeItem('frifolly-token')
    this.setState({
      user: null,
      token: null,
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <script src="https://apis.google.com/js/platform.js"> </script>
          <link
            href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossOrigin="anonymous"
          />
        </Head>
        <div
          className={
            this.state.sid
              ? `sb-nav-fixed sb-sidenav-toggled`
              : 'sb-nav-fixed'
          }
        >
          <Notifications />
          <UserContext.Provider
            value={{
              user: this.state.user,
              token: this.state.token,
              categorias: this.state.categorias,
              sid: this.state.sid,
              signIn: this.signIn,
              signOut: this.signOut,
              setUser: this.setUser,
              setSitNav: this.setSitNav,
            }}
          >
            <Component {...pageProps} />
          </UserContext.Provider>
        </div>
      </>
    )
  }
}
