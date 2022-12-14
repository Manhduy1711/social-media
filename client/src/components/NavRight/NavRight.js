import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import Friend from "./Friend";
import Notification from "./Notification";
import ChatContainer from "./ChatContainer";
import friendData from "../../data/friendData";
import ChatBox from "../Main/ChatBox";
function NavRight() {
  const [showNotification, setShowNotification] = useState(false);
  const [showChatContainer, setShowChatContainer] = useState(false);
  const [chats, setChats] = useState([]);
  const notificationHanlde = () => {
    setShowNotification((preValue) => !preValue);
  };
  const chatContainerHandle = () => {
    setShowChatContainer((preValue) => !preValue);
  };
  const newChat = (data) => {
    setChats((preValue) => {
      return [...preValue, data];
    });
  };
  return (
    <div className="col-span-1 h-screen sticky top-0 right-0">
      <div className="flex justify-around mt-5">
        <Link to="/setting">
          <IoSettingsOutline className="text-orange-500" size="2rem" />
        </Link>
        <div className="fixed bottom-0 right-1/4 flex items-end">
          {chats
            .slice(1)
            .slice(-2)
            .map((el) => (
              <div>
                <ChatBox data={el} />
              </div>
            ))}
        </div>
        <AiOutlineMessage
          className="text-orange-500"
          size="2rem"
          onClick={chatContainerHandle}
        />
        {showChatContainer ? <ChatContainer /> : ""}
        <IoMdNotificationsOutline
          onClick={notificationHanlde}
          className="text-orange-500"
          size="2.2rem"
        />
        {showNotification ? <Notification /> : ""}
      </div>
      <div className="bg-white rounded-md mx-4 p-2 mt-4">
        {friendData.map((el) => (
          <Friend data={el} newChat={newChat} />
        ))}
      </div>
    </div>
  );
}

export default NavRight;
