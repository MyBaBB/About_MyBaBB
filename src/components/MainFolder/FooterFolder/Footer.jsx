// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import ScubaSpear from "../ContainerFolder/ScubaNavFolder/ScubaSpear";

import Copyright from "./Copyright";
import MyBabbLogo from "./MyBabbLogo";

const Footer = () => {
  return (
    <div
      className="footerScreenWrapper absolute   hidden h-fit    bg-gradient-to-br 
     from-varDARKWING to-varMEDDUCKHEAD text-white sm:block"
      style={{
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="FooterWrapper relative m-auto mb-0 
                   flex h-fit w-screen   pt-2"
      >
       
        <a href="#">
        <div className="scubaSpearWrapper relative flex ml-4 w-[65px] h-[65px] " >       
                   <ScubaSpear />
        </div>        
        </a>
       
        <div
          className="footerRightWrapper relative  m-auto   mx-2 mb-0 
                     h-[60px]   w-screen flex-col items-center justify-center 
                       text-center text-red-300 "
        >
          
          <nav className="footerXXWrapper ">
            <MyBabbLogo />

            {/* XXX open this for the ul list for the footer */}
            <div className="footerUlWrapper  border-[.5px] border-transparent  ">
            
            </div>
          </nav>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
