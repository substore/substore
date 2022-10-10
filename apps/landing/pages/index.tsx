import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-[982px] overflow-hidden text-left text-[64px] text-white font-red-hat-display">
      <div className="absolute top-[0px] left-[0px] bg-black w-[1523px] h-[982px]" />
      <div className="absolute top-[240px] left-[933px] w-[350px] h-[350px]">
        <div className="relative rounded-[24px] w-[254px] h-[118px]" />
        <div className="relative rounded-[24px] w-[232px] h-[370px]" />
        <div className="relative rounded-[24px] w-[107.01px] h-[293.87px]" />
   
      </div>
      <div className="absolute top-[230px] left-[133px] w-[726px] h-[254px]">
        <div className="absolute top-[148px] left-[-11px] leading-[66px] inline-block w-[726px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span className="font-extrabold font-red-hat-display">
              <span className="text-green">Redis</span>
              <span className="text-teal">{` `}</span>
            </span>
            <span>
              <span className="font-extrabold font-red-hat-display">{`for `}</span>
              <b className="font-red-hat-display">your</b>
              <span className="font-extrabold"> app,</span>
            </span>
          </p>
          <p className="m-[0]">
            <span>
              <span className="font-extrabold">in seconds.</span>
            </span>
          </p>
        </div>
      </div>
      <div className="absolute top-[562px] left-[125px]" />
      <div className="absolute top-[526px] left-[125px] text-[20px] leading-[28px] font-poppins text-gray-200 inline-block w-[491px]">
        The all-in-one data store platform, built from the ground up.
      </div>
      <div className="absolute top-[31.87px] left-[-21px] [backdrop-filter:blur(200px)] w-[1544px] h-[49.13px] text-[24px] text-gray-100">
        <div className="absolute top-[0px] left-[212.42px] w-[110.97px] h-[32.8px]">
          <b className="absolute top-[0px] left-[0px] leading-[24px] inline-block w-[110.97px] h-[32.8px]">
            Substore
          </b>
        </div>
        <div className="absolute top-[48.63px] left-[-0.5px] border-t-[1px_solid_rgba(66,_66,_66,_0.7)] box-border w-[1545px] h-[1px]" />
      </div>
      <div className="absolute top-[661px] left-[835px] w-[24px] h-[24px] overflow-hidden" />
      <div className="absolute top-[3px] left-[1322px] text-[14px] leading-[66px] font-medium font-poppins inline-block w-[151px] h-[50px]">{`Dashboard `}</div>
    </div>
  );
};

export default Home;