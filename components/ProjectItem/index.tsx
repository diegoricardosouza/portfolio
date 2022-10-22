import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export type ProjectItemProps = {
  title: string
  imagem: {
    url: string | StaticImageData
  }
  slug: string
  subtitle: string
}

const ProjectItem = ({ title, imagem, slug, subtitle }: ProjectItemProps) => {
  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative flex items-center justify-center h-[400px] w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
    >
      <Image
        src={imagem.url}
        alt={title}
        className="rounded-xl group-hover:opacity-10 w-full object-cover"
        layout="fill"
      />

      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{subtitle}</p>
        <Link href={`projeto/${slug}`}>
          <a>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer w-[143px] m-auto">
              More Info
            </p>
          </a>
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectItem
