import React from "react";
import Img from "../../assets/39.png";

const Capital = () => {
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
            The (SBA) helps Americans to start, build, and grow your business{" "}
            <br />
            Our NYDO Comprises 14 downstate counties of New York:
          </h1>
          <h1 className="font-poppins font-normal text-[18px] text-[#fff] mt-6 text-center">
            (Bronx, Dutchess, Kings, Nassau, New York, Orange, Putnam, Queens,
            Richmond, Rockland, Suffolk, Sullivan, Ulster, and Westchester)
          </h1>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <div>
          <div className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center">
            Over 1.6 million Small Businesses
          </div>
          <div className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white mt-5 text-center">
            Employing Over 5 million
          </div>
          <div className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white mt-5 text-center">
            With a Payroll in excess of $322 Billion
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capital;
