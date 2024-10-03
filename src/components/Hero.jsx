import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

function Hero() {
  return (
    <section id="home" className=" pt-28 ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <p className="max-w-2xl mb-4 mt-4 text-white lg:mb-4 md:text-lg lg:text-xl dark:text-gray-400">
            Hello , I'm
          </p>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Amir Moslem Gafr
          </h1>
          <p className="max-w-2xl mb-4  text-white lg:mb-4 md:text-lg lg:text-xl dark:text-gray-400">
            I'm FrontEnd Developer
          </p>
          <div className="flex mt-4 mb-6 space-x-6  sm:mt-0">
            <a
              href="https://github.com/amirgafr"
              className="text-gray-500 hover:text-red-400 "
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/amir-gafr-8a18b9147/"
              className="text-gray-500 hover:text-red-400 "
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/amir_gafr/"
              className="text-gray-500 hover:text-red-400 "
            >
              <FaInstagramSquare size={30} />
            </a>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base  text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Download CV ..
            <GoDownload />
          </a>
        </div>
        <div className="mt-10 lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/public/images/amir2.png" width={656} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
