// eslint-disable-next-line no-unused-vars
import React from "react";
import { GiSailboat } from "react-icons/gi";
const ContactUs = () => {
  return (
    <div className="relative flex justify-center m-auto -top-[9rem]    " >
      <a
        href="https://resume-hub.mybabb.com/"
        style={{ textShadow: "2px 2px 3px #1c0303" }}
      >
        <div className="mt-[-1.8rem] ">
          <div
            className="text-right text-xl font-bold italic text-slate-500 sm:text-2xl dark:text-slate-400"
            style={{ fontSize: "24px", textShadow: "1px 1px black" }}
          ></div>
          <span id="contactus1"></span>

          <div className="m-auto mt-14   flex content-center justify-center">
            <div
              className="m-auto content-center rounded-full border border-solid
           border-slate-900 bg-gradient-to-t from-blue-600 to-gray-500
             hover:opacity-[70%]    p-3   text-2xl
            active:bg-varLIGHTBLUEFEATHER sm:text-3xl dark:border-none"
              style={{
                boxShadow:
                  "inset 0 0 10px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.8)",
                display: "inline-block",
                whiteSpace: "nowrap",
              }}
            >
              <span className="text-blue-200"
                style={{ display: "inline-block", transform: "scaleX(-1)" }}
              >
              <GiSailboat size={20}/>  
              </span>
              <span className="z-50 font-Blackbeard text-blue-200 ">
              &nbsp;Resume Hub&nbsp;
              </span>
              <span className=" inline-block text-blue-200"><GiSailboat size={20} /></span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContactUs;
