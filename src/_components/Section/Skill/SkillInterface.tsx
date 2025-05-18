import { motion } from "framer-motion";
import { config } from "../../../config";

export default function SkillInterface() {
    return (
      <>
      <section className="h-screen flex justify-end items-center">
          <motion.div
            className="p-4"
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
            {config.skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                className="bg-white/50 backdrop-blur-md rounded-lg p-4 mb-4 w-80 max-w-full"
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
                <div className="flex items-center gap-4 mb-2">
                  <img
                    className="w-8 h-8"
                    src={skill.icon}
                    alt={skill.name}
                  />
                  <h2 className="text-text font-bold text-xl m-0">{skill.name}</h2>
                </div>
                <div className="bg-black h-2 rounded-lg w-full">
                  <motion.div
                    className="bg-blue-500 h-full rounded-lg w-0"
                    initial={{ width: 0 }}
                    variants={{
                      visible: {
                        width: `${skill.level}%`,
                      },
                    }}
                    transition={{
                      duration: 1,
                      delay: idx * 0.62,
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </>
    )
  }
  