import React from "react";
import { motion } from "framer-motion";
import "./css/web.css";
import { useInView } from "react-intersection-observer";

function Web() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariantsWeb = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const sentencesVariantsWeb = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
  };

  const imageVariantsWeb = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 1.1, ease: 'easeInOut' } },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Use inView to trigger animation
      //  variants={containerVariants}
        className="container web flex ml-auto mr-auto w-70% justify-between font-poppins"
      >
        <motion.div className="img" variants={imageVariantsWeb}>
          <img className="w-80 h-80" src="/energize.svg" alt="" />
        </motion.div>
        <motion.div
          className="write flex w-50 gap-20 md:gap-10"
          variants={sentencesVariantsWeb}
        >
          <div className="head2 mt-auto mb-auto">
            <p className="m-0">WITH US AND BREAK NEW GROUND</p>
            <p className="m-0">Using Optimized Web Design And Web</p>
            <p className="m-0">Development For Conversion</p>{" "}
          </div>
          <div className="head mt-auto mb-auto md:ml-10">
            <h2 className="text-8xl ">Build</h2>
            <h3 className="text-3xl  leading-[30px] ">web development</h3>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Web;
