import React from "react";

import { AiFillStar } from "react-icons/ai";
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

const FMovies = ({ movie, handleDelete }) => {
  const {
    poster,
    title,
    genre,
    duration,
    year,
    _id,
    rating,
    summary,
    name,
    email,
  } = movie;

  const getGenreColor = (genre) => {
    switch (genre.toLowerCase()) {
      case "action":
        return "bg-[#f5b507]";
      case "drama":
        return "bg-[#ed591a]";
      case "comedy":
        return "bg-[#a4ba16]";
      case "sci-fi":
        return "bg-[#1691ba]";
      case "horror":
        return "bg-red-600";
      case "romance":
        return "bg-[#fa5a9a]";
      case "triller":
        return "bg-[#a35a00]";
      default:
        return "bg-[#1691ba]";
    }
  };

  return (
    <div className=" text-white py-10">
      <div className="container mx-auto px-4">
        <div className="">
          <div
            key={movie._id}
            className="group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Movie Image */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-[450px] group-hover:scale-95 filter brightness-90  transition-transform duration-500"
            />
            {/* bg-[#a4ba16] */}
            {/* bg-[#fa5a9a] */}
            {/* bg-[#1691ba] */}
            {/* bg-[#ed591a] */}
            {/* bg-[#f5b507] */}
            {/* bg-[#1b1d24] */}
            {/* bg-[#a35a00] */}

            {/* Movie Info */}
           
              <div className="flex justify-between items-center">
              <div className="text-red-500 px-2 py-5 rounded-md">
                <p
                  className={` ${getGenreColor(
                    genre
                  )} text-white px-2 py-1 w-[90px] text-center rounded-md mb-3`}
                >
                  {genre}
                </p>
                <h3 className="text-xl font-bold mb-2">
                  {movie.title} ({year})
                </h3>

                
                  <p className="flex items-center text-red-500 font-bold">
                    Rating : {movie.rating}
                    <AiFillStar className="mr-1 text-yellow-400" />
                  </p>
                  <p className="flex gap-2 mt-2 items-center text-red-500">
                    Duration : 
                    <FaRegCirclePlay className="text-red-500" /> {duration}
                    Minutes
                  </p>
               
              </div>
              <button
                onClick={() => handleDelete(_id)}
                className="bg-[#ff4545] px-5 py-3 mb-2 text-white rounded-md hover:text-black flex gap-1 "
              >
                <MdDeleteForever  className="text-2xl" /> Delete
              </button>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FMovies;
