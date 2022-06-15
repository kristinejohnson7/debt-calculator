import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import CardContainer from "./components/Card Container/CardContainer";
import "./BackgroundImages.css";
import square from "../src/assets/square.svg";
import squareGreen from "../src/assets/square-green.svg";

function App() {
  return (
    <div className="container">
      <Header />
      <div>
        <img className="bg bg-square1" src={square} alt="bg-icon" />
        <img
          className="bg 
        bg-square2"
          src={squareGreen}
          alt="bg-icon"
        />
      </div>
      <CardContainer className="card-container" />
    </div>
  );
}

export default App;
