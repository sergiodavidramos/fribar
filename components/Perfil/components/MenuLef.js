import Link from 'next/link'
import { withRouter } from 'next/router'
import { useContext } from 'react'
import UserContext from '../../UserContext'
import Router from 'next/router'

const MenuLef = ({ router }) => {
  const { signOut } = useContext(UserContext)
  const handlerCerrarSesion = () => {
    signOut()
    Router.replace('/')
  }
  return (
    <div className="col-lg-3 col-md-4">
      <div className="left-side-tabs">
        <div className="dashboard-left-links">
          <Link href="/perfil">
            <a
              className={`user-item ${
                router.pathname === '/perfil' ? 'active' : ''
              }`}
            >
              <i className="uil uil-apps"></i>Vista General
            </a>
          </Link>
          <Link href="/perfil/pedidos">
            <a
              className={`user-item ${
                router.pathname === '/perfil/pedidos' ? 'active' : ''
              }`}
            >
              <i className="uil uil-box"></i>Mis Pedidos
            </a>
          </Link>
          <Link href="/perfil/recompensas">
            <a
              className={`user-item ${
                router.pathname === '/perfil/rewards' ? 'active' : ''
              }`}
            >
              <i className="uil uil-gift"></i>Mis Recompensas
            </a>
          </Link>
          {/* <Link href="/perfil/mibilletera">
            <a
              className={`user-item ${
                router.pathname === '/perfil/mibilletera' ? 'active' : ''
              }`}
            >
              <i className="uil uil-wallet"></i>Mi Billetera
            </a>
          </Link> */}
          <Link href="/perfil/likes">
            <a
              className={`user-item ${
                router.pathname === '/perfil/likes' ? 'active' : ''
              }`}
            >
              <i className="uil uil-heart"></i>Mi Lista de deseos de
              compras
            </a>
          </Link>
          <Link href="/perfil/direccion">
            <a
              className={`user-item ${
                router.pathname === '/perfil/direccion' ? 'active' : ''
              }`}
            >
              <i className="uil uil-location-point"></i>Mi direccion
            </a>
          </Link>
          <a className="user-item" onClick={handlerCerrarSesion}>
            <i className="uil uil-exit"></i>Cerrar sesión
          </a>
        </div>
      </div>
    </div>
  )
}
export default withRouter(MenuLef)
