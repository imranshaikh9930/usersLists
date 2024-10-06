import React, { useState, useEffect, useRef } from 'react';
import { useUserContext } from '../Context/userContext';

const Filters = ({ data }) => {
  const { updateSelectedDepartments, updateSelectedStatus } = useUserContext();
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [isDepartmentDropdownOpen, setIsDepartmentDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);

  const mainDropdownRef = useRef(null);
  const departmentDropdownRef = useRef(null);
  const statusDropdownRef = useRef(null);

  const toggleMainDropdown = () => {
    setIsMainDropdownOpen(!isMainDropdownOpen);
  };

  // Function to toggle the department sub-dropdown
  const toggleDepartmentDropdown = () => {
    setIsDepartmentDropdownOpen(!isDepartmentDropdownOpen);
    setIsStatusDropdownOpen(false); // Close the other dropdown
  };

  // Function to toggle the status sub-dropdown
  const toggleStatusDropdown = () => {
    setIsStatusDropdownOpen(!isStatusDropdownOpen);
    setIsDepartmentDropdownOpen(false); // Close the other dropdown
  };
  

  const handleChange = (event) => {
    const { value, checked } = event.target;

    let updatedDepartments;

    if (value === "All") {
      if (checked) {
        // If "All" is checked, clear other selections
        updatedDepartments = [];
      } else {
        // If "All" is unchecked, keep other selections unchanged
        updatedDepartments = selectedDepartments;
      }
    } else {
      if (checked) {
        // Add the department to the selected list
        updatedDepartments = [...selectedDepartments, value];
      } else {
        // Remove the department from the selected list
        updatedDepartments = selectedDepartments.filter((dept) => dept !== value);
      }
    }

    setSelectedDepartments(updatedDepartments);
    updateSelectedDepartments(updatedDepartments);
  };

  const handleChange2 = (event) => {
    const { value, checked } = event.target;

    let updatedStatus;

    if (value === "All") {
        if (checked) {
            // If "All" is checked, clear other selections
            updatedStatus = [];
        } else {
            // If "All" is unchecked, keep other selections unchanged
            updatedStatus = selectedStatus;
        }
    } else {
        if (checked) {
            // Add the status to the selected list
            updatedStatus = [...selectedStatus, value];
        } else {
            // Remove the status from the selected list
            updatedStatus = selectedStatus.filter((status) => status !== value);
        }
    }

    setSelectedStatus(updatedStatus); // Update local state
    updateSelectedStatus(updatedStatus); // Update context state
};
 return (
    <div className="w-full mb-6 relative">
        <div className="flex justify-start items-center w-full">

      <button
        onClick={toggleMainDropdown}
        className="relative  text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        ref={mainDropdownRef}
      >
        Data Filters
        <svg className="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
        </div>

      {isMainDropdownOpen && (
        <div className="absolute top-10 left-[10%] z-10 bg-white  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-2">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <button
                onClick={toggleDepartmentDropdown}
                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Department
                <svg className="w-2.5 h-2.5 ml-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
              </button>

              {isDepartmentDropdownOpen && (
                <div className="absolute -right-[105%] top-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" ref={departmentDropdownRef}>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <a href="#">All</a>
                      <input type="checkbox" value="All" onChange={handleChange} />
                    </li>
                    <li className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <a href="#">Finance</a>
                      <input type="checkbox" value="Finance" onChange={handleChange} />
                    </li>
                    <li className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <a href="#">Engineer</a>
                      <input type="checkbox" value="Engineer" onChange={handleChange} />
                    </li>
                    <li className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <a href="#">Art</a>
                      <input type="checkbox" value="Art" onChange={handleChange} />
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={toggleStatusDropdown}
                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Status
                <svg className="w-2.5 h-2.5 ml-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
              </button>

              {isStatusDropdownOpen && (
                <div className="absolute -right-[105%] top-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" ref={statusDropdownRef}>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <a href="#">All</a>
                      <input type="checkbox" value="All" onChange={handleChange2} />
                    </li>
                    <li className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <a href="#">Active</a>
                      <input type="checkbox" value="Active" onChange={handleChange2} />
                    </li>
                    <li className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <a href="#">Inactive</a>
                      <input type="checkbox" value="Inactive" onChange={handleChange2} />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filters;
