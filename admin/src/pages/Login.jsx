import React , { useState,useContext }  from 'react'
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import axios from 'axios';
import { authDataContext } from '../context/AuthContext';
import { adminDataContext } from '../context/AdminContext';
import {  toast } from 'react-toastify';
const Login = () => {
  let navigate = useNavigate();
  let [show,setShow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let {serverUrl} = useContext(authDataContext);
  let {adminData,getAdmin} = useContext(adminDataContext);
  const [loading,setLoading] = useState(false);
  const AdminLogin = async(e)=>{
    e.preventDefault();
    try {
      const result = await axios.post(serverUrl + '/api/auth/adminlogin',{email,password},{withCredentials:true});
      console.log(result.data);
      toast.success("Admin logged in successfully!!!")
      getAdmin();
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Admin Logged in failed!!!")
    }
  }
  return (
   <div className='w-full h-auto bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start overflow-x-hidden'>
      <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer ' >
          <img className='w-[50px]' src="/ShopIQ-font-2.png" alt=""/>
          <h1 className='text-[22px] font-sans'>Shop<span className='text-yellow-500 text-bold'>IQ</span></h1>
      </div>
      <div className='w-screen h-[100px] flex items-center justify-center flex-col gap-[10px]'>

        <span className='text-[25px] font-semibold'>Admin Login</span>
        <span className='text-[16px] text-[#d9cfcf]'>Welcome to ShopIQ , Apply to Admin Login</span>

      </div>
      <div className='max-w-[600px] w-[90%] h-[400px] bg-[#00000025 border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center mb-10'>
        <form action="" onSubmit={AdminLogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]' >

            <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>

                <input type="email" className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold ' placeholder="Email" required onChange={(e)=>setEmail(e.target.value)} value={email}/>

                <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold ' placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} value={password}/>

                 {!show && <IoEyeOffOutline className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]' onClick={()=>setShow(prev => ! prev)}/>}
                 {show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]' onClick={()=>setShow(prev => ! prev)}/>}
                 
                <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold cursor-pointer'>
                Login
                </button>

            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
