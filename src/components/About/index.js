import React from 'react'
import arrowCta from "../../images/arrow-cta.svg"
import { motion } from 'framer-motion';
import { Button } from '../Button';
import { useInView } from 'react-intersection-observer';
import "./styles.scss";

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

export const About = () => {
  const {ref, inView} = useInView({threshold: .5});

  return (
    <section className="c-about" id="about">
        <div className="container">
            <motion.div ref={ref} variants={slideIn} animate={inView && "animate"} initial="hidden" className="c-about-content-wrapper">
              <h2 className="c-about-title heading">I diversify, learn <br />and contribute...</h2>
              <p className="c-about-text">I use some of the most popular frameworks and libraries to make ideas come to life!</p>
              <ul className="c-about-skills">
                <li className="c-about-skill">2+ Years if proffesional experience</li>
                <li className="c-about-skill">Proficient with ReactJS</li>
                <li className="c-about-skill">Familiar with Angluar and Node.js</li>
                <li className="c-about-skill">Highly experienced with HTML, CSS and JS</li>
                <li className="c-about-skill">History in web design</li>
              </ul>
              <Button href={'#projects'} text={'Projects'} customClass={'c-about-cta'} />
            </motion.div>
        </div>
    </section>
  )
}
