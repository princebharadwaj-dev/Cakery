import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { shopDataContext } from '../context/shopContext'
import { authDataContext } from '../context/authDataContext'
import axios from 'axios'

function Order() {
    let [orderData,setOrderData] = useState([])
    let {currency} = useContext(shopDataContext)
    let {serverUrl} = useContext(authDataContext)

    const loadOrderData = async () => {
       try {
      const result = await axios.post(serverUrl + '/api/order/userorder',{},{withCredentials:true})
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
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.log(error)
    }
    }

useEffect(()=>{
 loadOrderData()
},[])


 return (
    <div className='w-full min-h-screen bg-[#fffaf5] px-5 md:px-10 py-10'>

        <div className='mt-[70px] text-center mb-10'>
            <Title text1={'MY'} text2={'ORDER'} />
        </div>


        <div className='flex flex-col gap-6'>

        {
            orderData.map((item,index)=>(

            <div 
            key={index}
            className='bg-white rounded-3xl shadow-md border border-orange-100 p-5 md:p-6 flex flex-col md:flex-row gap-5 relative'
            >


                {/* Image */}

                <img 
                src={item.image1}
                alt=""
                className='w-[100px] h-[100px] md:w-[130px] md:h-[130px] object-cover rounded-2xl'
                />



                {/* Details */}

                <div className='flex flex-col gap-2 flex-1'>


                    <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>
                        {item.name}
                    </h2>



                    <div className='flex flex-wrap gap-4 text-gray-600 text-sm md:text-base'>


                        <p>
                        Price:
                        <span className='text-[#FF7A00] font-semibold ml-1'>
                        {currency} {item.price}
                        </span>
                        </p>



                        <p>
                        Quantity:
                        <span className='font-semibold ml-1'>
                        {item.quantity}
                        </span>
                        </p>



                        <p>
                        Weight:
                        <span className='font-semibold ml-1'>
                        {item.size}
                        </span>
                        </p>


                    </div>




                    <p className='text-gray-500 text-sm'>
                        Order Date:
                        <span className='ml-2 text-gray-700 font-medium'>
                        {new Date(item.date).toDateString()}
                        </span>
                    </p>



                    <p className='text-gray-500 text-sm'>
                        Payment:
                        <span className='ml-2 text-gray-700 font-medium'>
                        {item.paymentMethod}
                        </span>
                    </p>


                </div>





                {/* Status + Button */}

                <div className='flex md:flex-col justify-between md:justify-center gap-4 md:items-end'>


                    <div className='flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full'>

                        <span className='w-2 h-2 rounded-full bg-green-500'></span>

                        <p className='text-green-700 font-medium text-sm'>
                            {item.status}
                        </p>

                    </div>



                    <button

                    onClick={loadOrderData}

                    className='bg-[#FF7A00] hover:bg-orange-600 text-white px-5 py-2 rounded-xl transition font-medium'

                    >

                    Track Order

                    </button>


                </div>



            </div>

            ))
        }


        {
            orderData.length === 0 &&

            <div className='text-center text-gray-500 text-lg mt-10'>
                No orders found
            </div>

        }


        </div>


    </div>
)
}

export default Order
