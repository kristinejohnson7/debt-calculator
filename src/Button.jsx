import React from "react";
import "./Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.day = 1;
  }
  render() {

    return (
      <button className="btn" type="submit">
        {this.props.title}
      </button>
    )
  }
}

export default Button;