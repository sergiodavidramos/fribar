// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#ff5a09"></meta>
          <link href="/css/style.css" rel="stylesheet"></link>
          <link href="/vendor/unicons-2.0.1/css/unicons.css" rel="stylesheet" />
          <link href="/css/responsive.css" rel="stylesheet" />
          <link rel='icon' href="/img/icon5.svg" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="/vendor/fontawesome-free/css/all.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/vendor/semantic/semantic.min.css"
          ></link>
          <link
            href="/vendor/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link href="/css/step-wizard.css" rel="stylesheet" />
          <link href="/css/night-mode.css" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="/vendor/revslider/css/settings.css"
          ></link>

          <link
            href="/vendor/OwlCarousel/assets/owl.carousel.css"
            rel="stylesheet"
          />
          <link
            href="/vendor/OwlCarousel/assets/owl.theme.default.min.css"
            rel="stylesheet"
          />

          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />

          <script
            defer="defer"
            src="/vendor/revslider/js/jquery.themepunch.tools.min.js"
          ></script>
          <script
            defer="defer"
            src="/vendor/revslider/js/jquery.themepunch.revolution.min.js"
          ></script>
          <script src="/js/jquery-3.3.1.min.js"></script>
          <script src="/vendor/OwlCarousel/owl.carousel.js"></script>
          <script src="/js/revslider.js" />
          <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="/vendor/semantic/semantic.min.js"></script>
          <script src="/js/jquery.countdown.min.js"></script>
          <script src="/js/custom.js"></script>
          <script src="/js/product.thumbnail.slider.js"></script>
          <script src="/js/offset_overlay.js"></script>
          <script src="/js/night-mode.js"></script>
          <script src="/js/scripts.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
