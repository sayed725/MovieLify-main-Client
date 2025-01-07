import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Movies from './Movies';
import Loading from '../Pages/Loading';
import 'animate.css';


const ShowMovies = () => {
   
    
    const [showLoader, setShowLoader] = useState(true)
    const [movies , setMovies] = useState([])
    useEffect(()=>{
        
      fetch(
        `http://localhost:5001/sortedmovie`
      )
        .then((res) => res.json())
        .then((data) => setMovies(data));
        setShowLoader(false)
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

           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto py-10'>
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