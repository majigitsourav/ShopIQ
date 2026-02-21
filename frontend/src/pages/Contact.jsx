import React from 'react'
import Title from '../component/Title'
import NewLetterBox from '../component/NewLetterBox'
const Contact = () => {
  return (
    <div className='w-full min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50x] pt-[80px]'>
      <Title text1={"CONTACT"} text2 = {"US"}/>
      <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row mb-[30px] mt-[20px]'>
          <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
              <img src="/contact.png" alt="" className='lg:w-[60%] w-[70%] shadow-md shadow-black rounded-sm' />
          </div>
          <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
            <p className='lg:w-[80%] w-[100%] text-[white] font-bold lg:text-[18px] text-[15px]'>Our Store</p>
            <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
              <p>Unit 502, Tower B, EcoSpace Business Park</p>
              <p>New Town, Kolkata 700160, India</p>
            </p>
            <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
              <p>Phone: +91-8436744933</p>
              <p>Email: admin@shopiq.com</p>
            </p>
            <p className='lg:w-[80%] w-[100%]text-[15px] text-[white] lg:text-[18px] mt-[10px] font-bold'>Careers at ShopIQ</p>
            <p className='lg:w-[80%] w-[100%]text-[13px] text-[white] md:text-[16px]  '>Learn more about our teams and job openings</p>
            <button className='px-[30px] py-[20px] flex items-center justify-center text-[white] bg-transparent border active:bg-slate-600 rounded-md cursor-pointer'>Explore Jobs</button>
          </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default Contact
