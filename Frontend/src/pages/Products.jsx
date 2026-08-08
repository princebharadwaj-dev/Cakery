import React from 'react'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Nav from '../components/Nav'

function Product() {
  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l bg-[#fff] flex items-center justify-start flex-col py-[20px]'>
        <Nav />

        <div className='w-[100%] min-h-[70px] flex items-center justify-center gap-[10px]  flex-col '>
            <LatestCollection/>
        </div>
        <div className='w-[100%] min-h-[70px] flex items-center justify-center gap-[10px]  flex-col '>
            <BestSeller/>
        </div>
      
    </div>
  )
}

export default Product
