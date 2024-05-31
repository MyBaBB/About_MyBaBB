// eslint-disable-next-line no-unused-vars
import React from "react";
import ScubaSpear1 from "./ScubaSpear1.svg";
import "./ScubaSpear.css";
const ScubaSpearComponent = () => {
  return (
    <div className="dataToolTip13 font-LibreBaskerville text-2xl" data-tool-tip='Surface'>
      <img
        src={ScubaSpear1}
        alt="scuba Spear"
        width={65}
        height={65}
        className="scubaSpear  "
      />
    </div>
  );
};

export default ScubaSpearComponent;
