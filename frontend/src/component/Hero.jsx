import React from 'react'
import { FaCircle } from "react-icons/fa";
const Hero = ({heroData,heroCount,setHeroCount}) => {
  return (
    <div className='w-1/2  relative text-[#88d9ee]'>
      <div className='absolute text-[#88d9ee] text-[20px] md:text-[40px] lg:text-[55px]  md:top-[80px] lg:top-[130px] left-[10%] top-[10px] '>
            <p >{heroData.text1}</p>
            <p >{heroData.text2}</p>
      </div>
      <div className='absolute left-[10%] bottom-[20px] flex items-center justify-center gap-[10px]'>
        <FaCircle className={`w-[14px] ${heroCount === 0 ? "fill-orange-400":"fill-white"}`} onClick={()=>setHeroCount(0)}/>
        <FaCircle className={`w-[14px] ${heroCount === 1 ? "fill-orange-400":"fill-white"}`} onClick={()=>setHeroCount(1)}/>
        <FaCircle className={`w-[14px] ${heroCount === 2 ? "fill-orange-400":"fill-white"} `} onClick={()=>setHeroCount(2)}/>
        <FaCircle className={`w-[14px] ${heroCount === 3 ? "fill-orange-400":"fill-white"}`}  onClick={()=>setHeroCount(3)}/>

      </div>
    </div>
  )
}

export default Hero
