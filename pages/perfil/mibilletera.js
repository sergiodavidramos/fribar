import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import BanerPerfil from "../../components/Perfil/components/BanerPerfil";
import Footer from "../../components/Footer";
import Billetera from "../../components/Billetera";

export default () => (
  <>
    <Header />
    <div className="wrapper-carrito">
      <Breadcrumb />
      <BanerPerfil />
      <Billetera />
    </div>
    <Footer />
  </>
);
