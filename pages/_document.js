import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        {/* <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords"
            content="wrappixel, admin dashboard, html css dashboard, web dashboard, bootstrap 5 admin, bootstrap 5, css3 dashboard, bootstrap 5 dashboard, admin pro admin bootstrap 5 dashboard, frontend, responsive bootstrap 5 admin template, material design, material dashboard bootstrap 5 dashboard template" />
        <meta name="description" content="Admin Pro is powerful and clean admin dashboard template" />
        <meta name="robots" content="noindex,nofollow" /> */}
        

        {/* <link rel="shortcut icon" type="image/x-icon" href="/assets/images/brand/favicon.ico" />
        <link href="/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet"/>
        <link href="/assets/css/dark-style.css" rel="stylesheet"/>
        <link href="/assets/css/skin-modes.css" rel="stylesheet" />
        <link href="/assets/plugins/charts-c3/c3-chart.css" rel="stylesheet"/>
        <link href="/assets/css/sidemenu.css" rel="stylesheet" id="sidemenu-theme" />
        <link href="/assets/plugins/p-scroll/perfect-scrollbar.css" rel="stylesheet" />
        <link href="/assets/plugins/icons/icons.css" rel="stylesheet"/>
        <link href="/assets/plugins/sidebar/sidebar.css" rel="stylesheet"/>
        <link id="theme" rel="stylesheet" type="text/css" media="all" href="/assets/colors/color1.css"/>
        <link rel="stylesheet" href="/assets/plugins/jQuerytransfer/jquery.transfer.css" />
		    <link rel="stylesheet" href="/assets/plugins/jQuerytransfer/icon_font/icon_font.css" /> */}
        

        </Head>
        <body>
          <Main />
          <NextScript />

     

      <script async src="/assets/plugins/jquery/jquery.min.js"></script>
      <script async src="/assets/plugins/bootstrap/js/popper.min.js"></script>
      <script async src="/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
          
      <script async src="/assets/plugins/input-mask/jquery.mask.min.js"></script>
      <script async src="/assets/plugins/sidemenu/sidemenu.js"></script>
      <script src="/assets/plugins/sidebar/sidebar.js"></script>
      
      <script async src="/assets/plugins/p-scroll/perfect-scrollbar.js"></script>
      <script async src="/assets/plugins/p-scroll/pscroll.js"></script>
      <script async src="/assets/plugins/p-scroll/pscroll-1.js"></script>
      <script async src="/assets/plugins/jQuerytransfer/jquery.transfer.js"></script>

      {/* Frontend */}
      
        </body>
      </Html>
    )
  }
}

export default MyDocument