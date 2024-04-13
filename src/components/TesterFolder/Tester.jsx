import React from "react";

const Tester = () => {
  return (
    <div>
      <div
        className="rounded-full text-center"
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

export default Tester;
