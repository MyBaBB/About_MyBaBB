// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import LightBulb from "./400x344workers.png";
import { RxDot } from "react-icons/rx";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
const SectionB = () => {
  return (
    <div>
      <div
        className="sectionBTop z-1 m-[20px] mt-[.5rem] h-[fit]
  min-w-[290px] max-w-[80vw]   scroll-mt-[4rem]  p-[.2px] sm:p-[2rem] "
      >
        <div>
          <div className="scroll-mt-[-40rem] p-0 sm:p-4 ">
            <div
              style={{ boxShadow: "2px 2px 55px #000" }}
              className="rounded-3xl"
            >
              <section
                id="mainBoxes"
                className="mb-10 p-6"
                style={{ scrollMarginTop: "95px" }}
              >
                <blockquote
                  className="relative content-center rounded-3xl
                     bg-gradient-to-b from-varDARKBLUEFEATHER to-varMEDDUCKHEAD pt-12 dark:bg-black"
                >
                  <h3
                    id="weHelp"
                    className="Aclonica text-center text-2xl text-amber-200 sm:p-1 "
                    style={{
                      textShadow: "2px 2px 3px #1c0303",
                    }}
                  >
                    <span className="whitespace-nowrap">
                      <span className="imQuotes inline-block">
                        <RiDoubleQuotesL />
                      </span>
                      &nbsp; We can facilitate
                    </span>{" "}
                    business growth by establishing and enhancing{" "}
                    <span className="whitespace-nowrap">
                      your online{" "}
                      <span className="whitespace-nowrap ">presence.</span>{" "}
                      &nbsp;
                      <span className="imQuotes inline-block">
                        <RiDoubleQuotesR />
                      </span>
                    </span>
                  </h3>

                  <br />
                  {/* xxxxxxxxxxxxx about us  money Grow  section xxxxxxxxxxxxxxxx */}

                  <div id="aboutUs" className="scroll-mt-[16rem] text-center">
                    <img
                      src={LightBulb}
                      alt="Money Grow"
                      width="600"
                      height="400"
                      loading="lazy"
                      className="d-block relative mx-auto rounded-full border-4 border-solid border-varDARKWING"
                    />
                  </div>

                  <div>
                    <br />
                    <p
                      className="p-8 text-center text-2xl text-white"
                      style={{ textShadow: "2px 2px 3px #1c0303" }}
                    >
                      <span className="Aclonica text-amber-200">
                        Here&apos;s what you can expect when{" "}
                        <span className="whitespace-nowrap">
                          you work with us :
                        </span>
                      </span>
                      <br />
                      <br />
                      <div>
                        <span
                          className="Archivo_Black relative whitespace-nowrap text-lg  
                         text-green-500 xs:text-2xl"
                        >
                          &nbsp;
                          <PiDotsThreeOutlineLight className="inline-block  text-blue-400" />
                          &nbsp;Link-Address Optimization &nbsp;
                          <PiDotsThreeOutlineLight className="inline-block  text-blue-400" />
                        </span>
                        <p className="Libre_Baskerville mb-[4px] ">
                          &nbsp;&nbsp; We provide a link address that drives
                          targeted traffic to your website.
                        </p>
                        <br />

                        <span className="Archivo_Black relative whitespace-nowrap text-lg   text-green-500 xs:text-2xl">
                          &nbsp;
                          <PiDotsThreeOutlineLight className="inline-block  text-blue-400" />
                          &nbsp;Custom Website Design &nbsp;
                          <PiDotsThreeOutlineLight className="inline-block  text-blue-400" />
                        </span>
                        <p className="Libre_Baskerville mb-[4px] ">
                          &nbsp;&nbsp; Our team creates a custom website that
                          aligns with your brand identity{" "}
                          <span className="whitespace-nowrap">
                            and core values.
                          </span>
                        </p>
                        <br />
                        <span className="Archivo_Black relative whitespace-nowrap text-lg text-green-500 xs:text-2xl">
                          &nbsp;
                          <PiDotsThreeOutlineLight className="inline-block  text-blue-400" />
                          &nbsp;Domain and Email Integration &nbsp;
                          <PiDotsThreeOutlineLight className="inline-block  text-blue-400" />
                        </span>
                        <p className="Libre_Baskerville mb-[4px] ">
                          &nbsp;&nbsp; We provide a link address that drives
                          targeted traffic to{" "}
                          <span className="whitespace-nowrap">
                            your website.
                          </span>
                        </p>
                        <br />

                        <span className="Archivo_Black relative whitespace-nowrap text-lg text-green-500 xs:text-2xl">
                          &nbsp;
                          <PiDotsThreeOutlineLight className="inline-block  text-blue-400" />
                          &nbsp;Enhanced Online Presence &nbsp;
                          <PiDotsThreeOutlineLight className="inline-block  text-blue-400" />
                        </span>
                        <br />
                        <p className="Libre_Baskerville mb-[4px] ">
                          &nbsp;&nbsp; Our services result in an online presence
                          that attracts customers and drives sales.
                        </p>
                        <br />
                        <span className="Archivo_Black relative whitespace-nowrap text-lg text-green-500 xs:text-2xl">
                          &nbsp;
                          <PiDotsThreeOutlineLight className="inline-block  text-blue-400" />
                          &nbsp;Payment Integration &nbsp;
                          <PiDotsThreeOutlineLight className="inline-block  text-blue-400" />
                        </span>
                        <p className="Libre_Baskerville mb-[4px] ">
                          &nbsp;&nbsp; Additionally, we ensure a seamless
                          payment process for your business.
                        </p>

                        <br />
                      </div>
                      <p className="text-left">
                        At MyBaBB, we specialize in helping small businesses
                        thrive. Our personalized website design services cater
                        to your specific requirements. Whether you&apos;re on a
                        budget or looking for advanced features, we&apos;ve got
                        you covered. We&apos;ll guide you through every step to
                        ensure your website&apos;s success.
                      </p>
                      <br />
                      <RxDot
                        size={20}
                        className="inline-block text-amber-200"
                      />
                      &nbsp; We will work with you every step of the way to
                      ensure that your website is a success.
                      <br />
                      <RxDot
                        size={20}
                        className="inline-block text-amber-200"
                      />
                      &nbsp; Ready to elevate your business? Contact us today to
                      learn more about our offerings.
                      <br />
                      <div className="relative my-4 text-center text-2xl">
                        <a
                          href="Https://mybabb.com"
                          className="Orbitron text-varLIGHTBLUEFEATHER
                             hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER"
                        >
                          <h3
                            style={{
                              textDecorationColor: "rgba(182, 121, 2,1)",
                            }}
                          >
                            <u>Website Development Services.</u>
                          </h3>
                        </a>
                      </div>
                    </p>
                  </div>
                </blockquote>
              </section>
            </div>

            <div
              className="mr-8 text-right text-[.75rem] font-bold italic text-slate-500 
               dark:text-slate-400"
              style={{ fontSize: "24px", textShadow: "1px 1px black" }}
            >
              &#8212;Owner/
              <span className="text-varLIGHTBLUEFEATHER">🧑‍🌾MyBaBB</span>
            </div>
          </div>
        </div>
      </div>
      <hr
        className=" m-auto mb-[2.5rem] mt-[2.5rem] h-[5px] w-[80%]
rounded-xl border-[1px] border-varMEDBLUEFEATHER bg-black dark:bg-gray-800"
      />
    </div>
  );
};

export default SectionB;