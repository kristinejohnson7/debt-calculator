import React from "react";
import logo from "../src/assets/logo.svg";
import "./Header.css"


class Header extends React.Component {  
  render() {
    return (
      <div className="header-container">
        <img className="bg-logo" src={logo} alt="star-icon" />
        <div className="header-text">
          <h1>Debt Calculator</h1>
          <p>Begin your debt free life</p>
        </div>
      </div>
      
    )
  }
}

export default Header