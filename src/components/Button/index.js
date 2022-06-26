import React from 'react'
import { ButtonWrapper } from './ButtonWrapper.styled'
import arrowCta from "../../images/arrow-cta.svg"
import { motion } from 'framer-motion'

const hoverAnimation = {
  rest: {
    scale: 1,
    originX: 0,
    transition: {
      duration: 0.1,
      ease: "easeInOut"
    }
  },
  hover: {
    scale: 1.5,
    originX: 0,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    }
  }
}

const textAnimate = {
  rest: {
    scale: 1,
    textShadow: "0 0 0 rgba(255,255,255, 0)",
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    }
  },

  tap: {
    scale: 0.9,
  },

  hover: {
    scale: 1.1,
    textShadow: "0px 5px 15px rgba(255,255,255, 0.35)",
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    }
  }
}

export const Button = ({href, text, customClass, newTab }) => {
  return (
    <ButtonWrapper 
      initial="rest" 
      whileHover="hover" 
      whileTap="tap"
      animate="rest" 
      variants={textAnimate} 
      className={customClass} 
      href={`${href}`} 
      target={ newTab ? "__blank" : null} 
      >
        {text}
        <span>
          <motion.img variants={hoverAnimation} src={arrowCta} alt="" />
        </span>
    </ButtonWrapper>
  )
}
