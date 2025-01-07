import React, { useContext, useState } from "react";
import Swal from "sweetalert2";

import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../Porvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddMovie = () => {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [rating, setRating] = useState(0); // Stores the rating value

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const genres = ["Comedy", "Drama", "Horror", "Action", "Romance", "Thriller", "Sci-Fi"];

  // Generate years dynamically (e.g., from 1900 to the current year)
  const currentYear = new Date().getFullYear();
  const startYear = 1900; // Start from 1900
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i
  );

  const handleAddMovie = (e) => {
    e.preventDefault();

    const poster = e.target.poster.value;

    const posterRegex = new RegExp(
      "^(https?:\\/\\/)" + // Protocol
        "((([a-zA-Z0-9$_.+!*'(),-])+\\.)+[a-zA-Z]{2,})" + // Domain name
        "(\\/([a-zA-Z0-9$_.+!*'(),-]|%[0-9a-fA-F]{2})*)*$", // Path
      "i"
    );
    if (!posterRegex.test(poster)) {
      setError("Poster Must be a Valid Link");
      return;
    }

    const title = e.target.title.value;

    const titleRegex = /^.{2,}$/;

    if (!titleRegex.test(title)) {
      setError("Title have at least 2 characters");
      return;
    }

    const genre = e.target.genre.value;

    const duration = e.target.duration.value;

    if (!duration || duration <= 60) {
      setError("Duration must be greater than 60 minutes.");
      return;
    }
    const year = e.target.year.value;

    if (rating === 0) {
      setError("Please select a rating before adding the movie.");
      return;
    }

    const summary = e.target.summary.value;

    if (summary.length < 10) {
      setError("Summary must be at least 10 characters long."); // Validate on submit
      return;
    }

    const name = e.target.name.value;
    const email = e.target.email.value;

    // const rating = e.target.rating.value

    const newMovie = {
      poster,
      title,
      genre,
      duration,
      year,
      rating,
      summary,
      name,
      email,
    };
    // console.log(newMovie);

    // send data to the server
    fetch('https://a-10-movielify-server.vercel.app/movie',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newMovie)
    })

    .then(res => res.json())
    .then(data =>{
        // console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Movie added successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            e.target.reset();
        }
    })
  };

  return (
    <div className="lg:w-3/4 mx-auto">
         <Helmet><title>Movielify | Add Movies</title></Helmet>
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold animate__fadeInLeft animate__animated">Add New Movies</h1>
        <p className="py-6">
         Please Add Some New Movies With Specific Details
        </p>
      </div>
      <div className=" bg-slate-100 w-full shrink-0">
        <form onSubmit={handleAddMovie} className="card-body">
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Movie Poster</span>
              </label>
              <input
                type="text"
                name="poster"
                placeholder="Poster"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Movie Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form second row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Select Genre:</span>
              </label>
              <select name="genre" className="input input-bordered" required>
                <option value="">-- Select Genre --</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Duration (in minutes)</span>
              </label>
              <input
                type="number"
                name="duration"
                placeholder="Duration Time"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form third row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Select Release Year:</span>
              </label>
              <select name="year" className="input input-bordered" required>
                <option value="">-- Select Year --</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <div className="flex gap-5 input input-bordered items-center">
                <ReactStars
                  count={10}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
                <p className=" text-gray-600">
                  {rating} / 10{" "}
                  {/* Show numerical rating (converting percentage to 5-point scale) */}
                </p>
              </div>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Summary</span>
            </label>
            <textarea
              type="text"
              name="summary"
              placeholder="Please Write a Short Summary"
              className="rounded-md border-2 hover:border-slate-400 text-center py-5  px-10 mx-auto  w-full font-semibold"
              required
            />
          </div>
          {/* user email & name  */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={user?.displayName}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="text"
                name="email"
                value={user?.email}
                readOnly
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="text-center mx-auto">
            {error && <label className="label text-red-600">{error}</label>}
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white bg-[#ff4545] hover:text-black hover:bg-red-600">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
