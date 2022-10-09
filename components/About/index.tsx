import Image from 'next/image'
import { motion } from 'framer-motion'
import aboutImg from '../../public/assets/about.jpg'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <motion.div
          initial={{
            x: -300,
            opacity: 0
          }}
          transition={{
            duration: 1
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          className="col-span-2"
        >
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Sobre
          </p>
          <h2 className="py-4">Quem sou eu</h2>

          <p className="py-2 text-gray-600">
            Eu me especializei na criação de aplicações front-end responsivas
            para dispositivos móveis que se conectam com APIs e outras
            tecnologias de back-end. Eu sou apaixonado por aprender novas
            tecnologias e entender que há mais de uma maneira de realizar uma
            tarefa. Embora eu seja mais proficiente na construção de aplicações
            front-end usando HTML, CSS, Javascript e React, eu aprendo rápido e
            posso pegar novas tecnologias conforme eu precise. Acredito que para
            ser um grande desenvolvedor não é apenas usar uma linguagem
            específica, mas sim escolher a melhor ferramenta para o seu
            trabalho.
          </p>

          <p className="py-2 text-gray-600">
            Eu iniciei como desenvolvedor web em 2012, trabalhando com Front-end
            e Back-end, tenho experiência em Laravel, React, Javascript,
            Wordpress que já fiz diversas aplicações, já fiz também algumas
            aplicações utilizando outras tecnologias.
          </p>

          <p className="py-2 text-gray-600 underline cursor-pointer">
            Confira alguns dos meus últimos projetos.
          </p>
        </motion.div>

        <motion.div
          initial={{
            x: 300,
            opacity: 0
          }}
          transition={{
            duration: 1
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          className="w-full h-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 relative"
        >
          <Image src={aboutImg} className="rounded-xl" alt="/" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
