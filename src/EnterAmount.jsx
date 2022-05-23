import React from "react";
import Button from "./Button";
import Input from "./Input"
import "./Cards.css"


class EnterAmount extends React.Component {  
  constructor(props) {
    super(props)
  }

  render() {
    const {loanInterest, loanAmount, onChange} = this.props
    return (
      <div className="card">
        <h3>Enter Amount</h3>
        <div className="content-container">
          <form onSubmit={(e) => {e.preventDefault()
            const fData = new FormData(e.target)
            onChange({loanInterest: parseFloat(fData.get("loanInterest")), loanAmount: parseFloat(fData.get("loanAmount"))})
          }}>
            <div className="input-field">
              <Input
              type="number"
              name="loanInterest"
              defaultValue={loanInterest}
              info="Enter Interest Rate"/>
              <Input
              type="number"
              name="loanAmount"
              defaultValue={loanAmount}
              info="Enter Loan Amount"/>
            </div>
            <Button title="Submit" />
          </form>
        </div>
      </div>
    
    )
  }
}

export default EnterAmount