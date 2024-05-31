// eslint-disable-next-line no-unused-vars
import React from "react";
import DiverDown from "./DiverDown.svg";
import "./DiverDown.css";
const ScubaSpearComponent = () => {
  return (
    <div className="dataToolTip23 font-LibreBaskerville hidden sm:block" 
    data-tool-tip="Go Down" >
      <img
        src={DiverDown}
        alt="Diver Down"
        width={75}
        height={75}
        className="diverDown"
        
      />
    </div>
  );
};

export default ScubaSpearComponent;
