import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RiRadioButtonFill } from 'react-icons/ri'
import client from '../../graphql/client'
import {
  GetProjectBySlugQuery,
  GetProjectsQuery
} from '../../graphql/generated/graphql'
import { GET_PROJECTS, GET_PROJECT_BY_SLUG } from '../../graphql/queries'

export type PageProps = {
  title: string
  subtitle: string
  linkdemo: string
  linkrepo: string
  content: string
  technologies: {
    name: string
  }[]
  imagem: {
    url: string
    width: number
    height: number
  }
}

export default function Page({
  title,
  subtitle,
  linkdemo,
  linkrepo,
  content,
  technologies,
  imagem
}: PageProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${title} - Diego Ricardo - FullStack Developer`}
        description={
          content ||
          'Estou focado na criação de aplicações web front-end responsivas integrando com tecnologias de back-end.'
        }
        canonical="https://www.diegoricardoweb.dev"
        openGraph={{
          url: 'https://www.diegoricardoweb.dev',
          title: `${title} - Diego Ricardo - FullStack Developer`,
          description:
            content ||
            'Estou focado na criação de aplicações web front-end responsivas integrando com tecnologias de back-end.',
          images: [
            {
              url: imagem.url,
              width: imagem.width,
              height: imagem.height,
              alt: `${title}`
            }
          ],
          site_name: 'Diego Ricardo - FullStack Developer'
        }}
      />

      <main className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />

          <Image
            src={imagem.url}
            alt={title}
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
          />

          <header className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-4 md:px-0">
            <h1 className="py-2 text-3xl sm:text-4xl">{title}</h1>
            <h3>{subtitle}</h3>
          </header>
        </div>

        <div className="max-w-[1240px] mx-auto p-4 md:px-0 md:grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Projeto</p>
            <h2>Visão geral</h2>

            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="mb-8"
            />

            <a
              href={linkdemo}
              className="customLink px-8 py-2 mt-4 mr-8"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>

            <a
              href={linkrepo}
              className="customLink px-8 py-2 mt-4 mr-8"
              target="_blank"
              rel="noreferrer"
            >
              Código
            </a>
          </div>

          <div className="col-span-4 my-8 md:my-0 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div>
              <p className="text-center font-bold pb-2">Tecnologias</p>

              <div className="grid grid-cols-2 md:grid-cols-1">
                {technologies.map((item) => (
                  <p
                    key={item.name}
                    className="text-gray-600 py-2 flex items-center"
                  >
                    <RiRadioButtonFill className="pr-1" /> {item.name}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <Link href="/#projects">
            <p className="underline cursor-pointer">Voltar</p>
          </Link>
        </div>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const { projects } = await client.request<GetProjectsQuery>(GET_PROJECTS, {
    first: 3
  })

  const paths = projects.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { project } = await client.request<GetProjectBySlugQuery>(
    GET_PROJECT_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!project) return { notFound: true }

  return {
    props: {
      title: project.title,
      subtitle: project.subtitle,
      linkdemo: project.linkdemo,
      linkrepo: project.linkrepo,
      content: project.content?.html,
      technologies: project.technologies,
      imagem: project.imagem
    },
    revalidate: 60
  }
}
