import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Porvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);


  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active border-b-2 border-red-600 rounded-none hover:border-b-2 text-white hover:text-red-600 hover:border-red-600 hover:rounded-none"
              : " hover:border-b-2 hover:border-red-600 hover:rounded-none text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active border-b-2 border-red-600 rounded-none text-white hover:border-b-2 hover:border-red-600 hover:rounded-none"
              : " hover:border-b-2 hover:border-red-600 hover:rounded-none text-white"
          }
          to="/allmovies"
        >
          All Movies
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active border-b-2 border-red-600 rounded-none hover:border-b-2 text-white hover:border-red-600 hover:rounded-none"
              : " hover:border-b-2 hover:border-red-600 text-white hover:rounded-none"
          }
          to="/addmovies"
        >
          Add Movie
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active border-b-2 border-red-600 rounded-none hover:border-b-2 text-white hover:border-red-600 hover:rounded-none"
              : " hover:border-b-2 hover:border-red-600 hover:rounded-none text-white"
          }
          to="/favorites"
        >
          My Favorites
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active border-b-2 border-red-600 rounded-none hover:border-b-2 text-white hover:border-red-600 hover:rounded-none"
              : " hover:border-b-2 hover:border-red-600 hover:rounded-none text-white"
          }
          to="/contract"
        >
          Contracts
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#1b1d24] py-5 rounded-t-md text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden border-2 border-[#ff4545] text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#0f2d3c] rounded-box mt-3 w-40 z-50 text-white p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className=" text-xl">
          <img
            className="h-[50px] w-[200px] object-fill"
            src="/main-navlogo-removebg-preview.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white ">{links}</ul>
      </div>

      <div className="navbar-end flex flex-col gap-5 items-end">
        <div className="login flex gap-2 items-center">
          <div className=" ">
            {user && user?.email && user?.photoURL ? (
              <div className="relative group flex items-center">
                <img
                  src={user?.photoURL}
                  alt="User Profile"
                  className="w-[50px] h-[50px] rounded-full  cursor-pointer"
                />

                <div className="absolute top-0 right-[60px] bg-[#0f2d3c] text-white font-medium py-1 px-2 rounded shadow-lg opacity-0 group-hover:opacity-100 z-50 transition-opacity duration-200">
                  {user?.displayName}
                </div>
              </div>
            ) : (
              <img className="w-10" src="" alt="" />
            )}
          </div>

          {user && user?.email ? (
            <div>
              <button
                onClick={logOut}
                className="btn rounded-md border-none  text-white  bg-[#ff4545] hover:text-black hover:bg-red-600"
              >
                Log-out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn rounded-md border-none  text-white  bg-[#ff4545] hover:text-black hover:bg-red-700"
            >
              Login
            </Link>
          )}
        </div>
               
      </div>
    </div>
  );
};

export default Navbar;
