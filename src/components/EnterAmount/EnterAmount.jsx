import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input"

class EnterAmount extends React.Component {  
  constructor(props) {
    super(props)
  }

  onSubmitEvent= (e) => {
    e.preventDefault()
    const fData = new FormData(e.target)
    this.props.onChange({loanInterest: parseFloat(fData.get("loanInterest")), loanAmount: parseFloat(fData.get("loanAmount"))})
  }

  render() {
    const {loanInterest, loanAmount, onChange} = this.props
    const inputs = [
      {name: 'loanInterest', placeHolder: '5', info: 'Enter Interest Rate', defaultValue: loanInterest},
      {name: 'loanAmount', placeHolder: '5000', info: 'Enter Loan Amount', defaultValue: loanAmount}
    ]
    return (
      <div className="card">
        <h3>Enter Amount</h3>
        <div className="content-container">
          <form onSubmit={this.onSubmitEvent}>
            <div className="input-field">
              {inputs.map(item => {
                return (
                  <Input type="number" info={item.info} name={item.name} placeHolder={item.placeHolder} defaultValue={item.defaultValue} />
                )
              })}
            </div>
            <Button title="Submit" />
          </form>
        </div>
      </div>
    
    )
  }
}

export default EnterAmount