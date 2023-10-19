import { createBrowserRouter } from "react-router-dom"
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCard from "../Pages/MyCard/MyCard";
const Route = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/addProduct",
          element: <AddProduct></AddProduct>
        },
        {
          path: "/myCard",
          element: <MyCard></MyCard>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
    ]
  },
]);

export default Route;