import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Porvider/AuthProvider";
import Loading from "./Loading";

import Again from "../components/Again";
import FMovies from "./FMovie";
import Swal from "sweetalert2";

const MyFavourites = () => {
  const { user, loading } = useContext(AuthContext);

  const [movies, setMovies] = useState([]);

  const [showLoader, setShowLoader] = useState(true)



  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5001/favorite/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
         
       
        setMovies(data);
        setShowLoader(false)
       
      })
      .catch((error) => {
        console.error("Error fetching favorite movies:", error);
      });
  }, [user?.email]);

//   delete function 

  const handleDelete =(id)=>{
    console.log('delete', id)
    // delete from the database
    fetch(`http://localhost:5001/favorite/${id}`, {
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
                const remainingMovie = movies.filter(movie => movie._id !== id);
                setMovies(remainingMovie);

            }
        })
    }



  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Again />;
  }
  if (showLoader) {
    return <Loading />;
  }

  if (movies.length == 0) {
    return (
      <div className="py-[100px]">
        <h2 className="text-4xl text-center font-bold">
          Please Add Some Favorite Movie
        </h2>
      </div>
    );
  }

  return (
    <div className="my-10">
      <div className="">
        <h2 className="text-4xl text-center font-semibold">
          Your Favorite Movies
        </h2>
      </div>
      {/* movie card section starts  */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 mt-10">
        {movies.map((movie, i) => (
          <FMovies key={i} movie={movie} handleDelete={handleDelete} ></FMovies>
        ))}
      </div>
    </div>
  );
};

export default MyFavourites;
