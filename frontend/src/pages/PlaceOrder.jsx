import React,{useState,useContext} from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal';
import razorpay from '../assets/Razorpay.png'
import { shopDataContext } from '../context/ShopContext';
import { authDataContext } from '../context/AuthContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import Loading from '../component/Loading';
const PlaceOrder = () => {
  let [method,setMethod] = useState('cod');
  const [loading,setLoading] = useState(false);
  let navigate = useNavigate()
  const {cartItem,setCartItem,getCartAmount,delivery_fee,products} = useContext(shopDataContext);
  let {serverUrl} = useContext(authDataContext);
  let [formData,setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    pincode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data => ({...data,[name]:value}))
  }

  const initPay = (order)=>{
    const options = {
        key : import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Order Payment',
        description: 'Order Payment',
        order_id: order.id,
        receipt: order.receipt,
        handler: async (response) =>{
            console.log(response)
            const {data} = await axios.post(serverUrl + '/api/order/verifyrazorpay',response,{withCredentials:true})
            if (data){
                setCartItem({})
                toast.success("Your order has been placed !!!");
                navigate("/order");
                
            }else{
                toast.error("Sorry ! Your order has not been placed.");
            }
        }
        
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
   
  }

  const onSubmitHandler = async (e)=>{
        setLoading(true);
        e.preventDefault();
        try {
            let orderItems = [];
            for(const items in cartItem){
                for(const item in cartItem[items]){
                    if(cartItem[items][item] > 0){
                        const itemInfo = structuredClone(products.find(product => product._id === items))
                        if(itemInfo){
                            itemInfo.size = item
                            itemInfo.quantity = cartItem[items][item]
                            orderItems.push(itemInfo)
                        }

                    }
                }
            }
            let orderData = {
                address:formData,
                items:orderItems,
                amount:getCartAmount() + delivery_fee
            }
            switch(method){
                case 'cod': const result = await axios.post(serverUrl + "/api/order/placeorder",orderData,{withCredentials:true});
                console.log(result.data);
                if(result.data){
                    setCartItem({})
                    toast.success("Your order has been placed !!!");
                    setLoading(false)
                    navigate("/order")
                }else{
                    console.log(result.data.message);
                    toast.error("Sorry ! Your order has not been placed.");
                    setLoading(false)
                }
                break;

                case 'razorpay' : 
                const resultRazorpay = await axios.post(serverUrl + "/api/order/razorpay",orderData,{withCredentials:true})
                if(resultRazorpay.data){
                    initPay(resultRazorpay.data)
                }
                break;
                default:
                break;
            }
        } catch (error) {
         console.log(error)
         
        }
    }


  return (
    <div className='w-full min-h-screen pb-[120px] md:pb-0 bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start justify-center flex-col md:flex-row gap-[50px] relative '>
        <div className='lg:w-[50%] w-full flex items-start justify-center pt-[90px] md:pt-[70px] lg:mb-[20px] '>
            <form action="" id="orderForm" onSubmit={onSubmitHandler} className='lg:w-[70%] w-[95%] flex flex-col gap-4'>
                <div className='py-[10px] flex items-center justify-center'>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-3 px-[10px]'>
                    <input type="text" placeholder='First name' className='w-full md:w-[48%]
                    h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px]  text-[white]' required onChange={onChangeHandler} name='firstName' value={formData.firstName}/>

                    <input type="text" placeholder='Last name' className='w-full md:w-[48%]
                    h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] text-[white]' required onChange={onChangeHandler} name='lastName' value={formData.lastName}/> 
                </div>

                <div className='w-full flex flex-col md:flex-row gap-3 px-[10px]'>

                    <input type="email" placeholder='Email address' className='w-[100%] h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] text-[white]' required onChange={onChangeHandler} name='email' value={formData.email}/>
                </div>

                <div className='w-full flex flex-col md:flex-row gap-3 px-[10px]'>

                    <input type="text" placeholder='Street' className='w-[100%] h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] text-[white]' required onChange={onChangeHandler} name='street' value={formData.street} />
                </div>

                <div className='w-full flex flex-col md:flex-row gap-3 px-[10px]'>
                    <input type="text" placeholder='City' className='w-full md:w-[48%]
                    h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px]  text-[white]' required onChange={onChangeHandler} name='city' value={formData.city}/>

                    <input type="text" placeholder='State' className='w-full md:w-[48%]
                    h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] text-[white]' required onChange={onChangeHandler} name='state' value={formData.state}/> 
                </div>

                <div className='w-full flex flex-col md:flex-row gap-3 px-[10px]'>
                    <input type="text" placeholder='Pincode' className='w-full md:w-[48%]
                    h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px]  text-[white]'  required onChange={onChangeHandler} name='pincode' value={formData.pincode}/>

                    <input type="text" placeholder='Country' className='w-full md:w-[48%]
                    h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] text-[white]' required onChange={onChangeHandler} name='country' value={formData.country}/> 
                </div>

                <div className='w-full flex flex-col md:flex-row gap-3 px-[10px]'>

                    <input type="text" placeholder='Phone' className='w-full h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[10px] text-[white]' required onChange={onChangeHandler} name='phone' value={formData.phone}/>
                </div>
                <div>
                <div className='hidden md:flex justify-center mt-6'>
                    <button type="submit"
                        className='text-[18px] active:bg-slate-500 cursor-pointer bg-[#3bcee848] px-[60px] py-[12px] rounded-2xl text-white border border-[#80808049]'>
                        {loading ? <Loading/> : "PLACE ORDER"}
                    </button>
                </div>

                </div>


            </form>

        </div>
        <div className='lg:w-[50%] pt-[110px] w-full flex items-start justify-center gap-[30px]'>
             <div className='lg:w-[70%] w-[90%] flex items-center justify-start gap-[10px] flex-col'>
                <CartTotal/>
                <div className='text-xl py-[10px]'>
                    <Title text1={'PAYMENT'} text2={'METHOD'} />
                </div>
                <div className='w-full flex flex-wrap mt-[20px] justify-center gap-[20px]'>

                    <button onClick={()=>setMethod('razorpay')} className={`w-[150px] h-[50px] rounded-sm bg-[white] cursor-pointer ${method === 'razorpay' ? ' border-[5px] border-blue-900 rounded-sm ' : ''}`}><img src={razorpay} className='w-[90%] h-[90%] object-fill rounded-sm ' alt=""/></button>

                    <button onClick={()=>setMethod('cod')} className={`w-[200px] h-[50px] bg-gradient-to-t from-[#95b3f8] to-[white] text-[14px] px-[20px] rounded-sm
                    text-[#332f6f] font-bold bg-[white] cursor-pointer ${method === 'cod' ? 'border-[5px] border-blue-900 rounded-sm ' : ''}`}>CASH ON DELIVERY</button>

                </div>
             </div>
        </div>
        {/* MOBILE STICKY BUTTON */}
        <div className='fixed bottom-0 left-0 w-full bg-[#0c2025] border-t border-[#2e6f77] p-4 md:hidden z-50'>
        <button
            type="submit"
            form="orderForm"
            className='w-full py-3 text-[18px] bg-[#3bcee8] rounded-xl text-black font-semibold active:scale-95 flex items-center justify-center'>
            {loading ? <Loading/> : "PLACE ORDER"}
        </button>
        </div>

      
    </div>
  )
}

export default PlaceOrder
