import Recompensas from "../../components/Recompensas";
import Breadcrumb from "../../components/Breadcrumb";
import BanerPerfil from "../../components/Perfil/components/BanerPerfil";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default () => (
  <>
    <Header />
    <div className="wrapper-carrito">
      <Breadcrumb />
      <BanerPerfil />
      <Recompensas />
    </div>
    <Footer />
  </>
);
