import React from 'react'
import Img from "../../assets/10.png";
import Img1 from "../../assets/71.png";
import Img2 from "../../assets/72.png";
const Proceeds = () => {
  return (
    <div
         style={{ backgroundImage: `url(${Img})` }}
         className="bg-cover bg-center font-poppins relative py-16"
       >
         <div className="grid md:grid-cols-12 grid-cols-1 items-center">
           <div className="second-column pr-4 col-span-6 py-16">
             <div className="flex justify-start pl-12">
               <div>
                 <h1 className="font-poppins text-white font-normal text-center md:text-start">
                   U.S. Small Business Administration <br />
                 </h1>
               
                 <h1 className="font-poppins font-extrabold text-[24px] text-white">
                 Capital - SBA LOAN PROGRAMS - Eligible 
                 Uses of Proceeds
                 </h1>
                 <div className="grid md:grid-cols-2 grid-cols-1 px-12 gap-12  mt-16 text-[16px]">
                    <div className="rounded-tl-2xl text-center rounded-br-xl py-4 px-12 bg-header-gradient text-white font-bold">
                    📦 Inventory
                    </div>
                    <div className="rounded-tl-2xl text-center rounded-br-xl py-4 px-12 bg-header-gradient text-white font-bold">
                    🛠️ Supplies
                    </div>
                    <div className="rounded-tl-2xl text-center rounded-br-xl py-4 px-12 bg-header-gradient text-white font-bold">
                    🏗️ Raw Materials
                    </div>
                    <div className="rounded-tl-2xl text-center rounded-br-xl py-4 px-12 bg-header-gradient text-white font-bold">
                    💰 Working Capital
                    </div>
                    <div className="rounded-tl-2xl text-center rounded-br-xl py-4 px-12 bg-header-gradient text-white font-bold">
                    📉 Debt Refinancing
                    </div>
                    <div className="rounded-tl-2xl text-center rounded-br-xl py-4 px-12 bg-header-gradient text-white font-bold">
                    🏡 Real Estate & Construction
                    </div>
                    <div className="rounded-tl-2xl text-center rounded-br-xl py-4 px-12 bg-header-gradient text-white font-bold">
                    🔧 Leasehold Improvements
                    </div>
              </div>
               </div>
             </div>
           
           </div>
   
           <div className="col-span-6  mt-12 ">
             <div className=" flex justify-center">
               <div>
                 <img className="h-[200px] md:h-[400px] mt-0 ml-16" src={Img1} alt="abc" />
                 <img
                   className="h-[200px] md:mt-[-200px] mt-[-80px] md:ml-[-12px]"
                   src={Img2}
                   alt="abc"
                 />
               </div>
             </div>
           </div>
         </div>
       </div>
  )
}

export default Proceeds