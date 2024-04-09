// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";
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

  return (
    <div
      className="navWrapper fixed top-0 z-50 bg-gradient-to-br from-varMEDDUCKHEAD to-varDARKWING text-white"
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
          className="Rye  w-fit  whitespace-nowrap text-[12px] text-varLIGHTBEAKTOP
                           xs:text-3xl"
        >
          MyBabb Web Development
        </span>
      </h1>
      <div className="absolute right-[5rem] top-4 z-50">
        <a
          href="#toScubaMask"
          className="absolute   text-varLIGHTBLUEFEATHER hover:text-varLIGHTWING
                "
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
        <MobileMenu />
      </div>
      <NavbarLinks />
    </div>
  );
};

export default Navbar;
