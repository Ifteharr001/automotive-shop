import Banner from "../Banner/Banner";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navBar = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "text-[#ff4605] font-bold border-b-2 border-t-2"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar  bg-white rounded-full mt-6 absolute pl-10 pr-10 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBar}
            </ul>
          </div>
          <img
            className="w-[60px]"
            src="https://i.ibb.co/bzHqRJy/car-logo.png"
            alt=""
          />
          <h1 className="text-2xl font-bold text-[#ff4605] ml-5">
            GearGrove Autos
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navBar}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#ff4605] hover:bg-[#81391e] text-white font-bold border-none w-[100px]">
            Login
          </a>
        </div>
      </div>
      <div className="relative">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Navbar;