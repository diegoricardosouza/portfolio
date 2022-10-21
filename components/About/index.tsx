import Image from 'next/image'
import { motion } from 'framer-motion'
// import aboutImg from '../../public/assets/about.jpg'

export type AboutProps = {
  conteudo: string
  imagem: string
}

const About = ({ conteudo, imagem }: AboutProps) => {
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

          <div
            className="page-about__content"
            dangerouslySetInnerHTML={{ __html: conteudo }}
          />
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
          className="w-full h-full min-h-[300px] m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 relative"
        >
          <Image src={imagem} className="rounded-xl" alt="/" layout="fill" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
