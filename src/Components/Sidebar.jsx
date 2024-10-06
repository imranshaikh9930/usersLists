import React, { useEffect, useState } from "react";
import logo from "../assets/Final Logo 3.png";
import { IoMenu } from "react-icons/io5";
import department from "../assets/Mask group.png";
import teacher from "../assets/project 1.png";
import library from "../assets/Group 798.png";
import AddTeacher from "../assets/plus 1.png";
import TableData from "./TableData";

const Sidebar = () => {
  const [isClicked, setIsClicked] = useState(false); // For department dropdown
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle

  useEffect(() => {
    console.log(isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <div className="grid grid-cols-[auto_1fr]">
      {/* Sidebar */}
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 h-screen bg-[#194895] text-white transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "w-64 translate-x-0" : "w-0 -translate-x-72"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          {/* Logo and Toggle */}
          <div className="flex justify-between items-center p-2">
            <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
            <span className="ms-3 text-white text-2xl">QMS</span>
            <IoMenu
              className="text-3xl cursor-pointer"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          </div>

          {/* Sidebar Links */}
          <ul className="space-y-2 font-medium text-white mt-7">
            <li className="">
              <button
                type="button"
                className="flex items-center w-full px-10 py-2 gap-5 text-left text-base transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-[#194895]"
              >
                <img
                  src={teacher}
                  alt="Teacher"
                  className="flex-shrink-0 w-[30px] h-[30px] bg-white rounded-full"
                />
                <span className="flex-1 ms-3 text-white px-3 py-2 group-hover:text-[#194895]">
                  Teachers
                </span>
              </button>
            </li>

            <li className="">
              <button
                type="button"
                className="flex items-center w-full px-10 py-2 gap-5 text-left text-base transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-[#194895]"
              >
                <img
                  src={department}
                  alt="Department"
                  className="flex-shrink-0 w-[30px] h-[30px] bg-white rounded-full"
                />
                <span className="flex-1 ms-3 text-white px-3 py-2 group-hover:text-[#194895]">
                  Department
                </span>
              </button>
            </li>

            <li className="">
              <button
                type="button"
                className="flex items-center w-full px-10 py-2 gap-5 text-left text-base transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-[#194895] "
              >
                <img
                  src={library}
                  alt="Library"
                  className="flex-shrink-0 w-[30px] h-[30px] bg-white rounded-full"
                />
                <span className="flex-1 ms-3 text-white px-3 py-2  group-hover:text-[#194895]">
                  Library
                </span>
              </button>
            </li>

            <li>
              <button
                type="button"
                className="flex items-center w-full px-10 py-2 gap-5 text-left text-base transition duration-75 rounded-lg group hover:bg-gray-100"
              >
                <img
                  src={teacher}
                  alt="Add Teacher"
                  className="flex-shrink-0 w-[30px] h-[30px] bg-white rounded-full"
                />
                <span className="flex-1 ms-3 text-white px-3 py-2 group-hover:text-[#194895] text-nowrap">
                  Add Teacher
                </span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-500 ease-in-out px-2 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <TableData />
      </div>

      {/* Open Button when Sidebar is Hidden */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          type="button"
          className="absolute top-2 left-2 p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <IoMenu className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
