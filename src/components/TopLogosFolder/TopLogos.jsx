// eslint-disable-next-line no-unused-vars
import React from "react";
import DuckLogo from "./WoodDuck.png";
import NotMe from "./NotMe.webp";
import "./TopLogos.css";
const TopLogos = () => {
  return (
    <div>
      <div className="relative mt-[8rem] flex h-fit w-screen justify-between px-12">
        <a href="https://mybabb.com/#">
          <div
            className="duckLogo h-25 w-25 relative z-0 mt-4 rounded-full
                         hover:bg-varMEDBEAKTOP active:bg-varLIGHTBLUEFEATHER"
            style={{
              position: "relative",
              display: "block",
              boxShadow:
                "inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img src={DuckLogo} alt="Duck Logo" width={80} height={80} />
          </div>
        </a>

        <a href="#brainers">
          <div
            className="notMe h-25 w-25 relative z-[0] mt-4 rounded-full
                         hover:bg-varMEDBEAKTOP active:bg-varLIGHTBLUEFEATHER"
            style={{
              position: "relative",
              right: "1rem",
              boxShadow:
                "inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img src={NotMe} alt="Not Me" width={80} height={80} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default TopLogos;
