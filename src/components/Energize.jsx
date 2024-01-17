
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './css/energize.css'

const EnergizeForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const sentencesVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 1.1, ease: 'easeInOut' } },
  };

  return (
    <div  ref={ ref}>

    
    <motion.div
     
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      
      className="energize flex ml-auto mr-auto relative w-auto justify-between font-poppins "
    >
      <motion.div className="img" variants={imageVariants}>
        <img className="w-80 h-80" src="/energize.svg" alt="" />
      </motion.div>
      <motion.div className="write flex w-50 gap-20 md:gap-10" variants={sentencesVariants}>
        <div className="head2 mt-auto mb-auto">
          <p className="m-0">through our creative lenses</p>
          <p className="m-0">the power of content and</p>
          <p className="m-0">why your business needs it</p>{" "}
        </div>
        <div className="head mt-auto mb-auto md:ml-10">
          <h2 className="text-8xl">Energize</h2>
          <h3 className="text-3xl leading-[30px]">Digital services</h3>
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default EnergizeForm;
