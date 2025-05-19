import { motion } from "framer-motion";
import { config } from "../../../config";
import { useMobile } from "../../../hooks/useMobile";

export default function ProfileInterface() {
  const {isMobile} = useMobile();
  
  // configからaboutオブジェクトの各セクションを取得
  const aboutSections = [
    config.about.profile,
    config.about.education,
    config.about.skills,
    config.about.hobbies,
    config.about.personality
  ];

  return (
    <>
      <section className="h-screen flex justify-end items-center">
        <motion.div
          className="p-4 md:p-6 w-full md:w-[550px] max-w-full"
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
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-text">About Me</h1>
          
          <div className="space-y-4 md:space-y-6">
            {aboutSections.map((section, idx) => (
              <motion.div
                key={section.title}
                className="bg-white/50 backdrop-blur-md rounded-lg p-3 md:p-5"
                initial={{ opacity: 0, y: 20 }}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0
                  },
                }}
                transition={{
                  duration: 0.4,
                  delay: isMobile ? idx * 0.1 : idx * 0.15,
                }}
              >
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <img
                    className="w-6 h-6 md:w-7 md:h-7"
                    src={section.icon}
                    alt=""
                  />
                  <h2 className="text-text font-bold text-base md:text-xl m-0">{section.title}</h2>
                </div>
                
                {section.content && (
                  <div className="text-text-light text-sm md:text-base ml-9 whitespace-pre-line">
                    {section.content}
                  </div>
                )}
{/*                 
                {section.title === "保有スキル・ツール" && section.skillIcons && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-9">
                    {section.skillIcons.map((skill, skillIdx) => (
                      <div 
                        key={skillIdx}
                        className="flex items-center bg-white/30 rounded-md px-2 py-1"
                        title={skill.name}
                      >
                        {skill.icon && (
                          <img 
                            src={skill.icon} 
                            alt="" 
                            className="w-4 h-4 md:w-5 md:h-5 mr-1.5"
                          />
                        )}
                        <span className="text-xs md:text-sm text-text">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )} */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}