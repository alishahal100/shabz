import React from 'react';
import './css/define.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Define() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const sentencesVariants = {
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
        className="container define flex flex-col sm:flex-row ml-auto mr-auto w-[70%] justify-between"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div className="write flex flex-col sm:flex-row w-full gap-20 md:gap-10">
          <motion.div className="head mt-auto mb-auto sm:mb-0 md:ml-10" variants={sentencesVariants}>
            <h2 className="text-5xl sm:text-8xl">Define</h2>
            <h3 className="text-xl sm:text-3xl leading-[30px]">branding services</h3>
          </motion.div>
          <motion.div className="head2 mt-5 sm:mt-auto mb-auto" variants={sentencesVariants}>
            <p className="text-xl sm:text-3xl">
              what makes you unique <br /> and creates a trusted brand
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="img mt-5 sm:mt-0" variants={imageVariants}>
          <img className="w-40 sm:w-80 h-40 sm:h-80" src="/define.svg" alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Define;
