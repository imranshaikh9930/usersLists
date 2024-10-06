import { createContext, useContext, useState } from "react";
import data from "../Components/data";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDepartments, setSelectedDepartments] = useState([]); // Store selected departments
    const [selectedStatus,setSelectedStatus] = useState([]);
    // Function to update the selected departments
    const updateSelectedDepartments = (departments) => {
      setSelectedDepartments(departments);
    };

    const updateSelectedStatus = (status)=>{
        setSelectedStatus(status);
    }
    const limit = 8; // Number of items per page

    const [arr, setArr] = useState(data); // Initial data

    // Calculate total pages based on the filtered array
    const totalPage = Math.ceil(arr.length / limit);

    // Calculate the starting and ending index for slicing
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;

    // Slice the array for the current page
    const paginatedData = arr.slice(startIndex, endIndex);

    // You can use this directly without creating another variable
    return (
        <UserContext.Provider value={{ search, setSearch, paginatedData, setArr, currentPage, setCurrentPage, totalPage,selectedDepartments,
            updateSelectedDepartments,selectedStatus,updateSelectedStatus}}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);
