import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Background from "./components/Background";
import Card from "./components/Card";
import CurrencyBox from "./components/CurrencyBox"
import SwapButton from "./components/SwapButton";
import ConvertButton from "./components/ConvertButton";

function App() {

  const [amount , setAmount] = useState("") ;
  const [from , setFrom] = useState("USD") 
  const [to , setTo] = useState("INR") ;
  const [convertedAmount , setConvertedAmount]= useState("") 
  const [currencies , setCurrencies] = useState([]) 

    return (
        <Background>
            <Card>

                <CurrencyBox 
                title = "From"
                amount={amount}
                setAmount={setAmount}
                currency  = {from} 
                setCurrency = {setFrom}
                currencies = {currencies}
                amountDisabled

               />

                <SwapButton />

                <CurrencyBox 
                  title = "To" 
                  amount={convertedAmount}
                  
                  currency = {to}
                  setCurrency = {setTo}
                  currencies = {currencies} 
                  amountDisabled
                  

                />

                <ConvertButton />

            </Card>
        </Background>
    );
}

export default App;

