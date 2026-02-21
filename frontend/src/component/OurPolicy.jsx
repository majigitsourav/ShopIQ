import React from "react";
import Title from "./Title";
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
const OurPolicy = () => {
  return (
    // <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] md:h-[70vh] flex items-center justify-start flex-col gap-[50px]">
    //   <div className="h-[8%] w-[100%] text-center mt-[70px]">
    //     <Title text1={"OUR"} text2={"POLICY"} />
    //     <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100">
    //       Customer-Friendly Policies - Committed to Your Satisfaction and
    //       Safety.
    //     </p>
    //   </div>
    //   <div className="w-[100%] md:min-h-[50%] h-[20%] flex items-center justify-center flex-wrap lg:gap-[50px] gap-[80px] ">

    //     <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]">
    //       <RiExchangeFundsLine className="md:w-[60px] w-[40px] h-[40px] md:h-[60px] text-[#90b9ff] " />
    //       <p className="font-semibold text-[#a5e8f7]  text-[19px] md:text-[25px]">
    //         Easy Exchange Policy
    //       </p>
    //       <p
    //         className="font-semibold md:text-[18px] 
    //         text-[12px] text-[aliceblue] text-center"
    //       >
    //         Exchange Made Easy - Quick, Simple, and Customer-Friendly Process.
    //       </p>
    //     </div>

    //     <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]">
    //       <TbRosetteDiscountCheckFilled className="md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff] " />
    //       <p className="font-semibold text-[#a5e8f7] text-center text-[19px] md:text-[25px]">
    //         7 Days Return Policy
    //       </p>
    //       <p
    //         className="font-semibold md:text-[18px] 
    //         text-[12px] text-[aliceblue] text-center"
    //       >
    //         Shop with Confidence - 7 Days Easy Return Guarantee.
    //       </p>
    //     </div>

    //     <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]">
    //       <BiSupport className="md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff] " />
    //       <p className="font-semibold text-[#a5e8f7] text-center text-[19px] md:text-[25px]">
    //         Best Customer Support
    //       </p>
    //       <p
    //         className="font-semibold md:text-[18px] 
    //         text-[12px] text-[aliceblue] text-center"
    //       >
    //         Trusted Customer Support - Your Satisfaction Is Our Priority.
    //       </p>
    //     </div>

    //   </div>
    // </div>
    <section className="w-full bg-gradient-to-l from-[#141414] to-[#0c2025] py-16 px-4 pb-28">

    {/* Title */}
    <div className="text-center max-w-3xl mx-auto mb-14">
      <Title text1={"OUR"} text2={"POLICY"} />
      <p className="text-sm md:text-lg text-blue-100 mt-3">
        Customer-Friendly Policies - Committed to Your Satisfaction and Safety.
      </p>
    </div>

    {/* Policies */}
    <div className="
        max-w-6xl mx-auto
        grid grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3
        gap-12
      ">

      {/* Card 1 */}
      <div className="flex flex-col items-center text-center gap-3 px-6">
        <RiExchangeFundsLine className="text-[#90b9ff] text-4xl md:text-6xl" />
        <p className="font-semibold text-[#a5e8f7] text-xl md:text-2xl">
          Easy Exchange Policy
        </p>
        <p className="text-sm md:text-base text-blue-50">
          Exchange Made Easy - Quick, Simple, and Customer-Friendly Process.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center gap-3 px-6">
        <TbRosetteDiscountCheckFilled className="text-[#90b9ff] text-4xl md:text-6xl" />
        <p className="font-semibold text-[#a5e8f7] text-xl md:text-2xl">
          7 Days Return Policy
        </p>
        <p className="text-sm md:text-base text-blue-50">
          Shop with Confidence - 7 Days Easy Return Guarantee.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center text-center gap-3 px-6">
        <BiSupport className="text-[#90b9ff] text-4xl md:text-6xl" />
        <p className="font-semibold text-[#a5e8f7] text-xl md:text-2xl">
          Best Customer Support
        </p>
        <p className="text-sm md:text-base text-blue-50">
          Trusted Customer Support - Your Satisfaction Is Our Priority.
        </p>
      </div>

    </div>
  </section>
  );
};

export default OurPolicy;
