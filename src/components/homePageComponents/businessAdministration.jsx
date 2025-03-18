import React from "react";
import Img from "../../assets/10.png";
import Img1 from "../../assets/36.png";
import Img2 from "../../assets/37.png";

const BusinessAdministration = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins relative py-8 md:py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 items-center relative">
        {/* Left Column (Text) */}
        <div className="second-column pr-4 col-span-6 py-8 md:py-16">
          <div className="flex justify-start pl-4 md:pl-12">
            <div>
              <h1 className="font-poppins text-[#303CA9] font-semibold text-sm md:text-base">
                U.S. Small Business Administration
              </h1>
              <h1 className="font-poppins font-extrabold text-[20px] md:text-[24px] text-[#303CA9] mt-2">
                The (SBA) helps Americans to start, build, <br /> and grow your
                business
              </h1>
              <p className="pr-2 md:pr-6 mt-4 text-white text-sm md:text-base">
                The U.S. Small Business Administration helps make the American
                dream of business ownership a reality. As a go-to resource and
                voice for small businesses with the SBA, backed by the strength
                of the federal government, the SBA empowers entrepreneurs and
                small business owners with the resources and support they need
                to start and grow their business.
              </p>

              <button className="mt-3 bg-[#303CA9] text-[#fff] px-6 py-2 rounded transition-colors text-sm md:text-base">
                DONATE NOW
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Images) */}
        <div className="col-span-6 mt-8 md:mt-12 relative">
          <div className="flex justify-center">
            <div className="relative">
              <img
                className="h-[300px] md:h-[400px] mt-0 ml-4 md:ml-16"
                src={Img1}
                alt="abc"
              />
              <img
                className="h-[300px] md:h-[400px] mt-[-80px] md:mt-[-132px] ml-[120px] md:ml-[192px]"
                src={Img2}
                alt="abc"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAdministration;