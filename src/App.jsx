// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./components/MainFolder/NavbarFolder/Navbar";
import Footer from "./components/MainFolder/FooterFolder/Footer";

import Container from "./components/MainFolder/ContainerFolder/Container";
import TopLogos from "../src/components/MainFolder/NavbarFolder/TopLogosFolder/TopLogos";

const App = () => {
  return (
    <div>
      <Navbar />
      <TopLogos />
      <Container />

      <Footer />
    </div>
  );
};

export default App;
