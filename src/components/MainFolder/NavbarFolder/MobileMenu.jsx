// eslint-disable-next-line no-unused-vars
import React from "react";
import "./MobileMenu.css";

const MobileMenu = () => {
  return (
    <div
      className="hidden-square mt-[.8rem]  w-full origin-top animate-open-menu 
                    flex-col items-center justify-center bg-black text-center"
      style={{
        boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 1)",
      }}
    >
      {/* xxxxxxxxxxxxxxxx⬆⬇️  Customized Websites Logo  xxxxxxxxxxx */}

      <div className="Sansita mt-[5.9rem] flex h-screen items-center ">
        <section id="mobile-menu" className=" absolute  w-full text-4xl">
          <h2
            className="sm:hidden"
            style={{
              position: "fixed",
              margin: "0",
              left: "50%",
              top: "20px",
              transform: "translate(-50%, -50%)",
              color: "#89d981",
              marginBottom: "4rem",
            }}
          >
            <span className="Rye whitespace-nowrap text-[1.74rem]">
              <u>Customized Websites</u>
            </span>
          </h2>

          <button className=" px-6 text-5xl"></button>
          <nav
            className="justify-top flex min-h-screen flex-col items-center"
            aria-label="mobile"
          >
            <p id="mobile-menu-2">
              <br />
              <a
                href="https://mybabb.github.io/About_MyBaBB/"
                className="w-full py-2 text-center text-lime-600 hover:text-varLIGHTBLUEFEATHER"
              >
                Home
              </a>
              <br />
              <br />
              <a href="https://mybabb.github.io/About_MyBaBB/#AboutUs" className="w-full py-6 text-center">
                <span className="hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER">
                  About Us
                </span>
              </a>
              <br />
              <br />
              <a
                href="#YourBrand"
                className="white-space: nowrap; w-full py-6 text-center"
              >
                <span className="hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER">
                  Your Brand
                </span>
              </a>
              {/* <br><br>
            <a href="brandform.html" class="w-full py-6 text-center"
              ><span
                class="whitespace-nowrap font-rye text-amber-700 
                hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER"
                >Branding Chute</span
              ></a
            > */}
              <br />
              <br />
              <a
                href="https://mybabb.github.io/SEO-BEST_PRACTICES/"
                className="w-full py-6 text-center"
              >
                <span className="hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER">
                  SEO Booster
                </span>
              </a>
              <br />
              <br />
              <a href="#crabs" className="w-full py-6 text-center">
                <span className="hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER">
                  <em>MyBaBB.com</em>
                </span>
              </a>
              <br />
              <br />
            </p>
          </nav>
        </section>
      </div>

      {/* xxxxxxxxxxxxxxxx⬆️  Customized Websites Logo  xxxxxxxxxxx */}
      {/* xxxxxxxxxxxxxxxx⬇️  Buttons on Hidden Mobile Menu  xxxxxxxxxxx */}
    </div>
  );
};

export default MobileMenu;
