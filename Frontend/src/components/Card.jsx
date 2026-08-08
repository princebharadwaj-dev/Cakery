import React, { useContext } from "react";
import { shopDataContext } from "../context/shopContext";
import { useNavigate } from "react-router-dom";
import { FaStar, FaCartPlus } from "react-icons/fa";

function Card({ name, image, id, variants }) {
  const { currency,addtoCart } = useContext(shopDataContext);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/productdetail/${id}`)}
      className="group bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Product Image */}
      <div className="bg-[#FFF4E8] h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Rating */}
        <div className="flex items-center gap-1 text-[#FFB703] mb-3">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} size={14} />
          ))}
          <span className="text-gray-500 text-sm ml-2">(5.0)</span>
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
          {name}
        </h3>

    

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-bold text-[#FF7A00]">
            {currency}
            {variants && variants.length > 0 ? variants[0].price : "N/A"}
          </span>

        </div>
      </div>
    </div>
  );
}

export default Card;