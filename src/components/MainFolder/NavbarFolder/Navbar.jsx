// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";
import "./MobileMenu.css";
import NavbarLinks from "./NavbarLinks";

import { TbScubaMask } from "react-icons/tb";
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
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav>
        <div className="burger-menu sm:hidden " onClick={updateMenu}>
          <div
            className={burger_class}
            style={{
              backgroundColor: "red",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            className={burger_class}
            style={{
              backgroundColor: "white",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            className={burger_class}
            style={{
              backgroundColor: "Blue",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
        </div>
      </nav>
      <h1 className="hiddenH1 absolute sm:hidden">
        <span
          className="w-fit  whitespace-nowrap  font-Rye text-[12px] text-varLIGHTBEAKTOP
                           xs:text-xl"
        >
          MyBabb Web Development
        </span>
      </h1>
      <div className="absolute right-[5rem] top-4 z-50 hidden sm:block">
        <a
          href="#toScubaMask"
          className="absolute  text-varLIGHTBLUEFEATHER hover:text-varLIGHTWING
                "
          onClick={hideMobileMenu}
        >
          <div
            className="dataToolTip33 Libre_Baskerville block sm:hidden"
            data-tool-tip="To The Bottom"
          >
            <div
              className="inline-block rounded-xl  
                             border-[1px]  border-varLIGHTBLUEFEATHER"
            >
              <div className="rounded-xl   border-[2px]  border-black">
                <div
                  className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
                                 p-2 hover:bg-black xxs:bg-gray-700"
                >
                  <span className="NavbarTitle4">
                    <div className=" block  ">
                      <TbScubaMask
                        size={20}
                        className=" z-50 text-blue-200  "
                      />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className={menu_class}>
        <section id="mobile-menu" className=" absolute  w-full text-4xl">
          <div
            className=" relative left-[-5.5rem] top-0 z-[1] w-screen border-2 border-red-600 
              bg-black pt-12 text-center font-Aclonica"
          >
            <nav
              className="justify-top flex min-h-screen flex-col items-center"
              aria-label="mobile"
            >
              <p id="mobile-menu">
                <br />
                <br />
                <br />
                <a
                  href="#phoneInHands"
                  className="w-full py-2 text-center "
                  onClick={hideMobileMenu}
                >
                  <span className="hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER">
                    Home
                  </span>
                </a>
                <br />
                <br />
                <a
                  href="#improveSEO"
                  className="w-full py-6 text-center "
                  onClick={hideMobileMenu}
                >
                  <span className=" hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER">
                    About Us
                  </span>
                </a>
                <br />
                <br />
                <a
                  href="#piglets"
                  className="w-full whitespace-nowrap py-6 text-center"
                  onClick={hideMobileMenu}
                >
                  <span className="hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER">
                    Your Brand
                  </span>
                </a>

                <br />
                <br />
                <a
                  href="#improveSEO"
                  className="w-full py-6 text-center"
                  onClick={hideMobileMenu}
                >
                  <span className="hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER">
                    SEO Booster
                  </span>
                </a>
                <br />
                <br />
                <a
                  href="https://mybabb.com"
                  className="w-full py-6 text-center"
                  onClick={hideMobileMenu}
                >
                  <span className="hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER">
                    <em>MyBaBB.com</em>
                  </span>
                </a>
                <br />
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
