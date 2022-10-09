import { motion } from 'framer-motion'
import SkillItem from '../SkillItem'

const Skills = () => {
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
          <SkillItem image="/../public/assets/skills/html.png" title="HTML" />
          <SkillItem image="/../public/assets/skills/css.png" title="CSS" />
          <SkillItem
            image="/../public/assets/skills/javascript.png"
            title="Javascript"
          />
          <SkillItem image="/../public/assets/skills/react.png" title="React" />
          <SkillItem
            image="/../public/assets/skills/tailwind.png"
            title="Tailwind"
          />
          <SkillItem
            image="/../public/assets/skills/firebase.png"
            title="Firebase"
          />
          <SkillItem
            image="/../public/assets/skills/github1.png"
            title="Github"
          />
          <SkillItem
            image="/../public/assets/skills/shopify.png"
            title="Shopify"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
