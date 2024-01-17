import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = () => {
  const ballRef = useRef(null);
  const controls = useAnimation();

  const [defineref, defineinView] = useInView({
    triggerOnce: true,
  });

  const [energizeref, energizeinView] = useInView({
    triggerOnce: true,
  });

  const [captureref, captureinView] = useInView({
    triggerOnce: true,
  });

  const [webref, webinView] = useInView({
    triggerOnce: true,
  });
  const [craftref, craftinView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const sentencesVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: "easeInOut" },
    },
  };

  const ballVariants = {
    hidden: { opacity: 1, y: "-100vh" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "power2.out" },
    },
  };

  const ballAnimation = () => {
    controls.start("visible");
  };

  const containerVariantsEnergize = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const sentencesVariantsEnergize = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const imageVariantsEnergize = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: "easeInOut" },
    },
  };

  const textVariantsCapture = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const imageVariantsCapture = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: "easeInOut" },
    },
  };

  const containerVariantsWeb = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const sentencesVariantsWeb = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const imageVariantsWeb = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: "easeInOut" },
    },
  };

  const containerVariantsCraft = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const textVariantsCraft = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const imageVariantsCraft = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: "easeInOut" },
    },
  };

  // useEffect(() => {
  //   // Ensure ScrollTrigger is installed
  //   if (typeof window !== "undefined") {
  //     gsap.registerPlugin(ScrollTrigger);

  //     // Define the GSAP ScrollTrigger animation for the ball
  //     gsap.to(ballRef.current, {
  //       opacity: 1,
  //       y: "50%", // Adjust the y value to control how far down the ball goes
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: ref.current,
  //         start: "top 80%", // Adjust the trigger start position as needed
  //         endTrigger: ".container", // Define the end trigger as the container of "Define"
  //         end: "top 20%", // Adjust the trigger end position as needed
  //         toggleActions: "play none none none", // Play the animation when in view
  //       },
  //     });
  //   }
  // }, [ref]);

  return (
    <>
      <div className="mt-48 left-[calc(50% - 630px)] ml-auto mr-auto rounded-31xl box-border w-[1000px] h-[600px] border-[5px] border-solid border-palegoldenrod-100 flex justify-center align-center ">
        <div className="group-icon">
          {/* <motion.div
            ref={ballRef}
            initial="hidden"
            animate={controls}
            variants={ballVariants}
            onAnimationStart={ballAnimation}
            style={{
              position: "fixed",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#e4d48c",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          /> */}
          <img
            className="mb-20  w-[518.68px] h-[367.3px] "
            alt=""
            src="/group.svg"
            style={{ position: "relative", zIndex: -1, marginBottom: "200px" }}
          />
        </div>
      </div>
      <div ref={defineref}>
        <motion.div
          className="container define flex flex-col sm:flex-row mx-auto w-[70%] justify-between items-center"
          initial="hidden"
          animate={defineinView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="write flex mx-auto mt-24  sm:w-auto sm:mx-0 gap-20 md:gap-10 items-center">
            {/* Rendering for screens larger than or equal to sm */}
            <div className="hidden sm:flex flex-row items-center">
              <motion.div className="head" variants={sentencesVariants}>
                <h2 className="text-8xl mr-5">Define</h2>
                <h3 className="text-3xl leading-[30px]">branding services</h3>
              </motion.div>
              <motion.div className="head2" variants={sentencesVariants}>
                <p className="text-xl mt-5">
                  what makes you unique <br /> and creates a trusted brand
                </p>
              </motion.div>
              <motion.div className="img ml-5" variants={imageVariants}>
                <img className="w-96 h-96" src="/define.svg" alt="" />
              </motion.div>
            </div>

            {/* Rendering for screens smaller than sm */}
            <div className="sm:hidden w-[1000px] flex flex-col    justify-center ml-auto mr-auto items-center gap-12">
              <div className="head " variants={sentencesVariants}>
                <h2 className="text-8xl">Define</h2>
                <h3 className="text-3xl leading-[30px]">branding services</h3>
              </div>

              <div className="img mt-5" variants={imageVariants}>
                <img className="w-96 h-96" src="/define.svg" alt="" />
              </div>
              <div
                className="head2 mt-auto mb-auto"
                variants={sentencesVariants}
              >
                <p className="text-3xl mt-5">
                  what makes you unique <br /> and creates a trusted brand
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <section>
        <div ref={energizeref}>
          <motion.div
            initial="hidden"
            animate={energizeinView ? "visible" : "hidden"}
            className="energize flex flex-col sm:flex-row mx-auto w-[70%] justify-between font-poppins "
          >
            <motion.div className="write flex mx-auto mt-24  sm:w-auto sm:mx-0 gap-20 md:gap-10 items-center">
              {/* Rendering for screens larger than or equal to sm */}
              <div className="hidden sm:flex flex-row items-center">
                <motion.div className="img" variants={imageVariantsEnergize}>
                  <img className="w-96 h-96" src="/energize.svg" alt="" />
                </motion.div>
                <motion.div
                  className="write flex w-50 gap-20 md:gap-10"
                  variants={sentencesVariantsEnergize}
                >
                  <div className="head2 mt-auto mb-auto">
                    <p className=" text-xl ml-5">through our creative lenses</p>
                    <p className=" text-xl ml-5">the power of content and</p>
                    <p className=" text-xl ml-5">
                      why your business needs it
                    </p>{" "}
                  </div>
                  <div className="head mt-auto mb-auto md:ml-10">
                    <h2 className="text-8xl">Energize</h2>
                    <h3 className="text-3xl leading-[30px]">
                      Digital services
                    </h3>
                  </div>
                </motion.div>
              </div>

              {/* Rendering for screens smaller than sm */}
              <div className="sm:hidden w-[1000px] flex flex-col    justify-center ml-auto mr-auto items-center gap-12">
                <div
                  className="write flex flex-col items-center w-50 gap-20 md:gap-10"
                  variants={sentencesVariantsEnergize}
                >
                  <div className="head mt-auto  mb-auto text-center">
                    <h2 className="text-8xl mt-5">Energize</h2>
                    <h3 className="text-3xl mt-3 leading-[30px]">
                      Digital services
                    </h3>
                  </div>
                  <div className="img" variants={imageVariantsEnergize}>
                    <img className="w-96 h-96" src="/energize.svg" alt="" />
                  </div>
                  <div className="head2 mt-auto mb-auto text-center">
                    <p className="m-0">through our creative lenses</p>
                    <p className="m-0">the power of content and</p>
                    <p className="m-0">why your business needs it</p>{" "}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section>
        <div ref={captureref}>
          <motion.div
            initial="hidden"
            animate={captureinView ? "visible" : "hidden"}
            //variants={containerVariants}
            className="container capture flex ml-auto mr-auto w-[70%] justify-between"
          >
            <motion.div className="write flex mx-auto  mt-36  sm:w-auto sm:mx-0 gap-20 md:gap-10 items-center">
              <div className="hidden sm:flex flex-row  items-center">
                <motion.div className="head " variants={sentencesVariants}>
                  <h2 className="text-8xl">Capture</h2>
                  <h3 className="text-3xl leading-[30px]">
                    Where Stories Become Art
                  </h3>
                </motion.div>
                <motion.div className="head2" variants={sentencesVariants}>
                  <p className="text-xl ml-9 mt-5">
                    Turning stories into visual art <br></br> through video and
                    photography.
                  </p>
                </motion.div>
                <motion.div className="img ml-5" variants={imageVariants}>
                  <img className="w-96 h-96" src="/capture.svg" alt="" />
                </motion.div>
              </div>

              <div className="sm:hidden  w-[1000px] flex flex-col  ml-auto mr-auto items-center gap-12">
                <div
                  className="write flex flex-col items-center w-50 gap-20 md:gap-10"
                  variants={sentencesVariantsEnergize}
                >
                  <div className="head mt-auto  mb-auto text-center">
                    <h2 className="text-8xl mt-5">Capture</h2>
                    <h3 className="text-3xl mt-3 leading-[30px]">
                      Where Stories Become Art
                    </h3>
                  </div>
                  <div className="img" variants={imageVariantsEnergize}>
                    <img className="w-96 h-96" src="/energize.svg" alt="" />
                  </div>
                  <div className="head2 mt-auto mb-auto text-center">
                    Turning stories into visual art <br></br> through video and
                    photography.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section>
  <div ref={webref}>
    <motion.div
      initial="hidden"
      animate={webinView ? "visible" : "hidden"}
      className="energize flex flex-col sm:flex-row mx-auto w-[70%] justify-between font-poppins "
    >
      <motion.div className="write flex mx-auto mt-24 sm:w-auto sm:mx-0 gap-20 md:gap-10 items-center">
        {/* Rendering for screens larger than or equal to sm */}
        <div className="hidden sm:flex flex-row items-center">
          <motion.div className="img" variants={imageVariantsWeb}>
            <img className="w-96 h-96" src="/energize.svg" alt="" />
          </motion.div>
          <motion.div
            className="write flex w-50 gap-20 md:gap-10"
            variants={sentencesVariantsWeb}
          >
            <div className="head2 mt-auto mb-auto">
              <p className=" text-xl ml-5">WITH US AND BREAK NEW GROUND</p>
              <p className=" text-xl ml-5">Using Optimized Web Design And Web</p>
              <p className=" text-xl ml-5">Development For Conversion</p>{" "}
            </div>
            <div className="head mt-auto mb-auto md:ml-10">
              <h2 className="text-8xl">Build</h2>
              <h3 className="text-3xl leading-[30px]">Web Development</h3>
            </div>
          </motion.div>
        </div>

        {/* Rendering for screens smaller than sm */}
        <div className="sm:hidden w-[1000px] flex flex-col justify-center ml-auto mr-auto items-center gap-12">
          <div
            className="write flex flex-col items-center w-50 gap-20 md:gap-10"
            variants={sentencesVariantsWeb}
          >
            <div className="head mt-auto mb-auto text-center">
              <h2 className="text-8xl mt-5">Build</h2>
              <h3 className="text-3xl mt-3 leading-[30px]">
                Web Development
              </h3>
            </div>
            <div className="img" variants={imageVariantsWeb}>
              <img className="w-96 h-96" src="/energize.svg" alt="" />
            </div>
            <div className="head2 mt-auto mb-auto text-center">
            <p className="text-xl">WITH US AND BREAK NEW GROUND</p>
                <p className="text-xl">Using Optimized Web Design And Web</p>
                <p className="text-xl">Development For Conversion</p>{" "} </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

<section>
  <div ref={craftref}>
    <motion.div
      initial="hidden"
      animate={craftinView ? "visible" : "hidden"}
      className="container define flex flex-col sm:flex-row mx-auto w-[70%] justify-between items-center"
    >
      <motion.div className="write flex mx-auto mt-24 sm:w-auto sm:mx-0 gap-20 md:gap-10 items-center">
        {/* Rendering for screens larger than or equal to sm */}
       

        <div className="hidden sm:flex flex-row items-center">
        <motion.div className="head" variants={sentencesVariants}>
            <h2 className="text-8xl mr-5">Craft</h2>
            <h3 className="text-3xl leading-[30px]">bringing Your Ideas to Life</h3>
          </motion.div>
          <motion.div className="head2" variants={sentencesVariants}>
            <p className="text-l mt-5">
              Craft is your reliable printing service,{" "}
            </p>
            <p className="text-l">
              dedicated to bringing your ideas to life{" "}
            </p>
            <p className="text-l">
              with precision and care. We specialize in{" "}
            </p>
            <p className="text-l">
              high-quality prints for both business and{" "}
            </p>
            <p className="text-l">personal needs. </p>
          </motion.div>
              <motion.div className="img ml-5" variants={imageVariants}>
                <img className="w-96 h-96" src="/craft.svg" alt="" />
              </motion.div>
            </div>

        {/* Rendering for screens smaller than sm */}
        <div className="sm:hidden w-[1000px] flex flex-col justify-center ml-auto mr-auto items-center gap-12">
          <div className="head" variants={sentencesVariants}>
            <h2 className="text-8xl">Craft</h2>
            <h3 className="text-3xl leading-[30px]">bringing Your Ideas to Life</h3>
          </div>

          <div className="img mt-5" variants={imageVariantsCraft}>
            <img className="w-96 h-96" src="/craft.svg" alt="" />
          </div>
          <div
            className="head2 mt-auto mb-auto"
            variants={sentencesVariants}
          >
            <p className="text-l mt-5">
              Craft is your reliable printing service,{" "}
            </p>
            <p className="text-l">
              dedicated to bringing your ideas to life{" "}
            </p>
            <p className="text-l">
              with precision and care. We specialize in{" "}
            </p>
            <p className="text-l">
              high-quality prints for both business and{" "}
            </p>
            <p className="text-l">personal needs. </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

    </>
  );
};

export default Services;
