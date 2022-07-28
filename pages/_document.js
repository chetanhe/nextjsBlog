import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <script src="https://kit.fontawesome.com/78741177fd.js" crossorigin="anonymous"></script>
            <link href="https://121cdn.dev-projects.com/new121doc/css/base.css?v=7.9" rel="stylesheet" onload="this.onload=null;this.rel='stylesheet'" as="style" />
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