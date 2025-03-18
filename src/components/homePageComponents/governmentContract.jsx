import React from "react";
import Img from "../../assets/86.png";
const GovernmentContract = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins relative py-32 bg-capital-gradient"
    >
      <div className="flex justify-center">
        <div>
          <h1 className="font-poppins text-[#fff] font-semibold text-center my-2">
            U.S. Small Business Administration
          </h1>
          <h1 className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center">
            Government Contracting
          </h1>
        </div>
      </div>
      <div className="flex justify-center mt-16 px-4 md:px-0">
        <div>
          <div className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center">
            The U.S. government is the largest single purchaser of <br className="hidden md:block"/> goods and
            services in the world, awarding approximately <br className="hidden md:block"/>  $500 billion in
            contracts every year.
          </div>
          <div className="rounded-full py-4 px-4 mt-4 text-[#FF0606] border-[#FF0606] bg-white text-center">
            The small business goal of 23% Spend
          </div>
          <div className="rounded-full py-4 mt-5 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center">
            Contracting – All contracts from $3,000 to $250k are for small
            businesses
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentContract;
