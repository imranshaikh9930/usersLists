import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import navmenu from "../assets/Group 346.png";
import { FaSearch } from "react-icons/fa";
import notification from "../assets/Notification 2.png";
import user from "../assets/vect 1.png";
import { IoIosArrowDown } from "react-icons/io";
import { useUserContext } from "../Context/userContext";
import data from "./data";
import useDebounce from "./useDebounce";

const Navbar = () => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const { search, setSearch, arr, setArr, paginatedData } = useUserContext();
  const debouncedSearch = useDebounce(search, 300);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let updatedArr;

    if (debouncedSearch) {
      // Filter the data based on the debounced search input
      updatedArr = data.filter(
        (item) =>
          item.TeacherName.toLowerCase().includes(
            debouncedSearch.toLowerCase()
          ) ||
          item.TeacherId.toLowerCase().includes(
            debouncedSearch.toLowerCase()
          ) ||
          item.DepartMent.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    } else {
      updatedArr = data; // Reset to the original data if search is empty
    }

    setArr(updatedArr); // Update the array with the filtered results
  }, [debouncedSearch]);

  return (
    <header className="sticky -top-0 z-20 -mt-5 mb-4">
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse z-20"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Welcome, User!
            </span>
          </a>

          <div className="flex items-center">
            <form className="flex items-center space-x-3 px-3 py-2 bg-[#e3e3e3] md:order-2 md:space-x-0 rtl:space-x-reverse rounded-xl">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none w-full px-2 text-sm text-gray-700"
                value={search}
                onChange={handleChange}
              />
              <FaArrowRightLong className="text-gray-500 cursor-pointer" />
            </form>
          </div>

          <div className="relative ml-4">
            <img
              src={navmenu}
              alt="Menu"
              className="w-10 h-10 cursor-pointer"
            />
          </div>

          <div className="relative ml-4 flex items-center gap-6">
            <img
              src={notification}
              alt="Notification"
              className="w-6 h-6 cursor-pointer"
            />
            <div className="relative">
              <span
                className="flex items-center gap-2"
                onClick={() => setIsDropOpen(!isDropOpen)}
              >
                <img
                  src={user}
                  alt="User"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <IoIosArrowDown />
              </span>
              {/* Dropdown Menu */}
              <div
                className={` ${
                  isDropOpen ? "block" : "hidden"
                } absolute right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white  text-nowrap"
                    >
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
