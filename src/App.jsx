// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./components/MainFolder/NavbarFolder/Navbar";
import Footer from "./components/MainFolder/FooterFolder/Footer";
import TopLogos from "../src/components/MainFolder/NavbarFolder/TopLogosFolder/TopLogos";
import Container from "./components/MainFolder/ContainerFolder/Container";

const App = () => {
  return (
    <div className="App w-screen overflow-x-hidden">
      <Navbar />
      <TopLogos />
      <Container />

      <Footer />
    </div>
  );
};

export default App;
