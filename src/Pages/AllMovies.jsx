import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Movies from "../components/Movies";
import Loading from "./Loading";
import { AuthContext } from "../Porvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AllMovies = () => {
  const { user, loading } = useContext(AuthContext);

  const [showLoader, setShowLoader] = useState(true);
  const [sort, setSort] = useState('');

  const [search, setSearch] = useState('');
 

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://a-10-movielify-server.vercel.app/movie?search=${search}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
      setShowLoader(false)
  }, [search,sort]);

  const handleReset = () => {
    setSearch('')
    setSort('')
  }

  // if (loading) {
  //     return <Loading />;
  //   }
  if (showLoader) {
    return <Loading />;
  }

  return (
    <div className="py-10">
      <Helmet>
        <title>Movielify | All Movies</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center gap-10">
        <h2 className="text-4xl text-center font-semibold animate__fadeInLeft animate__animated">
          Explore Iconic Movies
        </h2>
       <div className="flex gap-5 justify-center items-center">
       <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search Movie By Name"
          className="input input-bordered input-error  w-[90%] sm:w-[500px] text-center bg-slate-100 animate__headShake animate__animated"
        />

        <div>
          <select
            name="category"
            id="category"
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            className="border border-[#ff4545] p-3 rounded-md"
          >
            <option value="">Sort Movies By</option>
            <option value="rating">Movie Rating</option>
            <option value="duration">Movie Duration</option>
          </select>
        </div>
        <button onClick={handleReset} className='btn bg-[#ebb475] text-white hover:bg-[#ebb475] hover:text-black'>Reset</button>
       </div>
      </div>
      {/* movie card section starts  */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto py-10">
        {movies.map((movie) => (
          <Movies key={movie._id} movie={movie}></Movies>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
