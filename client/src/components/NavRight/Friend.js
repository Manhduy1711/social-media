import React from "react";
function Friend(props) {
  const onClickHandle = () => {
    props.newChat(props.data);
  };
  return (
    <div
      className="flex py-2 px-2 rounded-lg hover:bg-gray-300 cursor-pointer relative"
      onClick={onClickHandle}
    >
      <img
        src={props.data.avatar}
        alt="ava"
        className="w-10 h-10 rounded-full"
      />
      <p className="font-semibold ml-4 mt-1 text-lg relative top-2">
        {props.data.name}
      </p>
      <div className="w-3 absolute bottom-2 left-10 h-3 bg-green-600 rounded-full"></div>
    </div>
  );
}

export default Friend;
