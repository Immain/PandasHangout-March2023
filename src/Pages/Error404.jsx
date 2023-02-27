import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-404">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-8xl font-bold text-green-400">404</h1>
            <h1 className="text-5xl font-bold">Whoops, Looks like that page doesn't exist</h1>
            <p className="py-6 font-bold">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
            </p>
            <Link to="/">
            <button className="btn bg-green-400 text-black border-none hover:bg-green-600">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
