import React from "react";
import { AiFillHome, AiOutlineKey, AiFillBell } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { NavLink, Outlet, Link } from "react-router-dom";
function Setting() {
  let activeClass = "bg-orange-400 flex text-white";
  return (
    <div className="bg-orange-200 min-h-screen p-2">
      <Link to="/">
        <img
          src="/logo-no-background.png"
          alt="img"
          className="h-12 my-4 ml-20"
        />
      </Link>
      <div className="flex justify-center items-center flex-col">
        <div className="w-11/12 flex bg-white h-fit relative rounded-md shadow-xl">
          <div className="border-r-2">
            <div className="h-52 w-60 flex items-center justify-center flex-col">
              <img
                className="rounded-full w-20 h-20 shadow-xl"
                src="https://img.freepik.com/free-photo/glad-dark-haired-young-woman-says-sounds-good-confirms-something-everything-control-going-great-approves-promo-has-glad-expression-agrees-with-person-wears-yellow-sweatshirt_273609-42865.jpg?w=2000"
                alt="Avatar"
              />
              <p className="font-semibold text-slate-800 text-3xl mt-4">
                Jennie Kim
              </p>
            </div>
            <ul>
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  isActive ? activeClass : undefined
                }
              >
                <li className=" flex items-center text-xl pl-4 py-3">
                  <AiFillHome className="mr-2" /> Account
                </li>
              </NavLink>
              <NavLink
                to="/setting/password"
                className={({ isActive }) =>
                  isActive ? activeClass : undefined
                }
              >
                <li className="flex items-center text-xl pl-4 py-3">
                  <AiOutlineKey className="mr-2" />
                  Password
                </li>
              </NavLink>
              <NavLink
                to="/setting/security"
                className={({ isActive }) =>
                  isActive ? activeClass : undefined
                }
              >
                <li className="flex items-center text-xl pl-4 py-3">
                  <BsFillPersonFill className="mr-2" />
                  Security
                </li>
              </NavLink>
              <NavLink
                to="/setting/application"
                className={({ isActive }) =>
                  isActive ? activeClass : undefined
                }
              >
                <li className="flex items-center text-xl pl-4 py-3">
                  <MdComputer className="mr-2" />
                  Application
                </li>
              </NavLink>
              <NavLink
                to="/setting/notification"
                className={({ isActive }) =>
                  isActive ? activeClass : undefined
                }
              >
                <li className="flex items-center text-xl pl-4 py-3">
                  <AiFillBell className="mr-2" />
                  Notification
                </li>
              </NavLink>
            </ul>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Setting;
