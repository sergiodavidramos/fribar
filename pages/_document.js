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
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <script defer="defer" src="/js/scripts.min.js"></script>
          <script
            defer="defer"
            src="vendor/revslider/js/jquery.themepunch.tools.min.js"
          ></script>
          <script
            defer="defer"
            src="vendor/revslider/js/jquery.themepunch.revolution.min.js"
          ></script>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
