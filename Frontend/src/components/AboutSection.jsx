import React from 'react'
import cupCake from '../assets/cupcake.jpg'

const AboutSection = () => {
  return (
  <div className="w-full bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

    {/* Left */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <div className="relative">

        {/* Background Card */}
        <div className="absolute -top-5 -left-5 w-full h-full bg-[#FFF4E8] rounded-3xl"></div>

        <img
          src={cupCake}
          alt=""
          className="relative rounded-3xl shadow-xl hover:scale-105 transition duration-300"
        />

      </div>
    </div>

    {/* Right */}
    <div className="w-full lg:w-1/2">

      <span className="inline-block bg-[#FFF4E8] text-[#FF7A00] px-5 py-2 rounded-full font-semibold text-sm">
        ABOUT US
      </span>

      <h1 className="text-5xl font-bold text-gray-900 mt-6 leading-tight">
        About <span className="text-[#FF7A00]">Cakery Bakery</span>
      </h1>

      <p className="text-gray-500 text-lg leading-8 mt-6">
        We bake fresh cakes, cookies, breads, and sandwiches every day using
        high-quality ingredients. Our mission is to make every celebration
        sweeter with delicious flavors and beautiful creations.
      </p>

      <button className="mt-8 px-8 py-4 rounded-full bg-[#FF7A00] text-white font-semibold shadow-lg hover:bg-[#e86f00] transition">
        Read More
      </button>

    </div>

  </div>
</div>
  )
}

export default AboutSection
