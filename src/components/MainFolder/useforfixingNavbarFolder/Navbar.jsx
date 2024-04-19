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
  };

  return (
    <div
      className="navWrapper fixed top-0 z-50
       bg-gradient-to-br from-varMEDDUCKHEAD to-varDARKWING text-white"
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
        <section id="mobile-menu" className="relative flex m-auto  text-4xl">
          <div
            className=" relative top-0 z-[1] w-fit  
              bg-black bg-opacity-40 px-[3rem]   text-center font-Aclonica-Regular"
          >
            <nav
              className="relative justify-top my-auto   flex min-h-screen flex-col  "
              aria-label="mobile"
            >
              <p id="mobile-menu">
                <br />
                <br />
                <br />
                <a
                  href="#phoneInHands"
                 
                  onClick={hideMobileMenu}
                > <div className="relative flex text-center     origin-top animate-open-menu 
                                 text-black border-2   border-gray-700 rounded-3xl
                                 bg-gradient-to-b from-slate-100 to-slate-500 py-1 " >
                  <div className="relative inline-block pl-4 "><GiWoodCabin /></div>
                  <span className="hover:text-varMEDBEAKTOP m-auto ml-[4rem] pr-6 ] ">
                  Home 
                  </span>
                  </div>
                </a>
                <br />
               
                <a
                  href="#improveSEO"
                   
                  onClick={hideMobileMenu}
                > <div className="relative flex text-center     origin-top animate-open-menu 
                                 text-black border-2   border-gray-700 rounded-3xl
                                 bg-gradient-to-b from-slate-100 to-slate-500 py-1 " >
                  <div className="relative inline-block pl-4 "><LiaInfoSolid /></div>
                  <span className="hover:text-varMEDBEAKTOP m-auto  pr-6 ] ">
                  About Us 
                  </span>
                  </div>
                </a>
                <br />
              
                <a
                  href="#piglets"
                  
                  onClick={hideMobileMenu}
                > <div className="relative flex text-center     origin-top animate-open-menu 
                                 text-black border-2   border-gray-700 rounded-3xl
                                 bg-gradient-to-b from-slate-100 to-slate-500 py-1 " >
                  <div className="relative inline-block pl-4 "><BsPiggyBank /></div>
                  <span className="hover:text-varMEDBEAKTOP m-auto  pr-6 ] ">
                  Your Brand
                  </span>
                  </div>
                </a>

               
                <br />
                <a
                  href="#improveSEO"
                   
                  onClick={hideMobileMenu}
                > <div className="relative flex text-center     origin-top animate-open-menu 
                                 text-black border-2   border-gray-700 rounded-3xl
                                 bg-gradient-to-b from-slate-100 to-slate-500 py-1 " >
                  <div className="relative inline-block pl-4 pr-2 "><RiSeoLine /></div>
                  <span className="hover:text-varMEDBEAKTOP m-auto  pr-6 ] ">
                  Seo Booster 
                  </span>
                  </div>
                </a>
                <br />
               
               <a
                  href="https://mybabb.com"
                   
                  onClick={hideMobileMenu}
                > <div className="relative flex text-center     origin-top animate-open-menu 
                                 text-black border-2   border-gray-700 rounded-3xl
                                  bg-gradient-to-b from-slate-100 to-slate-500 py-1 " >
                  <div className="relative inline-block pl-4 pr-2"><BsPersonVcard /></div>
                  <span className="hover:text-varMEDBEAKTOP m-auto  pr-6 ] ">
                  MyBabb.com 
                  </span>
                  </div>
                </a>
                <br />
               
               <a
                  href="https://resume-hub.mybabb.com/"
                   
                  onClick={hideMobileMenu}
                > <div className="relative flex text-center     origin-top animate-open-menu 
                                 text-black border-2   border-gray-700 rounded-3xl
                                  bg-gradient-to-b from-slate-100 to-slate-500 py-1 " >
                  <div className="relative inline-block pl-4 "><SiTestinglibrary /></div>
                  <span className="hover:text-varMEDBEAKTOP m-auto ml-12 pr-6 ] ">
                  Kraken 
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
