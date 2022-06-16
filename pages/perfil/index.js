import Breadcrumb from '../../components/Breadcrumb'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Dashboard from '../../components/Perfil'
import BanerPerfil from '../../components/Perfil/components/BanerPerfil'
import { useContext, useEffect } from 'react'
import UserContext from '../../components/UserContext'
import Head from 'next/head'
import Router from 'next/router'
import Loader from '../../components/Loader'
import { LoadFile } from '../../components/LoadFile'
export default () => {
  const { user } = useContext(UserContext)
  useEffect(() => {
    const user = localStorage.getItem('fribar-user')
    !user ? Router.push('/login') : ''
    // LoadFile()
  }, [])
  return (
    <>
      <Head></Head>
      <Header />
      <div className="wrapper">
        <Breadcrumb />
        <BanerPerfil />
        {user ? <Dashboard user={user} /> : ''}
      </div>
      <Footer />
    </>
  )
}
