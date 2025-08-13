import React from "react";
import { Link } from "react-router-dom";
import hero from "./newHero.png";
import "./Hero.css";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto p-8 lg:flex-row">
        <div className="flex flex-col space-y-10 mb-44 m-10 lg:m-10 xl:m-20 lg:mt:16 lg:w-1/2 xl:mb-52">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            Financial data about major US stocks.
          </h1>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            Search relevant financial data and documents about your favorite stocks.
          </p>
          <div className="mx-auto lg:mx-0">
            <Link
              to="/search"
              className="py-4 px-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
