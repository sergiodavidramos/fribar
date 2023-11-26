import Carrito from '../components/Carrito'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
export default () => {
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
