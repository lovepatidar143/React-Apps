//  `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
// https://api.api-ninjas.com/v1/convertcurrency?have=GBP&want=AUD&amount=5000
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json



import { use } from "react";
import { useEffect , useState } from "react";

function useCurrencyInfo(currency) {
    const [data , setData]    = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))

    } , [currency])

    console.log(data) 
    
    return data ; 
}

export default useCurrencyInfo 