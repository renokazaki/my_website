import { motion } from "framer-motion"
import {config} from "../../../config"

export default function ProjectInterface() {
  return (
    <>
    <section className="h-screen flex justify-start items-center">
            <motion.div
              className="p-4 grid grid-cols-[repeat(auto-fit,_220px)] w-[500px] max-w-full justify-center gap-4"
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
              {config.projects.map((project, idx) => (
                <motion.div
                  key={project.name}
                  className="bg-white/50 overflow-hidden backdrop-blur-md rounded-lg transition duration-200 ease-in-out hover:bg-white hover:scale-105 hover:cursor-pointer"
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
                      className="w-full object-cover"
                      src={project.image}
                      alt={project.name}
                    />
                    <div className="p-4">
                      <h2 className="text-text font-bold text-xl m-0">{project.name}</h2>
                      <p className="text-text-light">
                        {project.description}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </section>
    </>
  )
}
