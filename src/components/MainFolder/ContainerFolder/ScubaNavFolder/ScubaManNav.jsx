// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdOutlineScubaDiving } from "react-icons/md";
import "./ScubaNav.css";
const ScubaNav = () => {
  return (
    <div>
      <div
        className="dataToolTip13 Libre_Baskerville"
        data-tool-tip="Back To Top"
      >
        <a href="#">
          <div
            id="toScubaMask"
            className="absolute bottom-4 left-4 z-50 h-[fit] w-[fit] 
                                  rounded-xl border-[1px] border-varLIGHTBLUEFEATHER "
          >
            <div className="scubaManThird  rounded-xl  border-[2px] border-black">
              <div className="scubaManSecond rounded-xl border-[1px] border-varLIGHTBLUEFEATHER p-2 ">
                <div className="scubaManFirst rotate-[240deg] border-transparent ">
                  <MdOutlineScubaDiving
                    size={25}
                    className="scubaMan  text-blue-200  "
                  />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ScubaNav;