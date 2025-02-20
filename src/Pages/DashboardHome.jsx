import React from 'react';
import { FaPlus } from "react-icons/fa";
import DashboardSidebar from '../Components/DashboardSidebar';
import DashboardNavbar from '../Components/DashboardNavbar';

const DashboardHome = () => {
    return (
        <div className="flex h-screen">
           <DashboardSidebar />
      <div className="flex-1 flex flex-col">
       <DashboardNavbar />
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Total Tasks</h3>
              <p className="text-2xl font-bold">20</p>
            </div>
            <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Pending Tasks</h3>
              <p className="text-2xl font-bold">5</p>
            </div>
            <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">In Progress</h3>
              <p className="text-2xl font-bold">8</p>
            </div>
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Completed</h3>
              <p className="text-2xl font-bold">7</p>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:bg-indigo-700 transition">
              <FaPlus /> Add New
            </button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default DashboardHome;