import { motion } from "framer-motion"
import { config } from "../../../config"

export default function ProjectInterface() {
  return (
    <>
    <section className="h-screen flex justify-start items-center">
            <motion.div
              className="p-2 md:p-4 w-full md:w-[500px] max-w-full justify-center"
              whileInView="visible"
              initial={{
                opacity: 0,
              }}
              variants={{
                visible: {
                  opacity: 1,
                },
              }}
            >
              <div className="flex flex-row flex-wrap md:grid md:grid-cols-[repeat(auto-fit,_220px)] gap-6 md:gap-4">
                {config.projects.map((project, idx) => (
                  <motion.div
                    key={project.name}
                    className="w-[calc(30%-0.25rem)] md:w-auto bg-white/50 overflow-hidden backdrop-blur-md rounded-lg transition duration-200 ease-in-out hover:bg-white hover:scale-105 hover:cursor-pointer"
                    initial={{ opacity: 0 }}
                    variants={{
                      visible: {
                        opacity: 1,
                      },
                    }}
                    transition={{
                      duration: 1,
                      delay: idx * 0.5,
                    }}
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-full h-24 md:h-auto object-cover"
                        src={project.image}
                        alt={project.name}
                      />
                      <div className="p-2 md:p-4">
                        <h2 className="text-text font-bold text-sm md:text-xl m-0">{project.name}</h2>
                        <p className="text-text-light text-xs md:text-base line-clamp-2 md:line-clamp-none">
                          {project.description}
                        </p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
    </>
  )
}