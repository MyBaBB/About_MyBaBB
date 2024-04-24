// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";
import { LiaInfoSolid } from "react-icons/lia";
import NavbarLinks from "./NavbarLinks";
import { GiWoodCabin } from "react-icons/gi";
import { BsPiggyBank } from "react-icons/bs";
import { RiSeoLine } from "react-icons/ri";
import { BsPersonVcard } from "react-icons/bs";
import { SiTestinglibrary } from "react-icons/si";
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
      <h1 className="hiddenH1 absolute sm:hidden">
        <span
          className="whitespace-nowrap  font-Rye text-[12px] text-varLIGHTBEAKTOP
                           xs:text-xl"
        >
          About Web Development
        </span>
      </h1>
      {/* left-[-5.5rem] */}

      <div className={menu_class}>
        <section id="mobile-menu" className="relative m-auto flex  text-4xl">
          <div
            className=" relative top-0 z-[1] w-fit  
              bg-black bg-opacity-40 px-[3rem]   text-center font-Aclonica-Regular"
          >
            <nav
              className="justify-top relative my-auto   flex min-h-screen flex-col  "
              aria-label="mobile"
            >
              <p id="mobile-menu">
                <br />
                <br />
                <br />
                <a href="#phoneInHands" onClick={hideMobileMenu}>
                  {" "}
                  <div
                    className="relative flex origin-top     animate-open-menu rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                 to-slate-500 py-1 text-center text-black "
                  >
                    <div className="relative inline-block pl-4 ">
                      <GiWoodCabin />
                    </div>
                    <span className="] m-auto ml-[4rem] pr-6 hover:text-varMEDBEAKTOP ">
                      Home
                    </span>
                  </div>
                </a>
                <br />

                <a href="#aboutUs" onClick={hideMobileMenu}>
                  {" "}
                  <div
                    className="relative flex origin-top     animate-open-menu rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                 to-slate-500 py-1 text-center text-black "
                  >
                    <div className="relative inline-block pl-4 ">
                      <LiaInfoSolid />
                    </div>
                    <span className=" m-auto  pr-6 hover:text-varMEDBEAKTOP ">
                      About Us
                    </span>
                  </div>
                </a>
                <br />

                <a href="#piglets" onClick={hideMobileMenu}>
                  {" "}
                  <div
                    className="relative flex origin-top     animate-open-menu rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                 to-slate-500 py-1 text-center text-black "
                  >
                    <div className="relative inline-block pl-4 ">
                      <BsPiggyBank />
                    </div>
                    <span className="] m-auto  pr-6 hover:text-varMEDBEAKTOP ">
                      Your Brand
                    </span>
                  </div>
                </a>

                <br />
                <a href="#improveSEO" onClick={hideMobileMenu}>
                  {" "}
                  <div
                    className="relative flex origin-top     animate-open-menu rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                 to-slate-500 py-1 text-center text-black "
                  >
                    <div className="relative inline-block pl-4 pr-2 ">
                      <RiSeoLine />
                    </div>
                    <span className="] m-auto  pr-6 hover:text-varMEDBEAKTOP ">
                      Seo Booster
                    </span>
                  </div>
                </a>
                <br />

                <a href="https://mybabb.com" onClick={hideMobileMenu}>
                  {" "}
                  <div
                    className="relative flex origin-top     animate-open-menu rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                  to-slate-500 py-1 text-center text-black "
                  >
                    <div className="relative inline-block pl-4 pr-2">
                      <BsPersonVcard />
                    </div>
                    <span className="] m-auto  pr-6 hover:text-varMEDBEAKTOP ">
                      Main Site
                    </span>
                  </div>
                </a>
                <br />

                <a
                  href="https://resume-hub.mybabb.com/"
                  onClick={hideMobileMenu}
                >
                  {" "}
                  <div
                    className="relative flex origin-top     animate-open-menu rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                  to-slate-500 py-1 text-center text-black "
                  >
                    <div className="relative inline-block pl-4 ">
                      <SiTestinglibrary />
                    </div>
                    <span className="] m-auto ml-4 pr-6 hover:text-varMEDBEAKTOP ">
                     Resume Hub
                    </span>
                  </div>
                </a>
                <br />
              </p>
            </nav>
          </div>
        </section>
      </div>
      <NavbarLinks />
    </div>
  );
};

export default Navbar;
