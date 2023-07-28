// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {values: 2000}

  withdrawAmountBtn = value => {
    this.setState(prevState => {
      console.log('withDraw btn clicked')
      return {values: prevState.value - value}
    })
  }

  render() {
    const {values} = this.state
    console.log(values)
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="withdraw-card-container">
          <div className="name-container">
            <h1 className="s-letter">S</h1>
            <p className="customer-name">Sarah Williams</p>
          </div>
          <div className="bank-balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="bank-balance">{values}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="values-container">
            {denominationsList.map(eachValue => (
              <DenominationItem
                key={eachValue.id}
                eachValueDetails={eachValue}
                withdrawAmountBtn={this.withdrawAmountBtn}
              />
            ))}
            >
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
