import React from "react";

function Hero({title}) {
    return (
    <header className=" flex items-center justify-center h-60">
        <div className="border-4 border-igem-white rounded-2xl">
            <h1 className="bg-opacity-10 bg-transparent  text-igem-white p-8 text-6xl">{title}</h1>    
        </div>
    </header>
    )
}

export default Hero