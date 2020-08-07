import Head from "next/head";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Destacados from "../components/Destacados";
import MejoresValores from "../components/MejoresValores";
import Footer from "../components/Footer";
export default class Home extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>FriFolly</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1"
          />
          <meta name="format-detection" content="telephone=no"></meta>
          <meta name="theme-color" content="#2775FF"></meta>
          <meta name="keywords" content="themeforest, theme, html, template" />
          <meta
            name="description"
            content="themeforest, theme, html, template"
          />
          <meta property="og:title" content="My page title" key="title" />
        </Head>

        <Header />
        <Carrousel />
        <div className="wrapper">
          <Banner />
          <Categories />
          <Destacados />
          <MejoresValores />
          <Destacados />
          <Destacados />
        </div>
        <Footer />
        <script></script>
      </>
    );
  }
}
