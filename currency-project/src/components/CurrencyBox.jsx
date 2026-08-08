import React ,{useState} from "react";
import AmountInput from "./AmountInput";
import CurrencySelect from "./CurrencySelect";

function CurrencyBox({
    title ,
    amount , 
    setAmount , 
    currency , 
    setCurrency ,
    currencies , 
    amountDisabled

}) {
    return (
        <div
            className="
            bg-white
            rounded-3xl
            p-6
            shadow-lg
            "
        >
            <div className="flex justify-between items-start gap-6">

                <AmountInput amount={amount}
                setAmount={setAmount}
                disabled = {amountDisabled}
                 />

                <CurrencySelect 
                    currency = {currency}
                    setCurrency = {setCurrency}
                    currencies = {currencies}
                 />

            </div>
        </div>
    );
}

export default CurrencyBox;