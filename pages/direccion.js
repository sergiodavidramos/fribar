import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import BanerPerfil from "../components/Perfil/components/BanerPerfil";
import Footer from "../components/Footer";
import Direcciones from "../components/Perfil/Direcciones";

export default () => (
  <>
    <Header />
    <div className="wrapper-carrito">
      <Breadcrumb />
      <BanerPerfil />
      <Direcciones />
    </div>
    <Footer />
  </>
);
