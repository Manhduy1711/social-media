import React from "react";
function NotificationSetting() {
  return (
    <div className="p-10 flex justify-center">
      <p className="text-3xl font-bold mb-6 w-44">Notification Setting</p>
      <div className="ml-1">
        <div className="flex items-center mb-3">
          <input type={"checkbox"} className="mr-2" />
          <label>
            Enim enim duis quis consectetur proident deserunt non tempor.
          </label>
        </div>
        <div className="flex items-center mb-3">
          <input type={"checkbox"} className="mr-2" />
          <label>
            Reprehenderit laborum exercitation consectetur dolore nostrud ut
            dolor anim eu esse.
          </label>
        </div>
        <div className="flex items-center">
          <input type={"checkbox"} className="mr-2" />
          <label>Dolor ex veniam magna deserunt ad adipisicing.</label>
        </div>
        <button className="px-4 py-2 mt-6 border-2 border-blue-300 bg-blue-300 rounded-lg">
          Update
        </button>
        <button className="px-4 py-2 mt-6 ml-4 border-2 border-gray-600 rounded-lg">
          Cancel
        </button>
      </div>
    </div>
  );
}
export default NotificationSetting;
