import Link from 'next/link'
import UserContext from '../UserContext'
import { useContext } from 'react'
import GetImg from '../GetImg'
import { API_URL } from '../Config'
import Router from 'next/router'
export const DropPerfil = () => {
  const { user, signOut, setModoNoche } = useContext(UserContext)

  const handlerCerrarSesion = () => {
    signOut()
    Router.replace('/')
  }
  const handlerNight = () => {
    'use strict'
    if (!('localStorage' in window)) return

    document.documentElement.classList.toggle('night-mode')
    if (document.documentElement.classList.contains('night-mode')) {
      localStorage.setItem('gmtNightMode', true)
      setModoNoche(true)
      return
    }
    localStorage.removeItem('gmtNightMode')
    setModoNoche(false)
  }
  return user ? (
    <li className="ui dropdown">
      <a className="opts_account">
        <img
          src={GetImg(user.img, `${API_URL}/upload/user`)}
          alt="Usuario Fribar"
        />
        <span className="user__name">{user.idPersona.nombre_comp}</span>
        <i className="uil uil-angle-down"></i>
      </a>

      <div className="menu dropdown_account">
        <div className="night_mode_switch__btn">
          <a
            href="#"
            id="night-mode"
            onClick={handlerNight}
            className="btn-night-mode"
          >
            <i className="uil uil-moon"></i> Modo noche
            <span className="btn-night-mode-switch">
              <span className="uk-switch-button"></span>
            </span>
          </a>
        </div>
        <Link href="/perfil">
          <a className="item channel_item">
            <i className="uil uil-apps icon__1"></i>
            Mi Perfil
          </a>
        </Link>
        <Link href="/perfil/pedidos">
          <a className="item channel_item">
            <i className="uil uil-box icon__1"></i>Mis pedidos
          </a>
        </Link>
        <Link href="/perfil/likes">
          <a className="item channel_item">
            <i className="uil uil-heart icon__1"></i>Mi lista de deseos
          </a>
        </Link>
        <Link href="/perfil/mibilletera">
          <a className="item channel_item">
            <i className="uil uil-usd-circle icon__1"></i>Mi billetera
          </a>
        </Link>

        <Link href="/perfil/direccion">
          <a className="item channel_item">
            <i className="uil uil-location-point icon__1"></i>
            Mi dirección
          </a>
        </Link>
        <a href="offers.html" className="item channel_item">
          <i className="uil uil-gift icon__1"></i>Ofertas
        </a>
        <a href="faq.html" className="item channel_item">
          <i className="uil uil-info-circle icon__1"></i>
          Preguntas más frecuentes
        </a>
        <a onClick={handlerCerrarSesion} className="item channel_item">
          <i className="uil uil-lock-alt icon__1"></i>Cerrar sesión
        </a>
      </div>
    </li>
  ) : (
    <li className="ui dropdown" tabIndex="0">
      <a className="opts_account">
        <img src={GetImg()} alt="" />
        <span className="user__name">Regístrese o inicie sesión</span>
        <i className="uil uil-angle-down"></i>
      </a>
      <div className="menu dropdown_account" tabIndex="-1">
        <Link href="/login">
          <a className="item channel_item">
            <i className="uil uil-sign-out-alt icon__1"></i>
            Acceder
          </a>
        </Link>
        <Link href="/registro">
          <a className="item channel_item">
            <i className="uil uil-edit-alt icon__1"></i>
            Registrarse
          </a>
        </Link>
        <div className="night_mode_switch__btn">
          <a
            href="#"
            id="night-mode"
            onClick={handlerNight}
            className="btn-night-mode"
          >
            <i className="uil uil-moon"></i> Modo noche
            <span className="btn-night-mode-switch">
              <span className="uk-switch-button"></span>
            </span>
          </a>
        </div>
      </div>
    </li>
  )
}
