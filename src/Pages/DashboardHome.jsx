import React, { useContext, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import DashboardNavbar from "../Components/DashboardNavbar";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/MyProvider";

const DashboardHome = () => {
  const {currentUser,tasks,setTasks} = useContext(MyContext)
  const user = currentUser?._id || JSON.parse(localStorage.getItem("currentUser"))?._id;
  const navigate = useNavigate()

  const fetchTasks = async () => {
    const response = await fetch(
      `https://task-manager-backend-o32y.onrender.com/api/user/get-tasks/${user}`,
      {
        method: "GET",
        headers: {
          token: localStorage.getItem("Token"),
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('tasks',JSON.stringify(data.tasks))
      setTasks(data.tasks);
    }
  };

  useEffect(() => {
      fetchTasks();
  },[]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === "Completed").length;
  const pendingTasks = tasks.filter(task => task.status === "Pending").length;
  const inProgressTasks = tasks.filter(task => task.status === "In Progress").length;

  return (
    <div className="flex-1 flex flex-col">
      <DashboardNavbar />
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Tasks</h3>
            <p className="text-2xl font-bold">{totalTasks}</p>
          </div>
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Pending Tasks</h3>
            <p className="text-2xl font-bold">{pendingTasks || 0 }</p>
          </div>
          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">In Progress</h3>
            <p className="text-2xl font-bold">{inProgressTasks || 0 }</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Completed</h3>
            <p className="text-2xl font-bold">{completedTasks || 0 }</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button onClick={()=>navigate('/dashboard?tab=addtask')} className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:bg-indigo-700 transition">
            <FaPlus /> Add New
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
