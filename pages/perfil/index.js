import Breadcrumb from '../../components/Breadcrumb'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Dashboard from '../../components/Perfil'
import BanerPerfil from '../../components/Perfil/components/BanerPerfil'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../../components/UserContext'
import Router from 'next/router'
import { API_URL } from '../../components/Config'

export default () => {
  const { user, token } = useContext(UserContext)
  const [pedidos, setPedido] = useState([])
  useEffect(() => {
    const user = localStorage.getItem('fribar-user')
    !user ? Router.push('/login') : ''
    if (token) {
      getMisPedidos(token)
    }
  }, [token])
  async function getMisPedidos(token) {
    const res = await fetch(
      `${API_URL}/pedido/detalle/cliente/id?pagina=1`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Constent-Type': 'application/json',
        },
      }
    )
    if (res.status === 401) signOut()
    const resPedidos = await res.json()
    if (resPedidos.error) {
      notify.show('Error al obtener tus pedidos', 'warning')
    } else {
      setPedido(resPedidos.body)
    }
  }
  return (
    <>
      <Header />
      <div className="wrapper">
        <Breadcrumb />
        <BanerPerfil />
        {user ? <Dashboard user={user} pedidos={pedidos} /> : ''}
      </div>
      <Footer />
    </>
  )
}
