import MisPedidos from '../../components/MisPedidos'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BanerPerfil from '../../components/Perfil/components/BanerPerfil'
import Footer from '../../components/Footer'

export default () => {
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
