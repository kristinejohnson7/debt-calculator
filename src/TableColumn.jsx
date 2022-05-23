import React from "react";
import "./index.css";
import "./App.css";

class TableColumn extends React.Component {
  constructor(props) {
    super(props)
    let y;
  }

  render() {
    const {column} = this.props
    return(
      <td>
        <h5>{column}</h5>
      </td>
    )
  }
}

export default TableColumn