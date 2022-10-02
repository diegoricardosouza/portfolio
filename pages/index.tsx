import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Diego Portfolio</title>
      </Head>

      <Navbar />
    </div>
  )
}

export default Home
