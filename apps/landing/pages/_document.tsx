import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Red+Hat+Display:wght@700&display=swap" rel="stylesheet"/>
        <meta type="og:website" content="website"/>  
        <meta name="description" content="The cloud platform for data. Deploy, and manage your databases with ease."/>
        <meta property="og:title" content="Substore | The cloud platform for data." />
        <meta property="og:image" content="https://user-images.githubusercontent.com/59238070/199231127-4cb39582-07db-4e66-a2d9-a35f60058122.png" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}