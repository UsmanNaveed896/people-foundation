import React from "react";
import Img from "../../assets/2.png";
import Img1 from "../../assets/3.png";

const Section1 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="h-[90vh] bg-cover bg-center font-poppins relative"
    >
      <div className="flex items-center justify-center min-h-[90vh]">
        <div className="container max-w-[1400px] px-4 md:px-8">
          {/* Responsive heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-extrabold leading-tight md:leading-[80px] text-white pt-8 md:pt-0">
            Empowering <br /> People, Transforming Lives.
          </h1>
          
          <div className="flex mt-3 items-center">
            <div className="h-4 w-4 rounded-full bg-white"></div>
            <hr className="w-16 sm:w-32 md:w-[244px]"></hr>
            <h1 className="rounded-full uppercase font-poppins text-white border px-2 py-1 text-[10px] md:text-[12px] tracking-[3px] md:tracking-[5px]">
              Below poverty line
            </h1>
          </div>
          
          <div className="flex gap-4 items-center mt-6">
            <button className="bg-gradient-to-b from-[#051045] to-transparent text-white px-4 sm:px-6 py-2 rounded-full hover:bg-indigo-800 transition-colors text-sm md:text-base">
              DONATE
            </button>
            <button className="bg-white from-[#051045] to-transparent text-black px-4 sm:px-6 py-2 rounded-full hover:bg-indigo-800 transition-colors text-sm md:text-base">
              Discover
            </button>
          </div>
          
          {/* CARDS - Responsive layout */}
          <div className="relative z-10 w-full mt-12">
            <div className="flex flex-col md:flex-row justify-center md:absolute md:left-[12%] md:top-6 z-10 gap-4 md:gap-0">
              {/* Card 1 */}
              <div className="py-6 px-6 bg-gradient-to-b from-[#313DAA] to-transparent to-[120%] font-poppins md:max-w-[330px] flex justify-between flex-col h-full md:h-[250px]">
                <h1 className="mt-3 text-white font-semibold text-[18px] md:text-[20px]">
                  Education
                </h1>
                <p className="text-[13px] md:text-[14px] text-white tracking-wider">
                  Below Poverty Line is enchmark used by the government of India
                  economic disadvantage.
                </p>
                <div>
                  <button className="mt-3 bg-white text-black px-4 md:px-6 py-2 rounded-full transition-colors text-sm md:text-base">
                    Discover
                  </button>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="py-6 px-4 bg-[linear-gradient(180deg,#3743AC_9.69%,rgba(255,0,4,0.52)_121.37%)] font-poppins md:max-w-[330px] flex justify-between flex-col h-full md:h-[250px]">
                <h1 className="mt-3 text-white font-semibold text-[18px] md:text-[20px]">
                  Become a Volunteer
                </h1>
                <p className="text-[13px] md:text-[14px] text-white tracking-wider">
                  Below Poverty Line is enchmark used by the government
                </p>
                <p className="uppercase underline mt-2 text-center text-white font-semibold text-[13px] md:text-[14px]">
                  Join Organization
                </p>
              </div>
              
              {/* Image Card */}
              <div className="md:max-w-[330px] w-full">
                <img 
                  className="h-auto w-full md:h-[250px] md:w-[330px] object-cover" 
                  src={Img1} 
                  alt="abc" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;