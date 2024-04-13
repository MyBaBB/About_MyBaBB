// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import LightBulb from "./400x344workers.png";
import Gorilla from "../../Gorilla";

const SectionC = () => {
  return (
    <div>
      <div
        className="sectionATop z-1 m-[20px] mt-[.5rem] h-[fit]
  min-w-[300px] max-w-[80vw]  p-[2rem] "
      >
        <div>
          <div className="p-0 sm:p-4" id="AboutUs">
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
                     bg-gradient-to-b from-varDARKBLUEFEATHER to-varMEDDUCKHEAD py-12 dark:bg-black"
                >
                  <h3
                    id="weHelp"
                    className="Aclonica text-center text-2xl text-amber-200 sm:p-1 "
                    style={{
                      textShadow: "2px 2px 3px #1c0303",
                    }}
                  >
                    <span className="imQuotes inline-block">
                      <RiDoubleQuotesL />
                    </span>
                    I facilitate business growth by establishing and enhancing
                    your online presence.
                    <span className="imQuotes inline-block">
                      <RiDoubleQuotesR />
                    </span>
                  </h3>

                  <br />
                  {/* xxxxxxxxxxxxx about us  money Grow  section xxxxxxxxxxxxxxxx */}

                  <div className="text-center">
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
                      <span className="font-rye">
                        Here&apos;s what you can expect when you work with us:{" "}
                      </span>
                      <br />
                      <br />
                      <span>
                        🐮 A Link-Address that pushes traffic in.
                        <br />
                        🐮 A Custom Website that reflects your brand and values.
                        <br />
                        🐮 An email account and domain name to match your Your
                        Website.
                        <br />
                        🐮 A professional online presence that attracts
                        customers and boosts sales.
                        <br />
                        <span
                          style={{ color: "#89d981" }}
                          className="font-bold"
                        >
                          -And A Good Spot to Get Paid.
                        </span>
                        <br />
                      </span>
                      At MyBaBB, We are about helping small businesses succeed.
                      That&apos;s why we offer personalized website design
                      services that are tailored to your unique needs. Our
                      simple website design is perfect for small businesses on a
                      budget, but we also offer more advanced features and
                      design elements as your business grows.
                      <br />
                      We will work with you every step of the way to ensure that
                      your website is a success.
                      <br />
                      Ready to take your business to the next level? Contact us
                      today to learn more about our
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
              className="pr-4 text-right text-xl font-bold italic text-slate-500 sm:text-2xl dark:text-slate-400"
              style={{ fontSize: "24px", textShadow: "1px 1px black" }}
            >
              &#8212;Owner/
              <span className="text-varLIGHTBLUEFEATHER">🧑‍🌾MyBaBB</span>
            </div>
          </div>
        </div>
        <hr className=" w-50 h-4 border-2 border-red-500 bg-white" />
      </div>
      <Gorilla />
    </div>
  );
};

export default SectionC;
