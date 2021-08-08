/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="id">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="keywords" content="Ami Huda Wedding" />
          <meta name="theme-color" content="#000000" />
          <meta name="theme-color" content="#0085ad" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Ami Huda Wedding" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="msapplication-navbutton-color" content="#0085ad" />
          <meta name="msapplication-TileColor" content="#0085ad" />
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
          <meta name="msapplication-config" content="browserconfig.xml" />
          <meta name="application-name" content="Ami Huda Wedding" />
          <meta name="msapplication-tooltip" content="Tooltip Text" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />
          <meta name="nightmode" content="enable" />
          <meta name="layoutmode" content="fitscreen/standard" />
          <meta name="imagemode" content="force" />
          <meta name="screen-orientation" content="portrait" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="/favicon-16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/favicon-32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link
            href="/favicon-48.png"
            rel="icon"
            type="image/png"
            sizes="48x48"
          />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link
            href="/touch-icon-ipad.png"
            rel="apple-touch-icon"
            sizes="76x76"
          />
          <link
            href="/touch-icon-iphone-retina.png"
            rel="apple-touch-icon"
            sizes="120x120"
          />
          <link
            href="/touch-icon-ipad-retina.png"
            rel="apple-touch-icon"
            sizes="152x152"
          />
          <link
            href="/touch-icon-start-up-320x480.png"
            rel="apple-touch-startup-image"
          />
          <link href="/icon.svg" rel="mask-icon" size="any" color="#0085ad" />
          <link href="/icon-192x192.png" rel="icon" sizes="192x192" />
          <link href="/icon-128x128.png" rel="icon" sizes="128x128" />
          <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          <link
            href="/icon-52x52.png"
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
          />
          <link href="/icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
            crossOrigin="anonymous"
            referrerpolicy="no-referrer"
          />

          <link href="css/bootstrap.min.css" rel="stylesheet" />
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          />

          <link href="css/style.css" rel="stylesheet" />
          <link href="css/main.css" rel="stylesheet" />
        </Head>

        <body>
          <Main />
          <NextScript />

          <script src="js/jquery-3.3.1.min.js"></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossOrigin="anonymous"
          ></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
          <script src="js/script.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
