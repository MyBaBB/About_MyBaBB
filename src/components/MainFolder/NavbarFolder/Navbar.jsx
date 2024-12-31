// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";
import { LiaInfoSolid } from "react-icons/lia";
import NavbarLinks from "./NavbarLinks";
import { BsGithub } from "react-icons/bs";
import { GiStrongMan, GiWoodCabin } from "react-icons/gi";
import { SiQuicklook } from "react-icons/si";
import { LiaHourglassHalfSolid } from "react-icons/lia";
import { GrBaby } from "react-icons/gr";

import { BsPersonVcard } from "react-icons/bs";
import { SiTestinglibrary } from "react-icons/si";

const goBack = () => {
  window.history.back();
};
const Navbar = () => {
  //to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //toggle burger menu classes
  const updateMenu = () => {
    if (isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass(" hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const hideMobileMenu = () => {
    setMenuClass("menu hidden");
    setIsMenuClicked(false);
    setBurgerClass("burger-bar unclicked");
  };

  return (
    <div
      className="navWrapper fixed top-0 z-50
       bg-gradient-to-b from-varLIGHTSPACE to-varDARKSPACE text-white"
      style={{
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <nav>
        <div className="burger-menu sm:hidden " onClick={updateMenu}>
          <div
            className={burger_class}
            style={{
              backgroundColor: "aliceblue",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            className={burger_class}
            style={{
              backgroundColor: "aliceblue",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            className={burger_class}
            style={{
              backgroundColor: "aliceblue",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
        </div>
      </nav>
      <h1
        className="hiddenH1 whitespace-nowrap text-center 
       
          font-Rye  text-[12px]  text-varLIGHTBEAKTOP
                     sm:hidden xs:text-xl"
      >
        About Web Development
      </h1>
      {/* left-[-5.5rem] */}
      {/* mobile menu bg color below*/}

      <div className={menu_class}>
        <section id="mobile-menu" className="relative m-auto flex  text-3xl">
          <div
            className="menuBackground relative z-[1] flex  w-fit  
               px-[3rem]   text-center font-Aclonica-Regular"
          >
            <nav
              className="mobileNav my-auto relative flex-col  min-h-screen justify-center items-center   "
              aria-label="mobile"
            >
       <div className='ContactButtonWrapper relative  mt-4 mb-14 flex justify-center '>
        <a href="https://contact.mybabb.com">
        <button onClick={goBack} className="ContactMeButton w-fit 
                  m-auto  border-[1px] border-[#419aff] p-2 rounded-2xl hover:bg-[#419aff]"  >
        <span className="ContactMeButtonText text-blue-100    ">Contact Me</span>
        </button>
        </a>
        </div>



              <div
                id="mobile-menu"
                className="relative my-auto flex-row items-center justify-center"
              >
                {/* xxxxxxx the mobile buttons xxxxxxxxx */}
                <a href="https://mybabb.com" onClick={hideMobileMenu}>
                  {" "}
                  <div className="buttonStyles   origin-top animate-open-menu text-blue-200 ">
                    <div className="relative inline-block pl-4 ">
                      <GiWoodCabin />
                    </div>
                    <span className="menuButtonWords  pr-6   text-4xl ">
                      Home
                    </span>
                  </div>
                </a>

                <a
                  href="https://mybabb.github.io/About_MyBaBB/"
                  onClick={hideMobileMenu}
                >
                  {" "}
                  <div className="buttonStyles   origin-top animate-open-menu text-blue-200 opacity-35 ">
                    <div className="relative inline-block pl-4 ">
                      <LiaInfoSolid />
                    </div>
                    <span className="menuButtonWords   pr-6   text-4xl ">
                      About
                    </span>
                  </div>
                </a>

                <a
                  href="https://mybabb.github.io/BetterMcTransport/"
                  onClick={hideMobileMenu}
                >
                  {" "}
                  <div className="buttonStyles   origin-top animate-open-menu text-blue-200 ">
                    <div className="relative inline-block pl-4 pr-2 ">
                      <SiQuicklook />
                    </div>
                    <span className="menuButtonWords   pr-6 ">Basic Demo</span>
                  </div>
                </a>

                <a href="https://github.com/MyBaBB" onClick={hideMobileMenu}>
                  {" "}
                  <div className="buttonStyles   origin-top animate-open-menu text-blue-200 ">
                    <div className="relative inline-block pl-4 pr-2 ">
                      <BsGithub />
                    </div>
                    <span className="menuButtonWords   pr-6 ">GitHub</span>
                  </div>
                </a>

               

                <a
                  href="https://my-introduction.onrender.com"
                  onClick={hideMobileMenu}
                >
                  {" "}
                  <div className="buttonStyles   origin-top animate-open-menu text-blue-200 ">
                    <div className="relative inline-block pl-4 ">
                      <GiStrongMan />
                    </div>
                    <span className="menuButtonWords   pr-6 ">
                      My Resume&apos;
                    </span>
                  </div>
                </a>

                <a href="https://franken-timer.onrender.com/">
                  <div className="buttonStyles   origin-top animate-open-menu text-blue-200 ">
                    <div className="relative inline-block pl-4 pr-2">
                      <LiaHourglassHalfSolid />
                    </div>
                    <span className="menuButtonWords   pr-6 ">
                      Special Event
                    </span>
                  </div>
                </a>

                <a
                  href=" https://custom.email.mybabb.com/"
                  onClick={hideMobileMenu}
                >
                  {" "}
                  <div className="buttonStyles   origin-top animate-open-menu text-blue-200 ">
                    <div className="relative inline-block pl-4 ">
                      <GrBaby />
                    </div>
                    <span className="menuButtonWords   pr-6 ">Starter Kit</span>
                  </div>
                </a>

                <a href="https://mybabb.com" onClick={hideMobileMenu}>
                  {" "}
                  <div className="buttonStyles   origin-top animate-open-menu text-blue-200 ">
                    <div className="relative inline-block pl-4  ">
                      <BsPersonVcard />
                    </div>
                    <span className="menuButtonWords  ml-[2rem] pr-8 ">
                      Web Developer
                    </span>
                  </div>
                </a>

                <a
                  href="https://resume-hub.mybabb.com/"
                  onClick={hideMobileMenu}
                >
                  {" "}
                  <div className="buttonStyles   origin-top animate-open-menu text-blue-200 ">
                    <div className="relative inline-block pl-4 ">
                      <SiTestinglibrary />
                    </div>
                    <span className="menuButtonWords   pr-6 ">Zale</span>
                  </div>
                </a>
              </div>
            </nav>
          </div>
        </section>
      </div>

      <NavbarLinks />
    </div>
  );
};

export default Navbar;
