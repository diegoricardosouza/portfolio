import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

export type FraseProps = {
  title: string
}

export type MainProps = {
  title: string
  name: string
  subtitle: string
  content: string
  frases: FraseProps[]
}

const Main = ({ title, name, subtitle, content, frases }: MainProps) => {
  const [text, count] = useTypewriter({
    words: frases?.map((frase) => frase.title),
    loop: true,
    delaySpeed: 2000
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-screen text-center"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <motion.p
            initial={{
              y: -100,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase text-sm tracking-widest text-gray-600"
          >
            {subtitle}
          </motion.p>

          <motion.h1
            initial={{
              x: -300,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="py-4 text-gray-700"
          >
            {title} <span className="text-[#5651e5]">{name}</span>
            <span className="py-2 text-gray-700 block">
              {text}
              <span className="font-normal">
                <Cursor />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{
              y: -100,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="py-4 text-gray-600 max-w-[70%] m-auto"
          >
            {content}
          </motion.p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <motion.a
              initial={{
                y: -100,
                opacity: 0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              href="https://www.linkedin.com/in/diego-ricardo-de-souza/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </motion.a>

            <motion.a
              initial={{
                y: -100,
                opacity: 0
              }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              href="https://github.com/diegoricardosouza"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </motion.a>

            <motion.a
              initial={{
                y: -100,
                opacity: 0
              }}
              transition={{ duration: 1.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              href="/#contact"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </motion.a>

            <motion.a
              initial={{
                y: -100,
                opacity: 0
              }}
              transition={{ duration: 2.1 }}
              whileInView={{ opacity: 1, y: 0 }}
              href="/#about"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Main
