import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    // <div className="h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden">
    <div>
      <Head>
        <title>Diego Ricardo - FullStack Developer</title>
      </Head>

      <main className="px-[7px] md:px-0">
        <section id="home">
          <Main />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default Home
