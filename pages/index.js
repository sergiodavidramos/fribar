import Head from "next/head";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import $, { extend } from "jquery";

export default class hola extends React.Component {
  componentDidMount() {
    console.log("asdasdas", jQuery);
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
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
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
          <meta charset="utf-8" />
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
          <link
            rel="stylesheet"
            id="brk-direction-bootstrap"
            href="/css/assets/bootstrap.css"
          />
          <link
            id="brk-css-min"
            rel="stylesheet"
            href="/css/assets/styles.min.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            id="brk-skin-color"
            href="/css/skins/brk-blue.css"
          />
          <link
            id="brk-base-color"
            rel="stylesheet"
            href="/css/skins/brk-base-color.css"
          />
          <link
            rel="stylesheet"
            id="brk-direction-offsets"
            href="/css/assets/offsets.css"
          ></link>
          <link
            rel="stylesheet"
            href="/vendor/revslider/css/settings.css"
          ></link>
        </Head>

        <div className="main-page">
          <div
            className="brk-header-mobile"
            data-brk-library="component__header"
          >
            <div className="brk-header-mobile__open ">
              <span></span>
            </div>
            <div className="brk-header-mobile__logo">
              <a href="#">
                <img src="img/logo-2.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <Header />
        <Carrousel />
        <style jsx>{`
          #rev_slider_5_1_wrapper .tp-loader.spinner2 {
            background-color: #0071fc !important;
          }
        `}</style>

        {/* <script defer="defer" src="/js/scripts.min.js"></script> */}
        {/* <script
          defer="defer"
          src="/vendor/revslider/js/jquery.themepunch.tools.min.js"
        ></script>
        <script
          defer="defer"
          src="/vendor/revslider/js/jquery.themepunch.revolution.min.js"
        ></script> */}
        <script
          defer="defer"
          src="/vendor/revslider/js/extensions/revolution.extension.layeranimation.min.js"
        ></script>
        <script
          defer="defer"
          src="/vendor/revslider/js/extensions/revolution.extension.navigation.min.js"
        ></script>
        <script
          defer="defer"
          src="/vendor/revslider/js/extensions/revolution.extension.parallax.min.js"
        ></script>
        <script
          defer="defer"
          src="/vendor/revslider/js/extensions/revolution.extension.slideanims.min.js"
        ></script>
        <script
          defer="defer"
          src="/vendor/revslider/js/extensions/revolution.extension.actions.min.js"
        ></script>

        {/* <script> */}
        {/* {console.log("hola", jQuery)} */}
        {/* </script> */}
      </>
    );
  }
}
