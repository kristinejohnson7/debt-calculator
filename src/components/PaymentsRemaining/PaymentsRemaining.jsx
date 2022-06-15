import React from "react";
import "./PaymentsRemaining.css";

const PaymentsRemaining = (props) => {
  const {paymentsCounter} = props
  return (
    <div className="card">
      <h3>Payments Remaining</h3>
      <div className="content-container">
        <div className="payment-remaining-wrapper">
          <h5 className="side-header">{paymentsCounter}</h5>
          <p>Minimum Monthly <br/>Payments Left</p>
        </div>
      </div>
    </div>
  
  )
}

export default PaymentsRemaining