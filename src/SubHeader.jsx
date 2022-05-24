import React from "react";
import "./Subheader.css";

class SubHeader extends React.Component {
  constructor(props) {
    super(props)
    this.value = 0;
  }

  render() {
    const {header, value} = this.props
    return(
      <div className="payment">
        <p>{header}:</p>
        <p>${value?.toFixed(2)}</p>
      </div>
    )
  }
}

export default SubHeader