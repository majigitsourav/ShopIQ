import React from 'react'

const Footer = () => {
  return (
    // <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px]'>
    //     <div className='w-[100%] md:h-[30vh] h-[15vh] md:mb-[0px] bg-[#dbfcfcec] flex items-center justify-center md:px-[50px] px-[5px]'>
    //         <div className='md:w-[30%] w-[35%] h-[100%] flex  justify-center flex-col gap-[5px]'>
    //             <div className='flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px] '>

    //                 <img src="/shopIQ-logo.png" alt="" className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]'/>
    //                 <p className='text-[19px] text-[black] md:text-[20px]'>ShopIQ</p>
                    
    //             </div>
    //             <p className='text-[15px] text-[#1e2223] hidden md:block'>ShopIQ is your all-in-one online shopping destination,offering top-quality products, unbeatable deals, and fast delivery-all backed by trusted service designed to make your life easier every day.</p>
    //             <p className='text-[15px] text-[#1e2223] flex md:hidden'>Fast. Easy. Reliable. ShopIQ Shopping </p>
    //         </div>
    //           <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center'>
    //                 <div className='flex items-center justify-center gap-[5px] mt-[10px] md:[40px]'>
    //                     <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans'>COMPANY</p>
    //                 </div>
    //                 <ul>
    //                     <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>Home</li>
    //                     <li className='text-[15px] text-[#1e2223] cursor-pointer'>About Us</li>
    //                     <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>Delivery</li>
    //                     <li className='text-[15px] text-[#1e2223] cursor-pointer'>Privacy Policy</li>
    //                 </ul>
    //             </div>
    //             <div className='md:w-[25%] w-[40%] h-[100%] flex items-center justify-center flex-col text-center'>
    //                 <div className='flex items-center justify-center gap-[5px] mt-[10px] md:[40px]'>
    //                     <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans'>GET IN TOUCH</p>
    //                 </div>
    //                 <ul>
    //                     <li className='text-[15px] text-[#1e2223]'>+91-8436744933</li>
    //                     <li className='text-[15px] text-[#1e2223] cursor-pointer'>support-shopiq@gmail.com</li>
    //                     <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>+1-123-456-7890</li>
    //                     <li className='text-[15px] text-[#1e2223] cursor-pointer hidden md:block'>admin@shopiq.com</li>
    //                 </ul>

    //             </div>

    //     </div>
      
    // </div>
    <footer className="w-full bg-[#dbfcfcec] px-5 md:px-16 py-10 mb-[77px] md:mb-0">

      <div className="
        max-w-7xl mx-auto
        grid grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3
        gap-10
      ">

        {/* COLUMN 1 */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src="/shopIQ-logo.png" alt="" className="w-9 h-9 md:w-10 md:h-10"/>
            <h1 className="text-[25px] text-[black] font-sans">
                <span className="text-blue-950">SHO</span>
                <span className="text-cyan-600">P</span>
                <span className="text-yellow-400">IQ</span>
            </h1>
          </div>

          <p className="text-[15px] text-[#1e2223] hidden md:block leading-relaxed">
            ShopIQ is your all-in-one online shopping destination, offering
            top-quality products, unbeatable deals, and fast delivery —
            all backed by trusted service designed to make your life easier every day.
          </p>

          <p className="text-[15px] text-[#1e2223] md:hidden">
            Fast. Easy. Reliable. ShopIQ Shopping
          </p>
        </div>


        {/* COLUMN 2 */}
        <div className="flex flex-col gap-3 text-left sm:text-center md:text-left">
          <p className="text-xl font-semibold text-[#1e2223]">COMPANY</p>

          <ul className="space-y-1">
            <li className="text-[15px] hidden md:block cursor-pointer">Home</li>
            <li className="text-[15px] cursor-pointer">About Us</li>
            <li className="text-[15px] hidden md:block cursor-pointer">Delivery</li>
            <li className="text-[15px] cursor-pointer">Privacy Policy</li>
          </ul>
        </div>


        {/* COLUMN 3 */}
        <div className="flex flex-col gap-3 text-left sm:text-center md:text-left">
          <p className="text-xl font-semibold text-[#1e2223]">GET IN TOUCH</p>

          <ul className="space-y-1">
            <li className="text-[15px]">+91-8436744933</li>
            <li className="text-[15px] cursor-pointer break-all">
              support-shopiq@gmail.com
            </li>
            <li className="text-[15px] hidden md:block">+1-123-456-7890</li>
            <li className="text-[15px] hidden md:block break-all">
              admin@shopiq.com
            </li>
          </ul>
        </div>

      </div>
      {/* -------- Divider Line -------- */}
  <div className="max-w-7xl mx-auto mt-10">
    <hr className="border-t border-[#9aa4a6]" />
  </div>

  {/* -------- Copyright -------- */}
  <div className="max-w-7xl mx-auto text-center mt-4">
    <p className="text-[14px] md:text-[15px] text-[#1e2223]">
      © {new Date().getFullYear()} ShopIQ. All Rights Reserved.
    </p>
  </div>

    </footer>
  )
}

export default Footer
