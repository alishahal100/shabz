import React from 'react';
import { motion } from 'framer-motion';
import './css/craft.css';
import { useInView } from 'react-intersection-observer';

function Craft() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariantsCraft = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const textVariantsCraft = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
  };

  const imageVariantsCraft = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 1.1, ease: 'easeInOut' } },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        //variants={containerVariants}
        className="container craft flex ml-auto mr-auto w-auto justify-between"
      >
        <motion.div className="write flex w-50 gap-20 md:gap-10" variants={textVariants}>
          <div className="head mt-auto mb-auto md:ml-10">
            <h2 className="text-8xl ">Craft</h2>
            <h3 className="text-3xl  leading-[30px] ">bringing Your Ideas to Life</h3>
          </div>
          <div className="head2 mt-auto mb-auto">
            <p className="text-l">Craft is your reliable printing service, </p>
            <p className="text-l">dedicated to bringing your ideas to life </p>
            <p className="text-l">with precision and care. We specialize in </p>
            <p className="text-l">high-quality prints for both business and </p>
            <p className="text-l">personal needs. </p>
          </div>
        </motion.div>
        <motion.div className="img" variants={imageVariants}>
          <img className="w-80 h-80" src="/craft.svg" alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Craft;
