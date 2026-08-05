import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("bg-amber-200")
  const setGreen = ()=>{
    // color = userState('bg-lime-500')
    // color = 'bg-lime-500'
    setColor("bg-lime-500")
  }
  const setRed = ()=>{
    // color = userState('bg-amber-900')
    setColor("bg-amber-900")
  }
  const setBlue = ()=>{
    // color = userState()
    setColor("bg-blue-600")
  }
  return (
    <>
    <div className={color}   >
      <button className='bg-amber-900'
      onClick={setRed}
      >Red</button> {'.    '}
      <button className = "bg-lime-500"
      onClick={setGreen}
      >Green</button>{". "}
      <button className = "bg-blue-600"
      onClick={setBlue}
      >Blue</button>
    </div>
    </>
  )
}

export default App
