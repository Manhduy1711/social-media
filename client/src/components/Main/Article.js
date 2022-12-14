import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { BiCommentDots } from "react-icons/bi";
import { RiShareCircleFill } from "react-icons/ri";
function Article(props) {
  const [icon, setIcon] = useState(true);
  const reactHandle = () => {
    setIcon((preValue) => !preValue);
  };
  return (
    <div className="bg-white rounded-2xl p-3 mb-6 ">
      <img src={props.imageURL} className="rounded" alt="pic"></img>
      <div className="flex mt-3">
        {!icon ? (
          <BiHeart
            className="mr-3 text-pink-600"
            size="1.875rem"
            onClick={reactHandle}
          />
        ) : (
          <BiHeart className="mr-3" size="1.875rem" onClick={reactHandle} />
        )}

        <BiCommentDots className="mr-3" size="1.875rem" />
        <RiShareCircleFill size="1.875rem" />
      </div>
      <p className="text-gray-500 ml-1 mt-2">
        {Math.floor(Math.random() * 1000)} likes
      </p>
      <p>
        <strong>{props.name}</strong> {props.cap}
      </p>
    </div>
  );
}

export default Article;
