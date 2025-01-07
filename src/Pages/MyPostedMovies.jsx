import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar  } from "react-icons/ai";

import axios from 'axios'


import { Helmet } from 'react-helmet-async'
import { AuthContext } from '../Porvider/AuthProvider'
import Swal from 'sweetalert2';
const MyPostedMovies = () => {
  
  const { user } = useContext(AuthContext)
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetchAllMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  const fetchAllMovies = async () => {
    const { data } = await axios.get(
      `http://localhost:5001/mymovies/${user?.email}`
    )
    setMovies(data)
  }

  // delete functionality
  const handleDelete = async id => {

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
            try {
                axios.delete(
                 `http://localhost:5001/movie/${id}`
               )
               .then(res=>{
                 // console.log(res.data)
                 if(res.data.deletedCount){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Movie has been deleted.",
                        icon: "success"
                      });
                   fetchAllMovies()
                 }
               })
               
             } catch (err) {
               // console.log(err)
               
             }
         
        }
      });


   
  }

  if (movies.length == 0) {
    return (
      <div className="py-[100px]">
        <h2 className="text-4xl text-center font-bold">
          Please Add Some Movie
        </h2>
      </div>
    );
  }

 

  
  return (
    <section className='lg:container px-4 mx-auto py-12'>
      {/* <Helmet> <title>Bite Bank | Manage Food </title></Helmet> */}
      <div className='flex items-center gap-x-3 flex-col sm:flex-row gap-5'>
        <h2 className='text-4xl font-semibold  '>My Posted Movies</h2>

        <span className='px-3 py-1 mt-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {movies.length} Movies
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Category</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Duration</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Rating
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Poster
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Edit
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                  {/* Generate dynamic tr */}
                  {movies.map(movie => (
                    <tr key={movie._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {movie.title}({movie.year})
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {movie.genre}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500   whitespace-nowrap'>
                        {movie.duration} Minutes
                      </td>
                      <td className='px-4 flex gap-1 py-4 text-sm text-gray-500   whitespace-nowrap'>
                        <p className='flex items-center mt-3'>{movie.rating} 
                            <AiFillStar className='text-yellow-500'></AiFillStar>
                            </p>
                      </td>
                     
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        <img src={movie.poster} className='h-10 w-10 rounded-full' alt="" />
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                          <Link
                            to={`/updatemovies/${movie._id}`}
                            className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                              />
                            </svg>
                          </Link>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                        <Link>
                        <button
                            onClick={() => handleDelete(movie._id)}
                            className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                              />
                            </svg>
                          </button>
                        </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyPostedMovies