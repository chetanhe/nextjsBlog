import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <script src="https://kit.fontawesome.com/78741177fd.js" crossOrigin="anonymous"></script>
            <link href="https://121cdn.dev-projects.com/new121doc/css/base.css?v=7.9" rel="stylesheet"  as="style" />
            <link href="https://121cdn.dev-projects.com/new121doc/css/brand.css?v=8.4" rel="stylesheet"  as="style" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument