// eslint-disable-next-line no-unused-vars
import React from "react";

// import { SiTestinglibrary } from "react-icons/si";
import Gorilla from "../../Gorilla.jsx";

import SectionB from "./SectionBFolder/SectionB.jsx";
import SectionA from "./SectionAFolder/SectionA.jsx";
const Container = () => {
  return (
    <div
      className="sectionA  left-0 top-0 
                     z-[1] m-auto flex min-h-screen w-screen flex-col items-center justify-start bg-varMEDSPACE  
                      text-center dark:bg-black  dark:text-white "
    >
      <SectionA />

      <SectionB />

      <div>
        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
        <br />
        <br id="YourBrand" className="scroll-m-[-4rem]" />
        <div className="p-0 sm:p-4">
          <div
            style={{ boxShadow: "2px 2px 55px #000" }}
            className="rounded-3xl"
          >
            <section className="my-12 p-6">
              <h2
                style={{
                  position: "absolute",

                  margin: "auto",
                  left: "50%",
                  top: "20px",
                  transform: "translate(-50%, -50%)",
                  color: "transparent",
                  marginBottom: "4rem",
                  zIndex: "51",
                }}
              >
                <span className="font-rye whitespace-nowrap text-[.74rem]">
                  <u>Custom Website for a Special Event</u>
                </span>
              </h2>
              <blockquote
                className="relative rounded-3xl
             bg-gradient-to-b from-varMEDDUCKHEAD via-varDARKDUCKHEAD to-varMEDDUCKHEAD py-12 dark:bg-black"
              >
                <br />

                <h2 className="font-rye relative bottom-8 flex justify-center text-center text-xl text-amber-200">
                  <u>Professional Branding Service</u>
                </h2>

                <a href="#piglets" data-tool-tip="The Old Way">
                  <div style={{ width: "fit-content", margin: "0 auto" }}>
                    <div
                      className="rounded-full hover:bg-varMEDBEAKTOP active:bg-varLIGHTBLUEFEATHER"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "1rem",
                        boxShadow: "2px 2px 55px #000",
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

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "1rem",
                    }}
                  >
                    <div
                      id="piglets"
                      style={{ boxShadow: "2px 2px 55px #000" }}
                      className="relative content-center text-center"
                    >
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
                  className="before:top-18 mt-2 p-1 text-center text-2xl text-varLIGHTBLUEFEATHER before:absolute before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-varLIGHTBLUEFEATHER before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-varLIGHTBLUEFEATHER after:opacity-25 after:content-['\201D'] sm:text-3xl dark:text-slate-400"
                  style={{ textShadow: "1px 1px black" }}
                ></p>
                <br />
                <br />
                <div className="p-8">
                  <p
                    className="p-1 text-center text-2xl"
                    style={{
                      textShadow: "2px 2px 3px #1c0303",
                      color: "#fff9d7",
                    }}
                  >
                    Creating a strong brand identity is crucial for the success
                    of any business. Our Branding experts will work with you to
                    create a unique and memorable brand identity that accurately
                    portrays your Product or Idea.
                  </p>
                  <br />

                  <p
                    className="p-1 text-center text-2xl"
                    style={{
                      textShadow: "2px 2px 3px #1c0303",
                      color: "rgb(245, 157, 157)",
                    }}
                  >
                    We believe that a strong visual presence is key to
                    attracting and retaining customers.
                  </p>
                  <p
                    className="p-1 text-center text-2xl"
                    style={{
                      textShadow: "2px 2px 3px #1c0303",
                      color: "#fff9d7",
                    }}
                  >
                    <br /> Once we have established your brand identity, we can
                    move on to developing ideas and selecting appropriate images
                    for your website.
                  </p>
                </div>
                <br />
                <div className="p-8 text-center">
                  <span
                    className="p-0 font-serif text-2xl"
                    style={{
                      textShadow: "2px 2px 3px #1c0303",
                      color: "#fff9d7",
                    }}
                  >
                    We are committed to building a strong relationship with our
                    clients and providing them with the best possible service.
                    If you are ready to take the next step in building your
                    brand, please let us know by
                  </span>
                  <a href="https://mybabb.com">
                    <div className="relative inline-block">
                      <span
                        className="getBrandedCushion2 font-serif text-2xl"
                        data-tool-tip="Inquire on the Contact Form"
                        style={{
                          color: "rgba(245, 157, 157,1)",
                          textShadow: "2px 2px 3px #1c0303",
                        }}
                      >
                        "Getting Branded."
                      </span>
                    </div>
                  </a>
                  <span
                    className="p-1 font-serif text-2xl"
                    style={{
                      textShadow: "2px 2px 3px #1c0303",
                      color: "#fff9d7",
                    }}
                  >
                    After we can start handing the details of your project over
                    to the developer team.
                  </span>
                </div>
                <h2
                  style={{
                    position: "absolute",

                    margin: "auto",
                    left: "50%",
                    top: "20px",
                    transform: "translate(-50%, -50%)",
                    color: "#fca802",
                    marginBottom: "4rem",
                    zIndex: "10",
                  }}
                >
                  <span className="font-rye whitespace-nowrap text-[.74rem] text-transparent">
                    Brand Logo Design
                  </span>
                </h2>
              </blockquote>
            </section>
          </div>
        </div>
      </div>

      <Gorilla />

      {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

      <hr className="mx-auto my-12 w-1/2 bg-black dark:bg-white" />

      <div id="improveSEO" className="p-4 sm:p-4">
        <div style={{ boxShadow: "2px 2px 55px #000" }} className="rounded-3xl">
          <article
            className="widescreen:section-min-height tallscreen:section-min-height my-12 p-6"
            style={{ scrollMarginTop: "95px" }}
          >
            <h2
              style={{
                position: "absolute",

                margin: "auto",
                left: "50%",
                top: "20px",
                transform: "translate(-50%, -50%)",
                color: "transparent",
                marginBottom: "4rem",
                zIndex: "51",
              }}
            >
              <span className="font-rye whitespace-nowrap text-[.74rem]">
                <u>Business Expansion</u>
              </span>
            </h2>
            <blockquote
              id="blockquote1"
              className="relative -mx-4 rounded-3xl bg-varMEDDUCKHEAD py-12"
            >
              <div className="content-center">
                <p
                  className="font-rye p-4 text-center text-2xl"
                  style={{
                    fontSize: "40px",
                    textShadow: "2px 2px 3px #1c0303",
                    color: "#37e7bb",
                  }}
                ></p>
              </div>

              <a href="#nightShippers">
                <div
                  id="rattlesnakes"
                  className="mx-auto flex w-full scroll-m-20 justify-center rounded-3xl bg-varDARKDUCKHEAD p-5"
                  style={{
                    maxWidth: "600px",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
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
                      position: "relative",
                      zIndex: "0",
                      boxShadow: "0 0 50px rgba(0, 0, 0, 0.5)",
                      border: "2px solid black",
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
                      position: "relative",
                      zIndex: "0",
                      boxShadow: "0 0 50px rgba(0, 0, 0, 0.5)",
                      border: "2px solid black",
                    }}
                  />
                </div>
              </a>
              <a href="#securityEye">
                <div
                  id="nightShippers"
                  className="mx-auto  w-full scroll-mt-24 justify-center rounded-b-3xl bg-varDARKDUCKHEAD p-5 pt-0"
                  style={{ maxWidth: "600px" }}
                >
                  <img
                    className="w-max rounded-3xl"
                    src="./build/img/GlobaldeliveryCool.jpg"
                    alt="World Wide Shipping"
                    width="600"
                    height="400"
                    loading="lazy"
                    style={{
                      position: "relative",
                      zIndex: "0",
                      boxShadow: "0 0 50px rgba(0, 0, 0, 0.5)",
                      border: "2px solid black",
                    }}
                  />
                </div>
              </a>

              <h2
                className="p-1 text-center font-serif"
                style={{
                  textShadow: "2px 2px 3px #1c0303",
                  fontSize: "27px",
                  color: "#fff9d7",
                }}
              >
                You have to be ready for business expansion. The value and
                benefits of this advertising investment make it a worthwhile
                choice.
              </h2>
              <a href="https://mybabb.github.io/SEO-BEST_PRACTICES/">
                <p className="font-rye m-0 m-auto flex items-center justify-center text-center text-[22px] text-blue-300  hover:text-[whitesmoke]">
                  SEO Best Practices
                </p>
              </a>
              <p
                style={{ fontSize: "12px", color: "wheat" }}
                className="text-center"
              >
                <em>
                  (We are not suggesting mailing rattlesnakes to any specific
                  country. This is a fictional example and no Rattle Snakes were
                  harmed in this commercial.)
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
              display: "block",
              margin: "auto",
            }}
          />
        </div>
        <br />
        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      </div>

      <Gorilla />

      <div
        className="text-right text-xl font-bold italic text-slate-500 sm:text-2xl dark:text-slate-400"
        style={{ fontSize: "24px", textShadow: "1px 1px black" }}
      >
        <span className="whitespace-nowrap font-serif text-varLIGHTBLUEFEATHER">
          🕸️MyBabb🕸️&nbsp;&nbsp;&nbsp;
        </span>
      </div>
      <span id="contactus1"></span>
      <hr
        id="goHere"
        className="mx-auto w-1/2 scroll-mt-10 bg-black dark:bg-white"
      />

      <div className="m-auto mt-14 flex content-center justify-center">
        <div
          className="font-orbitron m-auto content-center rounded-full border border-solid border-slate-900 bg-varMEDBLUEFEATHER p-10 p-3 text-2xl text-black active:bg-varLIGHTBLUEFEATHER sm:text-3xl dark:border-none"
          style={{
            boxShadow:
              "inset 0 0 10px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.8)",
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          <a
            href="https://MyBaBB.com"
            style={{ textShadow: "2px 2px 3px #1c0303" }}
          >
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

      <Gorilla />

      <div
        className="w-50 h-50 rounded-full border-2 border-red-500 text-center"
        style={{ margin: "auto", display: "flex", justifyContent: "center" }}
      >
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
    </div>
  );
};

export default Container;
