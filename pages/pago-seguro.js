import Carrito from '../components/Carrito'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useContext } from 'react'
import UserContext from '../components/UserContext'
import Breadcrumb from '../components/Breadcrumb'
export default () => {
  const {} = useContext(UserContext)
  return (
    <>
      <Header />
      <div className="wrapper">
        <Breadcrumb />
        <Carrito />
      </div>
      <Footer />
    </>
  )
}
