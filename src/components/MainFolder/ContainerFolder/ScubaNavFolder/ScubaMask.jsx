// eslint-disable-next-line no-unused-vars
import React from "react";
import { TbScubaMask } from "react-icons/tb";
import "./ScubaNav.css";
const ScubaMask = () => {
  return (
    <div>
      <a
        href="#toScubaMask"
        className="absolute  left-4 top-0 text-varLIGHTBLUEFEATHER hover:text-varLIGHTWING
                "
      >
        <div
          className="dataToolTip23 Libre_Baskerville"
          data-tool-tip="To The Bottom"
        >
          <div
            className="inline-block rounded-xl  
                             border-[1px]  border-varLIGHTBLUEFEATHER"
          >
            <div className="rounded-xl   border-[2px]  border-black">
              <div
                className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
                                 p-2 hover:bg-black xxs:bg-gray-700"
              >
                <span className="NavbarTitle4">
                  <div className="  hidden sm:block  ">
                    <TbScubaMask size={20} className="z-50 text-blue-200  " />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ScubaMask;