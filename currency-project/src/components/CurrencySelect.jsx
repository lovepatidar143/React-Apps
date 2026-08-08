import React from "react";

function CurrencySelect({
    currency , 
    setCurrency , 
    currencies

}) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-sm font-medium">
                Currency
            </label>

            <select
                className="
                bg-gray-100
                rounded-xl
                px-4
                py-3
                outline-none
                text-lg
                font-medium
                cursor-pointer
                "
                value={currency}
                onChange={(e)=>setCurrency(e.target.value)}
            >
                {currencies.map((item) =>{
                    <option
                    key = {item}
                    value={item}

                    >
                        {item}
                    </option>
                })}
            </select>
        </div>
    );
}

export default CurrencySelect;