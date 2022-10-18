import type { NextPage } from "next";
import logo from "../assets/blue-green-icon.png"
import Image from 'next/image'
import cloud from "../assets/path905-36.png"
import Text from "../components/Text"
import { useState } from "react";

const Home: NextPage = () => {
  return (

    <div className="w-full">
{/*Navbar*/} 
      <div className="flex justify-between w-11/12 mx-auto h-20 items-center">
          <div className="text-white font-red-hat-display text-[24px] h-full flex items-center mt-1">
            <div><Image src={logo} height="40" width="40"/></div>
            <b className="ml-3 -translate-y-1">Substore</b>
          </div>
          <div>
          <button className="border-none text-white font-red-hat-display text-[14px] bg-gray-300 p-2 rounded-xl flex">
            <div>Dashboard</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-0.5 w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

            </button>
            </div>
            
      </div>
      <div className="w-full bg-gray-200 h-[0.005rem] -translate-y-2"></div>
      {/*Main*/}
      <div className="try sm:w-screen md:w-screen lg:w-10/12 h-screen absolute top-0 left-62 -z-10"></div>
      <div className="md:block lg:flex mx-auto justify-between w-11/12 mt-36">
          {/*Text*/}
          <div className="md:w-9/12  md:mx-auto">
            <div className="text-[64px] text-white font-red-hat-display w-[600px]">
              <Text/>{" "} for your app, in seconds.</div>
            <div className="text-white font-poppins text-[20px] text-gray-200 w-[450px]">The all-in-one store platform, built from the ground up.</div>
          </div>
          {/*Image*/}
          <div className="sm:hidden md:hidden lg:block relative w-[400px]">
            
            <div className="relative ml-[80px]">
          <Image src={cloud} className="h-[170px] w-[288px]"/>
          </div>
          <div className="absolute top-[65px]">
          <Image src={cloud} className="h-[170px] w-[288px]"/>
          </div>
          </div>
      </div>
      {/* <div className="absolute right-52 w-[50px] h-[50px] bottom-0"></div> */}
    </div>
  );
};

export default Home;
