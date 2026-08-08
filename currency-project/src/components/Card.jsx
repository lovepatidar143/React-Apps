import React from "react";

function Card({ children }) {
    return (
        <div
            className="
            w-full
            max-w-4xl
            rounded-3xl
            border
            border-white/30
            bg-white/20
            backdrop-blur-xl
            shadow-2xl
            p-8
            "
        >
            {children}
        </div>
    );
}

export default Card;