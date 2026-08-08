import React from "react";
import pastery from '../assets/pastery.png'
import cookie from '../assets/cookie.png'
import bread from '../assets/bread.png'
import sandwich from '../assets/sandwich.png'

const Welcome = () => {
  return (
 <div className="w-full bg-white py-20 px-6">

  {/* Heading */}
  <div className="text-center max-w-2xl mx-auto">

    <span className="inline-block bg-[#FFF4E8] text-[#E67E22] px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
      OUR BAKERY
    </span>

    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-5">
      Welcome To Our Store
    </h1>

    <p className="text-gray-500 text-lg mt-5 leading-8">
      Freshly baked cakes, delicious cookies, soft breads, and tasty
      sandwiches made with premium ingredients to make every bite memorable.
    </p>

  </div>

  {/* Cards */}
  <div className="flex justify-center items-center gap-8 mt-16 flex-wrap">

    {/* Cake */}
    <div className="w-[220px] h-[250px] bg-white rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center">

      <div className="w-28 h-28 bg-[#FFF4E8] rounded-full flex items-center justify-center shadow-inner">
        <img src={pastery} alt="" className="w-20 hover:scale-110 transition duration-300" />
      </div>

      <h4 className="mt-6 text-xl font-semibold text-gray-800">
        Cake
      </h4>

    </div>

    {/* Sandwich */}
    <div className="w-[220px] h-[250px] bg-white rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center">

      <div className="w-28 h-28 bg-[#E8F7FF] rounded-full flex items-center justify-center shadow-inner">
        <img src={sandwich} alt="" className="w-20 hover:scale-110 transition duration-300" />
      </div>

      <h4 className="mt-6 text-xl font-semibold text-gray-800">
        Sandwich
      </h4>

    </div>

    {/* Cookie */}
    <div className="w-[220px] h-[250px] bg-white rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center">

      <div className="w-28 h-28 bg-[#FFF8D9] rounded-full flex items-center justify-center shadow-inner">
        <img src={cookie} alt="" className="w-20 hover:scale-110 transition duration-300" />
      </div>

      <h4 className="mt-6 text-xl font-semibold text-gray-800">
        Cookie
      </h4>

    </div>

    {/* Bread */}
    <div className="w-[220px] h-[250px] bg-white rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center">

      <div className="w-28 h-28 bg-[#F3F0FF] rounded-full flex items-center justify-center shadow-inner">
        <img src={bread} alt="" className="w-20 hover:scale-110 transition duration-300" />
      </div>

      <h4 className="mt-6 text-xl font-semibold text-gray-800">
        Bread
      </h4>

    </div>

  </div>

</div>
  )
}

export default Welcome;