// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Section-A-Top.css";
import phoneInHands from "./Section-A-Img/phoneInHands.webp";
import CSSLogo from "./Section-A-Img/cssLogoHeight80px.png";
const SectionA = () => {
  return (
    <div
      className="sectionA  left-0 top-0 
                     z-[1] m-auto flex min-h-screen w-screen flex-col items-center justify-start bg-varMEDSPACE  
                      text-center dark:bg-black  dark:text-white "
    >
      <div
        className="sectionATop z-1 m-[20px] mt-[.5rem] h-[fit]
  min-w-[300px] max-w-[80vw]  p-[2rem]"
      >
        <article
          id="theWholeBigArticle"
          className="widescreen:section-min-height tallscreen:section-min-height flex 
        scroll-mt-[63.5px] flex-col items-center justify-center gap-8 sm:flex-row"
          style={{ padding: "0rem 1.5rem 1.5rem 1.5rem" }}
        >
          {/*  XXXXXXXXX Hero section🦸🏼xxxxxxxxxx */}
          <h2 className="hiddenSeoH2 absolute left-[200rem]">
            MyBabb Custom Websites
          </h2>
          <div className="flex flex-col text-center">
            <section
              id="hero"
              className="relative flex items-center  justify-center bg-varMEDSPACE
             p-1 dark:bg-black"
            >
              <h2 className="h2PersonalizedWebsites mt-[-12rem]">
                <span className="Nosifer whitespace-nowrap  font-serif text-[.75rem] text-blue-300 sm:text-[1.74rem]">
                  Personalized Websites <br />
                </span>
              </h2>
              <p className="customBounce text-center sm:pt-0 landscape:text-center">
                <span id="custom" className="custom text-varDARKBEAK">
                  <span className="rotate PermanentMarker whitespace-nowrap">
                    <span className="text-[4rem] text-red-800">Cu</span>
                    <span className="text-gray-300">
                      <span className="text-[3.5rem]">s</span>t
                    </span>
                    <span className=" text-blue-700">om</span>
                  </span>
                </span>
                <br />
                <span
                  id="websites"
                  className="website EmilysCandy whitespace-nowrap text-[4rem] text-varDARKBEAK"
                >
                  🕸️ WEB 🕸️
                </span>
                {/*  ♊🧑‍💻📷 */}
                <img
                  src={CSSLogo}
                  alt="CSS Logo"
                  width={150}
                  height={25}
                  className="cssLogo lazy-load m-auto block"
                />
              </p>
            </section>
            {/*  xxxxxxx 🧠📷Golden Brain section xxxxxxxxx */}
            <br id="phoneInHands" />
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
            <h2
              className="h2MobileResponsive Libre_Baskerville mt-8
           whitespace-nowrap rounded-xl text-[18px] text-amber-200"
            >
              <u>Mobile Responsive</u>
            </h2>
          </div>
        </article>
      </div>

      <hr
        className="mx-auto mt-[-3rem] h-[5px]  w-1/2 rounded-xl
 border-[1px] border-blue-900 bg-black dark:border-blue-700
    "
      />

      <div
        className="Test relative m-[20px] flex h-[100vh] min-w-[300px] max-w-[80vw] items-center justify-center border-2
  border-blue-500 p-[2rem] text-center "
      >
        <p className="text-white">Under Construction</p>
      </div>
      <div
        className="Test relative m-[20px] flex h-[100vh] min-w-[300px] max-w-[80vw] items-center justify-center border-2
  border-green-500 p-[2rem] text-center "
      >
        <p className="text-white">Under Construction</p>
      </div>
    </div>
  );
};

export default SectionA;