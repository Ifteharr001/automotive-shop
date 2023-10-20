import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCard from "../Pages/MyCard/MyCard";
import Toyota from "../Components/brand/Toyota/Toyota";
import Bmw from "../Components/brand/BMW/BMW";
import Honda from "../Components/brand/Honda/Honda";
import Ford from "../Components/brand/Ford/Ford";
import Tesla from "../Components/brand/Tesla/Tesla";
import MercedesBenz from "../Components/brand/MercedesBenz/MercedesBenz";
const Route = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCard",
        element: <MyCard></MyCard>,
      },
      {
        path: "/brand/Toyota",
        element: <Toyota></Toyota>,
        loader: () => fetch("http://localhost:5000/card"),
      },
      {
        path: "/brand/BMW",
        element: <Bmw></Bmw>,
      },
      {
        path: "/brand/Honda",
        element: <Honda></Honda>,
      },
      {
        path: "/brand/Ford",
        element: <Ford></Ford>,
      },
      {
        path: "/brand/Tesla",
        element: <Tesla></Tesla>,
      },
      {
        path: "/brand/Mercedes-Benz",
        element: <MercedesBenz></MercedesBenz>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Route;
