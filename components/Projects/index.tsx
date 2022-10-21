import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper'

import ProjectItem from '../ProjectItem'
import propertyImg from '../../public/assets/projects/property.jpg'
import cryptoImg from '../../public/assets/projects/crypto.jpg'
import netflixImg from '../../public/assets/projects/netflix.jpg'
import twitchImg from '../../public/assets/projects/twitch.jpg'

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full"
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projetos
        </p>
        <h2 className="py-4">O que construí</h2>

        <div>
          <Swiper
            breakpoints={{
              480: {
                slidesPerView: 1
              },
              // when window width is >= 768px
              1366: {
                slidesPerView: 2
              }
            }}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true
            }}
            modules={[Pagination, Autoplay]}
            className="!pb-[60px] slide-projects"
          >
            <SwiperSlide>
              <ProjectItem
                title="Property Finder"
                backgroundImg={propertyImg}
                projectUrl="/property"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProjectItem
                title="Crypto App"
                backgroundImg={cryptoImg}
                projectUrl="/crypto"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProjectItem
                title="Netflix"
                backgroundImg={netflixImg}
                projectUrl="/netflix"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProjectItem
                title="Twitch"
                backgroundImg={twitchImg}
                projectUrl="/twitch"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
