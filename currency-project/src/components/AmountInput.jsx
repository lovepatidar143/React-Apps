import React ,{useState} from "react";

function AmountInput({
    amount , 
    setAmount , 
    disabled
}) {
    return (
        <div className="flex flex-col gap-2 flex-1">
            <label className="text-gray-500 text-sm font-medium">
                Amount
            </label>

            <input
                type="number"
                placeholder="0.00"
                className="
                w-full
                bg-transparent
                outline-none
                text-4xl
                font-semibold
                text-gray-900
                placeholder:text-gray-400
                "
                value={amount}
                disabled = {disabled}
                onChange={(event) => setAmount(event.target.value)}
            />
        </div>
    );
}

export default AmountInput;