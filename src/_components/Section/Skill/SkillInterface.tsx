import { motion } from "framer-motion";
import { config } from "../../../config";

export default function SkillInterface() {
    return (
      <>
      <section className="h-screen flex justify-end items-center">
          <motion.div
            className="p-4 flex flex-col md:block"
            whileInView={"visible"}
            initial={{
              opacity: 0,
            }}
            variants={{
              visible: {
                opacity: 1,
              },
            }}
          >
            <div className="flex flex-row md:flex-col flex-wrap gap-2 md:gap-0">
              {config.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  className="bg-white/50 backdrop-blur-md rounded-lg p-2 md:p-4 md:mb-4 w-[calc(50%-0.5rem)] md:w-80 max-w-full"
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1,
                    },
                  }}
                  transition={{
                    duration: 1,
                    delay: idx * 0.62,
                  }}
                >
                  <div className="flex items-center gap-2 md:gap-4 mb-1 md:mb-2">
                    <img
                      className="w-6 h-6 md:w-8 md:h-8"
                      src={skill.icon}
                      alt={skill.name}
                    />
                    <h2 className="text-text font-bold text-sm md:text-xl m-0">{skill.name}</h2>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </>
    )
  }