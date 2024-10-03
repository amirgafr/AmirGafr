import { useState } from "react";
import Navbar from "./Navbar";
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import logo from "/public/images/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto flex justify-between items-center px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img src={logo} alt="Amir" width={40} height={40} />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={toggleMenu}>
            <span className="material-symbols-rounded">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={isOpen} />
        </div>

        <div className="btn  max-md:hidden md:justify-self-end">
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/amirgafr"
              className="text-gray-500 hover:text-gray-900 "
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/amir-gafr-8a18b9147/"
              className="text-gray-500 hover:text-gray-900 "
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/amir_gafr/"
              className="text-gray-500 hover:text-gray-900 "
            >
              <FaInstagramSquare size={30} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
