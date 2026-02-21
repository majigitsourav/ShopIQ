import React from 'react'
import { useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import axios from 'axios'
import { useEffect,useContext } from 'react'
import { authDataContext } from '../context/AuthContext'
import Title from '../component/Title'
const Order = () => {
    
  const [orderData, setOrderData] = useState([])
  const {currency} = useContext(shopDataContext)
  const {serverUrl} = useContext(authDataContext)

  const loadOrderData = async () =>{
    try {
        const result = await axios.post(serverUrl + "/api/order/userorder",{},{withCredentials:true})
        if(result.data){
            let allOrdersItem = []
            result.data.map((order)=>{
                order.items.map((item)=>{
                    item['status'] = order.status
                    item['payment'] = order.payment
                    item['paymentMethod'] = order.paymentMethod
                    item['date'] = order.date
                    allOrdersItem.push(item)
                })
            })
            setOrderData(allOrdersItem.reverse());
        }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[])
  return (
    <div className='w-full min-h-[100vh] p-[20px] pb-[150px] overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025]'>
        <div className='h-[8%] w-[100%] text-center mt-[80px] '>
            <Title text1={"MY"} text2={"ORDER"}/>
        </div>
        <div className='w-[100%] h-auto flex flex-wrap gap-[20px]'>
             {
                orderData.map((item,index)=>(
                    <div key={index} className='w-[100%] h-auto border-t border-b'>
                        <div className='w-full flex flex-col md:flex-row gap-4 bg-[#51808048] p-4 rounded-2xl'>
                            <img src={item.image1} alt="" className='w-full max-w-[140px] md:w-[130px] md:h-[130px] h-auto rounded-md object-cover self-center md:self-start' />
                            <div className='flex flex-col gap-2 flex-1'>
                                <p className='md:text-[25px] text-[20px] text-[#f3f9fc]'>{item.name}</p>
                                <div className='flex flex-wrap gap-x-4 gap-y-1'>
                                    <p className='md:text-[18px] text-[12pox] text-[#aaf4e7]'>{currency} {item.price}</p>
                                    <p className='md:text-[18px] text-[12pox] text-[#aaf4e7]'>Quantity: {item.quantity}</p>
                                    <p className='md:text-[18px] text-[12pox] text-[#aaf4e7]'>Size: {item.size}</p>
                                </div>
                                <div className='flex item-center'>
                                    <p className='md:text-[18px] text-[12px] text-[#aaf4e7] '>Date :<span className='text-[#e4fbff] pl-[10px] md:text-[16px] text-[11px]'>{new Date(item.date).toDateString()}</span></p>
                                </div>
                                <div className='flex items-center'>
                                    <p className='md:text-[16px] text-[12px] text-[#aaf4e7]'>Payment Method : {item.paymentMethod}</p>
                                </div>
                                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-2'>

                                    {/* Status */}
                                    <div className='flex items-center gap-2'>
                                        <span className='w-2 h-2 rounded-full bg-green-500'></span>
                                        <p className='text-[#f3f9fc] text-sm md:text-base'>{item.status}</p>
                                    </div>
                                    <button className='w-full md:w-auto px-4 py-2 rounded-md bg-[#101919] text-[#f3f9fc]   text-sm md:text-base active:bg-slate-500 cursor-pointer' onClick={()=>loadOrderData()}>
                                        Track Order
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                ))
             }
        </div>
      
    </div>
  )
}

export default Order
