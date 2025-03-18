import React from "react";
import Img from "../../assets/4.png";
import Img1 from "../../assets/53.png";
import Img2 from "../../assets/52.png";
import Img3 from "../../assets/34.png";

const StartYourBusiness = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins relative py-12"
    >
      <div className="grid md:grid-cols-12 grid-cols-1  items-center">
        <div className="col-span-6  mt-12 ">
          <div className=" flex justify-center">
            <div>
              <img className=" h-[200px] md:h-[400px] mt-0 ml-16" src={Img1} alt="abc" />
              <img
                className=" h-[200px] md:h-[400px] md:mt-[-132px] mt-[-50px] md:ml-[292px] ml-[170px]"
                src={Img2}
                alt="abc"
              />
            </div>
          </div>
        </div>

        <div className="second-column md:pr-4 col-span-6 py-16">
          <div className="flex justify-start md:pl-12 md:px-0 px-6">
            <div>
              <h1 className="font-poppins text-[#303CA9] font-normal">
                U.S. Small Business Administration Resource Partners
              </h1>
              <h1 className="font-poppins font-extrabold text-[24px] text-[#303CA9]">
                Counseling/Mentoring FOR:
              </h1>
              <div className="flex gap-16 mt-6">
           
                <ul className="list-disc pl-5 space-y-2">
                  <li className="relative">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    Starting your business
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    Cash Flow Analysis
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    Growth plans
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    Mentors to help you <br/> grow as a leader of your business
                  </li>
                </ul>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="relative">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    Writing a business plan
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    Capabilities Statement
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    And so much more
                  </li>

                </ul>
                </div>

           
            </div>
          </div>
          <div className="relative">
            <img className="absolute" src={Img3} alt="abc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartYourBusiness;
