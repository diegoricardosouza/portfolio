import Image from 'next/image'
import { motion } from 'framer-motion'

export type SkillItemProps = {
  imagem: {
    url: string
  }
  title: string
}

const SkillItem = ({ imagem, title }: SkillItemProps) => {
  return (
    <motion.article
      initial={{
        y: -100,
        opacity: 0
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="p-6 shadow-xl rounded-xl"
    >
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={imagem.url} width="64px" height="64px" alt="Html" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
    </motion.article>
  )
}

export default SkillItem
