import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-blue-950 py-6 px-6 text-white">
      <div className= "max-w-6xl mx-auto">
        <div className="flex items-center flex-col mb-6">
        <h1 className="font-bold mb-6 text-xl sm:text-3xl lg:5xl">Subscribe to our news letter</h1>
        <p className="text-sm max-w-[600px] text-gray-300">
          Join us to stay ahead in the tech realm! Gain exclusive access to our
          latest tech insights and stay updated on the newest scholarships,
          empowering you to maximize your income potential.
        </p>
        </div>
        <div className="flex items-center justify-center mb-6">
          <input type="text" placeholder="Enter Email Address" className=" px-6 py-1 mr-4 rounded text-center" />
          <button className="bg-orange-500 py-1 px-6 rounded">Subscribe</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div>
            <h2 className="text-gray-300 font-semibold text-sm py-3">Contact Us</h2>
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-sm text-gray-400">LiveChart</p>
          </div>
          <div>
            <h2 className="text-gray-300 font-semibold text-sm py-3">About Us</h2>
            <p className="text-sm text-gray-400">Information</p>
          </div>
          <div>
            <h2 className="text-gray-300 font-semibold text-sm py-3">Services</h2>
            <p className="text-sm text-gray-400">How to get scholarships</p>
          </div>
          <div>
            <h2 className="text-gray-300 font-semibold text-sm py-3">FAQ</h2>
            <p className="text-sm text-gray-400">Discover</p>
            <p className="text-sm text-gray-400">More</p>
          </div>
          <div>
            <h2 className="text-gray-300 font-semibold text-sm py-3">Follow us</h2>
            <div className="flex space-x-4">
            <FaFacebook size={20}/>
            <FaInstagram size={20}/>
            <FaXTwitter size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
