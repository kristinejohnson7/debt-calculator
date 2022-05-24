import React from "react";
import Button from "./Button";
import Input from "./Input"
import SubHeader from "./SubHeader"
import "./MakeAPayment.css";



class MakeAPayment extends React.Component {  
  constructor(props) {
    super(props)
  }
 
  render() {
    const {onChange, paymentAmount, monthlyInterest, minPrincipal, minMonthlyPayment} = this.props
    return (
      <div className="card">
        <h3>Make A Payment</h3>
        <div className="content-container">
          <div className="payment-wrapper">
            <div className="payment-details">
              <SubHeader value={monthlyInterest} header="Interest Payment" />
              <SubHeader value={minPrincipal} header="Minimum Principal" />
            </div>
            <div className="side-payment">
              <h5 className="side-header">{minMonthlyPayment}</h5>
              <p>Minimum Monthly Payment</p>
            </div>
          </div>
        
          <form 
          onSubmit={(e) => {e.preventDefault()
            const fData = new FormData(e.target)
            onChange({paymentAmount: parseFloat(fData.get("paymentAmount"))})
          }}
          >
            <Input 
            type= "number"
            min={minMonthlyPayment}
            name="paymentAmount"
            defaultValue= {paymentAmount}
            info="Enter Payment Amount"/>
            <Button title="Submit Payment" />
          </form>
        </div>
      </div>
    
    )
  }
}

export default MakeAPayment