// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

import GarageOld from "./Garageold600x400.webp";
import GarageNew from "./Garagenew600x400.webp";
import Truckers from "./GlobaldeliveryCool.jpg";

const Sectiond = () => {
  const [showImageAlt3, setShowImageAlt3] = useState(true);
  const [showImageAlt4, setShowImageAlt4] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImageAlt3((prevShowImageAlt3) => !prevShowImageAlt3);
      setShowImageAlt4((prevShowImageAlt4) => !prevShowImageAlt4);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{ boxShadow: "2px 2px 55px #000" }}
      className="mt-[2.8rem] min-w-[290px] max-w-[80vw] rounded-3xl p-2"
    >
      <div id="rattleSnakes" className="scroll-mt-[6rem] p-4 sm:p-4">
        <div className="rounded-3xl">
          <blockquote
            id="blockquote1"
            className="relative   rounded-3xl bg-varMEDDUCKHEAD p-4"
          >
            <img
              id="imageAlt3"
              className={`mb-1 w-max rounded-3xl ${showImageAlt3 ? "" : "hidden"}`}
              src={GarageOld}
              alt="Old Garage"
              width={600}
              height={400}
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
              className={`mb-1 w-max rounded-3xl ${showImageAlt4 ? "" : "hidden"}`}
              src={GarageNew}
              alt="Cowboy Shop"
              width={600}
              height={400}
              loading="lazy"
              style={{
                position: "relative",
                zIndex: "0",
                boxShadow: "0 0 50px rgba(0, 0, 0, 0.5)",
                border: "2px solid black",
              }}
            />

            <a href="#securityEye">
              <img
                className="w-max rounded-3xl "
                src={Truckers}
                alt="World Wide Shipping"
                width={600}
                height={400}
                loading="lazy"
                style={{
                  position: "relative",
                  zIndex: "0",

                  marginTop: "2rem",
                  marginBottom: "1rem",
                }}
              />
            </a>
            <div className="text-center">
              <span className="text-center text-4xl">🐟 🍞 🍷 🕊️</span>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Sectiond;
