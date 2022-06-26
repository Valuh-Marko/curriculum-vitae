import "./styles.scss";
import projects from "../../projects.json"
import { SingleProject } from './SingleProject';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    }
  },
}

const fadeInHolder = {
  hidden: {opacity: 0},
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    }
  }
}

export const Projects = () => {
  const {ref, inView} = useInView({threshold: .5});

  return (
    <section className="c-projects" id='projects'>
      <div className="container">
        <div className="c-projects-content-wrapper">
          <motion.h3 ref={ref} variants={slideIn} initial="hidden" animate={inView && "animate"} className="c-projects-title">My Projects</motion.h3>
          <div className="c-projects-holder">
            {projects.map((singleProject, index) => (
                <SingleProject {...singleProject} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
