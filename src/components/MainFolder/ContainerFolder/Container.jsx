// eslint-disable-next-line no-unused-vars
import React from "react";

// import { SiTestinglibrary } from "react-icons/si";
// import Gorilla from "../../Gorilla.jsx";
import SectionA from "./SectionAFolder/SectionA.jsx";
import SectionB from "./SectionBFolder/SectionB.jsx";
import SectionC from "./SectionCFolder/SectionC.jsx";
import SectionD from "./SectionDFolder/SectionD.jsx";

import AquariumDataTip from "./AquariumFolder/AquariumDataTip.jsx";

// import SecurityEye from "./SecurityEyeFolder/SecurityEye.jsx";
import Sponsor from "./SponsorFolder/Sponsor.jsx";

const Container = () => {
  return (
     <>
      <div
        className="left-0 top-0 z-[1] m-auto 
                     flex min-h-screen  w-screen  flex-col items-center justify-center 
                      p-4 text-center dark:bg-black  dark:text-white "
      >
        <SectionA />
        <SectionB />

        <SectionC />
        <SectionD />
        {/* <SecurityEye /> */}
        <AquariumDataTip />
        <Sponsor />
      </div>
    </> 
  );
};

export default Container;
