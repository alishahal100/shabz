import React, { useEffect, useRef, useState } from "react";
import "../css/about.css";
import GroupIcon from "./GroupIcon";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

function Aboutus() {
  const modelPath = "/bird/scene.gltf"; // Update the path to the GLTF model

  const { nodes, materials, animations } = useGLTF(modelPath);

  const scrollRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Update the scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Attach event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means the effect runs once after the initial render

  const birdPosition = {
    left: "50%", // Center the bird horizontally
    transform: `translateX(-40%) translateY(${scrollY * -0.3}px)`, // Move the bird upward as you scroll
    position: "absolute",
  };

  return (
    <div className="flex flex-col gap-25 justify-cente w-[1056px] h-[1500px] sm:w-auto sm:h-auto mx-auto items-center">
      <div className="flex justify-center items-center flex-row  sm:relative">
      <img
  className="w-[90%] h-[90%]   mx-auto  sm:ml-0 sm:w-[60vw] sm:h-[70vh]"
  src="/hero.png"
  alt=""
/>


        <div ref={scrollRef} style={birdPosition} className="hidden sm:block">
          <Canvas camera={{ fov: 18 }}>
            <ambientLight intensity={0.15} />
            <Suspense fallback={null}>
              <Model path={modelPath} scale={[0.5, 0.5, 0.5]} />
            </Suspense>
            <Environment preset="sunset" />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>

      <div className="box-1 relative inset-0 items-center justify-center">
        <div class="flex flex-col gap-10 sm:gap-20 sm:flex-row">
          <div className="flex gap-20 items-center">

         
          <div class="flex flex-col ">
            <h1>Branding</h1>
            <h2>services</h2>
          </div>
          <div class="flex flex-col ">
            <h1>Digital</h1>
            <h2>services</h2>
          </div>
          <div class="flex flex-col ">
            <h1>Media</h1>
            <h2>services</h2>
          </div>
           </div>
           <div className="flex gap-20 items-center" >

          <div class="flex flex-col ">
            <h1>Web</h1>
            <h2>Development</h2>
          </div>
          <div class="flex flex-col ">
            <h1>Printing</h1>
            <h2>services</h2>
          </div>
           </div>
        </div>

        <div className="box-2 mt-20 mb-10  mx-auto ">
          <h1 className="">show the world what your business is made of</h1>
        </div>
        <p className="para  mb-32 ">
          We customize a company’s online experience through digital
          masterpieces, powerful online <br /> platforms, and storytelling
          through marketing campaigns across major media channels.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
