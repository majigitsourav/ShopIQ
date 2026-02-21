import React, { useEffect } from 'react'
import { createContext } from 'react';
export const adminDataContext = createContext();
import { useState } from 'react';
import { useContext } from 'react';
import { authDataContext } from './authContext';
import axios from 'axios';

const AdminContext = ({children}) => {
  let [adminData,setAdminData] = useState(null);
  let {serverUrl} = useContext(authDataContext); 

  const getAdmin = async()=>{
    try {
      let result = await axios.get(serverUrl + '/api/user/getadmin',{withCredentials:true});
      
      setAdminData(result.data);  
      console.log(result.data);
      //console.log("Admin data fetched successfully");
    } catch (error) {
      setAdminData(null);
      console.log(error);
    }
  }

  useEffect(()=>{
    getAdmin();
  },[]);

  let value = {
    adminData,setAdminData,getAdmin
  }
  return (
    <div>
      <adminDataContext.Provider value={value} >
        {children}
      </adminDataContext.Provider>
    </div>
  )
}

export default AdminContext
