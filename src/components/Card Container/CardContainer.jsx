import React from "react"
import EnterAmount from "../EnterAmount/EnterAmount"
import MakeAPayment from "../MakeAPayment/MakeAPayment"
import PaymentsRemaining from "../PaymentsRemaining/PaymentsRemaining"
import PaymentHistory from "../PaymentHistory/PaymentHistory"
import "./CardContainer.css";
import "./Cards.css"

class CardContainer extends React.Component {
  constructor() {
    super()
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

  onChange = (values) => {
   this.setState({loanAmount: values.loanAmount, loanInterest: (values.loanInterest / 100)})
  }

  paymentChange = (values) => {
    const {paymentHistory, loanAmount} = this.state
    const historyPayment = { 
      paymentAmount: values.paymentAmount,
      interestPaid: this.monthlyInterestRate(), 
      principalPaid: values.paymentAmount - this.monthlyInterestRate(), 
    } 
    const newPaymentHistory = [...paymentHistory, historyPayment]
    const sum = this.paymentsLeftCalc(newPaymentHistory, loanAmount)
    newPaymentHistory[newPaymentHistory.length - 1].remainingBalance = sum
    this.setState({paymentHistory: newPaymentHistory})  
  }

  minimumMonthlyPayment = () => {
    this.minMonthlyPayment = (parseFloat(this.monthlyInterest) + parseFloat(this.minPrincipal)).toFixed(2)
    return this.minMonthlyPayment
  }

  paymentsLeftCalc(overridePaymentHistory, overrideLoanAmount) {
    let {paymentHistory, loanAmount} = this.state
    if(overridePaymentHistory !== undefined) {
      paymentHistory = overridePaymentHistory
      loanAmount = overrideLoanAmount
    }
    const sumInterest = paymentHistory.map(item => (item.interestPaid))
    .reduce((acc, current) => {
      return acc + current
    }, 0)
    const paymentSum = paymentHistory.map(item => (item.paymentAmount))
    .reduce((acc, current) => {
      return acc + current
    }, 0)
    this.paymentsLeft = parseInt((loanAmount - (paymentSum - sumInterest)) / this.minimumMonthlyPayment())
    return loanAmount - paymentSum
  }

  monthlyInterestRate = () => {
    const {loanAmount, loanInterest} = this.state
    this.monthlyInterest = parseFloat((loanInterest / 12) * loanAmount)
    return this.monthlyInterest
  }

  minimumPrincipal = () => {
    const {loanAmount} = this.state
    this.minPrincipal = parseFloat(loanAmount * 0.01)
    return this.minPrincipal
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
        <PaymentHistory numberPayments={this.numberOfPayments} interestPaid={this.monthlyInterest} paymentHistory={paymentHistory}/>
      </div>
    )
  }
}

export default CardContainer;