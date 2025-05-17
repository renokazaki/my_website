import { motion } from "framer-motion"
import {config} from "../../../config"

export default function ProjectInterface() {
  return (
    <>
    <section className="section section--left">
            <motion.div
              className="projects"
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
                  className="project"
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
                      className="project__image"
                      src={project.image}
                      alt={project.name}
                    />
                    <div className="project__details">
                      <h2 className="project__details__name">{project.name}</h2>
                      <p className="project__details__description">
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
