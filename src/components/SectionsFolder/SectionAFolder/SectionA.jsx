// eslint-disable-next-line no-unused-vars
import React from "react";
import "./SectionA.css";
import phoneInHands from "./phoneInHands.webp";
import CSSLogo from "./cssLogoHeight80px.png";
// import { SiTestinglibrary } from "react-icons/si";
import { GiGorilla } from "react-icons/gi";
import SectionB from "../SectionBFolder/SectionB";
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
 


 <SectionB />
      
      <div
        className="Test relative flex-row justify-center text-center items-center
         m-[20px] h-fit min-w-[300px] max-w-[80vw]
  border-2 border-lime-500  rounded-3xl p-[2rem] shadow-2xl bg-varLIGHTSPACE"
      >
         <div className="relative flex justify-center items-center w-full h-[30%]">
          <GiGorilla size={80} className="text-gray-800" /></div>
         
        <p className="black_ops_one text-lime-500 text-4xl">Under Construction</p>
      </div>
     {/*  <div
        className="Test relative flex-row justify-center text-center items-center
         m-[20px] h-[100vh] min-w-[300px] max-w-[80vw]
  border-2 border-green-500 p-[2rem] "
      >
         <div className="relative flex justify-center items-center w-full h-[30%]">
          <SiTestinglibrary size={80} /></div>
         
        <p className="Creepster text-lime-500 text-4xl">Under Construction</p>
      </div>
      */}
          <div>
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      <br />
      <br id="YourBrand" className="scroll-m-[-4rem]" />
      <div className="p-0 sm:p-4">
        <div style={{ boxShadow: '2px 2px 55px #000' }} className="rounded-3xl">
          <section className="my-12 p-6">
            <h2
              style={{
                position: 'absolute',
              
                margin: 'auto',
                left: '50%',
                top: '20px',
                transform: 'translate(-50%, -50%)',
                color: 'transparent',
                marginBottom: '4rem',
                zIndex: '51'
              }}
            >
              <span className="whitespace-nowrap font-rye text-[.74rem]">
                <u>Custom Website for a Special Event</u>
              </span>
            </h2>
            <blockquote className="relative rounded-3xl
             bg-gradient-to-b from-varMEDDUCKHEAD via-varDARKDUCKHEAD to-varMEDDUCKHEAD py-12 dark:bg-black">
              <br />

              <h2 className="relative flex justify-center bottom-8 font-rye text-xl text-center text-amber-200">
                <u>Professional Branding Service</u>
              </h2>

              <a href="#piglets" data-tool-tip="The Old Way">
                <div style={{ width: 'fit-content', margin: '0 auto' }}>
                  <div
                    className="rounded-full hover:bg-varMEDBEAKTOP active:bg-varLIGHTBLUEFEATHER"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      padding: '1rem',
                      boxShadow: '2px 2px 55px #000'
                    }}
                  >
                    <div className="relative content-center text-center">
                      <img
                        src="./build/img/piggylogo.png"
                        alt="Piggy Logo"
                        title="Piggy Logo"
                        width="139"
                        height="139"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <br />

                <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
                  <div id="piglets" style={{ boxShadow: '2px 2px 55px #000' }} className="relative content-center text-center">
                    <img
                      src="./build/img/piglets.webp"
                      alt="Piglets in a frame"
                      width="400"
                      height="250"
                      loading="lazy"
                    />
                  </div>
                </div>
              </a>

              <p
                id="CustomFont32px"
                className="before:top-18 mt-2 p-1 text-center text-2xl text-varLIGHTBLUEFEATHER before:absolute before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-varLIGHTBLUEFEATHER before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-varLIGHTBLUEFEATHER after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl"
                style={{ textShadow: '1px 1px black' }}
              ></p>
              <br />
              <br />
              <div className="p-8">
                <p className="text-2xl p-1 text-center" style={{ textShadow: '2px 2px 3px #1c0303', color: '#fff9d7' }}>
                  Creating a strong brand identity is crucial for the success of any business. Our Branding experts will work with you to create a unique and memorable brand identity that accurately portrays your Product or Idea.
                </p>
                <br />

                <p className="text-2xl p-1 text-center" style={{ textShadow: '2px 2px 3px #1c0303', color: 'rgb(245, 157, 157)' }}>
                  We believe that a strong visual presence is key to attracting and retaining customers.
                </p>
                <p className="text-2xl p-1 text-center" style={{ textShadow: '2px 2px 3px #1c0303', color: '#fff9d7' }}>
                  <br /> Once we have established your brand identity, we can move on to developing ideas and selecting appropriate images for your website.
                </p>
              </div>
              <br />
              <div className="text-center p-8">
                <span className="font-serif text-2xl p-0" style={{ textShadow: '2px 2px 3px #1c0303', color: '#fff9d7' }}>
                  We are committed to building a strong relationship with our clients and providing them with the best possible service. If you are ready to take the next step in building your brand, please let us know by
                </span>
                <a href="https://mybabb.com">
                  <div className="inline-block relative">
                    <span
                      className="getBrandedCushion2 font-serif text-2xl"
                      data-tool-tip="Inquire on the Contact Form"
                      style={{ color: 'rgba(245, 157, 157,1)', textShadow: '2px 2px 3px #1c0303' }}
                    >
                      "Getting Branded."
                    </span>
                  </div>
                </a>
                <span className="font-serif text-2xl p-1" style={{ textShadow: '2px 2px 3px #1c0303', color: '#fff9d7' }}>
                  After we can start handing the details of your project over to the developer team.
                </span>
              </div>
              <h2
                style={{
                  position: 'absolute',
                  
                  margin: 'auto',
                  left: '50%',
                  top: '20px',
                  transform: 'translate(-50%, -50%)',
                  color: '#fca802',
                  marginBottom: '4rem',
                  zIndex: '10'
                }}
              >
                <span className="whitespace-nowrap font-rye text-[.74rem] text-transparent">Brand Logo Design</span>
              </h2>
            </blockquote>
          </section>
        </div>
      </div>
    </div>
     
    <div
        className="Test relative flex-row justify-center text-center items-center
         m-[20px] h-fit min-w-[300px] max-w-[80vw]
  border-2 border-lime-500  rounded-3xl p-[2rem] shadow-2xl bg-varLIGHTSPACE"
      >
         <div className="relative flex justify-center items-center w-full h-[30%]">
          <GiGorilla size={80} className="text-gray-800" /></div>
         
        <p className="black_ops_one text-lime-500 text-4xl">Under Construction</p>
      </div>

            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

            <hr className="mx-auto my-12 w-1/2 bg-black dark:bg-white" />

