import React from "react";
import { LoremPicsum } from "react-lorem-picsum";
function Suggest() {
  return (
    <div className="mt-3 w-full flex items-center">
      <LoremPicsum className="rounded-full" width={50} height={50} random />
      <div className="ml-2 mr-6 mt-2 px-2">
        <p className="font-medium">Andrew Thomas</p>
        <p className="font-light relative bottom-2">@Andrew Thomas</p>
      </div>
      <button className="py-1.5 px-3 bg-gradient-to-r to-orange-500 from-amber-500 rounded-lg text-white font-media">
        Follow
      </button>
    </div>
  );
}

export default Suggest;
