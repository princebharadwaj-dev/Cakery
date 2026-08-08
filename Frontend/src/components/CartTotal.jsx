import React, { useContext } from 'react'
import { shopDataContext } from '../context/shopContext'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function CartTotal() {

    const { currency, delivery_fee, getCartAmount, cartItem} = useContext(shopDataContext)
    

    const navigate = useNavigate()


    const handleCheckout = () => {

        const total = getCartAmount()

        if(total === 0){
            toast.error("Your cart is empty!")
            return
        }

        navigate("/placeorder")
    }


    return (
        <div className='w-full lg:ml-[30px]'>

            <div className='mb-5'>
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>


            <div className='bg-white rounded-2xl shadow-lg border border-orange-200 p-6'>

                <div className='flex flex-col gap-4 text-[16px]'>


                    <div className='flex justify-between items-center text-gray-700'>
                        <p className='font-medium'>Subtotal</p>

                        <p className='font-semibold text-gray-900'>
                            {currency} {getCartAmount()}.00
                        </p>
                    </div>


                    <div className='border-t border-gray-200'></div>


                    <div className='flex justify-between items-center text-gray-700'>

                        <p className='font-medium'>
                            Delivery Charges
                        </p>

                        <p className='font-semibold text-green-600'>
                            {currency} {delivery_fee}
                        </p>

                    </div>


                    <div className='border-t border-gray-200'></div>


                    <div className='flex justify-between items-center bg-orange-50 rounded-xl p-4'>

                        <b className='text-lg text-gray-800'>
                            Total
                        </b>


                        <b className='text-xl text-[#FF7A00]'>

                            {currency} {
                                getCartAmount() === 0 
                                ? 0 
                                : getCartAmount() + delivery_fee
                            }.00

                        </b>

                    </div>



                    <button

                    onClick={handleCheckout}

                    className='mt-4 bg-[#FF7A00] hover:bg-orange-600 transition-all duration-300 text-white py-3 rounded-xl font-semibold text-lg'

                    >

                    Proceed To Checkout

                    </button>


                </div>

            </div>

        </div>
    )
}

export default CartTotal