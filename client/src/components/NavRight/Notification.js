import React from "react";
function Notification() {
  return (
    <div className="absolute bg-white w-fit top-16 right-10 h-fit rounded-md z-10 px-3 py-2">
      <div className="border-l-8 border-b-8 border-r-8 border-white border-l-transparent border-r-transparent w-0 h-0 absolute right-2 -top-2 z-20"></div>
      <div className="overflow-auto w-80 h-96">
        <div className="flex hover:bg-gray-200 mb-3 cursor-pointer p-2 rounded-md border-l-4 border-blue-500">
          <img
            src="/favicon.ico"
            alt="ava"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-2">
            <p>
              <strong>John Doe</strong> reacted to your post
            </p>
            <p className="text-sm">10 min ago</p>
          </div>
        </div>
        <div className="flex hover:bg-gray-200 mb-3 cursor-pointer p-2 rounded-md border-l-4 border-blue-500">
          <img
            src="/favicon.ico"
            alt="ava"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-2">
            <p>
              <strong>John Doe</strong> reacted to your post
            </p>
            <p className="text-sm">10 min ago</p>
          </div>
        </div>
        <div className="flex hover:bg-gray-200 mb-3 cursor-pointer p-2 rounded-md border-l-4 border-blue-500">
          <img
            src="/favicon.ico"
            alt="ava"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-2">
            <p>
              <strong>John Doe</strong> reacted to your post
            </p>
            <p className="text-sm">10 min ago</p>
          </div>
        </div>
        <div className="flex hover:bg-gray-200 mb-3 cursor-pointer p-2 rounded-md border-l-4 border-blue-500">
          <img
            src="/favicon.ico"
            alt="ava"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-2">
            <p>
              <strong>John Doe</strong> reacted to your post
            </p>
            <p className="text-sm">10 min ago</p>
          </div>
        </div>
        <div className="flex hover:bg-gray-200 mb-3 cursor-pointer p-2 rounded-md border-l-4 border-blue-500">
          <img
            src="/favicon.ico"
            alt="ava"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-2">
            <p>
              <strong>John Doe</strong> reacted to your post
            </p>
            <p className="text-sm">10 min ago</p>
          </div>
        </div>
        <div className="flex hover:bg-gray-200 mb-3 cursor-pointer p-2 rounded-md border-l-4 border-blue-500">
          <img
            src="/favicon.ico"
            alt="ava"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-2">
            <p>
              <strong>John Doe</strong> reacted to your post
            </p>
            <p className="text-sm">10 min ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Notification;
