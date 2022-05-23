import "./App.css";
import React from "react";
import Header from "./Header";
import BackgroundImages from "./BackgroundImages";
import CardContainer from "./CardContainer";

function App() {
  return (
    <div className="container">
      <Header />
      <BackgroundImages />
      <CardContainer className="card-container" />
    </div>
  );
}

export default App;
