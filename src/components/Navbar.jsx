import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Porvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleThemeToggle=()=>{
    setIsDarkMode((prevMode)=> !prevMode)
  }

  React.useEffect(()=>{
  if(isDarkMode){
    document.documentElement.classList.add("dark")
  }else{
    document.documentElement.classList.remove("dark")
  }
  },[isDarkMode])

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active border-b-2 border-red-600 rounded-none hover:border-b-2 hover:text-red-600 hover:border-red-600 hover:rounded-none"
              : " hover:border-b-2 hover:border-red-600 hover:rounded-none"
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
              ? "active border-b-2 border-red-600 rounded-none hover:border-b-2 hover:border-red-600 hover:rounded-none"
              : " hover:border-b-2 hover:border-red-600 hover:rounded-none"
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
              ? "active border-b-2 border-red-600 rounded-none hover:border-b-2 hover:border-red-600 hover:rounded-none"
              : " hover:border-b-2 hover:border-red-600 hover:rounded-none"
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
              ? "active border-b-2 border-red-600 rounded-none hover:border-b-2 hover:border-red-600 hover:rounded-none"
              : " hover:border-b-2 hover:border-red-600 hover:rounded-none"
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
              ? "active border-b-2 border-red-600 rounded-none hover:border-b-2 hover:border-red-600 hover:rounded-none"
              : " hover:border-b-2 hover:border-red-600 hover:rounded-none"
          }
          to="/contract"
        >
          Contracts
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#1b1d24] py-5 rounded-t-md dark:bg-[white]">
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
            className="h-[50px] w-[150px] object-fill"
            src="/logo-removebg-preview.png"
            alt=""
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
        <label className="swap swap-rotate cursor-pointer mr-10">
                  {/* Hidden checkbox to control theme state */}
                  <input
                    type="checkbox"
                    className="hidden theme-controller"
                    checked={isDarkMode}
                    onChange={handleThemeToggle}
                  />

                  {/* Sun icon for light mode */}
                  <svg
                    className="swap-off h-8 w-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* Moon icon for dark mode */}
                  <svg
                    className="swap-on h-8 w-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
      </div>
    </div>
  );
};

export default Navbar;
