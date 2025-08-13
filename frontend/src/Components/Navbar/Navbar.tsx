import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-darkBlue hover:text-blue-800 transition-colors duration-200"
          >
            StockTrust
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link
              to="/search"
              className="relative text-black transition-colors duration-200 hover:text-darkBlue after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-darkBlue after:transition-all after:duration-200 hover:after:w-full"
            >
              SEARCH
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-black">
            <div className="font-medium hover:text-darkBlue transition-colors duration-200">
              Welcome, {user?.userName}
            </div>
            <button
              onClick={logout}
              className="px-5 py-2 rounded-md font-medium text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/login" className="hover:text-darkBlue">
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
