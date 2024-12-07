import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Porvider/AuthProvider';
import Loading from './Loading';
import Movies from '../components/Movies';
import Again from '../components/Again';

const MyFavourites = () => {
    const { user, loading }= useContext(AuthContext)

    const data = useLoaderData()

    // const [movies, setMovies] = useState([])

   
    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Again></Again>
    }
  
    const filterData = data.filter(favorite => favorite.userEmail == user.email)

    const favoriteMovies = filterData.map((item) => item.favoriteMovie);
    
   

    
    return (
        <div className=''>
           <div className=''>    
           <h2 className='text-4xl text-center font-semibold text-white'>Your Favorite Movies</h2>
           </div>
           {/* movie card section starts  */}

           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 mt-10'>
            {
                favoriteMovies.
                map((movie,i)=><Movies key={i} movie={movie}></Movies>)
            }
           </div>
        </div>
    );
};

export default MyFavourites;