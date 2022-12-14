import React, { useState } from "react";
import Article from "./Article";
import PostArticle from "./PostArticle";
import articleData from "../../data/articleData";

function Main() {
  const [articles, setArticles] = useState(articleData);
  const saveArticle = (dt) => {
    const newData = {
      imageURL: dt.imageURL,
      cap: dt.content,
      id: articleData[articleData.length - 1].id + 1,
      name: "Jennie Kim",
    };
    setArticles((prevData) => {
      return [newData, ...prevData];
    });
  };
  return (
    <div className="col-span-2 relative">
      <PostArticle saveArticle={saveArticle} />

      {articles.map((current) => (
        <Article
          key={current.id}
          name={current.name}
          cap={current.cap}
          imageURL={current.imageURL}
        />
      ))}
    </div>
  );
}

export default Main;
