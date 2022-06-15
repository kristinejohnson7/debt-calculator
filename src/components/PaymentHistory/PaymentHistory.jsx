import React from "react";
import TableColumn from "../TableColumn/TableColumn";
import "./PaymentHistory.css"

const PaymentHistory = (props) => {
  const {paymentHistory} = props
  const columns = ["Number of Payments", "Principal Paid", "Interest Paid", "Remaining Balance"]
  return (
    <div className="card paymentHistory-card">  
      <h3>Payment History</h3>
      <div className="content-container">
        <table>
          <tbody>
          <tr>
            {columns.map(column => (<TableColumn column={column}/>))}
          </tr>
           {paymentHistory.map((item, index) => {
             const columns = [index + 1, item.principalPaid.toFixed(2), item.interestPaid.toFixed(2), item.remainingBalance.toFixed(2)]
             return (
                <tr key={Math.floor((Math.random() * 1000) + 1)}>
                  {columns.map(column => (<TableColumn column={column} />))}
                </tr>
             )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PaymentHistory