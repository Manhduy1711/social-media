import React from "react";
function ChatContainer() {
  return (
    <div class="w-fit h-fit bg-white absolute z-20 -left-48 top-16 shadow-xl rounded-md border-spacing-2 ">
      <div className="border-l-8 border-b-8 border-r-8 border-white border-l-transparent border-r-transparent w-0 h-0 absolute right-4 -top-2 z-30"></div>

      <div className="w-96 h-96 overflow-x-hidden overflow-auto">
        <div class="mt-3 mr-0">
          <div class="relative ml-5 ">
            <h1 class="text-3xl font-bold ">Chats</h1>
            <div class="absolute right-28 top-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 1a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0zm7 1a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="absolute right-20 top-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path d="M4.25 2A2.25 2.25 0 002 4.25v2a.75.75 0 001.5 0v-2a.75.75 0 01.75-.75h2a.75.75 0 000-1.5h-2zM13.75 2a.75.75 0 000 1.5h2a.75.75 0 01.75.75v2a.75.75 0 001.5 0v-2A2.25 2.25 0 0015.75 2h-2zM3.5 13.75a.75.75 0 00-1.5 0v2A2.25 2.25 0 004.25 18h2a.75.75 0 000-1.5h-2a.75.75 0 01-.75-.75v-2zM18 13.75a.75.75 0 00-1.5 0v2a.75.75 0 01-.75.75h-2a.75.75 0 000 1.5h2A2.25 2.25 0 0018 15.75v-2zM7 10a3 3 0 116 0 3 3 0 01-6 0z" />
              </svg>
            </div>
            <div class="absolute right-12 top-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
              </svg>
            </div>
            <div class="absolute right-5 top-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
            </div>
          </div>
          <div class="w-full ml-5 ">
            <form class="items-center mt-3 w-full">
              <div class="relative ">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 w-11/12 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search on Message"
                  required
                />
              </div>
            </form>
          </div>
          <div>
            <div class="w-full ml-5 mt-5 relative">
              <div class="relative">
                <img
                  src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000"
                  alt=""
                  class="w-16 h-16 rounded-full"
                />
                <h3 class="absolute font-medium left-20 top-3">Jacob Byrne</h3>
                <h5 class="absolute left-20 font-light top-9">
                  You called him - 10m
                </h5>
              </div>
            </div>
            <div class="w-full ml-5 mt-5 relative">
              <div class="relative">
                <img
                  src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000"
                  alt=""
                  class="w-16 h-16 rounded-full"
                />
                <h3 class="absolute font-medium left-20 top-3">Jacob Byrne</h3>
                <h5 class="absolute left-20 font-light top-9">
                  You called him - 10m
                </h5>
              </div>
            </div>
            <div class="w-full ml-5 mt-3 relative">
              <div class="relative">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  class="w-16 h-16 rounded-full"
                />
                <h3 class="absolute font-medium left-20 top-3">Oliver Smith</h3>
                <h5 class="absolute left-20 text-sm font-light top-9">
                  You: C'mon - 37m
                </h5>
              </div>
            </div>
            <div class="w-full ml-5 mt-5 relative">
              <div class="relative">
                <img
                  src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000"
                  alt=""
                  class="w-16 h-16 rounded-full"
                />
                <h3 class="absolute font-medium left-20 top-3">Jacob Byrne</h3>
                <h5 class="absolute left-20 font-light top-9">
                  You called him - 10m
                </h5>
              </div>
            </div>
            <div class="w-full ml-5 mt-5 relative">
              <div class="relative">
                <img
                  src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000"
                  alt=""
                  class="w-16 h-16 rounded-full"
                />
                <h3 class="absolute font-medium left-20 top-3">Jacob Byrne</h3>
                <h5 class="absolute left-20 font-light top-9">
                  You called him - 10m
                </h5>
              </div>
            </div>
            <div class="w-full ml-5 mt-3 relative">
              <div class="relative">
                <img
                  src="https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg"
                  alt=""
                  class="w-16 h-16 rounded-full"
                />
                <h3 class="absolute font-medium left-20 top-3">
                  Amelia Wilson
                </h3>
                <h5 class="absolute left-20 font-light top-9">
                  I've just lost my key - 1h
                </h5>
              </div>
            </div>
            <div class="w-full ml-5 mt-3 relative">
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  class="w-16 h-16 rounded-full"
                />
                <h3 class="absolute font-medium left-20 top-3">
                  Jessica Taylor
                </h3>
                <h5 class="absolute left-20 font-light top-9">
                  You: Where have you been? - 5h
                </h5>
              </div>
            </div>
            <div class="w-full ml-5 mt-3 relative">
              <div class="relative">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  class="w-16 h-16 rounded-full"
                />
                <h3 class="absolute font-medium left-20 top-3">Lily Johnson</h3>
                <h5 class="absolute left-20 font-light top-9">
                  You called her - 1 hour ago
                </h5>
              </div>
            </div>
          </div>
          <div class="py-4"></div>
        </div>
      </div>
    </div>
  );
}
export default ChatContainer;
