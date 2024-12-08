import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import AllMovies from "./Pages/AllMovies";
import AddMovie from "./Pages/AddMovie";
import MyFavourites from "./Pages/MyFavourites";
import ShowMovies from "./components/ShowMovies";
import MovieDetails from "./Pages/MovieDetails";
import UpdateMovie from "./Pages/UpdateMovie";
import Contract from "./Pages/Contract";
import Login from "./Pages/LoginForm";
import PrivateRoute from "./Pages/PrivateRoute";



const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: ()=> fetch ('https://a-10-movielify-server.vercel.app/sortedmovie'),
            children:[
                {
                    path:"/",
                    element:<ShowMovies></ShowMovies>,
                }
            ]
        },
        {
            path:'/allmovies',
            element: <AllMovies></AllMovies>,
            loader: ()=> fetch ('https://a-10-movielify-server.vercel.app/movie'),

        },
        {
            path:'/movie/:id',
            element: <PrivateRoute><MovieDetails></MovieDetails></PrivateRoute>,
            loader:({params})=>fetch(`https://a-10-movielify-server.vercel.app/movie/${params.id}`)
        },
        {
            path:'/addmovies',
            element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>
        },
        {
            path:'/updatemovies/:id',
            element: <PrivateRoute><UpdateMovie></UpdateMovie></PrivateRoute>,
            loader:({params})=>fetch(`https://a-10-movielify-server.vercel.app/movie/${params.id}`)
        },
        {
            path:'/favorites',
            element: <PrivateRoute><MyFavourites></MyFavourites></PrivateRoute>,
           
        },
        {
            path:'/contract',
            element: <Contract></Contract>
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