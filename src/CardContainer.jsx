import React from "react"
import EnterAmount from "./EnterAmount"
import MakeAPayment from "./MakeAPayment"
import PaymentsRemaining from "./PaymentsRemaining"
import PaymentHistory from "./PaymentHistory"
import "./CardContainer.css";


class CardContainer extends React.Component {
  constructor() {
    super()
    // this.numberOfPayments= 0;
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
    const {paymentHistory, loanAmount} = this.state
    console.log("before state", paymentHistory)
    const historyPayment = { 
      paymentAmount: values.paymentAmount,
      interestPaid: this.monthlyInterestRate(), 
      principalPaid: this.minimumPrincipal(), 
      // remainingBalance: this.paymentsLeftCalc(values.paymentAmount)
    }
    this.setState((prevState) => ({paymentHistory: [...prevState.paymentHistory, historyPayment]}), () => {
      console.log("new set PH", paymentHistory)
      // this.paymentsLeftCalc(values.paymentAmount, paymentHistory, loanAmount)
    })  
     
  }

  //Calculations

  paymentsLeftCalc(payment, overridePaymentHistory, overrideLoanAmount) {
    let {paymentHistory, loanAmount} = this.state
    if(loanAmount !== undefined) {
      paymentHistory = overridePaymentHistory
      loanAmount = overrideLoanAmount
    }
    console.log("payment history", paymentHistory)
    const sumInterest = paymentHistory.map(item => (item.interestPaid))
    .reduce((acc, current) => {
      return acc + current
    }, 0)
    const paymentSum = paymentHistory.map(item => (item.paymentAmount))
    .reduce((acc, current) => {
      return acc + current
    }, 0)
    const sum = paymentSum - sumInterest
    console.log("sum", sum)
    this.paymentsLeft = parseInt((loanAmount - sum) / payment)
    return sum
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
        <PaymentHistory numberPayments={this.numberOfPayments} interestPaid={this.monthlyInterest} paymentHistory={paymentHistory}/>
      </div>
    )
  }
}

export default CardContainer;