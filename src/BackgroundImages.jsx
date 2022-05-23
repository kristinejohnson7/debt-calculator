import React from "react";
import "./App";
import "./BackgroundImages.css"
import square from "../src/assets/square.svg";
import squareGreen from "../src/assets/square-green.svg";

class BackgroundImages extends React.Component {

  render() {

    return (
      <>
       <img className="bg bg-square1" src={square} alt="bg-icon" />
       <img className="bg 
       bg-square2" src={squareGreen} alt="bg-icon" />
      </>
    )
  }
}

export default BackgroundImages;