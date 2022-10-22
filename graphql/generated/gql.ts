/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query getInitial {\n    inicios {\n      title\n      name\n      subtitle\n      content\n      frases {\n        title\n      }\n    }\n  }\n": types.GetInitialDocument,
    "\n  query getAbout {\n    abouts {\n      conteudo {\n        html\n      }\n      imagem {\n        url\n      }\n    }\n  }\n": types.GetAboutDocument,
    "\n  query getSkills {\n    skills {\n      title\n      imagem {\n        url\n      }\n    }\n  }\n": types.GetSkillsDocument,
    "\n  query getProjects {\n    projects {\n      title\n      slug\n      subtitle\n      imagem {\n        url\n      }\n    }\n  }\n": types.GetProjectsDocument,
    "\n  query getProjectBySlug($slug: String!) {\n    project(where: { slug: $slug }) {\n      title\n      slug\n      subtitle\n      linkdemo\n      linkrepo\n      content {\n        html\n      }\n      technologies {\n        name\n      }\n      imagem {\n        url\n      }\n    }\n  }\n": types.GetProjectBySlugDocument,
};

export function graphql(source: "\n  query getInitial {\n    inicios {\n      title\n      name\n      subtitle\n      content\n      frases {\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query getInitial {\n    inicios {\n      title\n      name\n      subtitle\n      content\n      frases {\n        title\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query getAbout {\n    abouts {\n      conteudo {\n        html\n      }\n      imagem {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAbout {\n    abouts {\n      conteudo {\n        html\n      }\n      imagem {\n        url\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query getSkills {\n    skills {\n      title\n      imagem {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query getSkills {\n    skills {\n      title\n      imagem {\n        url\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query getProjects {\n    projects {\n      title\n      slug\n      subtitle\n      imagem {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProjects {\n    projects {\n      title\n      slug\n      subtitle\n      imagem {\n        url\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query getProjectBySlug($slug: String!) {\n    project(where: { slug: $slug }) {\n      title\n      slug\n      subtitle\n      linkdemo\n      linkrepo\n      content {\n        html\n      }\n      technologies {\n        name\n      }\n      imagem {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProjectBySlug($slug: String!) {\n    project(where: { slug: $slug }) {\n      title\n      slug\n      subtitle\n      linkdemo\n      linkrepo\n      content {\n        html\n      }\n      technologies {\n        name\n      }\n      imagem {\n        url\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;