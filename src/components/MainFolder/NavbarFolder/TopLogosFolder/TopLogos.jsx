// eslint-disable-next-line no-unused-vars
import React from "react";
import OctoGlasses from "./OctoGlasses.png";
import NotMe from "./NewMe.png";
import "./TopLogos.css";
const TopLogos = () => {
  return (
    <div>
      <div className="relative mt-[5rem] flex h-fit w-screen justify-between px-12  dark:bg-black  dark:text-white">
        <a href="https://resume-hub.mybabb.com">
          <div
            className="dataToolTip82  Libre_Baskerville hidden sm:block"
            data-tool-tip="Portfolio Hub "
          >
            <div
              className="octoGlasses   relative z-0 mb-4 mt-[2rem] h-[80px] w-[80px] rounded-full p-[5px]
                         hover:bg-varMEDBEAKTOP active:bg-varLIGHTBLUEFEATHER"
              style={{
                position: "relative",
                display: "block",
                boxShadow:
                  "inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img
                src={OctoGlasses}
                alt="OctoGlasses"
                width={75}
                height={75}
                className="octoGlasses absolute left-[-1px] top-[-1px]"
              />
            </div>
          </div>
        </a>

        <a href="https://Mybabb.com">
          <div
            className="dataToolTip81  Libre_Baskerville hidden sm:absolute "
            data-tool-tip="My HomePage"
          >
            <div
              className="notMe relative z-[0] mb-4 mt-[2rem] h-[80px] w-[80px] rounded-full p-2
                         hover:bg-varMEDBEAKTOP active:bg-varLIGHTBLUEFEATHER"
              style={{
                position: "relative",
                right: "1rem",
                boxShadow:
                  "inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img
                src={NotMe}
                alt="Not Me"
                width={70}
                height={70}
                className="notMe"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TopLogos;
