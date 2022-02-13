import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { } from recoil;
import { AppLayout } from "../src/components/applayout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default MyApp;
