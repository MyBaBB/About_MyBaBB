// eslint-disable-next-line no-unused-vars
import React from 'react'

const ContactUs = () => {
  return (
    <div>
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
  )
}

export default ContactUs
