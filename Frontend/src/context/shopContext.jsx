import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './authDataContext'
import axios from 'axios'
import { UserDataContext } from './userContext'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'

 export const shopDataContext = createContext()
function ShopContext({children}) {

    let [products,setProducts] = useState([])
    let [search,setSearch] = useState('')
    let {userData} = useContext(UserDataContext)
    let [showSearch,setShowSearch] = useState(false)
    let {serverUrl} = useContext(authDataContext)
    let [cartItem, setCartItem] = useState({});
      let [loading,setLoading] = useState(false)
      const navigate = useNavigate()
    let currency = '₹';
    let delivery_fee = 40;

    const getProducts = async () => {
        try {
            let result = await axios.get(serverUrl + "/api/product/list")
            console.log(result.data)
            setProducts(result.data)
        } catch (error) {
            console.log(error)
        }
        
    }


const addtoCart = async (itemId, weight) => {

  if (!userData) {
    navigate("/login");
    toast.error("Please login first");
    return;
  }

  if (!weight) {
    toast.error("Please select product weight");
    return;
  }

    let cartData = structuredClone(cartItem); // Clone the product

    if (cartData[itemId]) {
      if (cartData[itemId][weight]) {
        cartData[itemId][weight] += 1;
      } else {
        cartData[itemId][weight] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][weight] = 1;
    }
  
    setCartItem(cartData);
  

    if (userData) {
      setLoading(true)
      try {
      let result = await axios.post(serverUrl + "/api/cart/add" , {itemId,weight} , {withCredentials: true})
      console.log(result.data)
      toast.success("Product Added")
      setLoading(false)


       
      }
      catch (error) {
        console.log(error)
        setLoading(false)
        toast.error("Add Cart Error")
       
      }
     
    } 
    } 


    const getUserCart = async () => {
      try {
        const result = await axios.post(serverUrl + '/api/cart/get',{},{ withCredentials: true })

      setCartItem(result.data)
    } catch (error) {
      console.log(error)
     


    }
      
    }
    const updateQuantity = async (itemId , weight , quantity) => {
      let cartData = structuredClone(cartItem);
    cartData[itemId][weight] = quantity
    setCartItem(cartData)

    if (userData) {
      try {
        await axios.post(serverUrl + "/api/cart/update", { itemId, weight, quantity }, { withCredentials: true })
      } catch (error) {
        console.log(error)
        
      }
    }
      
    }
     const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item]
          }
        } catch (error) {

        }
      }
    }
    return totalCount
  }

  const getCartAmount = () => {

  let total = 0;

  for (const productId in cartItem) {

    const productData = products.find(
      (product) => product._id === productId
    );

    if (!productData) continue;


    for (const weight in cartItem[productId]) {

      const quantity = cartItem[productId][weight];


      if (quantity > 0) {

        const variant = productData.variants.find(
          (item) => item.weight === weight
        );


        if (variant) {
          total += variant.price * quantity;
        }

      }

    }

  }


  return total;

};

    useEffect(()=>{
     getProducts()
    },[])

    useEffect(() => {
    getUserCart()
  },[])






    let value = {
      products, currency , delivery_fee,getProducts,search,setSearch,showSearch,setShowSearch,cartItem, addtoCart, getCartCount, setCartItem ,updateQuantity,getCartAmount,loading
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
