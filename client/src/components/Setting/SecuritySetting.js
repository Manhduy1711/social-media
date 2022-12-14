import React from "react";
function SecuritySetting() {
  return (
    <div className="p-10 flex justify-center">
      <p className="text-3xl font-bold mb-6 w-44">Security Setting</p>
      <div className="ml-1">
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex flex-col mb-4 mr-6">
              <label>Login</label>
              <input className="px-3 py-2 rounded border-2 mt-2 w-80" />
            </div>
            <div className="flex flex-col mb-4">
              <label>Two-factor auth</label>
              <input className="px-3 py-2 rounded border-2 mt-2 w-80" />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <input type={"checkbox"} className="mr-2" />
          <label>Recover</label>
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
export default SecuritySetting;
