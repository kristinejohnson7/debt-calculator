import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className="btn" type="submit">
      {props.title}
    </button>
  )
}

export default Button;