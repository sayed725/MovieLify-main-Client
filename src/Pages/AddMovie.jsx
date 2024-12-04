import React, { useState } from "react";
import Swal from "sweetalert2";

const AddMovie = () => {
  const [error, setError] = useState("");

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
    const details = e.target.details.value;
    const photo = e.target.photo.value;

    const newCoffee = {
      poster,
      title,
      genre,
      duration,
      year,
      details,
      photo,
    };
    console.log(newCoffee);

    // // send data to the server
    // fetch('http://localhost:5001/coffee',{
    //     method: 'POST',
    //     headers: {
    //         'content-type' : 'application/json'
    //     },
    //     body: JSON.stringify(newCoffee)
    // })

    // .then(res => res.json())
    // .then(data =>{
    //     console.log(data)
    //     if(data.insertedId){
    //         Swal.fire({
    //             title: 'Success!',
    //             text: 'Coffee added successfully',
    //             icon: 'success',
    //             confirmButtonText: 'Ok'
    //         });
    //     }
    // })
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Add New Movies</h1>
        <p className="py-6">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
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
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="action">Action</option>
                <option value="thriller">Thriller</option>
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
              <select
             name="year" className="input input-bordered" required>
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
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Coffee Details"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="text-center mx-auto">
            {error && <label className="label text-red-600">{error}</label>}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#ff4545] hover:bg-yellow-500">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
