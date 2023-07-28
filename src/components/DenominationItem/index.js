// Write your code here
import './index.css'

const Denomination = props => {
  const {eachValueDetails, withdrawAmountBtn} = props
  const {id, value} = eachValueDetails

  const withdrawButton = () => {
    withdrawAmountBtn(value)
  }

  return (
    <li className="sum-container">
      <button type="button" onClick={withdrawButton} className="btn-element">
        {value}
      </button>
    </li>
  )
}

export default Denomination
