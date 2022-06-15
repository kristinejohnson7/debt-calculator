import React from "react";
import "./Input.css";

const Input = (props) => {
  const {info, value, name, type, min, placeHolder} = props
  return (
    <div className="input-wrapper">
    <label>{info}</label>
    <input type={type}
    min={min}
    step=".01"
    name={name}
    value={value}
    className="input"
    placeholder={placeHolder}
    id="interest" />
  </div>
  )
}

export default Input