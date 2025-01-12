// eslint-disable-next-line no-unused-vars
import React from "react";
import OctoGlasses from "./OctoGlasses.png";
import NotMe from "./NewMe.png";
import "./TopLogos.css";
import DiverDown from "../../ContainerFolder/ScubaNavFolder/DiverDown";
import "../../ContainerFolder/ScubaNavFolder/DiverDown.css";

// import ContactButton from "../../ContainerFolder/ContactUsFolder/ContactUs";

const TopLogos = () => {
  return (
    <div>
      <div className="relative mt-[5rem] flex h-fit w-screen justify-between px-12  dark:bg-black  dark:text-white">
        <a href="https://mybabb.com">
          <div
            className="dataToolTip82  hidden font-LibreBaskerville sm:block"
            data-tool-tip="My Home Page"
          >
            <div
              className="notMe   relative z-0 mb-4 mt-[2rem] h-[80px] w-[80px] rounded-full p-[5px]
                        "
              style={{
                position: "relative",
                display: "block",
                boxShadow:
                  "inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img
                src={NotMe}
                alt="Cartoon of Brett "
                width={75}
                height={75}
                className="notMe absolute left-[-1px] top-[-1px]"
              />
            </div>
          </div>
        </a>

        <a href="https://resume-hub.mybabb.com">
          <div
            className="dataToolTip81  hidden font-LibreBaskerville sm:block"
            data-tool-tip="Information Hub "
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
      </div>

      <div className="diverDownWrapper w-fit ">
        <a href="#scubaSpear">
          <DiverDown />
        </a>
      </div>
    </div>
  );
};

export default TopLogos;
