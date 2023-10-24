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
        loader: () =>
          fetch(
            "https://automotive-shop-server-lv7b0u6sx-ifteharr001.vercel.app/userCard"
          ),
      },
      {
        path: "/brand/Toyota",
        element: <Toyota></Toyota>,
        loader: () =>
          fetch(
            "https://automotive-shop-server-lv7b0u6sx-ifteharr001.vercel.app/card"
          ),
      },
      {
        path: "/brand/BMW",
        element: <Bmw></Bmw>,
        loader: () =>
          fetch(
            "https://automotive-shop-server-lv7b0u6sx-ifteharr001.vercel.app/card"
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://automotive-shop-server-lv7b0u6sx-ifteharr001.vercel.app/card"
          ),
      },
      {
        path: "/updateCard/:id",
        element: <UpdateCard></UpdateCard>,
        loader: ({ params }) =>
          fetch(
            `https://automotive-shop-server-lv7b0u6sx-ifteharr001.vercel.app/card/${params.id}`
          ),
      },
      {
        path: "/brand/Honda",
        element: <Honda></Honda>,
        loader: () =>
          fetch(
            "https://automotive-shop-server-lv7b0u6sx-ifteharr001.vercel.app/card"
          ),
      },
      {
        path: "/brand/Ford",
        element: <Ford></Ford>,
        loader: () =>
          fetch(
            "https://automotive-shop-server-lv7b0u6sx-ifteharr001.vercel.app/card"
          ),
      },
      {
        path: "/brand/Tesla",
        element: <Tesla></Tesla>,
        loader: () =>
          fetch(
            "https://automotive-shop-server-lv7b0u6sx-ifteharr001.vercel.app/card"
          ),
      },
      {
        path: "/brand/Mercedes-Benz",
        element: <MercedesBenz></MercedesBenz>,
        loader: () =>
          fetch(
            "https://automotive-shop-server-lv7b0u6sx-ifteharr001.vercel.app/card"
          ),
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
