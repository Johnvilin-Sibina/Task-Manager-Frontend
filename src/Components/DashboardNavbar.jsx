import React from 'react';
import { FaSearch } from "react-icons/fa";


const DashboardNavbar = () => {
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-1/3">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search tasks..."
            className="ml-2 outline-none w-full"
          />
        </div>
        <div className="flex items-center">
          <img
            src="./avatar.jpg" 
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>
      </nav>
    );
};

export default DashboardNavbar;