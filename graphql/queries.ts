import { gql } from 'graphql-request'

export const GET_INITIAL = gql`
  query getInitial {
    inicios {
      title
      name
      subtitle
      content
      frases {
        title
      }
    }
  }
`

export const GET_ABOUT = gql`
  query getAbout {
    abouts {
      conteudo {
        html
      }
      imagem {
        url
      }
    }
  }
`

export const GET_SKILLS = gql`
  query getSkills($first: Int) {
    skills(first: $first) {
      title
      imagem {
        url
      }
    }
  }
`

export const GET_PROJECTS = gql`
  query getProjects($first: Int) {
    projects(first: $first) {
      title
      slug
      subtitle
      imagem {
        url
      }
    }
  }
`

export const GET_PROJECT_BY_SLUG = gql`
  query getProjectBySlug($slug: String!) {
    project(where: { slug: $slug }) {
      title
      slug
      subtitle
      linkdemo
      linkrepo
      content {
        html
      }
      technologies {
        name
      }
      imagem {
        url
        width
        height
      }
    }
  }
`
