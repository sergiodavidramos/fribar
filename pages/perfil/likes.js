import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BanerPerfil from '../../components/Perfil/components/BanerPerfil'
import Footer from '../../components/Footer'
import Likes from '../../components/Likes'

export default () => {
  return (
    <>
      <Header />
      <div className="wrapper-carrito">
        <Breadcrumb />
        <BanerPerfil />
        <Likes />
      </div>
      <Footer />
    </>
  )
}
