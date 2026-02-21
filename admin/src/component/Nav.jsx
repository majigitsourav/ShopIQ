import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useContext } from 'react';
import { authDataContext } from '../context/authContext';
import { adminDataContext } from '../context/AdminContext';
import { toast } from 'react-toastify'
const Nav = () => {
  let navigate = useNavigate()
  let {serverUrl} = useContext(authDataContext)
  let {getAdmin} = useContext(adminDataContext)

  const logout = async ()=>{
    try {
        const result = await axios.get(serverUrl+"/api/auth/logout",{withCredentials:true})
        console.log(result.data)
        getAdmin();
        toast.success("You are successfully logged out!!!")
        navigate("/login");
    }catch (error) {
        console.log(error)
    }
  }
  return (
    <div className='w-[100vw] h-[70px] bg-[#dcdbdbf8] z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black'>
      <div className='w-[30%] flex items-center justify-start gap-[10px] cursor-pointer' onClick={()=>navigate("/")}>
        <img src="/shopIQ-logo.png" alt="" className="w-[50px]" />
        <h1 className="text-[25px] text-[black] font-sans">
          <span className="text-blue-950">SHO</span>
          <span className="text-cyan-600">P</span>
          <span className="text-yellow-500">IQ</span>
        </h1>
        
      </div>
      <button className='text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white' onClick={logout}>
            Logout
        </button>
    </div>
  )
}

export default Nav
