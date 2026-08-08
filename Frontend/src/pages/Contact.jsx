import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import Nav from "../components/Nav";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
       <Nav />

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question, need a
            custom cake, or want to place an order, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-8 text-gray-800">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <FaMapMarkerAlt className="text-orange-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-600">
                    123 Bakery Street,
                    <br />
                    New Delhi, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <FaPhoneAlt className="text-orange-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <FaEnvelope className="text-orange-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">info@cakery.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <FaClock className="text-orange-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Opening Hours</h3>
                  <p className="text-gray-600">
                    Monday - Sunday
                    <br />
                    9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

        
          

        </div>

      </div>
    </section>
  );
};

export default Contact;