import IncreaseButton from "./components/IncreaseButton"
import DecreaseButton from "./components/DecreaseButton"
import ResetButton from "./components/ResetButton"
import {useState} from "react"

const App = () => {
const [value, setValue] = useState(0)

const increaseOne = () => {
  setValue(value + 1)
}

const decreaseOne = () => {
  setValue(value - 1)
}

const resetToZero = () => {
  setValue(0)
}
  return (
    <div className="container">
      <h1>Quantity</h1>
      <h2>{value}</h2>
      <IncreaseButton increase={increaseOne}/>
      <DecreaseButton decrease={decreaseOne}/>
      <ResetButton reset={resetToZero}/>
    </div>
  )
}

export default App