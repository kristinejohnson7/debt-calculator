import React from "react";
import TableColumn from "./TableColumn";
import "./PaymentHistory.css";



class PaymentHistory extends React.Component {  
  constructor(props) {
    super(props)
    let x = 1;
  }

 
  render() {
    const {paymentHistory} = this.props
    return (
      <div className="card">  
        <h3>Payment History</h3>
        <div className="content-container">
          <table>
            <tbody>
            <tr>
              <TableColumn column="Number of Payments" />
              <TableColumn column="Principal Paid" />
              <TableColumn column="Interest Paid" />
              <TableColumn column="Remaining Balance" />
            </tr>
             {/* {paymentHistory.map((item, index) => (
               <tr key={Math.floor((Math.random() * 100) + 1)}>
                <TableColumn column={index + 1} />
                <TableColumn column={item.principalPaid.toFixed(2)} />
                <TableColumn column={item.interestPaid.toFixed(2)} />
                <TableColumn column={item.remainingBalance.toFixed(2)} />
               </tr>
             ))} */}
            </tbody>
          </table>
        </div>
      </div>
    
    )
  }
}

export default PaymentHistory