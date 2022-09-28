import Image from "next/image";
import React from "react";

const Navbar = () => {
    return <div className="w-screen border-b-[0.5px] border-line border-opacity-70 text-white p-4 flex justify-around">
        <div className="flex">
            <Image src="https://avatars.githubusercontent.com/u/111544995?s=200&v=4" width={34} height={34}></Image>
            <h1 className="text-white font-heading text-2xl">Substore</h1>
        </div>
       
       <a className="bg-bgblue px-4 py-1 text-white rounded-lg font-medium">Stay updated</a>
    </div>
}

export default Navbar;