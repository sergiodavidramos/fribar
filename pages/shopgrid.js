import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ShopGrid from "../components/ShopGrid";

export default () => (
  <>
    <Header />
    <div className="wrapper-carrito">
      <Breadcrumb />
      <ShopGrid />
    </div>
    <Footer />
  </>
);
