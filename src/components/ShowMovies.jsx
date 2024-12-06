import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Movies from './Movies';


const ShowMovies = () => {
   
    const allData = useLoaderData()
   

    return (
        <div className=''>
           <div className=''>    
           <h2 className='text-4xl text-center font-semibold text-white'>Explore Iconic Movies</h2>
           </div>
           {/* movie card section starts  */}

           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 mt-10'>
            {
                allData.map(movie=><Movies key={movie._id} movie={movie}></Movies>)
            }
           </div>
         <div className='mx-auto text-center'>
         <Link to='/allmovies' className="btn rounded-md border-none  text-white  bg-[#ff4545] hover:text-black hover:bg-[#ff4545]">See all movies</Link>
         </div>
        </div>
    );
};

export default ShowMovies;