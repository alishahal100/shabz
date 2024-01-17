import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./css/capture.css";

function Capture() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 1.1, ease: 'easeInOut' } },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        //variants={containerVariants}
        className="container capture flex ml-auto mr-auto w-auto justify-between"
      >
        <motion.div className="write flex w-50 gap-20 md:gap-10" variants={textVariants}>
          <div className="head mt-auto mb-auto md:ml-10">
            <h2 className="text-8xl">Capture</h2>
            <h3 className="text-3xl leading-[30px]">Where Stories Become Art</h3>
          </div>
          <div className="head2 mt-auto mb-auto">
            <div className="absolute text-xl leading-[25px] font-extralight inline-block w-[385px]">
              Turning stories into visual art through video and photography.
            </div>
          </div>
        </motion.div>
        <motion.div className="img" variants={imageVariants}>
          <img className="w-80 h-80" src="/capture.svg" alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Capture;
