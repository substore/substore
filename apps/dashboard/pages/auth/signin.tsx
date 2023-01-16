import type { NextPage } from "next";

const SignUpGetStarted: NextPage = () => {
  return (
    <div className="relative bg-gray-200 w-full h-[982px] overflow-hidden text-left text-base text-gray-400 font-inter">
      <div className="absolute top-[285px] left-[318px] w-[373px] h-[422px] text-center text-white">
        <div className="absolute top-[71px] left-[11px] w-[100px] h-[100px] overflow-hidden" />
        <div className="absolute top-[276px] left-[0px] w-[373px] h-11">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-base max-w-full overflow-hidden max-h-full"
            alt=""
            src="../rectangle-3.svg"
          />
          <div className="absolute h-[37.5%] w-[80.62%] top-[31.82%] left-[9.8%] font-semibold inline-block">
            Sign Up
          </div>
        </div>
        <div className="absolute top-[378px] left-[0px] w-[373px] h-11">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-base max-w-full overflow-hidden max-h-full"
            alt=""
            src="../rectangle-31.svg"
          />
          <div className="absolute h-[37.5%] w-[80.62%] top-[31.82%] left-[9.8%] font-semibold inline-block">
            Continue with GitHub
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[255px] h-[71px] text-left text-sm">
          <div className="absolute top-[54px] left-[0px] font-light inline-block w-[255px] h-[17px]">
            <span>{`Have an account? `}</span>
            <span className="text-green">Login here</span>
            <span>.</span>
          </div>
          <div className="absolute top-[0px] left-[0px] text-[40px] font-medium inline-block w-[170px] h-[49px]">
            Sign up
          </div>
        </div>
      </div>
      <div className="absolute top-[611px] left-[318px] text-sm font-light inline-block w-[318px] h-9 text-white">
        <span>{`By signing up, you agree to our `}</span>
        <span className="text-green">Terms of Service and Privacy Policy</span>
        <span>.</span>
      </div>
      <img
        className="absolute top-[0px] left-[117px] w-10 h-[1024px]"
        alt=""
        src="../branding.svg"
      />
      <div className="absolute top-[383px] left-[318px] w-[373px] h-[45px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-base bg-gray-300 box-border border-[1px] border-solid border-gray-100" />
        <div className="absolute h-[97.78%] w-[87.13%] top-[2.22%] left-[5.63%] flex items-center">
          Email
        </div>
      </div>
      <div className="absolute top-[439px] left-[318px] w-[373px] h-[45px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-base bg-gray-300 box-border border-[1px] border-solid border-gray-100" />
        <div className="absolute h-[97.78%] w-[87.13%] top-[2.22%] left-[5.63%] flex items-center">
          Password
        </div>
      </div>
      <div className="absolute top-[496px] left-[318px] w-[373px] h-[45px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-base bg-gray-300 box-border border-[1px] border-solid border-gray-100" />
        <div className="absolute h-[97.78%] w-[87.13%] top-[2.22%] left-[5.63%] flex items-center">
          Confirm Password
        </div>
      </div>
    </div>
  );
};

export default SignUpGetStarted;
