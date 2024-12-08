import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Movies from '../components/Movies';
import Loading from './Loading';
import { AuthContext } from '../Porvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const AllMovies = () => {
    const { user, loading }= useContext(AuthContext)

    const [showLoader, setShowLoader] = useState(true)

    
    const allData = useLoaderData()
    const [search, setSearch] = useState("")
    // console.log(search)


    useEffect(()=>{
      const timer = setTimeout(() => {
        setShowLoader(false)
      }, 300);
      return ()=> clearTimeout(timer)
    },[])

    const [movies , setMovies] = useState(allData)




    useEffect(()=>{
     
        fetch(`https://a-10-movielify-server.vercel.app/movie?searchParams=${search}`)
         .then((res)=> res.json())
         .then((data)=> setMovies(data))
        
    },[search])

    // if (loading) {
    //     return <Loading />;
    //   }
    if (showLoader) {
        return <Loading />;
      }

    return (
        <div className='py-10'>
             <Helmet><title>Movielify | All Movies</title></Helmet>
           <div className='flex flex-col justify-center items-center gap-10'>    
           <h2 className='text-4xl text-center font-semibold animate__fadeInLeft animate__animated'>Explore Iconic Movies</h2>
           <input
                type="text"
                onChange={(e)=>setSearch(e.target.value)}
                placeholder='Search Movie By Name'
                className="input input-bordered input-error  w-[90%] sm:w-[500px] text-center bg-slate-100 animate__headShake animate__animated"
              />
           </div>
           {/* movie card section starts  */}

           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 mt-10'>
            {
                movies.map(movie=><Movies key={movie._id} movie={movie}></Movies>)
            }
           </div>
        </div>
    );
};

export default AllMovies;