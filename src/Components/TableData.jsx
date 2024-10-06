import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useUserContext } from "../Context/userContext";
import Filters from "./Filters";
import Pagination from "./Pagination";

const TableData = () => {
  const { paginatedData, selectedDepartments, selectedStatus } =
    useUserContext();
  const headers = [
    "Record ID",
    "Teacher Name",
    "Teacher ID",
    "Department",
    "Student",
    "Status",
    "All Details",
  ];

  // Filter data based on selected departments and status
  const filteredData = paginatedData.filter((info) => {
    const departmentMatch =
      selectedDepartments.length > 0
        ? selectedDepartments.includes(info.DepartMent)
        : true;
    const statusMatch =
      selectedStatus.length > 0 ? selectedStatus.includes(info.Status) : true;
    return departmentMatch && statusMatch;
  });

  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);

  return (
    <main className="mx-auto h-full w-[78vw]">
      {/* Navbar Section */}
      <header>
        <Navbar />
      </header>

      {/* Filter Section */}
      <section aria-labelledby="filter-section">
        <Filters data={paginatedData} />
      </section>

      {/* Table Section */}
      <section aria-labelledby="table-section">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-[#034db0] dark:bg-gray-700 dark:text-gray-400 rounded-t-lg">
              <tr className="text-white">
                {headers.map((item, index) => (
                  <th
                    key={index}
                    scope="col"
                    className={`px-6 py-3 ${
                      index === 0 ? "rounded-l-xl" : ""
                    } ${index === headers.length - 1 ? "rounded-r-xl" : ""}`}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredData.map((info, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{info.id}</td>
                  <td className="px-6 py-4">{info.TeacherName}</td>
                  <td className="px-6 py-4">{info.TeacherId}</td>
                  <td className="px-6 py-4">{info.DepartMent}</td>
                  <td className="px-6 py-4">{info.Student}</td>

                  <td className="px-6 py-4 flex items-center">
                    {info.Status}
                    <div
                      className={`ml-2 rounded-full w-3 h-3 ${
                        info.Status === "Active"
                          ? "bg-green-500"
                          : info.Status === "Inactive"
                          ? "bg-yellow-500"
                          : info.Status === "Blocked"
                          ? "bg-red-500"
                          : "bg-gray-400"
                      }`}
                      aria-label={`Status: ${info.Status}`}
                    ></div>
                  </td>

                  <td className="px-6 py-4 text-[#034db0]">
                    <a href="#" aria-label="View details">
                      {info.AllDetails} {">"}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredData.length === 0 && (
            <h2 className="text-3xl text-center mt-5">No Results Found...</h2>
          )}
        </div>
      </section>

      {/* Pagination Section */}
      <footer>
        <Pagination />
      </footer>
    </main>
  );
};

export default TableData;
