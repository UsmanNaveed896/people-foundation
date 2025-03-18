import React from "react";
import Img from "../../assets/64.png";
import Img1 from "../../assets/55.png";

const OutReachCenter = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins relative py-12 bg-capital-gradient "
    >
      <div className="">
        <img className="absolute z-[-1] w-full top-0 h-[450px]" src={Img1} alt="new" />
      </div>
      <div className="flex justify-center px-4 md:px-0">
        <div>
          <h1 className="font-poppins text-[#fff] font-semibold text-center my-2">
            U.S. Small Business Administration
          </h1>
          <h1 className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center">
            Veteran Business Outreach Center (VBOC)
          </h1>
          <div className="flex justify-center my-6">
            <button className="rounded py-2 px-4 bg-[#ff0606] text-white">
              Services
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:px-16 px-4">
        <div className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center">
          Pre-Business Plan Workshops/Concept Assessments
        </div>
        <div className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center">
          Business Plan Assistance
        </div>
        <div className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center">
          Comprehensive Feasibility Analysis/Strategy
        </div>

        <div className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center">
          One-on-One Counseling
        </div>
        <div className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center">
          Training
        </div>
        <div className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center">
          Mentorship
        </div>
        <div className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center">
          Other Related Business Development Services
        </div>
      </div>
    </div>
  );
};

export default OutReachCenter;
