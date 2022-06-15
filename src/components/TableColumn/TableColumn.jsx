import React from "react";

const TableColumn = (props) => {
  const {column} = props
  return(
    <td>
      <h5>{column}</h5>
    </td>
  )
}

export default TableColumn