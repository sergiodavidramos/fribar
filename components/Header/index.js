import ModelCategory from './ModelCategory'
import SearchModel from './SearchModel'
import CartSidebar from './CartSidebar'
import Location from './Location'
import Link from 'next/link'
import { useEffect, useContext, useState } from 'react'
import UserContext from '../UserContext'
import Head from 'next/head'
import { LoadFile } from '../../components/LoadFile'
import { NavbarMobile } from './NavbarMobile'
import { DropPerfil } from './DropPerfil'
import { TOKENMAP, API_URL } from '../Config'
import Notifications, { notify } from 'react-notify-toast'
import Search from './search'
import 'mapbox-gl/dist/mapbox-gl.css'

export default () => {
  const {
    setModelCategory,
    ciudades,
    ciudad,
    setCiudad,
    user,
    cantidades,
    likes,
  } = useContext(UserContext)
  useEffect(() => {
    if (!('localStorage' in window)) return
    var nightMode = localStorage.getItem('gmtNightMode')
    if (nightMode) {
      document.documentElement.className += ' night-mode'
    }
    if (!navigator.geolocation) {
      notify.show('No se pudo obtener la ubicacion', 'error')
    } else {
      navigator.geolocation.getCurrentPosition(
        (p) => mostrarUbicacion(p, setCiudad),
        function (error) {
          // El segundo parámetro es la función de error
          switch (error.code) {
            case error.PERMISSION_DENIED:
              notify.show(
                'Por favor asigname el permiso para obtener tu ubición.',
                'warning',
                5000
              )
              break
            case error.POSITION_UNAVAILABLE:
              // La ubicación no está disponible.
              break
            case error.TIMEOUT:
              // Se ha excedido el tiempo para obtener la ubicación.
              break
            case error.UNKNOWN_ERROR:
              // Un error desconocido.
              break
          }
        }
      )
    }
  }, [ciudades])

  function mostrarUbicacion(ubicacion, setCiudad) {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${ubicacion.coords.longitude},${ubicacion.coords.latitude}.json?access_token=${TOKENMAP}`
    )
      .then((res) => res.json())
      .then((re) => {
        if (ciudades.length > 0)
          if (
            ciudades.find(
              (ciudad) => ciudad.nombre === re.features[0].context[1].text
            )
          ) {
            setCiudad(
              ciudades.find(
                (ciudad) =>
                  ciudad.nombre === re.features[0].context[1].text
              )
            )
          } else
            notify.show(
              'Por favor seleccione una ciudad validad para las compras',
              'warning'
            )
      })
      .catch((err) => notify.show(err.message, 'error'))
  }
  return (
    <>
      <Notifications />
      <Head></Head>
      <ModelCategory />
      <SearchModel />
      <CartSidebar />
      <div id="map"></div>
      <header className="header clearfix">
        <div className="top-header-group">
          <div className="top-header">
            <div className="res_main_logo">
              <Link href="/">
                <a>
                  <img
                    src="/img/logo-pantalla-pequeña.svg"
                    alt="FribarLogo"
                  />
                </a>
              </Link>
            </div>
            <div className="main_logo" id="logo">
              <Link href="/">
                <a>
                  <img src="/img/logoFrom.svg" alt="FribarLogo" />
                </a>
              </Link>

              <Link href={'/'}>
                <a>
                  <img
                    className="logo-inverse"
                    src="/img/logo-noche.svg"
                    alt="FribarLogo"
                  />
                </a>
              </Link>
            </div>
            <div className="select_location">
              <div className="ui inline dropdown loc-title" tabIndex="0">
                <div className="text">
                  <i className="uil uil-location-point"></i>
                  {Object.keys(ciudad).length === 0
                    ? 'Seleccione ciudad'
                    : ciudad.nombre}
                </div>
                <i className="uil uil-angle-down icon__14"></i>
                <div className="menu dropdown_loc" tabIndex="-1">
                  {ciudades.map((ciudad) => (
                    <Location
                      key={ciudad._id}
                      id={ciudad._id}
                      nombre={ciudad.nombre}
                      setCiudad={setCiudad}
                    />
                  ))}
                </div>
              </div>
            </div>
            <Search />
            <div className="header_right">
              <ul>
                <li>
                  <a href="tel:+591 74231490" className="offer-link">
                    <i className="uil uil-phone-alt"></i>74231490
                  </a>
                </li>
                <li>
                  <Link href={'/ofertas'}>
                    <a className="offer-link">
                      <i className="uil uil-gift"></i>Ofertas
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ayuda">
                    <a className="offer-link">
                      <i className="uil uil-question-circle"></i>Ayuda
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={'/perfil/likes'}>
                    <a className="option_links" title="Wishlist">
                      <i className="uil uil-heart icon_wishlist"></i>
                      {user && (
                        <span className="noti_count1">{likes.length}</span>
                      )}
                    </a>
                  </Link>
                </li>
                <DropPerfil />
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-header-group">
          <div className="sub-header">
            <div className="ui dropdown" tabIndex="0">
              <a
                className="category_drop hover-btn"
                data-toggle="modal"
                data-target="#category_model"
                title="Categories"
                onClick={() => setModelCategory(true)}
              >
                <i className="uil uil-apps"></i>
                <span className="cate__icon">Seleccionar Categoria</span>
              </a>
              <div className="menu" tabIndex="-1"></div>
            </div>
            <NavbarMobile />
            <div className="catey__icon">
              <a
                className="cate__btn"
                data-toggle="modal"
                data-target="#category_model"
                title="Categories"
              >
                <i className="uil uil-apps"></i>
              </a>
            </div>
            <div className="header_cart order-1">
              <a
                className="cart__btn hover-btn pull-bs-canvas-left"
                title="Cart"
                onClick={() => setModelCategory(true)}
              >
                <i className="uil uil-shopping-cart-alt"></i>
                <span>Carrito</span>
                <ins className="cart-count">{cantidades.length}</ins>
                <i className="uil uil-angle-down"></i>
              </a>
            </div>
            <div className="search__icon order-1">
              <a
                className="search__btn hover-btn"
                data-toggle="modal"
                data-target="#search_model"
                title="Search"
              >
                <i className="uil uil-search"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
