import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="bg-orange-200 h-screen">
      <div class="border-green-200 flex justify-center rounded-md pt-10">
        <div class="w-1/3  bg-white rounded-md border-2 border-spacing-2 border-gray-300 content-center shadow-red-500 md:shadow-xl relative ">
          <div>
            <div class="w-full h-fit">
              <p>
                <h1 class="ml-8 mt-4 text-3xl font-bold text-green-600">
                  Sign up
                </h1>
                <h4 class="ml-8 font-light">Quick and easy</h4>
              </p>
              <Link to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 absolute right-8 top-8 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Link>
            </div>
            <p class="border-b-2 mt-2 mb-2 border-gray-300 border-spacing-1"></p>
          </div>
          <div>
            <input
              type="text"
              class="w-48 h-10 m-4 mb-2 border-spacing-1 px-2 py-4 border-gray-300 hover:border-gray-400 border-2 rounded-md shadow-lg shadow-red-500 md:shadow-xl"
              placeholder="First name"
            />
            <input
              type="text"
              class="w-48 h-10 ml-2 mb-2 border-spacing-1 px-2 py-4 border-gray-300 hover:border-gray-400 border-2 rounded-md shadow-lg shadow-red-500 md:shadow-xl"
              placeholder="Last name"
            />
            <input
              type="text"
              class="w-11/12 h-10 m-4 mb-2 border-spacing-1 px-2 py-4 border-gray-300 hover:border-gray-400 border-2 rounded-md shadow-lg shadow-red-500 md:shadow-xl"
              placeholder="Email address or phone number"
            />
            <input
              type="password"
              class="w-11/12 h-10 m-4  border-spacing-1 px-2 py-4 border-gray-300 hover:border-gray-400 border-2 rounded-md shadow-lg shadow-red-500 md:shadow-xl"
              placeholder="Password"
            />
            <input
              type="password"
              class="w-11/12 h-10 m-4 border-spacing-1 px-2 py-4 border-gray-300 hover:border-gray-400 border-2 rounded-md shadow-lg shadow-red-500 md:shadow-xl"
              placeholder="Confilm password"
            />

            <div class="relative">
              <h3 class="font-light text-xl ml-4">Birthday</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 absolute left-24 top-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div class="relative h-fit mb-4">
              <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 h-10 ml-4 mb-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Day</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
                <option value="">13</option>
                <option value="">14</option>
                <option value="">15</option>
                <option value="">16</option>
                <option value="">17</option>
                <option value="">18</option>
                <option value="">19</option>
                <option value="">20</option>
                <option value="">21</option>
                <option value="">22</option>
                <option value="">23</option>
                <option value="">24</option>
                <option value="">25</option>
                <option value="">26</option>
                <option value="">27</option>
                <option value="">28</option>
                <option value="">29</option>
                <option value="">30</option>
                <option value="">31</option>
              </select>

              <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 h-10 ml-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute left-28 top-0">
                <option selected>Month</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
              </select>

              <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 h-10 ml-4 mb-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute left-52 top-0">
                <option selected>Year</option>
                <option value="">2022</option>
                <option value="">2021</option>
                <option value="">2020</option>
                <option value="">2019</option>
                <option value="">2018</option>
                <option value="">2017</option>
                <option value="">2016</option>
                <option value="">2015</option>
                <option value="">2014</option>
                <option value="">2013</option>
                <option value="">2012</option>
                <option value="">2011</option>
                <option value="">2010</option>
                <option value="">2009</option>
                <option value="">2008</option>
                <option value="">2007</option>
                <option value="">2006</option>
                <option value="">2005</option>
                <option value="">2004</option>
                <option value="">2003</option>
                <option value="">2002</option>
                <option value="">2001</option>
                <option value="">2000</option>
                <option value="">1999</option>
                <option value="">1998</option>
                <option value="">1997</option>
                <option value="">1996</option>
                <option value="">1995</option>
                <option value="">1994</option>
                <option value="">1993</option>
                <option value="">1992</option>
                <option value="">1991</option>
                <option value="">1990</option>
                <option value="">1989</option>
                <option value="">1988</option>
                <option value="">1987</option>
                <option value="">1986</option>
                <option value="">1985</option>
                <option value="">1984</option>
                <option value="">1983</option>
                <option value="">1982</option>
                <option value="">1981</option>
                <option value="">1980</option>
                <option value="">1979</option>
                <option value="">1978</option>
                <option value="">1977</option>
                <option value="">1976</option>
                <option value="">1975</option>
                <option value="">1974</option>
                <option value="">1973</option>
                <option value="">1972</option>
                <option value="">1971</option>
                <option value="">1970</option>
                <option value="">1969</option>
                <option value="">1968</option>
                <option value="">1967</option>
                <option value="">1966</option>
                <option value="">1965</option>
                <option value="">1964</option>
                <option value="">1963</option>
                <option value="">1962</option>
                <option value="">1961</option>
                <option value="">1960</option>
                <option value="">1959</option>
                <option value="">1958</option>
                <option value="">1957</option>
                <option value="">1956</option>
                <option value="">1955</option>
                <option value="">1954</option>
                <option value="">1953</option>
                <option value="">1952</option>
                <option value="">1951</option>
                <option value="">1950</option>
                <option value="">1949</option>
                <option value="">1948</option>
                <option value="">1947</option>
                <option value="">1946</option>
                <option value="">1945</option>
                <option value="">1944</option>
                <option value="">1943</option>
                <option value="">1942</option>
                <option value="">1941</option>
                <option value="">1940</option>
                <option value="">1939</option>
                <option value="">1938</option>
                <option value="">1937</option>
                <option value="">1936</option>
                <option value="">1935</option>
                <option value="">1934</option>
                <option value="">1933</option>
                <option value="">1932</option>
                <option value="">1931</option>
                <option value="">1930</option>
                <option value="">1929</option>
                <option value="">1928</option>
                <option value="">1927</option>
                <option value="">1926</option>
                <option value="">1925</option>
                <option value="">1924</option>
                <option value="">1923</option>
                <option value="">1922</option>
                <option value="">1921</option>
                <option value="">1920</option>
                <option value="">1919</option>
                <option value="">1918</option>
                <option value="">1917</option>
                <option value="">1916</option>
                <option value="">1915</option>
                <option value="">1914</option>
                <option value="">1913</option>
                <option value="">1912</option>
                <option value="">1911</option>
                <option value="">1910</option>
                <option value="">1909</option>
                <option value="">1908</option>
                <option value="">1907</option>
                <option value="">1906</option>
                <option value="">1905</option>
                <option value="">1904</option>
                <option value="">1903</option>
                <option value="">1902</option>
                <option value="">1901</option>
              </select>
            </div>

            <div class="relative">
              <h3 class="font-light text-xl ml-4">Sex</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 absolute top-1 left-14"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 h-10 ml-4 mb-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Other</option>
            </select>

            <div class="flex justify-center">
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mb-4 rounded">
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
