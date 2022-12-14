import React, { useState } from "react";
import { FaWindowMinimize } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { GrSend } from "react-icons/gr";
function ChatBox(props) {
  const [show, setShow] = useState(true);
  const minimizeHandle = () => {
    setShow((preValue) => !preValue);
  };
  const [close, setClose] = useState(false);
  const closeHandle = () => {
    setClose(true);
  };
  return (
    <div>
      {close ? (
        ""
      ) : (
        <div className="w-72 rounded-t-xl bg-white overflow-hidden ml-4">
          <div className="h-8 bg-green-400 px-2 flex items-center justify-between">
            <p className="max-w-fit text-white font-semibold">
              {props.data.name}
            </p>
            <div className="flex">
              <FaWindowMinimize
                onClick={minimizeHandle}
                size={"1.2rem"}
                className="mr-2 text-white cursor-pointer hover:text-orange-400"
              />
              <IoCloseSharp
                onClick={closeHandle}
                size={"1.8rem"}
                className=" text-white cursor-pointer hover:text-orange-400"
              />
            </div>
          </div>
          {show ? (
            <div>
              <div className="relative h-60 overflow-auto">
                <p className="px-2 py-0.5 bg-slate-400 mr-12 rounded-tr-lg rounded-br-lg rounded-bl-lg w-fit mt-2 ml-2">
                  hi
                </p>
                <p className="px-2 py-0.5 bg-slate-400 mr-12 rounded-tr-lg rounded-br-lg rounded-bl-lg w-fit mt-2 ml-2">
                  how are you
                </p>
                <div className="flex justify-end mr-2">
                  <p className="px-2 py-0.5 text-white bg-green-400 ml-12 rounded-tl-lg rounded-br-lg rounded-bl-lg w-fit mt-2">
                    how are you
                  </p>
                </div>
                <div className="flex justify-end mr-2">
                  <p className="px-2 py-0.5 text-white bg-green-400 ml-12 rounded-tl-lg rounded-br-lg rounded-bl-lg w-fit mt-2">
                    Minim magna excepteur dolore esse ipsum cupidatat dolor
                    veniam. Tempor consequat adipisicing eiusmod reprehenderit.
                    Aliqua laborum non dolor do ad mollit commodo id voluptate
                    cupidatat ullamco adipisicing ipsum dolor. Amet aute non
                    aute reprehenderit est. Elit do non consequat consequat
                    laborum non occaecat minim sit enim reprehenderit dolore
                    duis sunt. Eiusmod aliquip sit aute sunt aute ex qui quis
                    cupidatat quis ad consectetur duis veniam. Duis enim
                    pariatur non nulla ut sint culpa aliqua.
                  </p>
                </div>
              </div>
              <div className="border-t-2 pt-2 pb-4 flex items-center justify-evenly">
                <input
                  className="py-2 px-6 focus:border-none"
                  placeholder="Send messgae"
                />
                <GrSend size={"1.8rem"} className="mr-2" />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}
export default ChatBox;
