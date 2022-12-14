import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="bg-orange-200 h-screen">
      <div className="w-1/2 absolute left-0 flex justify-center pt-40">
        <div className="w-96 mt-8 absolute right-10">
          <img src="/logo-no-background.png" alt="logo" className="h-20" />
          <p className="font-semibold text-xl">
            Ad et eu excepteur adipisicing cillum adipisicing reprehenderit
            ipsum non eiusmod.
          </p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="w-1/2 absolute right-36">
        <div className="flex justify-center pt-40 rounded-md">
          <div className="w-96 bg-white rounded-md border-8 border-white content-center shadow-red-500 md:shadow-xl relative ">
            <input
              type="text"
              class="form-control block w-11/12 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email or phone number"
            />
            <input
              type="password"
              class="form-control block w-11/12 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
            <Link to={"/"}>
              <button class="w-11/12 h-12 m-3 text-white font-bold border-sky-600 bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/50 rounded-md">
                Log in
              </button>
            </Link>
            <Link
              to={"/forget"}
              className="font-nomal hover:font-semibold text-blue-500 flex justify-center"
            >
              Forgetten password?
            </Link>
            <p className="border-b-2 m-4 border-gray-300 border-spacing-1"></p>
            <div className="flex justify-center">
              <Link to="/signup">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mb-4 rounded">
                  Create account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
