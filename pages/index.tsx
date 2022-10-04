import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Diego Portfolio</title>
      </Head>

      <Navbar />
      <main>
        <Main />
        <About />
        <Skills />
      </main>
    </div>
  )
}

export default Home
