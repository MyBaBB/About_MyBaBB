// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import ToolBoxList from "./ToolBoxList.json";
import "./ToolBox.css";
 
function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="absolute left-[50%] sm:left-[85%] lg:left-[90%]  translate-x-[-50%]  
        sm:block   sm:[95%] sm:absolute
     top-[10rem] sm:top-[12rem]  z-10"
    >
      <div className="tools relative flex h-[40px] w-[150px] flex-col items-center rounded-lg">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="directoryTop flex w-full items-center justify-between rounded-lg outline-[1px] 
          border-transparent bg-[#24558d] p-0 py-2 text-center font-ArchivoBlack-Regular 
          text-lg font-bold tracking-wider text-blue-200 duration-300
           hover:bg-opacity-20 active:border-white active:text-white"
        >
          &nbsp;&nbsp;Directory
          {isOpen ? (
            <AiOutlineCaretUp className="h-8  text-green-400 mr-2" />
          ) : (
            <AiOutlineCaretDown className="h-8 text-green-400 mr-2" />
          )}
        </button>
                            {/* animate-open-menu is in custom tailwind.config file */}
        {isOpen && (
          <div                   
            className="openDrawer origin-top animate-open-menu absolute top-[3.05rem] flex w-full flex-col items-start 
          rounded-lg bg-[#24558d] p-1 text-blue-200"
          >
            {ToolBoxList.map((item, i) => (
              <div onClick={() => setIsOpen((prev) => !prev)}
                className=" relative flex w-full cursor-pointer flex-col  justify-between 
                rounded-r-lg pr-2 pb-1 border-l-2 font-l border-l-transparent hover:border-l-gray-400 hover:bg-gray-800"
                key={i}
              >
                <a href="#gotoLevel1">
                  <div
                    className=" pl-2 relative flex w-full flex-row justify-between
                   py-1 hover:rounded-lg hover:bg-gray-800"
                  >
                    <h3 className="font-bold ">{item.Thingy}</h3>
                    <h3>{item.Emoji}</h3>
                  </div>
                </a>

                <a href="#emailPros">
                  <div className="flex pl-2 w-full flex-row justify-between hover:rounded-lg  hover:bg-gray-800   ">
                    <h3 className="font-bold">{item.Other}</h3>
                    <h3 className="">{item.Stuff}</h3>
                  </div>
                </a>

                <a href="#landingPagePros">
                  <div className="pl-2 flex w-full  flex-row justify-between hover:rounded-lg hover:bg-gray-800   ">
                    <h3 className="font-bold">{item.landingPagePros}</h3>
                    <h3 className="">{item.Shark}</h3>
                  </div>
                </a>

                <a href="#contactMe">
                  <div className="pl-2 flex w-full  flex-row justify-between hover:rounded-lg hover:bg-gray-800  ">
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
