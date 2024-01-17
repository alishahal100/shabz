import React, { useRef } from "react";
import Navv from "./Naav";
import Aboutus from "./aboutus/Aboutus";
import Define from "./Define";
import EnergizeForm from "./Energize";
import Capture from "./Capture";
import Web from "./web";
import Craft from "./Craft";
import Clients from "./Clients";
import Footer from "./Footer";
import Services from "./Services";
import Hero from "./hero";
function Home() {
  const defineRef = useRef(null);
  const energizeRef = useRef(null);

  return (
    <div className="w-[100vw]">
      <Navv />
      <Aboutus/>
      <Services />
      {/* <Clients /> */}
      <Footer />
    </div>
  );
}

export default Home;
