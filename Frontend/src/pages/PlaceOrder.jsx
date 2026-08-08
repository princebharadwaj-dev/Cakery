import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import razorpay from '../assets/Razorpay.jpg'
import { shopDataContext } from '../context/shopContext'
import { authDataContext } from '../context/authDataContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'

function PlaceOrder() {
    let [method,setMethod] = useState('cod')
    let navigate = useNavigate()
    const {cartItem , setCartItem , getCartAmount , delivery_fee , products } = useContext(shopDataContext)
    let {serverUrl} = useContext(authDataContext)
    let [loading ,setLoading] = useState(false)

    let [formData,setFormData] = useState({
        firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    pinCode:'',
    country:'',
    phone:''
    })

    const onChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data => ({...data,[name]:value}))
    }

    const initPay = (order) =>{
        const options = {
      key:import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name:'Order Payment',
      description: 'Order Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response)
    const {data} = await axios.post(serverUrl + '/api/order/verifyrazorpay',response,{withCredentials:true})
    if(data){
        navigate("/order")
        setCartItem({})

    }
      }}
    const rzp = new window.Razorpay(options)
    rzp.open()
   }

    
     const onSubmitHandler = async (e) => {
        
    setLoading(true)
        e.preventDefault()
    try {
      let orderItems = []
      for(const items in cartItem){
        for(const item in cartItem[items]){
          if(cartItem[items][item] > 0){
           const productData = products.find(
  product => product._id === items
);

if(productData){

  const variant = productData.variants.find(
    v => v.weight === item
  );

  orderItems.push({
    _id: productData._id,
    name: productData.name,
    image1: productData.image1,
    weight: item,
    quantity: cartItem[items][item],
    price: variant.price
  });

}
          }
        }
      }

      const amount = orderItems.reduce(
  (total,item)=>{
    return total + (item.price * item.quantity);
  },
  0
);
      let orderData = {
        address:formData,
        items:orderItems,
        amount:amount + delivery_fee
      }
      switch(method){
        case 'cod': 
      
        const result = await axios.post(serverUrl + "/api/order/placeorder" , orderData , {withCredentials:true})
        console.log(result.data)
        if(result.data){
            setCartItem({})
            toast.success("Order Placed")
            navigate("/order")
            setLoading(false)

        }else{
            console.log(result.data.message)
            toast.error("Order Placed Error")
             setLoading(false)
        }

        break;

        case 'razorpay':
        const resultRazorpay = await axios.post(serverUrl + "/api/order/razorpay" , orderData , {withCredentials:true})
        if(resultRazorpay.data){
          initPay(resultRazorpay.data)
           toast.success("Order Placed")
           setLoading(false)
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
<div className='w-full min-h-screen bg-[#fffaf5] px-5 md:px-10 py-10'>

    <div className='mt-[70px] grid grid-cols-1 lg:grid-cols-2 gap-10'>


        {/* DELIVERY INFORMATION */}

        <div className='bg-white rounded-3xl shadow-lg border border-orange-100 p-6 md:p-10'>

            <Title text1={'DELIVERY'} text2={'INFORMATION'} />


            <form onSubmit={onSubmitHandler} className='mt-8 flex flex-col gap-5'>


                <div className='flex gap-4'>

                    <input
                    type="text"
                    placeholder='First name'
                    name='firstName'
                    value={formData.firstName}
                    onChange={onChangeHandler}
                    required
                    className='w-1/2 p-3 rounded-xl border border-gray-200 outline-none focus:border-[#FF7A00]'
                    />


                    <input
                    type="text"
                    placeholder='Last name'
                    name='lastName'
                    value={formData.lastName}
                    onChange={onChangeHandler}
                    required
                    className='w-1/2 p-3 rounded-xl border border-gray-200 outline-none focus:border-[#FF7A00]'
                    />

                </div>



                <input
                type="email"
                placeholder='Email address'
                name='email'
                value={formData.email}
                onChange={onChangeHandler}
                required
                className='p-3 rounded-xl border border-gray-200 outline-none focus:border-[#FF7A00]'
                />



                <input
                type="text"
                placeholder='Street'
                name='street'
                value={formData.street}
                onChange={onChangeHandler}
                required
                className='p-3 rounded-xl border border-gray-200 outline-none focus:border-[#FF7A00]'
                />



                <div className='flex gap-4'>

                    <input
                    type="text"
                    placeholder='City'
                    name='city'
                    value={formData.city}
                    onChange={onChangeHandler}
                    required
                    className='w-1/2 p-3 rounded-xl border border-gray-200 outline-none focus:border-[#FF7A00]'
                    />

                    <input
                    type="text"
                    placeholder='State'
                    name='state'
                    value={formData.state}
                    onChange={onChangeHandler}
                    required
                    className='w-1/2 p-3 rounded-xl border border-gray-200 outline-none focus:border-[#FF7A00]'
                    />

                </div>



                <div className='flex gap-4'>

                    <input
                    type="text"
                    placeholder='Pincode'
                    name='pinCode'
                    value={formData.pinCode}
                    onChange={onChangeHandler}
                    required
                    className='w-1/2 p-3 rounded-xl border border-gray-200 outline-none focus:border-[#FF7A00]'
                    />


                    <input
                    type="text"
                    placeholder='Country'
                    name='country'
                    value={formData.country}
                    onChange={onChangeHandler}
                    required
                    className='w-1/2 p-3 rounded-xl border border-gray-200 outline-none focus:border-[#FF7A00]'
                    />

                </div>



                <input
                type="text"
                placeholder='Phone'
                name='phone'
                value={formData.phone}
                onChange={onChangeHandler}
                required
                className='p-3 rounded-xl border border-gray-200 outline-none focus:border-[#FF7A00]'
                />



                <button
                type='submit'
                className='bg-[#FF7A00] hover:bg-orange-600 text-white font-semibold py-3 rounded-xl text-lg transition'
                >

                {
                loading 
                ? <Loading/>
                : "PLACE ORDER"
                }

                </button>


            </form>

        </div>





        {/* PAYMENT */}

        <div className='bg-white rounded-3xl shadow-lg border border-orange-100 p-6 md:p-10 h-fit'>


            <Title text1={'PAYMENT'} text2={'METHOD'} />


            <div className='mt-8 flex flex-col gap-5'>


                <button
                onClick={()=>setMethod('razorpay')}
                className={`border rounded-xl p-3 transition 
                ${method==='razorpay' ? 'border-[#FF7A00] shadow-md' : 'border-gray-200'}`}
                >

                    <img 
                    src={razorpay}
                    className='h-[60px] w-full object-contain'
                    />

                </button>




                <button
                onClick={()=>setMethod('cod')}
                className={`py-4 rounded-xl font-bold transition
                ${method==='cod'
                ? 'bg-[#FF7A00] text-white'
                : 'bg-orange-50 text-[#FF7A00]'}`}
                >

                CASH ON DELIVERY

                </button>


            </div>



            <div className='mt-10'>

                <CartTotal/>

            </div>


        </div>



    </div>

</div>
)
}

export default PlaceOrder
