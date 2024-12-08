import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";

import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaRegCirclePlay } from "react-icons/fa6";



const Trending = () => {
  const movies = [
    {
      title: "Gladiator",
      genre: "Action",
      rating: 7,
      image: "/t-1.webp",
    },
    {
      title: "Moana 2",
      genre: "Adventure",
      rating: 6,
      image: "/t-2.jpg",
    },
    {
      title: "Wicked",
      genre: "Romance",
      rating: 9,
      image: "/t-3.jpg",
    },
    {
      title: "Deadpool & Wolverine",
      genre: "Action",
      rating: 9,
      image: "/t-4.jpg",
    },
    {
      title: "Alien: Romulus",
      genre: "Sci-Fi",
      rating: 6,
      image: "/t-5.jpg",
    },
    {
      title: "Twisters",
      genre: "Triller",
      rating: 8,
      image: "/t-6.avif",
    },
    
  ];

  return (
    <div className="bg-[#ff4545] py-10 px-1 sm:px-0">
      <h2 className="text-white text-3xl text-center mb-6 font-bold animate__fadeInLeft animate__animated animate__delay-2s">Top Movies to Enjoy in Theatres</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[Autoplay]}
        className="container mx-auto"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="h-64 w-full object-cover filter brightness-90 hover:brightness-100"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition duration-1000">
                  <button className="text-white bg-red-500 px-4 py-2 rounded-md m-2 w-[200px] flex items-center gap-2 justify-center">
                  <FaRegCirclePlay className="text-2xl" /> View Trailer
                  </button>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
               <div>
               <h3 className="font-bold text-lg">{movie.title}</h3>
                <p className="text-gray-600">{movie.genre}</p>
                <div className="flex items-center justify-between gap-3 mt-2">
                    <p className="text-red-500">{movie.rating}</p>
                  <div className="flex">
                    {[...Array(10)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          i < movie.rating ? "text-red-500" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.516 1.832 8.178L12 18.725l-7.768 4.275L6.064 14.82 0 9.304l8.332-1.151L12 .587z" />
                      </svg>
                    ))}
                  </div>
               </div>
                </div>
                  <FaRegCirclePlay className="text-red-500 text-5xl" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trending;
