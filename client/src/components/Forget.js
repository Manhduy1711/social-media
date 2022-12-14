import React from "react";
import { Link } from "react-router-dom";
function Forget() {
  return (
    <div className="bg-orange-200 h-screen">
      <div className="h-16 bg-gradient-to-b from-red-500 to-orange-400 flex items-center relative">
        <div className="">
          <img src="" alt="" />
        </div>
        <div className="w-3/5 absolute right-0">
          <input
            type="text"
            className="w-48 h-10 border-spacing-1 px-2 py-4 border-gray-300 hover:border-gray-400 border-2 rounded-md shadow-lg shadow-red-500 md:shadow-xl"
            placeholder="Email or phone number"
          />
          <input
            type="password"
            className="w-48 h-10 border-spacing-1 border-1 px-2 py-4 m-2  border-gray-300 hover:border-gray-400 border-2 rounded-md shadow-red-500 md:shadow-xl"
            placeholder="Password"
          />
          <Link to={"/"}>
            <button className="w-48 h-10 bg-blue-500 hover:bg-blue-600 border-blue-500 border-2 rounded-md p-1 shadow-lg shadow-blue-500/50">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center pt-40">
        <div className="w-1/3 h-64 bg-white rounded-md border-2 border-spacing-2 border-gray-300 content-center shadow-red-500 md:shadow-xl relative ">
          <h1 className="not-italic text-lg font-bold p-3 border-b-2 border-gray-300 border-spacing-1">
            Find your account
          </h1>
          <h3 className="p-2 m-1 font-semibold">
            Please enter your email or mobile number to search for your account.
          </h3>
          <input
            type="text"
            className="w-11/12 h-10 border-spacing-1 px-2 py-4 m-3 mb-4 border-gray-300 hover:border-gray-400 border-2 rounded-md"
            placeholder="Email or phone number"
          />
          <p className="border-b-2 border-gray-300 border-spacing-1"></p>
          <div className="absolute right-5 mt-2">
            <Link to="/login">
              <button className="w-20 h-8 bg-slate-400 hover:bg-slate-500 border-spacing-2 border-2 border-slate-400 shadow-lg shadow-slate-400/40 m-2 rounded-md">
                Cancel
              </button>
            </Link>
            <button className="w-28 h-8 border-2 border-sky-600 bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/50 rounded-md">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
