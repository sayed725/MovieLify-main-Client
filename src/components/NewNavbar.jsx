import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Porvider/AuthProvider";
import Darkmode from "./Darkmode";

const NewNavbar = () => {
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
   <div className="navbar bg-[#1b1d24] rounded-t-md text-white">
     <div className="container mx-auto">
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

      <div className="navbar-end flex  gap-5 items-end text-white">
        <Darkmode></Darkmode>
      {!user && (
            <Link
                         to="/login"
                         className="btn rounded-md border-none  text-white  bg-[#ff4545] hover:text-black hover:bg-[#ff4545]"
                       >
                         Login
                       </Link>
          )}
          {!user && (
             <Link
                          to="/register"
                          className="btn rounded-md border-none  text-white  bg-[#ff4545] hover:text-black hover:bg-[#ff4545]"
                        >
                          Register
                        </Link>
          )}
      {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold'
            >
              <li>
                <NavLink to='/add-food' className='justify-between'>
                  Add a Food
                </NavLink>
              </li>
              <li>
                <NavLink to='/my-posted-food'>ManageMyFood</NavLink>
              </li>
              <li>
                <NavLink to='/my-food-requests'>My Food Request</NavLink>
              </li>
              <li className='mt-2'>
                <button
                  onClick={logOut}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
               
      </div>
    </div>
   </div>
  );
};

export default NewNavbar;
