// eslint-disable-next-line no-unused-vars
import React from "react";

const Tester = () => {
  return (
    <div>
      <article
        id="theWholeBigArticle"
        className="widescreen:section-min-height tallscreen:section-min-height flex 
        scroll-mt-20 flex-col items-center justify-center gap-8 sm:flex-row"
        style={{ padding: "0rem 1.5rem 1.5rem 1.5rem" }}
      >
        <h2
          style={{
            position: "absolute",
            margin: 0,
            left: "50%",
            top: "20px",
            transform: "translate(-50%, -50%)",
            color: "transparent",
            marginBottom: "4rem",
            zIndex: 51,
          }}
        >
          <span className="font-rye whitespace-nowrap text-[.74rem]">
            <u>Custom Website</u>
          </span>
        </h2>

        {/*  XXXXXXXXX Hero section🦸🏼xxxxxxxxxx */}
        <h2 className="hiddenSeoH2 absolute left-[200rem]">
          MyBabb Custom Websites
        </h2>
        <div className="flex flex-col text-center">
          <section
            id="hero"
            className="relative flex min-h-screen items-center justify-center bg-varMEDSPACE dark:bg-black"
          >
            <h2
              style={{
                position: "absolute",
                margin: 0,
                left: "50%",
                top: "40px",
                transform: "translate(-50%, -50%)",
                color: "#77d194",
                marginBottom: "4rem",
                zIndex: 10,
              }}
            >
              <span className="whitespace-nowrap font-serif text-[.75rem] sm:text-[1.74rem]">
                Personalized Websites <br />
              </span>
            </h2>
            <p
              className="animate-bounce text-center sm:pt-0 landscape:text-center"
              style={{
                fontSize: "3rem",
                animationDuration: "10s",
                animationTimingFunction: "ease-in-out",
              }}
            >
              <span
                id="custom"
                className="text-varDARKBEAK"
                style={{
                  textShadow:
                    "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #000, 0 0 70px #000, 0 0 80px #000",
                }}
              >
                <span className="rotate font-PermanentMarker whitespace-nowrap">
                  <span style={{ fontSize: "4rem", color: "#962023" }}>Cu</span>
                  <span style={{ color: "#fff9d7" }}>
                    <span style={{ fontSize: "3.5rem" }}>s</span>t
                  </span>
                  <span style={{ color: "#2a61a1" }}>om</span>
                </span>
              </span>

              <br />
              <span
                id="websites"
                className="font-emilyscandy whitespace-nowrap text-varDARKBEAK"
                style={{
                  fontSize: "4rem",
                  textShadow:
                    "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #000, 0 0 70px #000, 0 0 80px #000",
                }}
              >
                🕸️ WEB 🕸️
              </span>
              {/*  ♊🧑‍💻📷 */}
              <img
                src="./build/img/cssLogoHeight80px.png"
                alt="25"
                width="150"
                height="25"
                loading="lazy"
                style={{ display: "block", margin: "auto" }}
              />
            </p>
          </section>
          {/*  xxxxxxx 🧠📷Golden Brain section xxxxxxxxx */}
          <br id="brainers" className="scroll-m-56" />
          <section className="brainers container mx-auto my-8 max-w-md">
            <a href="#weHelp">
              <div
                className="mx-auto flex justify-center"
                style={{ width: "350px" }}
              >
                <div className="rounded-3xl bg-varDARKNECK">
                  <img
                    id="image2"
                    className="w-max rounded-3xl p-4"
                    src="./build/img/phoneInHands.webp"
                    alt="Phone In Hands"
                    width="400"
                    height="250"
                    style={{
                      position: "relative",
                      zIndex: 1,
                      boxShadow: "0 0 50px rgba(0, 0, 0, 0.5)",
                    }}
                  />
                </div>
              </div>
            </a>

            <h2
              style={{
                position: "absolute",
                margin: 0,
                left: "50%",
                top: "20px",
                transform: "translate(-50%, -50%)",
                color: "transparent",
                marginBottom: "4rem",
                zIndex: 51,
              }}
            >
              <span className="font-rye whitespace-nowrap text-[.74rem]">
                <u>Html, css, Javascript</u>
              </span>
            </h2>
          </section>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}></div>
      </article>
    </div>
  );
};

export default Tester;
