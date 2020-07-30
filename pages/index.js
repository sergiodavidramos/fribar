import Head from "next/head";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Destacados from "../components/Destacados";
import MejoresValores from "../components/MejoresValores";
import Footer from "../components/Footer";

export default class Home extends React.Component {
  componentDidMount() {
    jQuery("#rev_slider_5_1")
      .show()
      .revolution({
        sliderType: "standard",
        jsFileLocation: "vendor/revslider/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 5000,
        navigation: {
          keyboardNavigation: "off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          mouseScrollReverse: "default",
          onHoverStop: "off",
          arrows: {
            style: "custom",
            enable: true,
            hide_onmobile: false,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            tmp: "",
            left: {
              h_align: "left",
              v_align: "center",
              h_offset: 10,
              v_offset: 0,
            },
            right: {
              h_align: "right",
              v_align: "center",
              h_offset: 10,
              v_offset: 0,
            },
          },
        },
        responsiveLevels: [576, 480, 480, 480],
        visibilityLevels: [576, 576, 576, 480],
        gridwidth: [1200, 992, 768, 576],
        gridheight: [960, 768, 960, 720],
        lazyType: "none",
        parallax: {
          type: "mouse",
          origo: "slidercenter",
          speed: 400,
          speedbg: 0,
          speedls: 0,
          levels: [4, 6, 8, 10, 12, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
          disable_onmobile: "on",
        },
        shadow: 0,
        spinner: "spinner2",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "on",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar: "on",
        hideThumbsOnMobile: "on",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        },
      });
  }

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
      </>
    );
  }
}
