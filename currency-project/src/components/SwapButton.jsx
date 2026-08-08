import React from "react";
function SwapButton() {
    return (
        <div className="flex justify-center -my-4 relative z-10">
            <button
                className="
                bg-blue-600
                text-white
                px-6
                py-2
                rounded-lg
                font-medium
                border-4
                border-white
                shadow-lg
                transition-all
                duration-300
                hover:bg-blue-700
                hover:scale-105
                active:scale-95
                "
            >
                Swap
            </button>
        </div>
    );
}

export default SwapButton;