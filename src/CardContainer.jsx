import React from "react"
import EnterAmount from "./EnterAmount"
import MakeAPayment from "./MakeAPayment"
import PaymentsRemaining from "./PaymentsRemaining"
import PaymentHistory from "./PaymentHistory"
import "./CardContainer.css";


class CardContainer extends React.Component {
  constructor() {
    super()
    this.numberOfPayments= 0;
    this.paymentsLeft= 0;
    this.minPrincipal = 0;
    this.state = {
      loanInterest: 0,
      loanAmount: 0,
      paymentAmount: 0,
      paymentHistory: [],
      paymentTotal: 0
    }

  }

  //Change Events 
  onChange = (values) => {
   this.setState({loanAmount: values.loanAmount, loanInterest: (values.loanInterest / 100)})
  }

  paymentChange = (values) => {
    const {paymentHistory} = this.state
    this.setState({paymentAmount: values.paymentAmount})
    paymentHistory.push(values.paymentAmount)
    this.paymentsLeftCalc(this.minMonthlyPayment)
    this.updatePaymentHistory()
  }

  //Calculations

  numberOfPaymentsCalc() {
    this.numberOfPayments = this.state.paymentHistory.length
  }

  updatePaymentHistory() {
    this.numberOfPaymentsCalc()
  }

  totalInterestPaid() {

    this.monthlyInterest.reduce()
  }

  paymentsLeftCalc(payment) {
    const {paymentHistory, loanAmount} = this.state
    const sum = paymentHistory.reduce((acc, current) => {
      return acc + current
    }, 0)
    this.paymentsLeft = parseInt((loanAmount - sum) / payment)
    console.log(this.paymentsLeft)
  }

  monthlyInterestRate = () => {
    const {loanAmount, loanInterest} = this.state
    this.monthlyInterest = ((loanInterest / 12) * loanAmount).toFixed(2)
    return this.monthlyInterest
  }

  minimumPrincipal = () => {
    const {loanAmount} = this.state
    this.minPrincipal = (loanAmount * 0.01).toFixed(2)
    return this.minPrincipal
  }

  minimumMonthlyPayment = () => {
    this.minMonthlyPayment = (parseFloat(this.monthlyInterest) + parseFloat(this.minPrincipal)).toFixed(2)
    return this.minMonthlyPayment
  }

  render() {
    const {loanInterest, loanAmount, paymentHistory} = this.state
    return (
      <div className="card-container">
        <EnterAmount
        onChange={this.onChange}
        loanInterest={loanInterest}
        loanAmount={loanAmount}/>
        <PaymentsRemaining 
        paymentsCounter={this.paymentsLeft}
        />
        <MakeAPayment
        onChange={this.paymentChange}
        monthlyInterest={this.monthlyInterestRate()}
        minPrincipal={this.minimumPrincipal()}
        minMonthlyPayment={this.minimumMonthlyPayment()}
         />
        <PaymentHistory numberPayments={this.numberOfPayments} interestPaid={this.monthlyInterest}/>
      </div>
    )
  }
}

export default CardContainer;