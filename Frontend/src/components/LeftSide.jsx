import React from "react";
import cake from "../assets/cake.png";

const LeftSide = () => {
  return (
    // 1. h-[calc(100vh-70px)] lagaya taaki section navbar ke niche ki puri screen cover kare (70px navbar ki height ke liye hai, ise aap change kar sakte hain)
    // 2. md:min-h-screen ko desktops ke liye rakha aur justify-evenly se space barabar baant diya
    <section className="w-full h-[calc(100vh-70px)] md:min-h-screen flex flex-col-reverse md:flex-row items-center justify-evenly md:justify-between bg-gradient-to-r from-cyan-50 via-white to-white px-5 md:px-20 py-6 md:py-10">

      {/* LEFT CONTENT */}
      {/* 3. mt-2 md:mt-0 se elements aapas me bohot zyada chipkenge nahi aur balanced rahenge */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mt-2 md:mt-0">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
          The Perfect <br />
          Baked Cake <br />
          Everyday!
        </h1>

        {/* Paragraph */}
        <p className="mt-3 md:mt-5 text-gray-500 text-sm sm:text-base md:text-lg leading-6 max-w-xl mx-auto md:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis delectus recusandae qui eaque odio sapiente,
          est illum facilis voluptas voluptatibus ullam quas rerum.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-5 md:mt-8 justify-center md:justify-start">
          <button className="bg-[#FF7A00] text-white px-6 sm:px-8 py-2.5 rounded-full text-sm sm:text-lg font-medium hover:bg-orange-600 transition shadow-md">
            Read More
          </button>
          <button className="border-2 border-[#FF7A00] text-[#FF7A00] px-6 sm:px-8 py-2.5 rounded-full text-sm sm:text-lg font-medium hover:bg-[#FF7A00] hover:text-white transition">
            Order Now
          </button>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      {/* 4. w-[220px] kiya taaki image na zyada badi ho na choti aur gaps sahi dikhein */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src={cake}
          alt="Cake"
          className="w-[220px] sm:w-[350px] md:w-[500px] lg:w-[600px] object-contain animate-bounce"
        />
      </div>

    </section>
  );
};

export default LeftSide; 