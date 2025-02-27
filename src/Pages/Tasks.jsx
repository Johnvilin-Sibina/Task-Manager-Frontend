import React, { useContext, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DashboardNavbar from "../Components/DashboardNavbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/MyProvider";

const Tasks = () => {
  const { tasks, setTasks } = useContext(MyContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/user/delete-task/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("Token"),
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setTasks(tasks.filter((task) => task._id !== id));
        toast.success(data.message);
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEdit = (id) => {
    navigate(`/dashboard?tab=edittask&id=${id}`);
  };

  // **Filter Tasks Based on Search Query**
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery) || // Search by title
      task.status.toLowerCase().includes(searchQuery) ||  // Search by status
      task.priority.toLowerCase().includes(searchQuery) // Search by priority
  );

  return (
    <div className="flex-1 flex flex-col">
      <DashboardNavbar setSearchQuery={setSearchQuery} /> 
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
            Your Tasks
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <div
                  key={task._id}
                  className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {task.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {task.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Due Date:</strong> {task.dueDate.slice(0, 10)}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Priority:</strong> {task.priority}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Status:</strong> {task.status}
                  </p>

                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => handleEdit(task._id)}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition"
                    >
                      <FaEdit className="mr-2" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-600 transition"
                    >
                      <FaTrash className="mr-2" /> Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No matching tasks found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
