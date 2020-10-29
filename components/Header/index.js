import ModelCategory from './ModelCategory'
import SearchModel from './SearchModel'
import CartSidebar from './CartSidebar'
import Logo from './Logo'
import LogoHorizontal from './LogoHorizontal'
import Location from './Location'
import Link from 'next/link'
import UserContext from '../UserContext'
import { useContext, useEffect, useState } from 'react'
import GetImg from '../GetImg'
import { API_URL } from '../Config'
import Head from 'next/head'
import Router from 'next/router'
import { LoadFile } from '../../components/LoadFile'
import $ from 'jquery'
import { NavbarMobile } from './NavbarMobile'
import loadjs from 'loadjs'
import {DropPerfil} from './DropPerfil'
export default () => {
  const { user, signOut } = useContext(UserContext)

  console.log('user', user)


  useEffect(() => {
    loadjs('/js/jquery-3.3.1.min.js', () => {
      loadjs('/vendor/bootstrap/js/bootstrap.bundle.min.js', () => {
        loadjs('/vendor/OwlCarousel/owl.carousel.js', () => {
          loadjs('/vendor/semantic/semantic.min.js', () => {
            loadjs('/js/jquery.countdown.min.js', () => {
              loadjs('/js/custom.js', () => {
                loadjs('/js/offset_overlay.js', () => {
                  //   loadjs('/js/night-mode.js', () => {})
                })
              })
            })
          })
        })
      })
    })

    if (!('localStorage' in window)) return
    var nightMode = localStorage.getItem('gmtNightMode')
    if (nightMode) {
      document.documentElement.className += ' night-mode'
    }
  })
  return (
    <>
      <Head></Head>

      <ModelCategory />
      <SearchModel />
      <CartSidebar />

      <header className="header clearfix">
        <div className="top-header-group">
          <div className="top-header">
            <div className="res_main_logo">
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
            </div>
            <div className="main_logo" id="logo">
              <Link href="/">
                <a>
                  <LogoHorizontal />
                </a>
              </Link>
            </div>
            <div className="select_location">
              <div className="ui inline dropdown loc-title" tabIndex="0">
                <div className="text">
                  <i className="uil uil-location-point"></i>
                  Potosí
                </div>
                <i className="uil uil-angle-down icon__14"></i>
                <div className="menu dropdown_loc" tabIndex="-1">
                  <Location />
                  {/* <Location />
                  <Location />
                  <Location /> */}
                </div>
              </div>
            </div>
            <div className="search120">
              <div className="ui search">
                <div className="ui left icon input swdh10">
                  <input
                    className="prompt srch10"
                    type="text"
                    placeholder="Search for products.."
                  />
                  <i className="uil uil-search-alt icon icon1"></i>
                </div>
              </div>
            </div>
            <div className="header_right">
              <ul>
                <li>
                  <a href="#" className="offer-link">
                    <i className="uil uil-phone-alt"></i>65487706
                  </a>
                </li>
                <li>
                  <a href="offers.html" className="offer-link">
                    <i className="uil uil-gift"></i>Ofertas
                  </a>
                </li>
                <li>
                  <a href="faq.html" className="offer-link">
                    <i className="uil uil-question-circle"></i>Ayuda
                  </a>
                </li>
                <li>
                  <a
                    href="dashboard_my_wishlist.html"
                    className="option_links"
                    title="Wishlist"
                  >
                    <i className="uil uil-heart icon_wishlist"></i>
                    <span className="noti_count1">3</span>
                  </a>
                </li>
                  <DropPerfil/>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-header-group">
          <div className="sub-header">
            <div className="ui dropdown" tabIndex="0">
              <a
                href="#"
                className="category_drop hover-btn"
                data-toggle="modal"
                data-target="#category_model"
                title="Categories"
              >
                <i className="uil uil-apps"></i>
                <span className="cate__icon">Seleccionar Categoria</span>
              </a>
              <div className="menu" tabIndex="-1"></div>
            </div>
            <NavbarMobile />
            <div className="catey__icon">
              <a
                href="#"
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
                href="#"
                className="cart__btn hover-btn pull-bs-canvas-left"
                title="Cart"
              >
                <i className="uil uil-shopping-cart-alt"></i>
                <span>Carrito</span>
                <ins className="cart-count">2</ins>
                <i className="uil uil-angle-down"></i>
              </a>
            </div>
            <div className="search__icon order-1">
              <a
                href="#"
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
