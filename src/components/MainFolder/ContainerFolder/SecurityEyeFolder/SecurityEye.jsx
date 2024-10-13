/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import React from "react";
// import EyeBG from './eyeBG.webp';
import { HiOutlinePower } from "react-icons/hi2";
import AwesomeEye from "./awesomeEye.png";
import "./SecurityEye.css";
const goBack = () => {
  window.history.back();
};

const SecurityEye = () => {
  return (
    <div>
      <div>
        <div className=" my-10 scroll-mt-[7rem] " id="eyeball ">
          <div className="eyeBackgroundHover   m-auto w-fit rounded-full  ">
            <div
              className="hoverdiv border-4 border-gray-900 shadow-2xl"
              style={{
                borderRadius: "50%",
                boxShadow:
                  "inset 0 0 10px rgba(0, 0, 0, 0.1), inset 0 0 20px rgba(0, 0, 0, 0.7), inset 0 0 30px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* iris div  */}

              <div
                id="securityEye"
                className="eyeballdiv scroll-mt-[8rem] border-[#153150] "
              ></div>
              <div className="eyeballdiv2 border-[#153150]"></div>
              <div className="eyeballdiv3 border-[#18384a]"></div>
              <div className="goodySwitch  ">
                <div className="   relative  m-auto ml-8 flex    h-[60px]   w-[60px] justify-center   align-middle ">
                  <span className="goodySwitchWords touch:animate-rotate180 relative   m-auto flex w-fit rotate-180      rounded-full    ">
                    <HiOutlinePower size={60} className=" " />
                  </span>
                </div>
              </div>
              <img
                src={AwesomeEye}
                alt="Web Developer Eye"
                width="190"
                height="190"
                loading="lazy"
                className="rounded-full"
              />
              <div className="expandingIris"></div>
              <div className="irisHighlight"></div>
              <div className="redOnLight"></div>
            </div>
          </div>
        </div>
        <a onClick={goBack}
          href="https://contact.mybabb.com"
          data-tool-tip="Communicate Here"
          style={{ textShadow: "2px 2px 3px #1c0303" }}
        >
          <div
            className="m-auto w-fit rounded-full"
            style={{ boxShadow: "0px 0px 8px rgba(225, 225, 225, 0.5)" }}
          >
            <div
              className="font-orbitron m-auto   content-center rounded-full border
                             border-solid border-transparent bg-varMEDBLUEFEATHER p-3 text-2xl text-black
                              active:bg-varLIGHTBLUEFEATHER sm:text-3xl dark:border-none"
              style={{
                boxShadow:
                  "inset 0 0 10px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.8)",
                display: "inline-block",
              }}
            >
              <span
                style={{ display: "inline-block", transform: "scaleX(-1)" }}
              >
                📡
              </span>
              <span className="z-50 font-Sixtyfour text-varLIGHTBLUEFEATHER hover:text-blue-200">
                Contact
              </span>
              <span>📡</span>
            </div>
          </div>
        </a>
        <div className="relative mx-12">
          <br />
          <p
            className="p-1 text-center font-BlackOpsOne text-blue-300"
            style={{ fontSize: "25px", textShadow: "2px 2px 3px #1c0303" }}
          >
            Here at this portal you can leave a message directly to your Web
            Developer.
            <br />
            We pride ourselves in creating unique and innovative websites that
            are tailored to your specific needs and <br />
            We always work on Ideas to improve your Advertising Campaign.
          </p>
          <br />
          <p className="font-LibreBaskerville text-xl text-emerald-50">
            The Branding process is a Fundamental step in Web Development,
            particularly for the developers, who must prepare for the intricate
            work ahead.
            <span className="whitespace-nowrap text-red-500">
              Customization is key
            </span>
            , and we begin by programming even the simplest elements, such as
            color codes, with painstaking attention to detail. There are no
            shortcuts here; every aspect of the development process is tailored
            to meet the unique needs of each project.
          </p>
          <p className="mt-4 font-LibreBaskerville text-2xl text-emerald-50">
            If you require a custom order, please do not hesitate to contact us
            below for a personalized estimate. Alternatively, we are also
            developing unique designs to offer for sale in the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityEye;
