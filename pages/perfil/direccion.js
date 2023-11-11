import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BanerPerfil from '../../components/Perfil/components/BanerPerfil'
import Footer from '../../components/Footer'
import Direcciones from '../../components/Perfil/Direcciones'
import 'mapbox-gl/dist/mapbox-gl.css'

export default () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Breadcrumb />
        <BanerPerfil />
        <Direcciones />
      </div>
      <Footer />
    </>
  )
}
