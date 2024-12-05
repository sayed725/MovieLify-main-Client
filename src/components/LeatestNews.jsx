import React from "react";
import { FaRegComment, FaRegEye } from "react-icons/fa";

function LeatestNews() {
 
  return (
    <div className="mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col gap-5 pb-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Latest News of HollyWood</h2>
        <p className="text-gray-600 text-sm text-center">Stay tuned for all the latest entertainment news and TV premieres</p>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Large Featured News */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
          <div className="relative h-full">
            <img
              src="/public/news-1.jpeg"
              alt='img'
              className="w-full object-cover h-[500px] filter brightness-75 hover:brightness-90 rounded-md"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white rounded-md">
              <h3 className="text-lg font-bold">9 Films Are Vying for Foreign Oscar Nomination</h3>
              <div className="flex items-center text-sm mt-2">
                <span>Dec 2, 2024</span>
                <div className="flex items-center ml-4">
                  <FaRegComment className="mr-1" /> 22
                </div>
                <div className="flex items-center ml-4">
                  <FaRegEye className="mr-1" /> 32
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smaller News Cards 1*/}
        
          {/* Large Featured News */}
        <div className="">
          <div className="relative">
            <img
              src="/news-2.webp"
              alt='img'
              className="w-full h-[215px] filter brightness-75 hover:brightness-90 rounded-md"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white rounded-md">
              <h3 className="text-lg font-bold">Titanic Named National Film Treasures</h3>
              <div className="flex items-center text-sm">
                <span>Dec 3, 2024</span>
                <div className="flex items-center ml-4">
                  <FaRegComment className="mr-1" /> 44
                </div>
                <div className="flex items-center ml-4">
                  <FaRegEye className="mr-1" /> 24
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* Smaller News Cards 2 */}
          <div className="">
          <div className="relative">
            <img
              src="/news-3.jpg"
              alt='img'
              className="w-full h-[215px] filter brightness-75 hover:brightness-90 rounded-md"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white rounded-md">
              <h3 className="text-lg font-bold">Reuniting at the Coachella Music Festival</h3>
              <div className="flex items-center text-sm mt-2">
                <span>Dec 4, 2024</span>
                <div className="flex items-center ml-4">
                  <FaRegComment className="mr-1" /> 52
                </div>
                <div className="flex items-center ml-4">
                  <FaRegEye className="mr-1" /> 34
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* Smaller News Cards 3 */}
          <div className="sm:col-span-2">
          <div className="relative">
            <img
              src="/news-4.jpg"
              alt='img'
              className="w-full h-[260px] filter brightness-75 hover:brightness-90 rounded-md"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white rounded-md">
              <h3 className="text-lg font-bold">Attending 'Star Wars' Screening in 'Star Trek' Costume</h3>
              <div className="flex items-center text-sm mt-2">
                <span>Dec 5, 2024</span>
                <div className="flex items-center ml-4">
                  <FaRegComment className="mr-1" /> 28
                </div>
                <div className="flex items-center ml-4">
                  <FaRegEye className="mr-1" /> 36
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default LeatestNews;
