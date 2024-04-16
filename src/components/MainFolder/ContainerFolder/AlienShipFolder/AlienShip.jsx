// eslint-disable-next-line no-unused-vars
import React from "react";
import AlienLightsOff from "./submit.png";
import AlienLightsOn from "./submitalt.png";

// xxxxxxxxxx needs java Script xxxxxxxx
const AlienShip = () => {
  return (
    <div>
      <div
        className="w-50 h-50 rounded-full border-2 border-red-500 text-center"
        style={{ margin: "auto", display: "flex", justifyContent: "center" }}
      >
        <img
          id="imageAlt1"
          src={AlienLightsOff}
          alt="Alien Submit Ship"
          width="175"
          height="175"
        />
        <img
          id="imageAlt2"
          src={AlienLightsOn}
          alt="Alien Submit Ship with lights on"
          width="175"
          height="175"
        />
      </div>
    </div>
  );
};

export default AlienShip;
