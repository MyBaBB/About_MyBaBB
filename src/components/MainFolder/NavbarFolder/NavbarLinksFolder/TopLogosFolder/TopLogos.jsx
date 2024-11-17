// eslint-disable-next-line no-unused-vars
import React from "react";
import OctoGlasses from "./OctoGlasses.png";
import NotMe from "./NewMe.png";
import "./TopLogos.css";
import DiverDown from "../../../ContainerFolder/ScubaNavFolder/DiverDown";
import "../../../ContainerFolder/ScubaNavFolder/DiverDown.css";

// import ContactButton from "../../ContainerFolder/ContactUsFolder/ContactUs";

const TopLogos = () => {
  return (
    <div>
      

      <div className="diverDownWrapper w-fit ">
        <a href="#scubaSpear">
          <DiverDown />
        </a>
      </div>
    </div>
  );
};

export default TopLogos;
