import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/shopContext'
import Card from './Card'

function BestSeller() {
    let { products } = useContext(shopDataContext)
    let [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        let filterProduct = products.filter((item) => item.bestseller)
        setBestSeller(filterProduct.slice(0, 4));
    }, [products])

    return (
        <div className="my-16 px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-10">
                <Title text1={"BEST"} text2={"SELLER"} /> 
                <p className="w-full max-w-xl mx-auto text-sm sm:text-base text-gray-500 mt-2">
                    Tried, Tested, Loved – Discover Our All-Time Best Sellers.
                </p>
            </div>

            {/* Cards Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
                {
                   bestSeller.map((item, index) => (
                      <Card 
                          key={item._id || index} 
                          name={item.name} 
                          id={item._id} 
                          variants={item.variants} 
                          image={item.image1}
                      />
                   ))
                }
            </div>
        </div>
    )
}

export default BestSeller
