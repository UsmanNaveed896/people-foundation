import React from 'react'
import Img from "../../assets/96.png";
import Img1 from "../../assets/94.png";
import Img2 from "../../assets/95.png";
const EligibleUses = () => {
  return (
  <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins relative py-12 z-[]"
    >
      <div className="grid md:grid-cols-12 grid-cols-1 items-center">
        <div className="col-span-6  mt-12 ">
          <div className=" flex justify-center">
            <div>
              <img className="md:h-[400px] h-[250px] w-[350px] mt-0 md:ml-16 ml-4" src={Img1} alt="abc" />
              <img
                className="h-[250px] w-[250px] md:mt-[-132px] mt-[-44px] md:ml-[292px] ml-[70px]"
                src={Img2}
                alt="abc"
              />
            </div>
          </div>
        </div>

        <div className="second-column pr-4 col-span-6 py-16">
          <div className="flex justify-start md:pl-12 px-4 md:px-0">
            <div>
              <h1 className="font-poppins text-[#303CA9] font-normal">
                U.S. Small Business Administration
              </h1>
              <h1 className="font-poppins font-extrabold text-[24px] text-[#303CA9]">
              Capital - SBA LOAN PROGRAMS
              </h1>
              <div className="rounded-tl-2xl md:w-[500px] rounded-br-xl py-4 px-12 bg-transparent border-red-500 border  text-red-500 font-bold mt-4">
              <h1>Eligible Uses of Proceeds 504 Program</h1>
              </div>
              <div className="flex gap-16 mt-6">
                <ul className="list-disc pl-5 space-y-2">
                  <li className="relative">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    To acquire land
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    Purchase an existing building
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    Improve a site
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    Expand or renovate an existing building
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    Construct a new building
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    Acquire and install fixed assets 
                    (For a 504 loan, useful life of at least 10 years)
                  </li>
                </ul>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EligibleUses