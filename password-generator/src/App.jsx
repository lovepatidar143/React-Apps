import { useState , useCallback , useEffect , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  const [length , setlength] = useState(8)
  const [numAllowed , setNumAllowed ] = useState(false)
  const [charAllowed , setCharAllowed ] = useState(false)
  const [Password , setPassword] = useState()
  useEffect(()=>{
    generatePassword()
  } 
  ,[length , numAllowed , charAllowed]
)
  const generatePassword = useCallback(()=>{
  let pass = ""
  let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(numAllowed) str+= "1234567890"
  if(charAllowed) str+= "!@#$%^&*()_"
  for(let i = 0; i< length ; i++ ){
      let ind = Math.floor(Math.random()*str.length )
      pass += str[ind] 
  }
  setPassword(pass)
} , [length , numAllowed , charAllowed])
  const passwordRef = useRef(null)
  const copyPassword = ()=>{
    window.navigator.clipboard.writeText(Password)
    passwordRef.current?.select();
  }

  return (
    <>
   <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
  <div className="w-full max-w-2xl bg-slate-800 rounded-2xl shadow-xl p-8">

    <h1 className="text-3xl font-bold text-center text-white mb-8">
      Password Generator
    </h1>

    {/* Password Display */}
    <div className="flex gap-3 mb-8">
      <input
        type="text"
        placeholder="Generated Password"
        value={Password}
        ref={passwordRef}
        className="flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600"
      />

      <button 
      onClick={copyPassword}
      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition">
        Copy
      </button>
    </div>

    {/* Password Length */}
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <label className="text-white font-medium">
          Password Length
        </label>

        <span className="text-orange-400 font-semibold">
          {length}
        </span>
      </div>

      <input
        type="range"
        min="6"
        max="32"
        defaultValue={length}
        onChange={(e) => setlength(e.target.value)}
        
        className="w-full accent-orange-500 cursor-pointer"
      />
    </div>

    {/* Options */}
    <div className="flex flex-wrap gap-8" onChange={generatePassword}>

      <label className="flex items-center gap-2 text-white cursor-pointer" >
        <input
          type="checkbox"
          defaultValue={numAllowed} 
          className="w-4 h-4 accent-orange-500"
          onClick={()=>{
            setNumAllowed((prev)=>!prev)
          }}

        />
        Include Numbers
      </label>

      <label className="flex items-center gap-2 text-white cursor-pointer" >
        <input
          type="checkbox"
          defaultValue={
            charAllowed
          }
          className="w-4 h-4 accent-orange-500"
          onClick={()=>{
            setCharAllowed((prev)=>!prev)
          } }

        />
        Special Characters
      </label>

    
    </div>

  </div>
</div>
    </>
  )
}

export default App
