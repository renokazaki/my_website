
import { motion } from "framer-motion"
import {config} from "../../../config"

export default function ContactInterface() {
    return (
      <>
     <section className="h-screen flex justify-start items-center">
          <motion.div
            className="m-4 p-4 bg-white/50 backdrop-blur-md rounded-lg min-w-[350px]"
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
            <h1 className="text-text font-bold text-2xl m-0">{config.contact.name}</h1>
            <p className="text-text-light">{config.contact.address}</p>
            <div className="flex gap-4 mt-4">
              <a href={config.contact.socials.github} target="_blank">
                <img
                  className="w-8 h-8"
                  src="icons/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a href={config.contact.socials.zenn} target="_blank">
                <img
                  className="contact__socials__icon"
                  src="icons/twitter.png"
                  alt="twitter"
                />
              </a>
              <a href={`mailto:${config.contact.mail}`} target="_blank">
                <img
                  className="contact__socials__icon"
                  src="icons/email.png"
                  alt="email"
                />
              </a>
            </div>
          </motion.div>
        </section>
      </>
    )
  }
  