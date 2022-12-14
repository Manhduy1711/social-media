import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { LoremPicsum } from "react-lorem-picsum";
import { Link } from "react-router-dom";
import PostArticle from "./Main/PostArticle";
import Suggest from "./NavLeft/Suggest";
import myArticleData from "../data/myArticleData";
import Article from "./Main/Article";
function Account() {
  const [articles, setArticles] = useState(myArticleData);
  const saveArticle = (dt) => {
    const newData = {
      imageURL: dt.imageURL,
      cap: dt.content,
      id: myArticleData[myArticleData.length - 1].id + 1,
      name: "Jennie Kim",
    };
    setArticles((prevData) => {
      return [newData, ...prevData];
    });
  };
  return (
    <div
      className={
        "flex justify-center bg-gradient-to-br bg-fixed from-orange-300 to-pink-200 relative "
      }
    >
      <div className="grid grid-cols-3 w-9/12 ">
        <div className="col-span-1 px-4 sticky top-0 left-0 h-screen">
          <div className="flex pr-3">
            <Link to="/">
              <img
                src="/favicon.ico"
                alt="logo"
                className="h-12 w-12 relative mt-5 "
              />
            </Link>
            <div className="w-full relative">
              <input className="w-full h-11 mt-6 ml-3 relative rounded-md" />
              <div className="absolute top-7 -right-2 bg-orange-500 p-2 rounded-md">
                <GoSearch className=" text-white text-xl rounded-sm" />
              </div>
            </div>
          </div>
          <div className="bg-white w-full h-72 overflow-auto rounded-md mt-4 p-3 relative">
            <p className="font-bold">Your info</p>
            <div className="flex mt-4">
              <p className="font-bold mr-2">status:</p>
              <p>in relationship</p>
            </div>
            <div className="flex mt-2">
              <p className="font-bold mr-2">phone:</p>
              <p>+08732873827</p>
            </div>
            <div className="flex mt-2">
              <p className="font-bold mr-2">email:</p>
              <p>abc@gmail.com</p>
            </div>
            <div className="flex mt-2">
              <p className="font-bold mr-2">work at:</p>
              <p>Handy company</p>
            </div>
            <Link to={"/login"}>
              <button className="absolute bottom-4 right-6 py-1.5 px-3 bg-gradient-to-r to-orange-500 from-amber-500 rounded-lg text-white font-media">
                Log Out
              </button>
            </Link>
          </div>
          <p className="font-medium text-lg mt-3">Who is following</p>
          <Suggest />
          <Suggest />
          <Suggest />
        </div>
        <div className="col-span-2">
          <div className="bg-white w-full ml-4 mt-4 rounded-2xl overflow-hidden flex items-center flex-col">
            <LoremPicsum width={1000} height={350} random />
            <img
              className="rounded-full w-36 h-36 relative bottom-20 shadow-xl"
              src="https://img.freepik.com/free-photo/glad-dark-haired-young-woman-says-sounds-good-confirms-something-everything-control-going-great-approves-promo-has-glad-expression-agrees-with-person-wears-yellow-sweatshirt_273609-42865.jpg?w=2000"
              alt="Avatar"
            />
            <div className="relative bottom-16 flex flex-col items-center">
              <p className="font-bold text-xl">Jennie Kim</p>
              <span className="">Web Developer</span>
            </div>
            <div className="py-3 w-4/5 border-t-2 mb-8 border-b-2 border-gray-500 flex">
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
              <div className="border-l-2 border-gray-500 w-3/6 flex flex-col py-1 items-center">
                <p className="font-medium text-lg">{articles.length}</p>
                <p>Post</p>
              </div>
            </div>
          </div>
          <div className="ml-4">
            <PostArticle saveArticle={saveArticle} />
            {articles.map((el) => (
              <Article
                key={el.id}
                name={el.name}
                cap={el.cap}
                imageURL={el.imageURL}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Account;
