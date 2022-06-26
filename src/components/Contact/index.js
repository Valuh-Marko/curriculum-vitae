import React from 'react'
import { Button } from '../Button';
import "./styles.scss";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Motion Variants
const slideIn = {
  hidden: {
    x: "-30%",
    opacity: 0,
  },

  animate: {
    x: [-30, -30, 0],
    opacity: 1,
    transition: {
      ease: "easeOut",
      delay: 0.2,
    }
  }
}

export const Contact = () => {
  const {ref, inView} = useInView({threshold: 0.5});

  return (
    <section className="c-contact" id="contact">
        <div className="container">
          <motion.div ref={ref} variants={slideIn} initial="hidden" animate={inView && "animate"} className="c-contact-content-wrapper">
            <h1 className="c-contact-title heading">
              Send me <br />
              a message
            </h1>
            <p className="c-contact-text">
            While pigeons are effective, there are simpler ways for us to get in touch and answer your questions: <a href="mailto: mvaluh@gmail.com">mvaluh@gmail.com</a> <br />
            You can also folow me on my socials: <br />
            <a href="https://github.com/Valuh-Marko" target="_blank">github.com/Valuh-Marko</a> <br />
            <a href="https://www.linkedin.com/in/marko-valuh/" target="_blank">linkedin.com/in/marko-valuh/</a> <br />
            </p>
            <Button href={'mailto: mvaluh@gmail.com'} text={'Contact me'} customClass={'c-contact-cta'} />
          </motion.div>
        </div>
    </section>
  )
}
