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
import '../public/css/step-wizard.css'
//  Vendor Stylesheets
import '../public/vendor/fontawesome-free/css/all.min.css'
import '../public/vendor/OwlCarousel/assets/owl.carousel.css'
import '../public/vendor/OwlCarousel/assets/owl.theme.default.min.css'
import '../public/vendor/bootstrap/css/bootstrap.min.css'
import '../public/vendor/semantic/semantic.min.css'
import { LoadFile } from '../components/LoadFile'
import { API_URL } from '../components/Config'
export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      token: null,
      movimientos: [],
      modelCategory: true,
    }
  }
  getMovimientos = (token) => {
    fetch(`${API_URL}/movimiento`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 401) {
          this.signOut()
        }
        return res.json()
      })
      .then((res) => {
        if (res.error) alert(res.body.message)
        else {
          this.setState({
            movimientos: res.body,
          })
        }
      })
      .catch((e) => {
        console.log('No se pudo guardar los cambios')
      })
  }
  componentDidMount() {
    const user = localStorage.getItem('frifolly-user')
    const token = localStorage.getItem('frifolly-token')
    if (user && token) {
      this.getMovimientos(token)
      this.setState({
        user: JSON.parse(user),
        token,
      })
    }
    LoadFile()
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
  signInCompra = (user, token) => {
    localStorage.setItem('frifolly-user', JSON.stringify(user))
    localStorage.setItem('frifolly-token', token)
    this.setState({
      user,
      token,
    })
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
  setModelCategory = (action) => {
    this.setState({
      modelCategory: action,
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
        </Head>
        <div>
          <Notifications />
          <UserContext.Provider
            value={{
              user: this.state.user,
              token: this.state.token,
              movimientos: this.state.movimientos,
              stateModel: this.state.modelCategory,
              signIn: this.signIn,
              signOut: this.signOut,
              setUser: this.setUser,
              signInCompra: this.signInCompra,
              setModelCategory: this.setModelCategory,
            }}
          >
            <Component {...pageProps} />
          </UserContext.Provider>
        </div>
      </>
    )
  }
}
