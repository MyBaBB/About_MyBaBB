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
            className="relative p-1 flex  items-center justify-center
             bg-varMEDSPACE dark:bg-black">
            <h2 className="h2PersonalizedWebsites mt-[-12rem]">
              <span className="Nosifer text-blue-300  whitespace-nowrap font-serif text-[.75rem] sm:text-[1.74rem]">
                Personalized Websites <br />
              </span>
            </h2>
            <p
              className="customBounce text-center sm:pt-0 landscape:text-center"
             
            >
              <span
                id="custom"
                className="custom text-varDARKBEAK" >
                <span className="rotate whitespace-nowrap PermanentMarker">
                  <span className="text-[4rem] text-red-800">Cu</span>
                     <span  className="text-gray-300">
                    <span className="text-[3.5rem]">s</span>t
                  </span>
                  <span className=" text-blue-700" >om</span>
                </span>
              </span>
              <br />
              <span
                id="websites"
                className="website EmilysCandy whitespace-nowrap text-varDARKBEAK text-[4rem]"
              
              >
                🕸️ WEB 🕸️
              </span>
              {/*  ♊🧑‍💻📷 */}
              <img src={CSSLogo} alt="CSS Logo" width={150} height={25} 
                  className='cssLogo block m-auto lazy-load'
                  />
            </p>
          </section>
          {/*  xxxxxxx 🧠📷Golden Brain section xxxxxxxxx */}
          <br id="phoneInHands" />
          <section className="phoneInHands relative container mx-auto rounded-3xl ">
            <a href="#weHelp">
                <div className="rounded-3xl bg-varDARKNECK mx-auto flex justify-center max-w-[350px]">
                  <img src={phoneInHands} alt="Phone in Hands" width={400} height={250}
                   className="w-max rounded-3xl p-4 relative z-1"
                    />
              </div>
            </a>

            
          </section>
          <h2 className="h2MobileResponsive Libre_Baskerville text-[18px]
           mt-8 text-amber-200 rounded-xl whitespace-nowrap">
              
                <u >Mobile Responsive</u>
                         </h2>
         </div>
        </article>
      </div>
      
<hr className="mx-auto w-1/2 h-[5px]  mt-[-3rem] border-[1px]
 border-blue-900 dark:border-blue-700 bg-black rounded-xl
    "/>
 












    
      <div
        className="Test m-[20px] h-[100vh] min-w-[300px] max-w-[80vw]
  border-2 border-blue-500 p-[2rem] "
      ></div>
      <div
        className="Test m-[20px] h-[100vh] min-w-[300px] max-w-[80vw]
  border-2 border-green-500 p-[2rem] "
      ></div>
    </div>
  );
};

export default SectionA;
