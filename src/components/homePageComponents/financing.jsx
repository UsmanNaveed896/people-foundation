import React from 'react'
import Img from "../../assets/40.png";


const Financing = () => {
  return (
     <div
         style={{ backgroundImage: `url(${Img})` }}
         className="bg-cover bg-center font-poppins relative md:py-32 py-16 bg-capital-gradient"
       >
         <div className="flex justify-center">
           <div>
             <h1 className="font-poppins text-[#fff] font-semibold text-center my-2">
               U.S. Small Business Administration
             </h1>
             <h1 className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center">
             Capital
             </h1>
             <h1 className="font-poppins font-normal text-[18px] text-[#fff] mt-6 text-center">
             In 2017 & 2018, in the NYDO area of operation, covering 14 counties:
             </h1>
           </div>
         </div>
         <div className="flex justify-center mt-16 px-4 md:px-0">
           <div>
             <div className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center">
             The SBA provided over $1 billion in financing each year to small businesses.
             </div>
             <div className="rounded-full py-4 px-4 mt-4 text-[#FF0606] border-[#FF0606] bg-white text-center">
             This financing is only provided when financial institutions say NO.
             </div>
             <div className="rounded-full py-4 mt-5 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center">
             Capital that these small businesses would not have received without the SBA.
             </div>
           </div>
         </div>
   
       </div>
  )
}

export default Financing