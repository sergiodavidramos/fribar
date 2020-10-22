import Breadcrumb from '../../components/Breadcrumb'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Dashboard from '../../components/Perfil'
import BanerPerfil from '../../components/Perfil/components/BanerPerfil'
import { useContext } from 'react'
import UserContext from '../../components/UserContext'
import Loader from '../../components/Loader'
export default () => {
  const { user } = useContext(UserContext)
  return (
    <>
      <Header />
      <div className="wrapper-carrito">
        <Breadcrumb />
        <BanerPerfil />
        {user ? <Dashboard user={user} /> : ''}
      </div>
      <Footer />
    </>
  )
}
