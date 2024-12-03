import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AllMovies from "./Pages/AllMovies";
import AddMovie from "./Pages/AddMovie";
import MyFavourites from "./Pages/MyFavourites";
import About from "./Pages/About";



const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path:'/allmovies',
            element: <AllMovies></AllMovies>
        },
        {
            path:'/addmovies',
            element: <AddMovie></AddMovie>
        },
        {
            path:'/favorites',
            element: <MyFavourites></MyFavourites>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
      ]
    },
  ]);


  export { router }