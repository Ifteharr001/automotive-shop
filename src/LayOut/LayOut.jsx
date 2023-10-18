import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router-dom";
const LayOut = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default LayOut;