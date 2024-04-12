// eslint-disable-next-line no-unused-vars
import React from "react";
import OctoGlasses from "./OctoGlasses.png";
import NotMe from "./NewMe.png";
import "./TopLogos.css";
const TopLogos = () => {
  return (
    <div>
      <div className="relative mt-[8rem] flex h-fit w-screen justify-between px-12">
        <a href="https://resume-hub.mybabb.com">
        <div className="dataToolTip82  Libre_Baskerville"  data-tool-tip="Portfolio Hub "> 
          <div
            className="octoGlasses  h-[80px] w-[80px] relative z-0 mt-4 rounded-full p-[5px]
                         hover:bg-varMEDBEAKTOP active:bg-varLIGHTBLUEFEATHER"
            style={{
              position: "relative",
              display: "block",
              boxShadow:
                "inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img src={OctoGlasses} alt="Duck Logo" width={75} height={75} className="absolute top-[-1px] left-[-1px]" />
          </div>
          </div>
        </a>
       
        <a href="https://Mybabb.com">
        <div className="dataToolTip81  Libre_Baskerville"  data-tool-tip="My HomePage"> 
          <div
            className="notMe h-[80px] w-[80px] relative z-[0] mt-4 rounded-full p-2
                         hover:bg-varMEDBEAKTOP active:bg-varLIGHTBLUEFEATHER"
            style={{
              position: "relative",
              right: "1rem",
              boxShadow:
                "inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img src={NotMe} alt="Not Me" width={70} height={70} />
            </div>
          </div>
        </a>
       
      </div>
    </div>
  );
};

export default TopLogos;
