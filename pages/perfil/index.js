import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Dashboard from "../../components/Perfil";
import BanerPerfil from "../../components/Perfil/components/BanerPerfil";

export default () => (
  <>
    <Header />
    <div className="wrapper-carrito">
      <Breadcrumb />
      <BanerPerfil />
      <Dashboard />
    </div>
    <Footer />
  </>
);
