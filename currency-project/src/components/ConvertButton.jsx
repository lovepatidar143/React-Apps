import React from "react";
function ConvertButton() {
    return (
        <button
            className="
            mt-8
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            text-xl
            font-semibold
            py-4
            rounded-2xl
            transition-all
            duration-300
            shadow-lg
            active:scale-95
            "
        >
            Convert USD to INR
        </button>
    );
}

export default ConvertButton;