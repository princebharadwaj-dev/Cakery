import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { IoSearchSharp, IoSearchCircleOutline } from "react-icons/io5";
import { IoMdCart, IoMdHome } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { BsCollection } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";

import { authDataContext } from "../context/authDataContext";
import { UserDataContext } from "../context/userContext";
import { shopDataContext } from "../context/shopContext";

const Nav = () => {
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const { serverUrl } = useContext(authDataContext);
  const { userData } = useContext(UserDataContext);
  const { getCartCount } = useContext(shopDataContext);

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(result.data);

      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
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

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-[17px]">
          <li
            className="cursor-pointer hover:text-[#FF7A00]"
            onClick={() => navigate("/")}
          >
            Home
          </li>

          <li
            className="cursor-pointer hover:text-[#FF7A00]"
            onClick={() => navigate("/about")}
          >
            About
          </li>

          <li
            className="cursor-pointer hover:text-[#FF7A00]"
            onClick={() => navigate("/product")}
          >
            Products
          </li>

          <li
            className="cursor-pointer hover:text-[#FF7A00]"
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-5 relative">
          {/* SEARCH */}
          {showSearch ? (
            <IoSearchCircleOutline
              size={26}
              className="cursor-pointer"
              onClick={() => setShowSearch(false)}
            />
          ) : (
            <IoSearchSharp
              size={24}
              className="cursor-pointer"
              onClick={() => setShowSearch(true)}
            />
          )}

          {/* USER */}
          {!userData ? (
            <FaCircleUser
              size={28}
              className="cursor-pointer"
              onClick={() => setShowProfile((prev) => !prev)}
            />
          ) : (
            <div
              onClick={() => setShowProfile((prev) => !prev)}
              className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center cursor-pointer font-semibold"
            >
              {userData?.name?.charAt(0).toUpperCase()}
            </div>
          )}

          {/* CART */}
          <button
          onClick={() => navigate("/cart")}
          className="relative text-black flex flex-col items-center text-xs"
        >
          <div className="relative">
            <IoMdCart className="text-3xl cursor-pointer" />

            <span
              className="
absolute
-top-2
-right-2
bg-[#FF7A00]
text-black
w-5
h-5
rounded-full
text-xs
flex
items-center
justify-center
"
            >
              {getCartCount()}
            </span>
          </div>
        </button>

          {/* PROFILE DROPDOWN */}
          {showProfile && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg w-40 py-2 border z-50">
              {!userData ? (
                <>
                  <button
                    onClick={() => navigate("/login")}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Login
                  </button>

                  <button
                    onClick={() => navigate("/signup")}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Signup
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* SEARCH BAR */}
      {showSearch && (
        <div className="fixed top-[70px] left-0 w-full bg-white border-b py-3 flex justify-center z-40">
          <input
            type="text"
            placeholder="Search products..."
            className="w-[90%] md:w-[50%] h-[45px] border rounded-md px-4 outline-none focus:border-[#FF7A00]"
          />
        </div>
      )}

      {/* MOBILE BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 w-full h-[70px] bg-[#191818] flex justify-around items-center md:hidden z-50">
        <button
          onClick={() => navigate("/")}
          className="text-white flex flex-col items-center text-xs"
        >
          <IoMdHome size={24} />
          Home
        </button>

        <button
          onClick={() => navigate("/collection")}
          className="text-white flex flex-col items-center text-xs"
        >
          <BsCollection size={24} />
          Products
        </button>

        <button
          onClick={() => navigate("/contact")}
          className="text-white flex flex-col items-center text-xs"
        >
          <MdContacts size={24} />
          Contact
        </button>

        <button
          onClick={() => navigate("/cart")}
          className="relative text-white flex flex-col items-center text-xs"
        >
          <div className="relative">
            <IoMdCart className="text-3xl cursor-pointer" />

            <span
              className="
absolute
-top-2
-right-2
bg-[#FF7A00]
text-white
w-5
h-5
rounded-full
text-xs
flex
items-center
justify-center
"
            >
              {getCartCount()}
            </span>
          </div>
        </button>
      </div>

      {/* TOP NAVBAR SPACE */}
      <div className="h-[70px]"></div>

      {/* MOBILE NAVBAR SPACE */}
      <div className="md:hidden h-[70px]"></div>
    </>
  );
};

export default Nav;
