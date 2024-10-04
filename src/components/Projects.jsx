import { FaGithub, FaLink } from "react-icons/fa";
import proj1 from "../../public/images/project-1.jpg";
import proj2 from "../../public/images/projectt-2.jpg";
import proj3 from "../../public/images/projectt-3.jpg";
import proj4 from "../../public/images/projectt-4.jpg";
import proj5 from "../../public/images/projectt-5.jpg";
import proj6 from "../../public/images/projectt-6.jpg";
function Projects() {
  return (
    <section id="work" className="pt-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            My Projects
          </h2>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="https://amirgafr.github.io/BookList-App-OOP/">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={proj1}
                alt=""
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">BookList App OOP</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                #javascript #oop
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                A project that is based on OOP (object oriented programming).
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://github.com/amirgafr/BookList-App-OOP"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://amirgafr.github.io/BookList-App-OOP/"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaLink />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="https://amirgafr.github.io/product-list-with-cart-main/">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={proj2}
                alt=""
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">New product list with cart</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                #HTML #CSS #JS #Api
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                New product-list-with-cart-main Project! Full Responsive Website
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://github.com/amirgafr/product-list-with-cart-main"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://amirgafr.github.io/product-list-with-cart-main/"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaLink />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="https://amirgafr.github.io/Travel-List-React-App/">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={proj3}
                alt=""
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Travel List React App</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                #React #State #Events #formSubmissions
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                A project that is based on (React).
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://github.com/amirgafr/Travel-List-React-App"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://amirgafr.github.io/Travel-List-React-App/"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaLink />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="https://amirgafr.github.io/Eat-In-Split-React/">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={proj4}
                alt=""
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Eat In Split React App</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                #React #State #Events #formSubmissions
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                A project that is based on (React).
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://github.com/amirgafr/Eat-In-Split-React"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://amirgafr.github.io/Eat-In-Split-React/"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaLink />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="https://weather-app-react-class.vercel.app/">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={proj5}
                alt=""
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">WeatherApp React Class</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                #React #Class #Fetching #ChildParent
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                A project that is based on (Class Component).
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://github.com/amirgafr/WeatherApp-React-Class"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://weather-app-react-class.vercel.app/"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaLink />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="https://redux-shopping-cart-lyart.vercel.app/">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={proj6}
                alt=""
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Redux Shopping cart</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                #ReduxToolkit
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                A project that is based on (Redux Toolkit).
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://github.com/amirgafr/redux-Shopping-cart"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://redux-shopping-cart-lyart.vercel.app/"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaLink />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
