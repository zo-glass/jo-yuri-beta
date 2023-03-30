import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:url" content="http://zo.glass/"/>
        <meta property="og:type" content="profile"/>
        <meta property="og:title" content="Jo Yuri"/>
        <meta property="og:description" content="Jo Yuri"/>
        <meta property="og:image" content="/assets/images/195457094_157719746328937_1721356126810258679_n.jpg"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
