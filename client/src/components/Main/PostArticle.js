import React, { useState } from "react";
import { BsImages } from "react-icons/bs";
import { FcRemoveImage } from "react-icons/fc";
function PostArticle(props) {
  const [showForm, setShowForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [text, setText] = useState("");
  const onTargetHandler = () => {
    setShowForm(true);
  };

  const cancelHandler = () => {
    setShowForm(false);
  };
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newArticle = {
      imageURL: selectedImage && URL.createObjectURL(selectedImage),
      content: text,
    };
    props.saveArticle(newArticle);
    setShowForm(false);
  };
  const displayForm = () => {
    if (showForm) {
      return (
        <form onSubmit={onSubmitHandler}>
          <textarea
            rows={6}
            value={text}
            onChange={onChangeHandler}
            className="mx-2 mt-1 resize-none rounded-lg py-2 px-2 w-full bg-gray-200 mb-2"
          ></textarea>
          <div className="flex justify-end">
            <div className="absolute top-16 left-2.5 cursor-pointer hover:bg-zinc-100 px-1 py-2 rounded-lg">
              <input
                type="file"
                className="absolute h-full w-full opacity-0 cursor-pointer"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              />
              <BsImages size="2.5rem" color="green" />
              <p className="text-green-700 font-medium">Image</p>
            </div>
            {selectedImage && (
              <div className="rounded-lg flex absolute bottom-3 left-20">
                <img
                  alt="not fount"
                  src={URL.createObjectURL(selectedImage)}
                  className="rounded overflow-hidden max-h-9 max-w-fit mr-3"
                />
                <button onClick={() => setSelectedImage(null)}>
                  <FcRemoveImage size="2.2rem" />
                </button>
              </div>
            )}
            <button
              onClick={cancelHandler}
              className="text-whiml-2 py-1.5 px-3 mr-3 bg-gradient-to-r to-orange-500 from-amber-500 rounded-lg text-white font-mediate"
            >
              CANCEL
            </button>
            {text !== "" && selectedImage && (
              <button
                type="submit"
                className="text-whiml-2 py-1.5 px-3 bg-gradient-to-r to-orange-500 from-amber-500 rounded-lg text-white font-mediate"
              >
                POST
              </button>
            )}
          </div>
        </form>
      );
    } else {
      return (
        <input
          className="mx-2 mt-1 rounded-lg py-2 px-2 w-full bg-gray-200"
          placeholder="What's happening"
          onClick={onTargetHandler}
        />
      );
    }
  };
  return (
    <div className="flex bg-white rounded-2xl my-4 pb-3 pt-1.5 relative">
      <img
        className="rounded-full w-10 h-10 ml-4 mt-1 mr-2"
        src="https://img.freepik.com/free-photo/glad-dark-haired-young-woman-says-sounds-good-confirms-something-everything-control-going-great-approves-promo-has-glad-expression-agrees-with-person-wears-yellow-sweatshirt_273609-42865.jpg?w=2000"
        alt="Avatar"
      />
      <div className="w-full pr-5">{displayForm()}</div>
    </div>
  );
}

export default PostArticle;
