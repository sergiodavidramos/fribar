import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BanerPerfil from '../../components/Perfil/components/BanerPerfil'
import Footer from '../../components/Footer'
import Likes from '../../components/Likes'
import Router from 'next/router'
import { useEffect, useContext } from 'react'
import UserContext from '../../components/UserContext'

export default () => {
  const { user } = useContext(UserContext)
  useEffect(() => {
    const user = localStorage.getItem('fribar-user')
    !user ? Router.push('/login') : ''
  }, [])
  return (
    <>
      <Header />
      <div className="wrapper">
        <Breadcrumb />
        <BanerPerfil />
        <Likes />
      </div>
      <Footer />
    </>
  )
}
