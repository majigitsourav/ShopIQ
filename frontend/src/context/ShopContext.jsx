import React, { createContext, useEffect,useState,useContext } from 'react'
import { authDataContext } from './AuthContext';
import {userDataContext} from './UserContext'
import axios from 'axios'
export const shopDataContext = createContext();
import {  toast } from 'react-toastify';
const ShopContext = ({children}) => {
  
  let [products,setProducts] = useState([]);
  let [search,setSearch] = useState('');
  let {userData} = useContext(userDataContext);
  let [showSearch,setShowSearch] = useState(false);
  let {serverUrl} = useContext(authDataContext);
  let [cartItem, setCartItem] = useState({});
  let currency = '₹';
  let delivery_fee = 40;
  const [loading,setLoading] = useState(false);
  const getProducts = async ()=>{
    try {
      let result = await axios.get(serverUrl+"/api/product/list");
      console.log(result.data);
      setProducts(result.data);
    } catch (error) {
      console.log(error)
    } 
  }

  const addToCart = async(itemId, size)=>{
    setLoading(true)
    if(!size){
      console.log("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItem); // Clone the product
    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1;
      }else{
        cartData[itemId][size] = 1;
      }
    }else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItem(cartData);
    //console.log(cartData);
    if(userData){
      try {
        let result = await axios.post(serverUrl + '/api/cart/add',{itemId,size},{withCredentials:true})
        
        console.log(result.data)
        toast.success("Product added to your cart successfully !!")
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    }else{
      console.log("user data not found")
      toast.success("Product add failed to your cart !!")
    }
  }

  const getUserCart = async ()=>{
    try {
      const result = await axios.post(serverUrl + '/api/cart/get',{},{withCredentials:true})
      setCartItem(result.data)
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const updateQuantity = async (itemId, size, quantity) =>{
    try {
      let cartData = structuredClone(cartItem);
      cartData[itemId][size] = quantity
      setCartItem(cartData)
      if(userData){
        try {
          await axios.post(serverUrl+ "/api/cart/update",{itemId,size,quantity},{withCredentials:true})
          toast.success("Your item has been removed from cart!!")
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      }
    } catch (error) {
      
    }
  }

  const getCartAmount =  () => {
  let totalAmount = 0;

  for (const items in cartItem) {
    let itemInfo = products.find((product) => product._id === items);

    for (const item in cartItem[items]) {
      try {
        if (cartItem[items][item] > 0) {
          totalAmount += itemInfo.price * cartItem[items][item];
        }
      } catch (error) {
        
      }
    }
  }

  return totalAmount;
  };

  const getCartCount = ()=>{
    let totalCount = 0;
    for(const items in cartItem){
      for(const item in cartItem[items]){
         try {
          if(cartItem[items][item] > 0){
            totalCount += cartItem[items][item]
          }
         } catch (error) {
          
         }
      }
    }
    return totalCount;
  }
  
  useEffect(()=>{
    getProducts()
  },[]);

   useEffect(()=>{
    getUserCart()
  },[]);

  let value ={
    products,currency, delivery_fee, getProducts, search, setSearch, showSearch,setShowSearch,cartItem,addToCart,getCartCount,setCartItem,updateQuantity,getCartAmount,loading
  }
  return (
    <div>
      <shopDataContext.Provider value={value}>
      {children}
      </shopDataContext.Provider>
    </div>
  )
}

export default ShopContext
