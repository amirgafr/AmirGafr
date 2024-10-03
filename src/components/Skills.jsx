import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { GrJs } from "react-icons/gr";
import { SiReactrouter, SiRedux, SiTailwindcss } from "react-icons/si";

function Skills() {
  return (
    <div>
      <section id="skills" className="pt-20">
        <div className="py-8 px-4  mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              My Skills
            </h2>
          </div>
          <div className="space-y-4 grid grid-cols-2 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4  rounded-full bg-zinc-700 h-12 w-12">
                <FaHtml5 size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold">HTML</h3>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4  rounded-full bg-zinc-700 h-12 w-12">
                <FaCss3Alt size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">CSS</h3>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4  rounded-full bg-zinc-700 h-12 w-12">
                <SiTailwindcss size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Tailwind
              </h3>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4  rounded-full bg-zinc-700 h-12 w-12">
                <GrJs size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                JavaScript
              </h3>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4  rounded-full bg-zinc-700 h-12 w-12">
                <FaReact size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">React</h3>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4  rounded-full bg-zinc-700 h-12 w-12">
                <SiReactrouter size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                React Router
              </h3>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4  rounded-full bg-zinc-700 h-12 w-12">
                <SiRedux size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Redux</h3>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4  rounded-full bg-zinc-700 h-12 w-12">
                <FaGitAlt size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Git</h3>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4  rounded-full bg-zinc-700 h-12 w-12">
                <FaGithub size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Github</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
