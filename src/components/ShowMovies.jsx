import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Movies from './Movies';
import Loading from '../Pages/Loading';
import 'animate.css';


const ShowMovies = () => {
   
    const allData = useLoaderData()
    const [showLoader, setShowLoader] = useState(true)
    const [movies , setMovies] = useState(allData)
    useEffect(()=>{
        const timer = setTimeout(() => {
          setShowLoader(false)
        }, 300);
        return ()=> clearTimeout(timer)
      },[])

     if (showLoader) {
        return <Loading />;
      }
   

    return (
        <div className=''>
           <div className=''>    
           <h2 className='text-4xl text-center font-semibold text-gray-900 dark:text-white animate__fadeInLeft animate__animated'>Explore Iconic Movies</h2>
           </div>
           {/* movie card section starts  */}

           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 mt-10'>
            {
                movies.map(movie=><Movies key={movie._id} movie={movie}></Movies>)
            }
           </div>
         <div className='mx-auto text-center'>
         <Link to='/allmovies' className="btn rounded-md border-none  text-white  bg-[#ff4545] hover:text-black hover:bg-[#ff4545]">See all movies</Link>
         </div>
        </div>
    );
};

export default ShowMovies;