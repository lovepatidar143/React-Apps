import React , { useState } from 'react'
import { InputBox } from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyHook.js'

function App() {
    const[amount , setAmount] = useState("")
    const [from , setFrom] = useState("usd")
    const [to , setTo] = useState("inr")
    const [convertedAmount , setCunvertedAmount] = useState("")


    const currencyInfo = useCurrencyInfo(from)
    const currencies = Object.keys(currencyInfo)

    const convert = ()=> {
        setCunvertedAmount(amount*currencyInfo[to])
    }

    const swap = ()=>{
        let temp = from 
        let am = amount
        setFrom(to)
        setTo(temp)
        setAmount(convertedAmount)
        setCunvertedAmount(am)

    }


  return (
    <>
       <div
              className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
              style={{
                  backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
              }}
          >
              <div className="w-full">
                  <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                      <form
                        onSubmit={(e)=>{
                            e.preventDefault()
                            convert()
                        }}


                             

                      >
                          <div className="w-full mb-1">
                              <InputBox

                                label={from}
                                amount={amount}
                                Currencies = {currencies}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                onAmountChange={(amount) => setAmount(amount)}
                                selectedCurrency= {from} 

                              />
                          </div>
                          <div className="relative w-full h-0.5">
                              <button
                                  type="button"
                                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                // onClick={()=>swap()}
                                onClick={swap}
                              >
                                  swap
                              </button>
                          </div>
                          <div className="w-full mt-1 mb-4">
                              <InputBox

                                label={to}
                                amount={convertedAmount}
                                Currencies = {currencies}
                                // currencyDisabled = {true}
                                amountDisabled = {true}
                                onCurrencyChange={(cur)=> setTo(cur)}
                                onAmountChange={(am)=>setCunvertedAmount(am)}
                                selectedCurrency={to}





                              />
                          </div>
                          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" 
                          >
                            Convert

                          </button>
                      </form>
                  </div>
              </div>
          </div>
    </>
  )
}

export default App
