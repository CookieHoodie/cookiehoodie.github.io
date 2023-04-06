import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CH's Portfolio</title>
        {/* Google Analytics */}
        <script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-03S08YW4V3"
        />
        <script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-03S08YW4V3');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
