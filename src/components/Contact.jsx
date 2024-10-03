import { AiTwotoneMail } from "react-icons/ai";
import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdContactPhone, MdOutlinePhoneAndroid } from "react-icons/md";

function Contact() {
  return (
    <footer id="contact" className="p-4 bg-zinc-700">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a className="flex items-center">
              <MdContactPhone size={40} />
              <span className="self-center pl-4 text-2xl font-semibold whitespace-nowrap dark:text-white">
                Contact Me
              </span>
            </a>
          </div>
          <div className="grid  grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="text-center">
              <span>
                <MdOutlinePhoneAndroid size={30} className="mx-auto" />
              </span>
              <ul className="text-white mt-4">
                <li className="mb-4">
                  <a className="hover:underline">Phone</a>
                </li>
                <li>
                  <a className="hover:underline font-bold">+971 50 728 8122</a>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <span>
                <AiTwotoneMail size={30} className="mx-auto" />
              </span>
              <ul className="text-white mt-4">
                <li className="mb-4">
                  <a className="hover:underline">Email</a>
                </li>
                <li>
                  <a className="hover:underline font-bold">
                    amirmoslem23@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <span>
                <FaWhatsapp size={30} className="mx-auto" />
              </span>
              <ul className="text-white mt-4">
                <li className="mb-4">
                  <a className="hover:underline">Whatsapp</a>
                </li>
                <li>
                  <a className="hover:underline font-bold">+971 50 728 8122</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 <a className="hover:underline">Amir Gafr</a>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/amirgafr"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/amir-gafr-8a18b9147/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/amir_gafr/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaInstagramSquare size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
