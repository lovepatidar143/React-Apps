import React from 'react'

function Background({ children }) {
    return (
        <div
            className="
            min-h-screen
            bg-cover
            bg-center
            bg-no-repeat
            flex
            items-center
            justify-center
            px-4
            "
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1600')",
            }}
        >
            {children}
        </div>
    );
}

export default Background;