import React from "react"
import EnterAmount from "./EnterAmount"
import MakeAPayment from "./MakeAPayment"
import PaymentsRemaining from "./PaymentsRemaining"
import PaymentHistory from "./PaymentHistory"
import "./CardContainer.css";


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
      principalPaid: values.paymentAmount - this.monthlyInterestRate(), 
    } 
    // Add history payment to a new payment history array by cloning payment history
    const newPaymentHistory = [...paymentHistory, historyPayment]
    //Calculate the sum using the new payment and not state because state is old
    const sum = this.paymentsLeftCalc(values.paymentAmount, newPaymentHistory, loanAmount)
    //new payment history.length-1 is last item in array which is latest payment
    //had to add remaining balance last because needed to calculate sum based off new values
    newPaymentHistory[newPaymentHistory.length - 1].remainingBalance = sum
    this.setState({paymentHistory: newPaymentHistory})  
    
  }

  //Calculations

  minimumMonthlyPayment = () => {
    this.minMonthlyPayment = (parseFloat(this.monthlyInterest) + parseFloat(this.minPrincipal)).toFixed(2)
    return this.minMonthlyPayment
  }

  paymentsLeftCalc(payment, overridePaymentHistory, overrideLoanAmount) {
    let {paymentHistory, loanAmount} = this.state
    if(overridePaymentHistory !== undefined) {
      paymentHistory = overridePaymentHistory
      loanAmount = overrideLoanAmount
    }
    console.log("payment history", paymentHistory)
    // debugger
    const sumInterest = paymentHistory.map(item => (item.interestPaid))
    .reduce((acc, current) => {
      return acc + current
    }, 0)
    const paymentSum = paymentHistory.map(item => (item.paymentAmount))
    .reduce((acc, current) => {
      return acc + current
    }, 0)
    // const sum = paymentSum - sumInterest
    // console.log("sum", sum)
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
    console.log("render", paymentHistory)
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