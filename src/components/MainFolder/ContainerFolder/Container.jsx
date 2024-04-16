// eslint-disable-next-line no-unused-vars
import React from "react";

// import { SiTestinglibrary } from "react-icons/si";
// import Gorilla from "../../Gorilla.jsx";
import SectionA from "./SectionAFolder/SectionA.jsx";
import SectionB from "./SectionBFolder/SectionB.jsx";
import SectionC from "./SectionCFolder/SectionC.jsx";
import SectionD from "./SectionDFolder/SectionD.jsx";
import ContactUs from "./ContactUsFolder/ContactUs.jsx";
import AquariumDataTip from "./AquariumFolder/AquariumDataTip.jsx";
import Gorilla from "../../Gorilla.jsx";

const Container = () => {
  return (
    <div
      className="sectionA  left-0 top-0 
                     z-[1] m-auto flex min-h-screen w-screen flex-col items-center justify-start bg-varMEDSPACE
                      p-4  
                      text-center dark:bg-black  dark:text-white "
    >
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <Gorilla />
      <ContactUs />
      <AquariumDataTip />
    </div>
  );
};

export default Container;
