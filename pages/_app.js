import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import UserContext from '../components/UserContext'
import Router from 'next/router'
import Notifications, { notify } from 'react-notify-toast'
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
import { API_URL } from '../components/Config'
import 'mapbox-gl/dist/mapbox-gl.css'
import expectedRound from 'expected-round'
import si from 'search-insights'
import { useEffect } from 'react'
export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      token: null,
      movimientos: [],
      modelCategory: true,
      ciudades: [],
      ciudad: {},
      carrito: [],
      cantidadProducto: [],
      total: 0,
      totalConDescuento: 0,
      categorias: [],
      modoNoche: false,
      direcciones: [],
      likes: [],
      costoEnvio: 0,
      direccionEnvio: false,
      generarQR: 100,

      //   productosDescuento: [],
      //   productosDestacados: [],
      //   productosNuevos: [],
      //   ofertas: [],
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
        if (data.body.length === 1) this.setCiudad(data.body[0])
        this.setState({ ciudades: data.body })
      })
      .catch((err) => notify.show(err.message, 'error'))
  }
  getCategorias = async () => {
    const res = await fetch(`${API_URL}/categoria`)
    const cate = await res.json()
    if (cate.error) notify.show('Error al obtener las categorias', 'error')
    else this.setState({ categorias: cate.body })
  }
  //   getProductosDescuento = async () => {
  //     const resProductosDescuento = await fetch(
  //       `${API_URL}/productos/filtrados/descuento`
  //     )
  //     const proDescuento = await resProductosDescuento.json()
  //     if (proDescuento.error)
  //       notify.show('Error al obtener los productos con descuento', 'error')
  //     else this.setState({ productosDescuento: proDescuento.body })
  //     console.log('---->1', proDescuento.body)
  //   }
  //   getProductosDestacados = async () => {
  //     const resProductosDestacados = await fetch(
  //       `${API_URL}/productos/destacados/principales`
  //     )
  //     const proDestacados = await resProductosDestacados.json()
  //     if (proDestacados.error)
  //       notify.show('Error al obtener los productos destacados', 'error')
  //     else this.setState({ productosDestacados: proDestacados.body })
  //     console.log('---->2', proDestacados.body)
  //   }
  //   getProductosNuevos = async () => {
  //     const resProductosNuevos = await fetch(
  //       `${API_URL}/productos?desde=0&limite=8`
  //     )
  //     const proNuevos = await resProductosNuevos.json()
  //     if (proNuevos.error)
  //       notify.show('Error al obtener los productos Nuevos', 'error')
  //     else this.setState({ productosNuevos: proNuevos.body[0] })
  //   }
  //   getOfertas = async () => {
  //     const resOfertas = await fetch(`${API_URL}/offers?state=true`)
  //     const ofertas = await resOfertas.json()
  //     if (ofertas.error) notify.show('Error al obtener las ofertas', 'error')
  //     else this.setState({ ofertas: ofertas.body })
  //     console.log('---->3', ofertas.body)
  //   }
  componentDidMount() {
    const user = localStorage.getItem('fribar-user')
    const token = localStorage.getItem('fribar-token')
    const cantidades = localStorage.getItem('fribar-cantidades')
    const productos = localStorage.getItem('fribar-carrito')
    const modoNoche = localStorage.getItem('gmtNightMode')
    const direcciones = localStorage.getItem('user-direcciones')
    const likes = localStorage.getItem('user-likes')
    const ciudad = localStorage.getItem('fribar-ciudad')
    if (user && token) {
      const usuario = JSON.parse(user)
      si('setAuthenticatedUserToken', user._id)
      //   this.getMovimientos(token)
      this.setState({
        user: usuario,
        token,
        direcciones: usuario.direccion,
        likes: usuario.favoritos,
        ciudad: JSON.parse(ciudad),
      })
      if (ciudad !== null) {
        this.setState({
          ciudad: JSON.parse(ciudad),
        })
      }
    }
    if (cantidades && productos) {
      const pro = JSON.parse(productos)
      const cant = JSON.parse(cantidades)
      this.setState({
        carrito: JSON.parse(productos),
        cantidadProducto: JSON.parse(cantidades),
      })
      this.calcularTotal(pro, cant)
    }
    if (modoNoche)
      this.setState({
        modoNoche: true,
      })
    if (direcciones) {
      const dir = JSON.parse(direcciones)
      this.setState({ direcciones: dir })
    }
    if (likes) {
      const l = JSON.parse(likes)
      this.setState({
        likes: l,
      })
    }
    this.getCiudades()
    this.getCategorias()

    // this.getProductosDescuento()
    // this.getProductosDestacados()
    // this.getProductosNuevos()
    // this.getOfertas()
  }
  addProductCar = (p, c) => {
    let ban = false
    if (this.state.carrito.length > 0) {
      this.state.carrito.find((producto, index) => {
        if (producto._id === p._id) {
          ban = true
          if (producto.stock < this.state.cantidadProducto[index] + c) {
            notify.show(
              `Lo siento solo tengo ${producto.stock} en Stock de ${producto.name} 🥺`,
              'warning'
            )
          } else {
            this.state.cantidadProducto[index] =
              this.state.cantidadProducto[index] + c
            ban = true
            localStorage.setItem(
              'fribar-cantidades',
              JSON.stringify(this.state.cantidadProducto)
            )
            this.setState({
              cantidadProducto: this.state.cantidadProducto,
            })
          }
        }
      })
      if (!ban) {
        this.setState({
          carrito: this.state.carrito.concat(p),
          cantidadProducto: this.state.cantidadProducto.concat(c),
        })
        localStorage.setItem(
          'fribar-carrito',
          JSON.stringify(this.state.carrito.concat(p))
        )
        localStorage.setItem(
          'fribar-cantidades',
          JSON.stringify(this.state.cantidadProducto.concat(c))
        )
      }
    } else {
      this.setState({
        carrito: this.state.carrito.concat(p),
        cantidadProducto: this.state.cantidadProducto.concat(c),
      })
      localStorage.setItem(
        'fribar-carrito',
        JSON.stringify(this.state.carrito.concat(p))
      )
      localStorage.setItem(
        'fribar-cantidades',
        JSON.stringify(this.state.cantidadProducto.concat(c))
      )
    }
    this.calcularTotal(
      JSON.parse(localStorage.getItem('fribar-carrito')),
      JSON.parse(localStorage.getItem('fribar-cantidades'))
    )
  }

  setCantidades = (cantidades, productos) => {
    this.setState({ cantidadProducto: cantidades })
    localStorage.setItem('fribar-cantidades', JSON.stringify(cantidades))
    this.calcularTotal(productos, cantidades)
  }
  limpiasCarrito = () => {
    this.setState({ cantidadProducto: [], carrito: [] })
    localStorage.setItem('fribar-cantidades', JSON.stringify([]))
    localStorage.setItem('fribar-carrito', JSON.stringify([]))
    calcularTotal([], [])
  }
  calcularTotal = (productos, cantidades) => {
    let auxTotalConDescuneto = 0
    let auxTotal = 0
    for (let i = 0; i < productos.length; i++) {
      auxTotalConDescuneto += parseFloat(
        expectedRound
          .round10(
            (productos[i].precioVenta -
              (productos[i].descuento * productos[i].precioVenta) / 100) *
              cantidades[i],
            -1
          )
          .toFixed(2)
      )
      auxTotal += parseFloat(
        expectedRound
          .round10(productos[i].precioVenta * cantidades[i], -1)
          .toFixed(2)
      )
    }
    this.setState({
      total: auxTotal,
      totalConDescuento: auxTotalConDescuneto,
    })
  }
  elimninarProdcutoCarrito = (index) => {
    this.state.carrito.splice(index, 1)
    this.state.cantidadProducto.splice(index, 1)
    this.setState({
      carrito: this.state.carrito,
      cantidadProducto: this.state.cantidadProducto,
    })
    localStorage.setItem(
      'fribar-carrito',
      JSON.stringify(this.state.carrito)
    )
    localStorage.setItem(
      'fribar-cantidades',
      JSON.stringify(this.state.cantidadProducto)
    )
    this.calcularTotal(this.state.carrito, this.state.cantidadProducto)
  }
  setCostoEnvio = (costo) => {
    this.setState({
      costoEnvio: costo,
    })
  }
  setDireccionEnvio = (direccion) => {
    this.setState({
      direccionEnvio: direccion,
    })
  }
  signIn = (user, token, pagoSeguro = false) => {
    si('setAuthenticatedUserToken', user._id)
    const direcciones = user.direccion
    const likes = user.favoritos
    localStorage.setItem('fribar-user', JSON.stringify(user))
    localStorage.setItem('fribar-token', token)
    if (direcciones.length > 0) {
      localStorage.setItem('user-direcciones', JSON.stringify(direcciones))
      this.setState({
        direcciones,
      })
    }
    if (likes.length > 0) {
      localStorage.setItem('user-likes', JSON.stringify(likes))
      this.setState({
        likes,
      })
    }
    this.setState({ user, token }, () => {
      if (!pagoSeguro) Router.push('/')
      else {
        Router.reload()
      }
    })
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
    localStorage.removeItem('user-likes')
    localStorage.removeItem('user-direcciones')
    si('setAuthenticatedUserToken', undefined)
    this.setState(
      {
        user: null,
        token: null,
      },
      () => Router.push('/')
    )
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
  setModoNoche = (modo) => {
    this.setState({ modoNoche: modo })
  }
  setDirecciones = (newDirecciones) => {
    localStorage.setItem(
      'user-direcciones',
      JSON.stringify(newDirecciones)
    )
    this.setState({ direcciones: newDirecciones })
  }
  setLikes = (likes) => {
    localStorage.setItem('user-likes', JSON.stringify(likes))
    this.setState({
      likes: likes,
    })
  }
  setGenerarQR = () => {
    this.setState({
      generarQR: Math.floor(Math.random() * 99),
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
              cantidades: this.state.cantidadProducto,
              categorias: this.state.categorias,
              //   productosDescuento: this.state.productosDescuento,
              //   productosDestacados: this.state.productosDestacados,
              //   productosNuevos: this.state.productosNuevos,
              //   ofertas: this.state.ofertas,
              modoNoche: this.state.modoNoche,
              direcciones: this.state.direcciones,
              total: this.state.total,
              totalConDescuneto: this.state.totalConDescuento,
              costoEnvio: this.state.costoEnvio,
              direccionEnvio: this.state.direccionEnvio,
              likes: this.state.likes,
              generarQR: this.state.generarQR,
              signIn: this.signIn,
              signOut: this.signOut,
              setUser: this.setUser,
              signInCompra: this.signInCompra,
              setModelCategory: this.setModelCategory,
              setCiudad: this.setCiudad,
              setCiudades: this.setAllCiudades,
              addProductCar: this.addProductCar,
              setModoNoche: this.setModoNoche,
              setDirecciones: this.setDirecciones,
              setCantidades: this.setCantidades,
              elimninarProdcutoCarrito: this.elimninarProdcutoCarrito,
              setCostoEnvio: this.setCostoEnvio,
              setDireccionEnvio: this.setDireccionEnvio,
              setLikes: this.setLikes,
              limpiasCarrito: this.limpiasCarrito,
              setGenerarQR: this.setGenerarQR,
            }}
          >
            <Component {...pageProps} />
          </UserContext.Provider>
        </div>
      </>
    )
  }
}
