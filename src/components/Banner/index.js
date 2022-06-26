import { motion } from "framer-motion";
import React from "react";
import { Button } from "../Button";
import "./styles.scss";

// Motion Variants
const slideIn = {
  hidden: {
    with: "-30%",
    opacity: 0,
  },

  animate: {
    x: [-30, -30, 0],
    opacity: 1,
    transition: {
      ease: "easeOut",
      delay: 1,
    }
  },
}

export const Banner = () => {

  return (
      <section className="c-banner" id="#banner">
        <div className="container">
          <motion.div variants={slideIn} animate="animate" initial="hidden" className="c-banner-content-wrapper">
            <h1 className="c-banner-title heading">
              <span>Hi, I’m Marko</span><br /> 
              <span>and I am a</span><br />
              <span>Web Developer</span>
            </h1>
            <p className="c-banner-text">
              Experienced Web Developer with a demonstrated history of working in the information
              technology and services industry. Comfortable with ReactJS, Angular, HTML, CSS,
              JavaScript. Familiar with NodeJS. Worked with numerous clients and companies on
              finding proper frontend solutions.
            </p>
            <Button href={'#experience'} text={"Work experience"} customClass={'c-banner-cta'} />
          </motion.div>
        </div>
      </section>
  );
};
