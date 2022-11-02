import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

import Navbar from '../components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/icon-512.png" />
        <link rel="apple-touch-icon" href="/assets/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#5651e5" />
      </Head>
      <DefaultSeo {...SEO} />
      <Navbar />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
