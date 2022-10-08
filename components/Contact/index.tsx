import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import contactImg from '../../public/assets/contact.jpg'

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contato
        </p>
        <h2 className="py-4">Entre em Contato</h2>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
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
                  Estou disponível para freelancer ou full-time. Entre em
                  contato e vamos conversar.
                </p>
              </div>

              <div>
                <p className="uppercase pt-8">Conecte-se Comigo</p>

                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Nome</label>
                    <input
                      type="text"
                      className="border-2 rounded-md p-3 flex border-gray-300 focus:border-[#5651e5] outline-none ease-in duration-300"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Telefone</label>
                    <input
                      type="tel"
                      className="border-2 rounded-md p-3 flex border-gray-300 focus:border-[#5651e5] outline-none ease-in duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-md p-3 flex border-gray-300 focus:border-[#5651e5] outline-none ease-in duration-300"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Assunto</label>
                  <input
                    type="text"
                    className="border-2 rounded-md p-3 flex border-gray-300 focus:border-[#5651e5] outline-none ease-in duration-300"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Mensagem</label>
                  <textarea
                    className="border-2 rounded-md p-3 flex border-gray-300 focus:border-[#5651e5] outline-none ease-in duration-300"
                    rows={5}
                  ></textarea>
                </div>

                <button className="w-full p-4 text-gray-100 mt-4">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
