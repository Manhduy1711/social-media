import React from "react";
import Profile from "./Profile";
import Suggest from "./Suggest";
import { GoSearch } from "react-icons/go";
function NavLef() {
  return (
    <div className="col-span-1 h-screen sticky top-0 left-0 pr-9">
      <div className="flex pr-3">
        <img
          src="/favicon.ico"
          alt="logo"
          className="h-12 w-12 relative mt-5 ml-6"
        />
        <div className="w-full">
          <input className="w-full h-11 mt-6 ml-3 relative rounded-md" />
          <div className="absolute top-7 right-10 bg-orange-500 p-2 rounded-md">
            <GoSearch className=" text-white text-xl rounded-sm" />
          </div>
        </div>
      </div>
      <Profile />
      <div className="mx-4 w-full">
        <p className="font-medium text-lg mt-3">Who is following</p>
        <Suggest />
        <Suggest />
      </div>
    </div>
  );
}

export default NavLef;
