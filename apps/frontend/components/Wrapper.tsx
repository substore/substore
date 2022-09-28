import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className="bg-black h-screen w-screen overflow-y-auto">
        {children}
    </div>
}

export default Wrapper;