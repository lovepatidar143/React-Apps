import { useState } from 'react'

function App() {
  const [counter , updateCounter] = useState(0)
  // let counter = 0 ; 
  const addValue = ()=>{
    // counter++
    updateCounter((prevCounter)=> prevCounter +1)
    console.log(counter)
    updateCounter((prevCounter)=> prevCounter +1)
    console.log(counter)
    updateCounter((prevCounter)=> prevCounter +1)
    console.log(counter)

  }
  const resetValue = ()=>{
    updateCounter(0)
  }
  return (
    <>
      <div>
        <h1>This is the Love Patidar Counter {counter}</h1>
        <h2>Current count is   : - {counter}</h2>
        <button
        onClick={addValue}
         >Add value :- {counter}</button> {" "}
        <button
        onClick={resetValue}
        >Reset value :- {counter} </button>
        <h3>The Hppy {counter} </h3>

      </div>
    </>
  )
}

export default App
