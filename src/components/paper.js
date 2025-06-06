import React from "react";


function Paper({ children }) {
    return(
        <div className="w-full flex items-center justify-center pb-8">
            <main className="p-4 w-6/10 bg-igem-white rounded-3xl border-4 border-igem-black">
                {children}
            </main>
        </div>
    )
}

export default Paper