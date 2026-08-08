import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { shopDataContext } from "../context/shopContext";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import CartTotal from "../components/CartTotal";

function Cart() {
  const { products, currency, cartItem, updateQuantity } =
    useContext(shopDataContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];

    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            weight: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className="w-full min-h-screen px-5 md:px-10 py-10 bg-[#fffaf5]">
      {/* Title */}
      <div className="mt-[80px] text-center mb-10">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="w-full flex flex-col gap-5">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id,
          );
          const selectedVariant = productData?.variants?.find(
  (variant) => variant.weight === item.weight
);

          return (
            <div
              key={index}
              className="w-full bg-white rounded-2xl shadow-md border border-orange-100 p-4 md:p-5 flex items-center justify-between"
            >
              {/* Product Info */}
              <div className="flex items-center gap-5">
                <img
                  className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] rounded-xl object-cover"
                  src={productData.image1}
                  alt=""
                />

                <div className="flex flex-col gap-2">
                  <p className="text-xl md:text-2xl font-semibold text-gray-800">
                    {productData.name}
                  </p>

                  <div className="flex gap-5 items-center">
                    <p className="text-lg font-bold text-[#FF7A00]">
                      {currency} {selectedVariant?.price || 0}
                    </p>

                    <p className="px-3 py-1 rounded-lg bg-orange-50 text-[#FF7A00] font-medium border border-orange-200">
                      {item.weight}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity + Delete */}

              <div className="flex items-center gap-5">
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className="w-16 md:w-20 border border-orange-300 rounded-lg p-2 text-center font-semibold text-gray-700 focus:outline-none"
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.weight,
                          Number(e.target.value),
                        )
                  }
                />

                <RiDeleteBin6Line
                  className="text-red-500 hover:text-red-700 cursor-pointer text-2xl"
                  onClick={() => updateQuantity(item._id, item.weight, 0)}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Total Section */}

      <div className="flex justify-end mt-14">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
        </div>
      </div>
    </div>
  );
}

export default Cart;
