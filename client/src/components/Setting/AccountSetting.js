import React from "react";
function AccountSetting() {
  return (
    <div className="p-10 flex justify-center">
      <p className="text-3xl font-bold mb-6">Account Setting</p>
      <div>
        <div className="flex">
          <div className="mr-20">
            <div className="flex flex-col mb-4">
              <label>First Name</label>
              <input
                className="px-3 py-2 rounded border-2 mt-2 w-80"
                value={"Jennie"}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Email</label>
              <input
                className="px-3 py-2 rounded border-2 mt-2 w-80"
                value={"abc@gmail.com"}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Company</label>
              <input
                className="px-3 py-2 rounded border-2 mt-2 w-80"
                value={"Handy company"}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col mb-4">
              <label>Last Name</label>
              <input
                className="px-3 py-2 rounded border-2 mt-2 w-80"
                value={"Kim"}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Phone number</label>
              <input
                className="px-3 py-2 rounded border-2 mt-2 w-80"
                value={"+08732873827"}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Relationship</label>
              <input
                className="px-3 py-2 rounded border-2 mt-2 w-80"
                value={"in relationship"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Bio</label>
          <textarea
            className="border-2 rounded mt-2 px-3 py-2"
            rows={5}
            value="Eiusmod voluptate ullamco qui proident deserunt dolor culpa reprehenderit consectetur consectetur id eiusmod in do. Lorem exercitation consectetur cillum ea sunt dolore cillum in pariatur nulla quis. Officia culpa labore pariatur nisi commodo dolor exercitation aute incididunt commodo ullamco officia anim."
          />
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
export default AccountSetting;
