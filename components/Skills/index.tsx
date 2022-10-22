import { motion } from 'framer-motion'
import SkillItem, { SkillItemProps } from '../SkillItem'

export type SkillsProps = {
  skills: SkillItemProps[]
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full lg:h-screen p-2"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">O que eu sei</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillItem
              key={skill.title}
              imagem={skill.imagem}
              title={skill.title}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
