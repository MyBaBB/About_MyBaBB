// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";

import ScubaManNav from "../ContainerFolder/ScubaNavFolder/ScubaManNav"; 
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
         <ScubaManNav />    
        <div
          className="footerRightWrapper relative  m-auto   mx-2 mb-0 
                     h-[60px]   w-screen flex-col items-center justify-center 
                       text-center text-red-300 "
        >
          <nav className="footerXXWrapper ">
            <MyBabbLogo />

            {/* XXX open this for the ul list for the footer */}
            <div className="footerUlWrapper  border-[.5px] border-transparent  ">
              {/* <ul
                className='footerListWrapper   xl:space-x-[18rem]" hidden space-x-[5rem]  pb-4  text-xl
                             sm:block md:m-auto md:space-x-[9rem] lg:space-x-[14rem] '
              >
                <li
                  className="FooterListItem4 hidden w-fit
                         border-[.5px] border-transparent sm:inline-block"
                >
                  <a
                    href="https://mybabb.github.io/BetterMcTransport/"
                    className="text-blue-200 hover:text-varDARKBLUEFEATHER "
                  >
                    <div
                      className="dataToolTip12 Libre_Baskerville"
                      data-tool-tip="Example of a Basic Landing Page"
                    >
                      <div
                        className="mt-4 inline-block rounded-xl border-[1px] 
                                        border-varLIGHTBLUEFEATHER"
                      >
                        <div className="rounded-xl   border-[2px]  border-black">
                          <div
                            className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
                                 p-2 hover:bg-black xxs:bg-gray-700"
                          >
                            <span className="NavbarTitle3 font-Aclonica text-[ rem] ">
                              Basic Page
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  className="FooterListItem5 hidden w-fit 
                        border-[.5px] border-transparent sm:inline-block"
                >
                  {" "}
                  <a
                    href="https://mybabb.github.io/SEO-BEST_PRACTICES/"
                    className="text-blue-200 hover:text-varDARKBLUEFEATHER "
                  >
                    <div
                      className="dataToolTip12 Libre_Baskerville"
                      data-tool-tip="This Tells about SEO and Why it is Important"
                    >
                      <div
                        className="inline-block rounded-xl border-[1px] 
                                         border-varLIGHTBLUEFEATHER"
                      >
                        <div className="rounded-xl   border-[2px]  border-black">
                          <div
                            className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
                                            p-2 hover:bg-black xxs:bg-gray-700"
                          >
                            <span className="NavbarTitle3 font-Aclonica text-[ rem] ">
                              SEO Page
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  className="FooterListItem6 hidden w-fit
                         border-[.5px] border-transparent sm:inline-block"
                >
                  {" "}
                  <a
                    href="https://mybabb.github.io/Franken-Timer/"
                    className="text-blue-200 hover:text-varDARKBLUEFEATHER "
                  >
                    <div
                      className="dataToolTip12 Libre_Baskerville"
                      data-tool-tip="Super Holiday Timer"
                    >
                      <div
                        className="inline-block rounded-xl border-[1px] 
                                      border-varLIGHTBLUEFEATHER"
                      >
                        <div className="rounded-xl   border-[2px]  border-black">
                          <div
                            className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
                                        p-2 hover:bg-black xxs:bg-gray-700"
                          >
                            <span className="NavbarTitle3 font-Aclonica text-[rem] ">
                              Special Event
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul> */}
            </div>
          </nav>
        </div>
    
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;