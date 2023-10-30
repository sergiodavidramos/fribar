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
import mapboxgl from '!mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
export default class MyApp extends App {
  constructor(props) {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoic2VyZ2lvZGF2aWRyYW1vcyIsImEiOiJja2NjcnloMzMwN2tjMndtOXM1NTFlMzRkIn0.5LBxHw3qu5t7pLdSjf2_rQ'

    super(props)
    this.state = {
      user: null,
      token: null,
      movimientos: [],
      modelCategory: true,
      ciudades: [],
      ciudad: {},
      carrito: [],
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
  getCiudades = () => {
    fetch(`${API_URL}/ciudad`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ciudades: data.body })
      })
      .catch((err) => notify.show(err.message, 'error'))
  }
  componentDidMount() {
    const user = localStorage.getItem('fribar-user')
    const token = localStorage.getItem('fribar-token')
    if (user && token) {
      //   this.getMovimientos(token)
      this.setState({
        user: JSON.parse(user),
        token,
      })
    }
    this.getCiudades()
  }

  signIn = (user, token) => {
    localStorage.setItem('fribar-user', JSON.stringify(user))
    localStorage.setItem('fribar-token', token)
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
    localStorage.setItem('fribar-user', JSON.stringify(user))
    localStorage.setItem('fribar-token', token)
    this.setState({
      user,
      token,
    })
  }

  setUser = (user) => {
    localStorage.setItem('fribar-user', JSON.stringify(user))
    this.setState({
      user,
    })
  }
  signOut = () => {
    localStorage.removeItem('fribar-user')
    localStorage.removeItem('fribar-token')
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
  setCiudad = (ciudad) => {
    localStorage.setItem('fribar-ciudad', JSON.stringify(ciudad))
    this.setState({
      ciudad,
    })
  }
  setAllCiudades = (ciudades) => {
    this.setState({ ciudades })
  }
  addProductCar = (p) => {
    this.setState({
      carrito: this.state.carrito.concat(p),
    })
  }
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <script src="https://apis.google.com/js/platform.js" async />

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
              ciudad: this.state.ciudad,
              ciudades: this.state.ciudades,
              carrito: this.state.carrito,
              signIn: this.signIn,
              signOut: this.signOut,
              setUser: this.setUser,
              signInCompra: this.signInCompra,
              setModelCategory: this.setModelCategory,
              setCiudad: this.setCiudad,
              setCiudades: this.setAllCiudades,
              addProductCar: this.addProductCar,
            }}
          >
            <Component {...pageProps} />
          </UserContext.Provider>
        </div>
      </>
    )
  }
}
