import React from "react";
import "./Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props)
    let y;
  }

  render() {
    const {info, value, name, type} = this.props
    return(
      <div className="input-wrapper">
        <label>{info}</label>
        <input type={type}
        step=".01"
        name={name}
        value={value}
        className="input"
        id="interest" />
      </div>
    )
  }
}

export default Input