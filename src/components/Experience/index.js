import React, { useRef } from "react";
import arrowCta from "../../images/arrow-cta.svg";
import "./styles.scss";
import job from "../../jobs.json";
import { SingleJobComponent } from "./SingleJobComponent";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    }
  },
}

export const Experience = () => {
  const {ref, inView} = useInView({threshold: 0.5});
  const jobSlider = useRef(null);

  const showNext = () => {

    const jobSliderClientWidth = jobSlider.current.clientWidth;
    const jobSliderChildrenCount = jobSlider.current.childElementCount;

    jobSlider.current.scrollLeft += jobSliderClientWidth * 0.6;

    if(jobSlider.current.scrollLeft >= jobSliderClientWidth * (jobSliderChildrenCount - 1)) {
      jobSlider.current.scrollLeft = 0;
    }
  }

  const showPrev = () => {
  const jobSliderClientWidth = jobSlider.current.clientWidth;
  const jobSliderChildrenCount = jobSlider.current.childElementCount;

    jobSlider.current.scrollLeft -= jobSliderClientWidth * 0.6;

    if(jobSlider.current.scrollLeft <= 0) {
      jobSlider.current.scrollLeft = jobSliderClientWidth * (jobSliderChildrenCount - 1);
    }
  }

  return (
    <section className="c-experience" id="experience">
      <div className="container">
        <div className="c-experience-content-wrapper">
          <motion.h3 ref={ref} variants={slideIn} initial="hidden" animate={inView && "animate"} className="c-experience-title">Work experience</motion.h3>
          <motion.div ref={ref} initial={{opacity: 0}} animate={inView && {opacity: 1}} transition={{delay: 0.5}} className="c-job-slider-wrapper">
            <a className="c-job-slider-navigator prev" onClick={showPrev} ><img src={arrowCta} alt="" /></a>
            <a className="c-job-slider-navigator next" onClick={showNext} ><img src={arrowCta} alt="" /></a>
            <div ref={jobSlider} className="c-job-slider">
              {job.map((singleJob, index) => (
                <SingleJobComponent {...singleJob} key={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
