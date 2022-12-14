import Image from 'next/image'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import contactImg from '../../public/assets/contact.jpg'
import { ChangeEvent, useState } from 'react'
import formatPhone from '../../utils/formatPhone'
import Loader from '../Loader'

type Inputs = {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [phone, setPhone] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setIsLoading(true)

    const response = await fetch('api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const dataResponse = await response.json()
    reset()
    setPhone('')

    if (dataResponse.status === 200) {
      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
      }, 2500)
    }

    setIsLoading(false)
  }

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full lg:h-screen"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contato
        </p>
        <h2 className="py-4">Entre em Contato</h2>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
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
            className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4"
          >
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={contactImg}
                  alt="Entre em contato"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>

              <div>
                <h2 className="py-2">Diego Ricardo</h2>
                <p>FullStack Developer</p>
                <p className="py-4">
                  Estou dispon??vel para freelancer ou full-time. Entre em
                  contato e vamos conversar.
                </p>
              </div>

              <div>
                <p className="uppercase pt-8">Conecte-se Comigo</p>

                <div className="flex items-center justify-between py-4">
                  <motion.a
                    initial={{
                      y: -100,
                      opacity: 0
                    }}
                    transition={{ delay: 1, duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    href="https://www.linkedin.com/in/diego-ricardo-de-souza/"
                    target="_blank"
                    rel="noreferrer"
                    title="Linkedin"
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
                    transition={{ delay: 1, duration: 1.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    href="https://github.com/diegoricardosouza"
                    target="_blank"
                    rel="noreferrer"
                    title="Github Diego"
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
                    transition={{ delay: 1, duration: 1.8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    href="/#contact"
                    title="Entre em contato"
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
                    transition={{ delay: 1, duration: 2.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    href="/#about"
                    title="Sobre Diego"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* right */}
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
            className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4"
          >
            <div className="p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">
                      Nome*
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: true })}
                      className="border-2 rounded-md p-3 flex border-gray-300 focus:border-[#5651e5] outline-none ease-in duration-300"
                      id="name"
                    />
                    {errors.name && (
                      <p className="p-1 text-[14px] text-red-500">
                        Campo de preenchimento obrigat??rio
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="phone">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      value={phone}
                      onChange={handlePhoneChange}
                      maxLength={15}
                      className="border-2 rounded-md p-3 flex border-gray-300 focus:border-[#5651e5] outline-none ease-in duration-300"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="email">
                    Email*
                  </label>
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    className="border-2 rounded-md p-3 flex border-gray-300 focus:border-[#5651e5] outline-none ease-in duration-300"
                    id="email"
                  />
                  {errors.email && (
                    <p className="p-1 text-[14px] text-red-500">
                      Por favor digite um email v??lido.
                    </p>
                  )}
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="subject">
                    Assunto
                  </label>
                  <input
                    type="text"
                    {...register('subject')}
                    className="border-2 rounded-md p-3 flex border-gray-300 focus:border-[#5651e5] outline-none ease-in duration-300"
                    id="subject"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="message">
                    Mensagem
                  </label>
                  <textarea
                    {...register('message')}
                    className="border-2 rounded-md p-3 flex border-gray-300 focus:border-[#5651e5] outline-none ease-in duration-300"
                    rows={5}
                    id="message"
                  ></textarea>
                </div>

                <button
                  className="w-full p-4 text-gray-100 mt-4 button-disabled"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader /> : 'Enviar Mensagem'}
                </button>

                {success && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col pt-8 text-center"
                  >
                    <span className="bg-emerald-500 py-4 text-white rounded-md">
                      Mensagem enviada com sucesso!
                    </span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
