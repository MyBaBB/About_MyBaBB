// eslint-disable-next-line no-unused-vars
import React from 'react'
import phoneInHands from "./phoneInHands.webp";
import CSSLogo from "./cssLogoHeight80px.png";
import "./SectionB.css";
const SectionB = () => {
  return (
    <div>
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
      



      
    </div>
  )
}

export default SectionB
