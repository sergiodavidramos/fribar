// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#ff5a09"></meta>
          <link rel="icon" href="/img/icon.svg" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          <script src="/js/jquery-3.3.1.min.js"></script>
          <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="/vendor/OwlCarousel/owl.carousel.js"></script>
          <script src="/vendor/semantic/semantic.min.js"></script>
          <script src="/js/jquery.countdown.min.js"></script>
          <script src="/js/custom.js"></script>
          <script src="/js/offset_overlay.js"></script>
          <script src="/js/night-mode.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
