import Header from '../../components/Header'
import BanerPerfil from '../../components/Perfil/components/BanerPerfil'
import Footer from '../../components/Footer'
import Billetera from '../../components/Billetera'
import { useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Breadcrumb from '../../components/Breadcrumb'

export default () => {
  useEffect(() => {
    const token = localStorage.getItem('fribar-user')
    token ? '' : Router.replace('/login')
  }, [])
  return (
    <>
      <Header />
      <div className="wrapper">
        <Breadcrumb />
        <BanerPerfil />
        <Billetera />
      </div>
      <Footer />
    </>
  )
}
