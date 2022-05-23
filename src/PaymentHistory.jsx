import React from "react";
import TableColumn from "./TableColumn";
import "./PaymentHistory.css";



class PaymentHistory extends React.Component {  
  constructor(props) {
    super(props)
    let x = 1;
  }

 
  render() {
    const {numberPayments, interestPaid} = this.props
    console.log("props # payments", numberPayments)
    console.log("props interest", interestPaid)
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
             {/* {items.map(item => (
               <tr key={Math.floor((Math.random() * 100) + 1)}>
                <TableColumn column={item} />
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