import { cdnUrls, gtmID } from 'config';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    console.log(cdnUrls);
    return (
      <Html>
        <Head>
          <script
            src="https://kit.fontawesome.com/78741177fd.js"
            crossOrigin="anonymous"
          ></script>
          <link
            href={`${cdnUrls[process.env.NEXT_PUBLIC_ENV]}/css/base.css?v=7.9`}
            rel="stylesheet"
            as="style"
          />
          <link
            href={`${cdnUrls[process.env.NEXT_PUBLIC_ENV]}/css/brand.css?v=8.4`}
            rel="stylesheet"
            as="style"
          />
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer', '${gtmID}');`,
            }}
          ></Script>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe
              src="https://www.googletagmanager.com/ns.html?id=${gtmID}"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>`,
            }}
          ></noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
