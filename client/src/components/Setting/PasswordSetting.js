import React from "react";
function PasswordSetting() {
  return (
    <div className="p-10 flex justify-center">
      <p className="text-3xl font-bold mb-6 w-44">Password Setting</p>
      <div className="ml-1">
        <div className="flex flex-col">
          <div className="mr-20">
            <div className="flex flex-col mb-4">
              <label>Old password</label>
              <input className="px-3 py-2 rounded border-2 mt-2 w-80" />
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col mb-4 mr-6">
              <label>New password</label>
              <input className="px-3 py-2 rounded border-2 mt-2 w-80" />
            </div>
            <div className="flex flex-col mb-4">
              <label>Confirm new password</label>
              <input className="px-3 py-2 rounded border-2 mt-2 w-80" />
            </div>
          </div>
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
export default PasswordSetting;
