import React from "react";
import Img from "../../assets/54.png";
import Img1 from "../../assets/55.png";

import { TbDatabaseDollar, TbSettingsCog } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHeadset, FaIdeal } from "react-icons/fa";
import { CiDatabase } from "react-icons/ci";
import { FaPeopleRobbery } from "react-icons/fa6";
const BusinessCnter = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins relative py-32 bg-capital-gradient "
    >
      <div className="">
        <img className="absolute z-[-1] w-full top-0" src={Img1} alt="new" />
      </div>
      <div className="flex justify-center">
        <div>
          <h1 className="font-poppins text-[#fff] font-semibold text-center my-2">
            U.S. Small Business Administration
          </h1>
          <h1 className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center">
            Small Business Development Centers (SBDC)
          </h1>
          <div className="flex justify-center my-6">
            <button className="rounded py-2 px-4 bg-[#ff0606] text-white">
              Services
            </button>
          </div>

          <div className="grid md:grid-cols-5 grid-cols-1 px-12 gap-4  mt-16">
            <div className="border border-white p-8 rounded-lg bg-[#BA070A] h-[115px]">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-white mt-[-54px] flex justify-center items-center">
                  <TbDatabaseDollar className="h-6 w-6 text-[#ff0606]" />
                </div>
              </div>

              <h1 className="font-semibold text-white text-center">
                Business Plan Development
              </h1>
            </div>

            <div className="border border-white p-8 rounded-lg bg-[#BA070A] h-[115px]">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-white mt-[-54px] flex justify-center items-center">
                  <TbSettingsCog className="h-6 w-6 text-[#ff0606]" />
                </div>
              </div>

              <h1 className="font-semibold text-white text-center">
                Manufacturing Assistance Development
              </h1>
            </div>
            <div className="border border-white p-8 rounded-lg bg-[#BA070A] h-[115px]">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-white mt-[-54px] flex justify-center items-center">
                  <BsGraphUpArrow className="h-6 w-6 text-[#ff0606]" />
                </div>
              </div>

              <h1 className="font-semibold text-white text-center">
                Financial Packaging and Lending Assistance
              </h1>
            </div>
            <div className="border border-white p-8 rounded-lg bg-[#BA070A] h-[115px]">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-white mt-[-54px] flex justify-center items-center">
                  <FaHeadset className="h-6 w-6 text-[#ff0606]" />
                </div>
              </div>

              <h1 className="font-semibold text-white text-center">
                Exporting and Importing Support
              </h1>
            </div>

            <div className="border border-white p-8 rounded-lg bg-[#BA070A] h-[115px] ">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-white mt-[-54px] flex justify-center items-center">
                  <CiDatabase className="h-6 w-6 text-[#ff0606]" />
                </div>
              </div>

              <h1 className="font-semibold text-white text-center">
                Disaster Recovery Assistance
              </h1>
            </div>

            <div className="border border-white p-8 rounded-lg bg-[#BA070A] h-[115px] mt-8">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-white mt-[-54px] flex justify-center items-center">
                  <FaIdeal className="h-6 w-6 text-[#ff0606]" />
                </div>
              </div>

              <h1 className="font-semibold text-white text-center">
                Procurement and Contracting Aid
              </h1>
            </div>

            <div className="border border-white p-8 rounded-lg bg-[#BA070A] h-[115px] mt-8">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-white mt-[-54px] flex justify-center items-center">
                  <FaPeopleRobbery className="h-6 w-6 text-[#ff0606]" />
                </div>
              </div>

              <h1 className="font-semibold text-white text-center">
                Market Research Assistance
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCnter;
