// eslint-disable-next-line no-unused-vars
import React from "react";

import PiggyLogo from "./piggylogo.png";
import PigFrame from "./piglets.webp";
const SectionC = () => {
  return (
    <div>
      <div
        className="sectionCTop z-1 m-[20px] mt-[.5rem]  
  min-w-[290px] max-w-[80vw]   scroll-mt-[4rem]  p-[.2px] sm:p-[2rem] "
      >
        <div id="YourBrand" className="scroll-mt-[5rem] p-0 sm:p-6 ">
          <div
            style={{ boxShadow: "2px 2px 55px #000" }}
            className="rounded-3xl"
          >
            <section id="mainBoxes" className="mb-10 p-0 xs:p-6">
              <blockquote
                className="relative rounded-3xl
             bg-gradient-to-b from-varMEDDUCKHEAD via-varDARKDUCKHEAD to-varMEDDUCKHEAD py-12 dark:bg-black"
              >
                <br />

                <h2
                  className="relative bottom-8 flex justify-center
                 text-center font-Aclonica-Regular text-xl text-amber-200"
                >
                  <u>Professional Branding Service</u>
                </h2>

                <a id="piglets" className="scroll-mt-[12rem]">
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
                          src={PiggyLogo}
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
                    id="piglets"
                    style={{ boxShadow: "2px 2px 55px #000" }}
                    className="relative  m-auto flex 
                    w-fit content-center justify-center px-2 py-1 text-center"
                  >
                    <img
                      src={PigFrame}
                      alt="Piglets in a frame"
                      width="400"
                      height="250"
                      loading="lazy"
                    />
                  </div>
                </a>

                <p
                  id="CustomFont32px"
                  className="before:top-18 mt-2 p-1 text-center 
                  text-2xl text-varLIGHTBLUEFEATHER before:absolute 
                  before:left-0 before:translate-x-2 before:translate-y-2
                  before:transform before:font-serif before:text-9xl
                  before:text-varLIGHTBLUEFEATHER before:opacity-25
                  before:content-['\201C'] after:absolute after:-bottom-20 
                  after:right-0 after:-translate-x-2 after:-translate-y-2
                  after:transform after:font-serif after:text-9xl
                  after:text-varLIGHTBLUEFEATHER after:opacity-25 
                  after:content-['\201D'] sm:text-3xl dark:text-slate-400"
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
                        &apos;&apos;Getting Branded.&apos;&apos;
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
              </blockquote>
            </section>
          </div>
        </div>
        <hr
          className=" m-auto mb-[-2.5rem] mt-[1.5rem] h-[5px] w-[80%]
                      rounded-xl border-[1px] border-varMEDBLUEFEATHER bg-black
                       dark:bg-gray-800"
        />
      </div>
    </div>
  );
};

export default SectionC;
