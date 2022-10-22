import { GetStaticProps } from 'next'
import Head from 'next/head'
import About, { AboutProps } from '../components/About'
import Contact from '../components/Contact'
import Main, { MainProps } from '../components/Main'
import { ProjectItemProps } from '../components/ProjectItem'
import Projects from '../components/Projects'
import { SkillItemProps } from '../components/SkillItem'
import Skills from '../components/Skills'
import client from '../graphql/client'
import {
  GetAboutQuery,
  GetInitialQuery,
  GetProjectsQuery,
  GetSkillsQuery
} from '../graphql/generated/graphql'
import {
  GET_ABOUT,
  GET_INITIAL,
  GET_PROJECTS,
  GET_SKILLS
} from '../graphql/queries'

export type HomeProps = {
  about: AboutProps
  initial: MainProps
  skills: SkillItemProps[]
  projects: ProjectItemProps[]
}

export default function Home({ about, initial, skills, projects }: HomeProps) {
  return (
    // <div className="h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden">
    <div className="w-full">
      <Head>
        <title>Diego Ricardo - FullStack Developer</title>
      </Head>

      <main className="px-[7px] md:px-0">
        <section id="home">
          <Main
            title={initial.title}
            name={initial.name}
            subtitle={initial.subtitle}
            content={initial.content}
            frases={initial.frases}
          />
        </section>

        <section id="about">
          <About conteudo={about.conteudo} imagem={about.imagem} />
        </section>

        <section id="skills">
          <Skills skills={skills} />
        </section>

        <section id="projects">
          <Projects projects={projects} />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { inicios } = await client.request<GetInitialQuery>(GET_INITIAL)
  const { abouts } = await client.request<GetAboutQuery>(GET_ABOUT)
  const { skills } = await client.request<GetSkillsQuery>(GET_SKILLS)
  const { projects } = await client.request<GetProjectsQuery>(GET_PROJECTS)

  return {
    props: {
      about: {
        conteudo: abouts[0].conteudo.html,
        imagem: abouts[0].imagem.url
      },
      initial: {
        title: inicios[0].title,
        name: inicios[0].name,
        subtitle: inicios[0].subtitle,
        content: inicios[0].content,
        frases: inicios[0].frases
      },
      skills,
      projects
    }
  }
}
