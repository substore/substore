import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Substore</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Red+Hat+Display:wght@700&display=swap" rel="stylesheet"/>
        <meta property="og:type" content="website"/>
        <meta name="description" content="Substore is the cloud platform for data. Deploy, and manage your datbases with simplicity."/>
          <meta property="og:title" content="Substore · Deploy your databases with simplicity" />
        <meta property="og:image" content="https://user-images.githubusercontent.com/59238070/199231127-4cb39582-07db-4e66-a2d9-a35f60058122.png" />
          <meta property="twitter:image" content="https://user-images.githubusercontent.com/59238070/199231127-4cb39582-07db-4e66-a2d9-a35f60058122.png" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}