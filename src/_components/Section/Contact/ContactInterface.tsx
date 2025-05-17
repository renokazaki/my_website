
import { motion } from "framer-motion"
import {config} from "../../../config"

export default function ContactInterface() {
    return (
      <>
     <section className="section section--left">
          <motion.div
            className="contact"
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
            <h1 className="contact__name">{config.contact.name}</h1>
            <p className="contact__address">{config.contact.address}</p>
            <div className="contact__socials">
              <a href={config.contact.socials.github} target="_blank">
                <img
                  className="contact__socials__icon"
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
  