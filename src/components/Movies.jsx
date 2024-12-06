import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai"; 
import { FaRegCirclePlay } from "react-icons/fa6";

const Movies = ({movie}) => {
  
    const { poster,
        title,
        genre,
        duration,
        year,
        _id,
        rating,
        summary,
        name,
        email,} = movie


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
    <div className="bg-[#1b1d24] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="">
            <div
              key={movie._id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              {/* Movie Image */}
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-[450px] group-hover:scale-110 filter brightness-90  transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Link
                  to={`/movie/${movie._id}`}
                  className="px-6 py-2 bg-[#ff4545] text-white rounded-full text-sm font-medium hover:bg-red-600 transition-colors"
                >
                  See Details
                </Link>
              </div>

              {/* bg-[#a4ba16] */}
              {/* bg-[#fa5a9a] */}
              {/* bg-[#1691ba] */}
              {/* bg-[#ed591a] */}
              {/* bg-[#f5b507] */}
              {/* bg-[#1b1d24] */}
              {/* bg-[#a35a00] */}

              {/* Movie Info */}
              <div className="absolute bottom-4 left-4 text-[#a4ba16] bg-black bg-opacity-50 p-2 rounded-md">
                <p className={` ${getGenreColor( genre )} text-white px-2 py-1 w-[90px] text-center rounded-md mb-3`}>{genre}</p>
                <h3 className="text-xl font-bold mb-2">{movie.title}  ({year})</h3>
                
                <div className="flex gap-10">
                <p className="flex items-center text-yellow-400 font-bold">
                  <AiFillStar className="mr-1" />
                  {movie.rating} / 10
                </p>
                <p className="flex gap-2 justify-center items-center text-yellow-400"><FaRegCirclePlay className="text-yellow-400"/> {duration} Minutes</p>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Movies;
