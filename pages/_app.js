import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Chin Hang's Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
