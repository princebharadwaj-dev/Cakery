import React from "react";
import { FaBirthdayCake, FaHeart, FaLeaf, FaAward } from "react-icons/fa";
import Nav from "../components/Nav";

const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <Nav />

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About <span className="text-orange-500">CakeRy</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Freshly baked with love, crafted with premium ingredients, and
            delivered with happiness. Every cake tells a story, and we're here
            to make your celebrations unforgettable.
          </p>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900"
              alt="Bakery"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Baking Happiness Since Day One
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              At <span className="font-semibold text-orange-500">CakeRy</span>,
              we believe every celebration deserves something special. Our
              expert bakers prepare every cake using fresh ingredients, premium
              cream, and authentic flavors to ensure every bite is delicious.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              Whether it's birthdays, anniversaries, weddings, or any special
              occasion, our handcrafted cakes are designed to create sweet
              memories. We also offer eggless cakes and customized designs to
              match your unique celebrations.
            </p>

            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-lg transition duration-300">
              Explore Our Cakes
            </button>
          </div>

        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <div className="text-center p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <FaBirthdayCake className="text-orange-500 text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Freshly Baked</h3>
            <p className="text-gray-600">
              Every order is freshly prepared using premium quality ingredients.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <FaHeart className="text-red-500 text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Made With Love</h3>
            <p className="text-gray-600">
              Every cake is handcrafted with passion and attention to detail.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <FaLeaf className="text-green-500 text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Premium Ingredients</h3>
            <p className="text-gray-600">
              We use fresh dairy products, rich chocolate, and natural flavors.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <FaAward className="text-yellow-500 text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">
              Customer satisfaction is our priority with every single order.
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-orange-50 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Why Choose CakeRy?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4 text-gray-700">
                <li>✅ Freshly baked on every order</li>
                <li>✅ 100% Premium Ingredients</li>
                <li>✅ Eggless & Customized Cakes</li>
                <li>✅ Affordable Pricing</li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4 text-gray-700">
                <li>✅ Fast & Secure Delivery</li>
                <li>✅ Beautiful Cake Designs</li>
                <li>✅ Perfect for Every Occasion</li>
                <li>✅ Trusted by Hundreds of Happy Customers</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;