<div id="improveSEO" className="p-4 sm:p-4">
  <div style={{ boxShadow: '2px 2px 55px #000' }} className="rounded-3xl">
    <article
      className="widescreen:section-min-height tallscreen:section-min-height my-12 p-6"
      style={{ scrollMarginTop: '95px' }}
    >
      <h2
        style={{
          position: 'absolute',
        
          margin: 'auto',
          left: '50%',
          top: '20px',
          transform: 'translate(-50%, -50%)',
          color: 'transparent',
          marginBottom: '4rem',
          zIndex: '51',
        }}
      >
        <span className="whitespace-nowrap font-rye text-[.74rem]">
          <u>Business Expansion</u>
        </span>
      </h2>
      <blockquote
        id="blockquote1"
        className="relative rounded-3xl bg-varMEDDUCKHEAD py-12 -mx-4"
      >
        <div className="content-center">
          <p
            className="p-4 text-center font-rye text-2xl"
            style={{
              fontSize: '40px',
              textShadow: '2px 2px 3px #1c0303',
              color: '#37e7bb',
            }}
          ></p>
        </div>

        <a href="#nightShippers">
          <div
            id="rattlesnakes"
            className="mx-auto flex w-full scroll-m-20 justify-center rounded-3xl bg-varDARKDUCKHEAD p-5"
            style={{
              maxWidth: '600px',
              borderBottomLeftRadius: '0',
              borderBottomRightRadius: '0',
            }}
          >
            <img
              id="imageAlt3"
              className="mb-1 w-max rounded-3xl"
              src="./build/img/Garagold600x400.webp"
              alt="Old Garage"
              width="600"
              height="400"
              loading="lazy"
              style={{
                position: 'relative',
                zIndex: '0',
                boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)',
                border: '2px solid black',
              }}
            />

            <img
              id="imageAlt4"
              className="mb-1 w-max rounded-3xl"
              src="./build/img/Garagenew600x400.webp"
              alt="Cowboy Shop"
              width="600"
              height="400"
              loading="lazy"
              style={{
                position: 'relative',
                zIndex: '0',
                boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)',
                border: '2px solid black',
              }}
            />
          </div>
        </a>
        <a href="#securityEye">
          <div
            id="nightShippers"
            className="mx-auto  w-full scroll-mt-24 justify-center rounded-b-3xl bg-varDARKDUCKHEAD p-5 pt-0"
            style={{ maxWidth: '600px' }}
          >
            <img
              className="w-max rounded-3xl"
              src="./build/img/GlobaldeliveryCool.jpg"
              alt="World Wide Shipping"
              width="600"
              height="400"
              loading="lazy"
              style={{
                position: 'relative',
                zIndex: '0',
                boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)',
                border: '2px solid black',
              }}
            />
          </div>
        </a>

        <h2
          className="p-1 text-center font-serif"
          style={{
            textShadow: '2px 2px 3px #1c0303',
            fontSize: '27px',
            color: '#fff9d7',
          }}
        >
          You have to be ready for business expansion. The value and
          benefits of this advertising investment make it a worthwhile
          choice.
        </h2>
        <a href="https://mybabb.github.io/SEO-BEST_PRACTICES/">
          <p
            className="text-center flex justify-center items-center m-0 m-auto text-blue-300 font-rye text-[22px]  hover:text-[whitesmoke]"
          >
            SEO Best Practices
          </p>
        </a>
        <p
          style={{ fontSize: '12px', color: 'wheat' }}
          className="text-center"
        >
          <em>
            (We are not suggesting mailing rattlesnakes to any specific
            country. This is a fictional example and no Rattle Snakes
            were harmed in this commercial.)
          </em>
        </p>
        <br />
        <div className="text-center">
          <span className="text-center text-4xl">🐟 🍞 🍷 🕊️</span>
        </div>
      </blockquote>
    </article>
  </div>
