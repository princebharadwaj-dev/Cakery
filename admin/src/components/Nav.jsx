import React, { useContext, useState } from "react";


const Nav = () => {
 
        
    
  return (
    <>
      {/* TOP NAVBAR */}
      <div className="fixed top-0 left-0 w-full h-[70px] bg-white border-b-2 border-[#FF7A00] flex items-center justify-between px-5 z-50">
        
        {/* LOGO */}
        <div>
          <h2
            className="text-[30px] md:text-[42px] font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Cake<span className="text-[#FF7A00]">ry.</span>
          </h2>
        </div>
        </div>

       </>
  );
};

export default Nav;