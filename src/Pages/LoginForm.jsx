import React, { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../Porvider/AuthProvider";


const Login = () => {
  const { userLogIn, setUser, signInWithGoogle, setForgetEmail } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  // Use React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogIn = ({ email, password }) => {
    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(`Congratulations! ${user.displayName}, Login Successful`);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, Login: err.code });
        toast.error(`${err.code}`);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(`Congratulations! ${user.displayName}, Login Successful`);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, Login: err.code });
      });
  };

//   const handleForgotPassword = (data) => {
//     setForgetEmail(data.email);
//     navigate("/forgetpassword");
//   };

  return (
    <div>
      <div>
        <h2 className="text-4xl my-10 text-center  font-semibold">
          Login to your account
        </h2>
        <form onSubmit={handleSubmit(handleLogIn)} className="md:w-3/4 lg:w-1/3 mx-auto">
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Email address</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className={`input input-bordered ${errors.email ? "border-red-600" : ""}`}
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <span className="text-red-600 text-sm">{errors.email.message}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`input input-bordered ${errors.password ? "border-red-600" : ""}`}
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <span className="text-red-600 text-sm">{errors.password.message}</span>
            )}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-[52px] text-xl cursor-pointer"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {error.Login && (
              <span className="text-sm text-red-600">{error.Login}</span>
            )}
          </div>

          {/* Forgot Password Link */}
          <label className="label">
            <Link
            //   onClick={handleForgotPassword}
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </Link>
          </label>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn rounded-md text-white bg-[#ff4545] hover:text-black hover:bg-red-600">
              Login
            </button>
          </div>
        </form>

        {/* Google Sign-In */}
        <div className="md:w-3/4 lg:w-1/3 mx-auto mt-5">
          <button
            onClick={handleGoogleSignIn}
            className="w-full btn rounded-md text-white bg-[#ff4545] hover:text-black hover:bg-red-600 flex items-center justify-center gap-2"
          >
            <FaGoogle />
            Log In with Google
          </button>
        </div>

        {/* Redirect to Register */}
        <p className="text-center mt-4 textarea-sm">
          Don’t have an account?{" "}
          <Link className="text-red-600 font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