</div>







 
           {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
    <div
        className="Test relative flex-row justify-center text-center items-center
         m-[20px] h-fit min-w-[300px] max-w-[80vw]
  border-2 border-lime-500  rounded-3xl p-[2rem] shadow-2xl bg-varLIGHTSPACE"
      >
         <div className="relative flex justify-center items-center w-full h-[30%]">
          <GiGorilla size={80} className="text-gray-800" /></div>
         
        <p className="black_ops_one text-lime-500 text-4xl">Under Construction</p>
      </div>
               {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}


               <div>
    <div className="text-center">
      <p>
        <span className="animate-pulse font-serif text-lg text-varLIGHTBEAKTOP">
          Get noticed
        </span>
      </p>
    </div>
    <div className="mt-4">
      {/* xxxxxxx ♊📷⬇️babbcube xxxxxxxxxx*/}
      <img
        src="./build/img/babbcube.png"
        alt="The Cube"
        width="35"
        height="35"
        loading="lazy"
        style={{
          display: 'block',
          margin: 'auto'
        }}
      />
    </div>
    <br />
    <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
    </div>



           {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
    <div
        className="Test relative flex-row justify-center text-center items-center
         m-[20px] h-fit min-w-[300px] max-w-[80vw]
  border-2 border-lime-500  rounded-3xl p-[2rem] shadow-2xl bg-varLIGHTSPACE"
      >
         <div className="relative flex justify-center items-center w-full h-[30%]">
          <GiGorilla size={80} className="text-gray-800" /></div>
         
        <p className="black_ops_one text-lime-500 text-4xl">Under Construction</p>
      </div>

{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
<div className="text-right text-xl font-bold italic text-slate-500 dark:text-slate-400 sm:text-2xl" style={{ fontSize: '24px', textShadow: '1px 1px black' }}>
        <span className="whitespace-nowrap font-serif text-varLIGHTBLUEFEATHER">
          🕸️MyBabb🕸️&nbsp;&nbsp;&nbsp;
        </span>
      </div>
      <span id="contactus1"></span>
      <hr id="goHere" className="mx-auto w-1/2 bg-black dark:bg-white scroll-mt-10" />






           {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
    <div
        className="Test relative flex-row justify-center text-center items-center
         m-[20px] h-fit min-w-[300px] max-w-[80vw]
  border-2 border-lime-500  rounded-3xl p-[2rem] shadow-2xl bg-varLIGHTSPACE"
      >
         <div className="relative flex justify-center items-center w-full h-[30%]">
          <GiGorilla size={80} className="text-gray-800" /></div>
         
        <p className="black_ops_one text-lime-500 text-4xl">Under Construction</p>
      </div>
      <div className="flex justify-center content-center m-auto mt-14">
  <div
    className="content-center p-10 m-auto rounded-full border border-solid border-slate-900 bg-varMEDBLUEFEATHER p-3 font-orbitron text-2xl text-black active:bg-varLIGHTBLUEFEATHER dark:border-none sm:text-3xl"
    style={{
      boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.8)",
      display: "inline-block",
      whiteSpace: "nowrap",
    }}
  >
    <a href="https://MyBaBB.com" style={{ textShadow: "2px 2px 3px #1c0303" }}>
      <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
        📡
      </span>
      <span className="z-50 text-varLIGHTBLUEFEATHER hover:text-varLIGHTBEAKTOP">
        Contact
      </span>
      <span>📡</span>
    </a>
  </div>
</div>
        
           {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
    <div
        className="Test relative flex-row justify-center text-center items-center
         m-[20px] h-fit min-w-[300px] max-w-[80vw]
  border-2 border-lime-500  rounded-3xl p-[2rem] shadow-2xl bg-varLIGHTSPACE"
      >
         <div className="relative flex justify-center items-center w-full h-[30%]">
          <GiGorilla size={80} className="text-gray-800" /></div>
         
        <p className="black_ops_one text-lime-500 text-4xl">Under Construction</p>
      </div>
      <div className="rounded-full text-center border-2 border-red-500 w-50 h-50"
 style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
  <img
    id="imageAlt1"
    src="./build/img/submit.png"
    alt="Alien Submit Ship"
    width="175"
    height="175"
  />
  <img
    id="imageAlt2"
    src="./build/img/submitalt.png"
    alt="Alien Submit Ship with lights on"
    width="175"
    height="175"
  />




  
</div>

      
           {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
           <div
        className="Test relative flex-row justify-center text-center items-center
         m-[20px] h-fit min-w-[300px] max-w-[80vw]
  border-2 border-lime-500  rounded-3xl p-[2rem] shadow-2xl bg-varLIGHTSPACE"
      >
         <div className="relative flex justify-center items-center w-full h-[30%]">
          <GiGorilla size={80} className="text-gray-800" /></div>
         
        <p className="black_ops_one text-lime-500 text-4xl">Under Construction</p>
      </div>




    </div>
  );
};

export default SectionA;