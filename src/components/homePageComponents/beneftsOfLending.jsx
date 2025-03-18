import React from "react";
import Img from "../../assets/54.png";
import Img1 from "../../assets/55.png";
import { BsBuildings } from "react-icons/bs";
import { GoWorkflow } from "react-icons/go";
import { FaHandHoldingWater } from "react-icons/fa";
import { RiTerminalWindowFill } from "react-icons/ri";
import { MdEventSeat } from "react-icons/md";

const BeneftsOfLending = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins relative md:py-32 py-16 bg-capital-gradient "
    >
      <div className="">
        <img className="absolute z-[-1] h-[750px] w-full top-0" src={Img1} alt="new" />
      </div>
      <div className="flex justify-center">
        <div>
          <h1 className="font-poppins text-[#fff] font-semibold text-center my-2">
            U.S. Small Business Administration
          </h1>

          <h1 className="font-poppins text-[#303CA9] font-semibold text-center my-2">
            Capital - BENEFITS OF SBA LENDING
          </h1>
          <h1 className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center">
            Allows lenders to approve loans for customers <br />
            who do not meet conventional guidelines, such as:
          </h1>
          <div className="flex justify-center my-6">
            <button className="rounded py-2 px-4 bg-[#ff0606] text-white">
              Services
            </button>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 px-12 md:gap-4 gap-12  mt-16">
            <div className="border border-white p-8 rounded-lg bg-[#BA070A] h-[115px]">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-white mt-[-54px] flex justify-center items-center">
                  <BsBuildings className="h-6 w-6 text-[#ff0606]" />
                </div>
              </div>

              <h1 className="font-semibold text-white text-center">
                New businesses
              </h1>
            </div>

            <div className="border border-white p-8 rounded-lg bg-[#BA070A] h-[115px]">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-white mt-[-54px] flex justify-center items-center">
                  <GoWorkflow className="h-6 w-6 text-[#ff0606]" />
                </div>
              </div>

              <h1 className="font-semibold text-white text-center">
                Certain industries or business types
              </h1>
            </div>
            <div className="border border-white p-8 rounded-lg bg-[#BA070A] h-[115px]">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-white mt-[-54px] flex justify-center items-center">
                  <FaHandHoldingWater className="h-6 w-6 text-[#ff0606]" />
                </div>
              </div>

              <h1 className="font-semibold text-white text-center">
                Lower debt service coverage
              </h1>
            </div>
            <div className="border border-white p-8 rounded-lg bg-[#BA070A] h-[115px]">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-white mt-[-54px] flex justify-center items-center">
                  <RiTerminalWindowFill className="h-6 w-6 text-[#ff0606]" />
                </div>
              </div>

              <h1 className="font-semibold text-white text-center">
                Longer loan terms
              </h1>
            </div>

            <div className="border border-white p-8 rounded-lg bg-[#BA070A] h-[115px] ">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-white mt-[-54px] flex justify-center items-center">
                  <MdEventSeat className="h-6 w-6 text-[#ff0606]" />
                </div>
              </div>

              <h1 className="font-semibold text-white text-center">
                Acquisition of an existing business
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeneftsOfLending;
