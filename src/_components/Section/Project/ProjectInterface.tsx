import { motion } from "framer-motion"
import { config } from "../../../config"
import { useMobile } from "../../../hooks/useMobile"

export default function ProjectInterface() {
  const {isMobile} = useMobile();
  return (
    <>
    <section className="h-screen flex justify-start items-center">
            <motion.div
              className="p-2 md:p-4 w-full h-full  md:w-[650px] lg:w-[700px] xl:w-[800px] max-w-full justify-center"
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
                      delay:isMobile ? idx * 0.1 : idx * 0.4,
                    }}
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-full h-24 md:h-auto object-cover"
                        src={project.image}
                        alt={project.name}
                      />
                      <div className="p-2 md:p-4">
                        <h2 className="text-text font-medium text-sm md:text-xl m-0">{project.name}</h2>
                     
                        <div className="hidden md:flex gap-2 mb-auto items-end justify-end">
                      {project.techIcons?.map((techIcon, techIdx) => (
                        <img
                          key={techIdx} 
                          className="w-4 h-4" 
                          src={techIcon.icon}
                          alt={techIcon.name || `Tech ${techIdx + 1}`} 
                          title={techIcon.name} 
                        />
                      ))}
                    </div>
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