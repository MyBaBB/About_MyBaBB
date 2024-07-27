// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import ToolBoxList from "./ToolBoxList.json";
import "./ToolBox.css";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="sm:[95%] absolute left-[50%] top-[10rem]  z-10  
        translate-x-[-50%]   sm:absolute sm:left-[85%]
     sm:top-[12rem] sm:block  lg:left-[90%]"
    >
      <div className="tools relative flex h-[40px] w-[150px] flex-col items-center rounded-lg">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="directoryTop font-ArchivoBlack-Regular flex w-full items-center justify-between rounded-lg 
          border-transparent bg-[#24558d] p-0 py-2 text-center text-lg 
          font-bold tracking-wider text-blue-200 outline-[1px] duration-300
           hover:bg-opacity-20 active:border-white active:text-white"
        >
          &nbsp;&nbsp;Directory
          {isOpen ? (
            <AiOutlineCaretUp className="mr-2  h-8 text-green-400" />
          ) : (
            <AiOutlineCaretDown className="mr-2 h-8 text-green-400" />
          )}
        </button>
        {/* animate-open-menu is in custom tailwind.config file */}
        {isOpen && (
          <div
            className="openDrawer absolute top-[3.05rem] flex w-full origin-top animate-open-menu flex-col items-start 
          rounded-lg bg-[#24558d] p-1 text-blue-200"
          >
            {ToolBoxList.map((item, i) => (
              <div
                onClick={() => setIsOpen((prev) => !prev)}
                className=" font-l relative flex w-full cursor-pointer  flex-col 
                justify-between rounded-r-lg border-l-2 border-l-transparent pb-1 pr-2 hover:border-l-gray-400 hover:bg-gray-800"
                key={i}
              >
                <a href="#gotoLevel1">
                  <div
                    className=" relative flex w-full flex-row justify-between py-1
                   pl-2 hover:rounded-lg hover:bg-gray-800"
                  >
                    <h3 className="font-bold ">{item.Thingy}</h3>
                    <h3>{item.Emoji}</h3>
                  </div>
                </a>

                <a href="#emailPros">
                  <div className="flex w-full flex-row justify-between pl-2 hover:rounded-lg  hover:bg-gray-800   ">
                    <h3 className="font-bold">{item.Other}</h3>
                    <h3 className="">{item.Stuff}</h3>
                  </div>
                </a>

                <a href="#landingPagePros">
                  <div className="flex w-full flex-row  justify-between pl-2 hover:rounded-lg hover:bg-gray-800   ">
                    <h3 className="font-bold">{item.landingPagePros}</h3>
                    <h3 className="">{item.Shark}</h3>
                  </div>
                </a>

                <a href="#contactMe">
                  <div className="flex w-full flex-row  justify-between pl-2 hover:rounded-lg hover:bg-gray-800  ">
                    <h3 className="font-bold">{item.Contact}</h3>
                    <h3 className="">{item.email}</h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDown;
