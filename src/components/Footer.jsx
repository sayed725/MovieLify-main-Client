import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTumblr, FaLinkedin, FaPinterest, FaVimeo } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#1b1d24] text-gray-300 py-10 rounded-md">
      <div className="container mx-auto px-6 gap-5 md:flex md:justify-between">
        {/* About Section */}
        <div className="mb-6 md:w-1/4">
          <h3 className="text-red-600 text-lg font-bold mb-4">Movelify</h3>
          <p className="text-sm">
          A user-friendly Movie Portal designed to simplify browsing, viewing, adding, and deleting movies while managing user favorites. Featuring a dynamic interface and seamless functionality, it enhances the movie exploration experience.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-2">
              <FaPhone className="text-red-600" />
              <span>1-677-124-44227</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-red-600" />
              <span>Movielify, Gulshan 2/10, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-red-600" />
              <span>ssayed725332@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Latest Posts */}
        <div className="mb-6 md:w-1/4">
          <h3 className="text-lg font-bold mb-4 text-red-600">Latest Posts</h3>
          <ul className="text-sm space-y-4">
            <li>
              <h4 className="font-semibold">
              Top 10 Must-Watch Movies of 2024 You Can't Miss!
              </h4>
              <span className="text-gray-500">October 21, 2024</span>
            </li>
            <li>
              <h4 className="font-semibold">
              Breaking Down the Best Movie Releases This Month!
              </h4>
              <span className="text-gray-500">September 12, 2024</span>
            </li>
          </ul>
        </div>

        {/* Twitter Feed */}
        <div className="mb-6 md:w-1/4">
          <h3 className="text-lg font-bold mb-4 text-red-600">Twitter Feed</h3>
          <p className="text-sm">
            For all the latest news and updates,<br /> follow us on Twitter:{" "}
            <span className="text-red-600">@movielify</span>
          </p>
        </div>

        {/* Instagram Feed */}
        <div className="mb-6 md:w-1/4">
          <h3 className="text-lg font-bold mb-4 text-red-600">Instagram Feed</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-gray-600 h-16 w-full"><img className="h-[64px] w-[115px] object-cover rounded-md" src="/dhaka1-1024x682.jpg" alt="" /></div>
            <div className="bg-gray-600 h-16 w-full"><img className="h-[64px] w-[115px] object-cover rounded-md" src="/khulna.jpg" alt="" /></div>
            <div className="bg-gray-600 h-16 w-full"><img className="h-[64px] w-[115px] object-cover rounded-md" src="/sylet.webp" alt="" /></div>
            <div className="bg-gray-600 h-16 w-full"><img className="h-[64px] w-[115px] object-cover rounded-md" src="/barisal.jpg" alt="" /></div>
            <div className="bg-gray-600 h-16 w-full"><img className="h-[64px] w-[115px] object-cover rounded-md" src="/chittagong.webp" alt="" /></div>
            <div className="bg-gray-600 h-16 w-full"><img className="h-[64px] w-[115px] object-cover rounded-md" src="/rajshahi.jpg" alt="" /></div>
           
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-10 text-center">
        <div className="flex justify-center space-x-4">
        <a href="https://www.facebook.com/abu.ssayed.khan.2024" target="_blank"> <FaFacebook className="text-red-600 hover:text-red-400 cursor-pointer" /></a>
        <a href="https://www.facebook.com/abu.ssayed.khan.2024" target="_blank"> <FaInstagram className="text-red-600 hover:text-red-400 cursor-pointer" /></a>
        <a href="https://www.facebook.com/abu.ssayed.khan.2024" target="_blank"> <FaTumblr className="text-red-600 hover:text-red-400 cursor-pointer" /></a>
        <a href="https://www.facebook.com/abu.ssayed.khan.2024" target="_blank"> <FaLinkedin className="text-red-600 hover:text-red-400 cursor-pointer" /></a>
        <a href="https://www.facebook.com/abu.ssayed.khan.2024" target="_blank"> <FaPinterest className="text-red-600 hover:text-red-400 cursor-pointer" /></a>
        <a href="https://www.facebook.com/abu.ssayed.khan.2024" target="_blank"> <FaVimeo className="text-red-600 hover:text-red-400 cursor-pointer" /></a>
        </div>
        
        <p className="text-sm text-white mt-4 opacity-70">
          © 2018 Movielify, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;