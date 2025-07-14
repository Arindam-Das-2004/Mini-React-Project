import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () => {
    console.log("Value added", counter)
    setCounter(counter + 1)
  }

  const removeValue = () => {
    console.log("Value removed", counter)
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter program on React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
