import { FaStar } from "react-icons/fa";
import birthdayCake from "../assets/birthday cake.jpg";
import cookies from "../assets/cookies.jpg";
import pancake from "../assets/creamy pancake.png";
import donut from "../assets/donut.jpg";
import muffins from "../assets/muffins.jpg";
import pancake2 from "../assets/pancake.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Birthday Cake",
      image: birthdayCake,
      price: "$18.99",
    },
    {
      id: 2,
      name: "Cookies",
      image: cookies,
      price: "$8.99",
    },
    {
      id: 3,
      name: "Creamy Pancake",
      image: pancake,
      price: "$12.99",
    },
    {
      id: 4,
      name: "Donut",
      image: donut,
      price: "$6.99",
    },
    {
      id: 5,
      name: "Muffins",
      image: muffins,
      price: "$9.99",
    },
    {
      id: 6,
      name: "Pancake",
      image: pancake2,
      price: "$10.99",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="bg-[#FFF4E8] text-[#FF7A00] px-5 py-2 rounded-full font-semibold text-sm">
          OUR PRODUCTS
        </span>

        <h2 className="text-5xl font-bold text-gray-900 mt-5">
          Fresh From Our Bakery
        </h2>

        <p className="text-gray-500 mt-5 text-lg">
          Freshly baked every day with premium ingredients and lots of love.
        </p>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {products.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="bg-[#FFF4E8] h-60 flex justify-center items-center overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex text-[#FFB703] gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {item.name}
              </h3>

              <div className="flex justify-between items-center mt-5">
                <span className="text-2xl font-bold text-[#FF7A00]">
                  {item.price}
                </span>

                <button className="bg-[#FF7A00] text-white px-5 py-2 rounded-full hover:bg-[#e86f00] transition">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;