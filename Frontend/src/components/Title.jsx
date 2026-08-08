import React from "react";

function Title({ text1, text2 }) {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      {/* Small Badge */}
      <span className="bg-[#FFF4E8] text-[#FF7A00] px-5 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
        Our Bakery
      </span>

      {/* Main Heading */}
      <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 text-center">
        {text1}{" "}
        <span className="text-[#FF7A00]">{text2}</span>
      </h2>

      {/* Underline */}
      <div className="w-24 h-1 bg-[#FF7A00] rounded-full mt-4"></div>
    </div>
  );
}

export default Title;