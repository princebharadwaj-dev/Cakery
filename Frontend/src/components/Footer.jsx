import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white mt-20">

      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">
            <span className="text-[#FF7A00]">Cakery</span> Bakery
          </h2>

          <p className="text-gray-300 mt-5 leading-7">
            Freshly baked cakes, cookies, donuts, muffins and breads made with
            love. Bringing sweetness to every celebration.
          </p>

          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 rounded-full bg-[#FF7A00] flex items-center justify-center cursor-pointer hover:scale-110 transition">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#FF7A00] flex items-center justify-center cursor-pointer hover:scale-110 transition">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#FF7A00] flex items-center justify-center cursor-pointer hover:scale-110 transition">
              <FaTwitter />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#FF7A00] flex items-center justify-center cursor-pointer hover:scale-110 transition">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-[#FF7A00] cursor-pointer transition">Home</li>
            <li className="hover:text-[#FF7A00] cursor-pointer transition">About</li>
            <li className="hover:text-[#FF7A00] cursor-pointer transition">Products</li>
            <li className="hover:text-[#FF7A00] cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Products</h3>

          <ul className="space-y-3 text-gray-300">
            <li>Cakes</li>
            <li>Cookies</li>
            <li>Donuts</li>
            <li>Muffins</li>
            <li>Breads</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact Us</h3>

          <div className="space-y-5 text-gray-300">

            <div className="flex items-center gap-3">
              <MdLocationOn className="text-[#FF7A00] text-xl" />
              <span>New Delhi, India</span>
            </div>

            <div className="flex items-center gap-3">
              <MdPhone className="text-[#FF7A00] text-xl" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail className="text-[#FF7A00] text-xl" />
              <span>info@cakerybakery.com</span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

          <p>
            © 2026 <span className="text-[#FF7A00] font-semibold">Cakery Bakery</span>. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <p className="hover:text-[#FF7A00] cursor-pointer transition">
              Privacy Policy
            </p>

            <p className="hover:text-[#FF7A00] cursor-pointer transition">
              Terms & Conditions
            </p>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;