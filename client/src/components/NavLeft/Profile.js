import React from "react";
import { Link } from "react-router-dom";
import { LoremPicsum } from "react-lorem-picsum";
function Profile() {
  return (
    <div className="bg-white w-full ml-4 mt-4 rounded-xl overflow-hidden flex items-center flex-col">
      <LoremPicsum width={400} height={140} random />
      <img
        className="rounded-full w-20 h-20 relative bottom-11 shadow-xl"
        src="https://img.freepik.com/free-photo/glad-dark-haired-young-woman-says-sounds-good-confirms-something-everything-control-going-great-approves-promo-has-glad-expression-agrees-with-person-wears-yellow-sweatshirt_273609-42865.jpg?w=2000"
        alt="Avatar"
      />
      <div className="relative bottom-7 flex flex-col items-center">
        <p className="font-bold text-xl">Jennie Kim</p>
        <span className="">Web Developer</span>
      </div>
      <div className="py-3 w-4/5 border-t-2 border-b-2 border-gray-500 flex">
        <div className="border-r-2 w-3/6 border-gray-500 flex flex-col items-center py-1">
          <p className="font-medium text-lg">
            {Math.floor(Math.random() * 1000)}
          </p>
          <p>Follows</p>
        </div>
        <div className="w-3/6 flex flex-col py-1 items-center">
          <p className="font-medium text-lg">1</p>
          <p>Following</p>
        </div>
      </div>
      <Link to="/myAccount">
        <p className="text-orange-500 font-bold font-sans text-lg py-4">
          My profile
        </p>
      </Link>
    </div>
  );
}

export default Profile;
