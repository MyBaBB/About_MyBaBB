// eslint-disable-next-line no-unused-vars
import React from "react";
import phoneInHands from "./phoneInHands.webp";
 
import { GiSpiderWeb } from "react-icons/gi";
import "./SectionA.css";
import ContactUs from "../../ContainerFolder/ContactUsFolder/ContactUs";
import Sponsor2 from "../SponsorFolder/Sponsor2";

const SectionA = () => {
  return (
    <div>
       < ContactUs />
      <div
        className="sectionATop z-[100] m-[20px] mt-[.5rem] h-[fit]
  min-w-[300px] max-w-[80vw]   p-[2rem]"
      >
        <article
          id="theWholeBigArticle"
          className="widescreen:section-min-height tallscreen:section-min-height flex 
        scroll-mt-[63.5px] flex-col items-center justify-center gap-8 sm:flex-row"
          style={{ padding: "0rem 1.5rem 1.5rem 1.5rem" }}
        >
          {/*  XXXXXXXXX Hero section🦸🏼xxxxxxxxxx */}

          <div className="flex flex-col text-center">
           
            <section
              id="hero"
              className="relative flex items-center  justify-center 
            p-1 dark:bg-black"
            >
              <h2 className="h2PersonalizedWebsites mt-[-12rem]">
                <span
                  className="whitespace-nowrap 
                  font-Nosifer text-[.75rem] text-blue-200 sm:text-[1.74rem] md:text-[2.74rem]"
                >
                  Personalized Websites <br />
                </span>
              </h2>
              <p className="customBounce text-center sm:pt-0 landscape:text-center">
                <span id="custom" className="custom text-varDARKBEAK">
                  <span className="rotate whitespace-nowrap font-PermanentMarker">
                    <span className="text-[4rem] text-red-800">Cu</span>
                    <span className="text-gray-500">
                      <span className="text-[3.5rem]">s</span>t
                    </span>
                    <span className=" text-blue-700">om</span>
                  </span>
                </span>
                <br />
                <span
                  id="websites"
                  className="website whitespace-nowrap font-EmilysCandy text-[4rem] text-varDARKBEAK"
                >
                 <span className="absolute left-[-3rem] text-black ">
                  <GiSpiderWeb size={50}/>
                 </span>
                 &nbsp;&nbsp; WEB &nbsp;&nbsp;
                 <span className="absolute right-[-3rem] text-black">
                  <GiSpiderWeb size={50} /></span>
                </span>
                <Sponsor2 />
               
              </p>
            </section>
            <h2
              id="home"
              className="h2MobileResponsive mb-[-1rem]  mt-8  whitespace-nowrap 
           rounded-xl font-Sixtyfour text-[13px] text-amber-300"
            >
              Mobile Responsive
            </h2>
            <br id="phoneInHands" className="scroll-mt-[7rem]" />
            <section className="phoneInHands container relative mx-auto rounded-3xl ">
              <a href="#weHelp">
                <div className="mx-auto flex max-w-[350px] justify-center rounded-3xl bg-varDARKNECK">
                  <img
                    src={phoneInHands}
                    alt="Phone in Hands"
                    width={400}
                    height={250}
                    className="z-1 relative w-max rounded-3xl p-4"
                  />
                </div>
              </a>
            </section>
          </div>
        </article>
      </div>
      <hr
        className=" m-auto mb-[2.5rem] mt-[-2.5rem] h-[5px] w-[80%]
rounded-xl border-[1px] border-varMEDBLUEFEATHER bg-black dark:bg-gray-800"
      />
    </div>
  );
};

export default SectionA;
