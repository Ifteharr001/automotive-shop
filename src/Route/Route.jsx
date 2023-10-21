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
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import UpdateCard from "../Components/UpdateCard/UpdateCard";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
const Route = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCard",
        element: (
          <PrivateRoute>
            <MyCard></MyCard>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/userCard"),
      },
      {
        path: "/brand/Toyota",
        element: <Toyota></Toyota>,
        loader: () => fetch("http://localhost:5000/card"),
      },
      {
        path: "/brand/BMW",
        element: <Bmw></Bmw>,
        loader: () => fetch("http://localhost:5000/card"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/card"),
      },
      {
        path: "/updateCard/:id",
        element: <UpdateCard></UpdateCard>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/card/${params.id}`),
      },
      {
        path: "/brand/Honda",
        element: <Honda></Honda>,
        loader: () => fetch("http://localhost:5000/card"),
      },
      {
        path: "/brand/Ford",
        element: <Ford></Ford>,
        loader: () => fetch("http://localhost:5000/card"),
      },
      {
        path: "/brand/Tesla",
        element: <Tesla></Tesla>,
        loader: () => fetch("http://localhost:5000/card"),
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
