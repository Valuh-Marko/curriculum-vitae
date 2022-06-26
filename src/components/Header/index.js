import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import substractImg from "../../images/subtract.svg"
import "./styles.scss"


const loadIn = {
    initial: {
        x: "-100%",
        opacity: 0,
    },

    show: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 1,
            delayChildren: 1.2,
            staggerChildren: 0.1,
        }
    }
}

const loadInItem = {
    initial: {
        x: "-100%",
        opacity: 0
    },

    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.2,
        }
    }
}

export const Header = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);
    }, [])

    const checkScrollPosition = () => {
        if(window.scrollY >= 80) {
            setSticky(true);

            return;
        }

        setSticky(false);
    }

  return (
    <>
        <div className={sticky ? "c-header-wrapper is-sticky" : "c-header-wrapper"}>
            <div className="container">
                <div className="c-header">
                    <motion.a initial="initial" animate="show" variants={loadIn} href="#" className="c-header__logo">
                        M.Valuh <span><img className="c-header__logo-img" src={substractImg} alt="logoImg" /></span>
                    </motion.a>
                    <motion.ul initial="initial" animate="show" variants={loadIn} className="c-header__nav">
                        <motion.li variants={loadInItem} className="c-header__nav-link">
                            <a href="#">Home</a>
                        </motion.li>
                        <motion.li variants={loadInItem} className="c-header__nav-link">
                            <a href="#about">About me</a>
                        </motion.li>
                        <motion.li variants={loadInItem} className="c-header__nav-link">
                            <a href="#experience">Experience</a>
                        </motion.li>
                        <motion.li variants={loadInItem} className="c-header__nav-link">
                            <a href="#projects">Projects</a>
                        </motion.li>
                        <motion.li variants={loadInItem} className="c-header__nav-link">
                            <a href="#contact">Contact</a>
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </div>
    </>
  )
}
