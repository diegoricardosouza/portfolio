import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
