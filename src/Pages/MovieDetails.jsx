import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { FaStar, FaHeart } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdSystemUpdateAlt } from "react-icons/md";
import Swal from 'sweetalert2';
import { AuthContext } from '../Porvider/AuthProvider';
import { Helmet } from 'react-helmet-async';


const MovieDetails = () => {
    const { user } = useContext(AuthContext);
    const movie = useLoaderData()
    const navigate = useNavigate()
    const { poster,title,genre,duration,year,_id,rating,summary,name,email} = movie


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

      const handleDelete = id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                // delete from the database
                fetch(`https://a-10-movielify-server.vercel.app/movie/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                           navigate("/")
                        }
                    })
            }
        });

      }

      const handleFavorite = favoriteMovie =>{

         favoriteMovie = {
            poster,
            title,
            genre,
            duration,
            year,
            rating,
            summary,
          };
           const userEmail = user.email
           const userName = user.displayName

          const favMovie = { poster,
            title,
            genre,
            duration,
            year,
            rating,
            summary,
            userEmail,
            userName,
        }
        
        fetch('https://a-10-movielify-server.vercel.app/favoritelist',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(favMovie)
        })
    
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Movie added to favorite successfully',
                    icon: 'success',
                });
                
            }
        })
        
    }




    return (
        <div className="mx-auto lg:py-[70px] bg-[#1b1d24] lg:px-10 text-white">
             <Helmet><title>Movielify | Movie Details</title></Helmet>
      <div className="lg:flex lg:flex-row items-center md:items-start gap-[60px]">
        {/* Poster */}
     
      <img
          src={poster}
          alt="Movie Poster"
          className="lg:w-[40%] h-auto rounded-md shadow-lg "
        />
       
      

        {/* Details */}
        <div className="flex-1">
        <div className="text-white p-6">
      {/* Title and Year */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          {title} <span className="text-gray-500 text-xl">({year})</span>
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 sm:gap-10 my-10">
        <button onClick={()=>handleFavorite(movie)}
        className="flex items-center gap-2 hover:text-[#ff4545] text-[#a4ba16]">
          <FaHeart className='text-5xl border-2 p-2 hover:border-[#ff4545] border-[#a4ba16] rounded-full' />
          <span className="font-semibold text-2xl">Add to Favorite</span>
        </button>
        <button onClick={()=>handleDelete(_id)} 
        className="flex items-center gap-2 hover:text-[#ff4545] text-[#a4ba16]">
        <IoTrashBin className='text-5xl border-2 p-2 hover:border-[#ff4545] border-[#a4ba16] rounded-full' />
          <span className="font-semibold text-2xl">Delete</span>
        </button>
      </div>

      {/* Ratings */}
      <div className="my-10 border-t border-b border-gray-700 py-2">
       <div className='lg:flex items-center gap-10'>
       <div className="lg:border-r">
          <div className=" mr-5">
           <div className='flex items-center gap-2'>
           <FaStar className="text-yellow-500 text-3xl" />
            <span className="text-lg font-bold">{rating}</span>
            <span className="text-gray-400">/10</span>
           </div>
          </div>
          <span className="text-blue-400 cursor-pointer">
            56 Reviews
          </span>
        </div>
        <div className="flex items-center justify-between">
                  <div className="flex gap-1 xl:gap-5">
                    {[...Array(10)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-8 w-8 ${
                          i < movie.rating ? "text-yellow-400" : "text-gray-300 "
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
      </div>
     <div className='flex flex-col gap-8'>
     <p className={` ${getGenreColor( genre )} text-white px-2 py-1 w-[90px] text-center rounded-md mb-3`}>{genre}</p>
        <h2 className=' text-[#a4ba16]'>Short Summary  : <br /> <span className='text-white'>{summary}</span></h2>
        <h2 className='text-[#a4ba16]'>Released Year : <span className='text-white'>{year}.</span></h2>
        <h2 className='text-[#a4ba16]'>Duration : <span className='text-white'>{duration}  Minutes.</span></h2>
       <div className='flex flex-col sm:flex-row gap-10'>
       <button className='btn text-white text-xl border-none hover:text-black hover:bg-[#ff4545] bg-[#ff4545]'> <FaRegCirclePlay /> Watch Trailer</button>
       <Link to={`/updatemovies/${_id}`}
        className='btn text-white  text-xl border-none hover:text-black hover:bg-[#a4ba16] bg-[#a4ba16]'> <MdSystemUpdateAlt /> Update Details</Link>
       
       </div>
      
     </div>
    </div>
        </div>
      </div>
    </div>
    );
};

export default MovieDetails;