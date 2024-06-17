import MisPedidos from '../../components/MisPedidos'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BanerPerfil from '../../components/Perfil/components/BanerPerfil'
import Footer from '../../components/Footer'
import { useEffect } from 'react'

export default () => {
  useEffect(() => {
    Notification.requestPermission().then((resultado) => {})
  }, [])
  return (
    <>
      <Header />
      <div className="wrapper">
        <Breadcrumb />
        <BanerPerfil />
        <MisPedidos />
      </div>
      <Footer />
    </>
  )
}
