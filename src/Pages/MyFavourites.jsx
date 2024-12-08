import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Porvider/AuthProvider";
import Loading from "./Loading";
import Movies from "../components/Movies";
import Again from "../components/Again";

const MyFavourites = () => {
  const { user, loading } = useContext(AuthContext);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5001/favorite?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        const favoriteMovies = data.map((item) => item.favoriteMovie);

        setMovies(favoriteMovies);
      })
      .catch((error) => {
        console.error("Error fetching favorite movies:", error);
      });
  }, [user?.email]);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Again />;
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
    <div className="">
      <div className="">
        <h2 className="text-4xl text-center font-semibold text-white">
          Your Favorite Movies
        </h2>
      </div>
      {/* movie card section starts  */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 mt-10">
        {movies.map((movie, i) => (
          <Movies key={i} movie={movie}></Movies>
        ))}
      </div>
    </div>
  );
};

export default MyFavourites;
