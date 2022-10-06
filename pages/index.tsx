import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Diego Ricardo - FullStack Developer</title>
      </Head>

      <Navbar />
      <main className="px-[7px] md:px-0">
        <Main />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  )
}

export default Home
