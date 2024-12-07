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
import ShowMovies from "./components/ShowMovies";
import MovieDetails from "./Pages/MovieDetails";
import UpdateMovie from "./Pages/UpdateMovie";



const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: ()=> fetch ('http://localhost:5001/movie'),
            children:[
                {
                    path:"/",
                    element:<ShowMovies></ShowMovies>,
                }
            ]
        },
        {
            path:'/allmovies',
            element: <AllMovies></AllMovies>
        },
        {
            path:'/movie/:id',
            element: <MovieDetails></MovieDetails>,
            loader:({params})=>fetch(`http://localhost:5001/movie/${params.id}`)
        },
        {
            path:'/addmovies',
            element: <AddMovie></AddMovie>
        },
        {
            path:'/updatemovies/:id',
            element: <UpdateMovie></UpdateMovie>,
            loader:({params})=>fetch(`http://localhost:5001/movie/${params.id}`)
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