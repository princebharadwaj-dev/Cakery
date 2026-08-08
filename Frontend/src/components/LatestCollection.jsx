import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { shopDataContext } from "../context/shopContext";
import Card from "./Card";

function LatestCollection() {
  const { products } = useContext(shopDataContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 8));
  }, [products]);

  return (
    <section className="w-full bg-white py-20 px-6">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <Title text1="Fresh" text2="From Our Bakery" />

        <p className="mt-5 text-gray-500 text-lg leading-8">
          Every cake is freshly baked with premium ingredients, rich flavors,
          and handcrafted with love. Discover our newest collection of cakes,
          pastries, cookies, and more.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {latestProducts.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image1}
            variants={item.variants}
          />
        ))}
      </div>

      {/* Empty State */}
      {latestProducts.length === 0 && (
        <div className="text-center text-gray-500 text-lg mt-16">
          No bakery products available.
        </div>
      )}
    </section>
  );
}

export default LatestCollection;