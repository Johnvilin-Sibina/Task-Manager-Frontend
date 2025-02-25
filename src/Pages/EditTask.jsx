import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaTasks, FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditTask = ({ taskId }) => {
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  // Fetch task details from backend using id
  const fetchTask = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/user/get-task/${taskId}`,
        {
          method: "GET",
          headers: {
            token: localStorage.getItem("Token"),
          },
        }
      );
      const data = await response.json();
      setTask(data.task);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/user/edit-task/${taskId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("Token"),
          },
          body: JSON.stringify(task),
        }
      );
      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        navigate("/dashboard?tab=mytasks");
      } else {
        toast.error(data.message || "Failed to update task");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate("/dashboard?tab=mytasks")}
            className="flex items-center text-gray-600 hover:text-indigo-600"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
          <h2 className="text-xl font-semibold text-gray-700">Edit Task</h2>
          <div></div>
        </nav>

        <div className="p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
              <FaTasks className="mr-2 text-indigo-600" /> Task Details
            </h3>

            {!task ? (
              <p className="text-center text-gray-600">Loading...</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-gray-600 font-medium">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={task.title || ""}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-gray-600 font-medium">Description</label>
                  <textarea
                    name="description"
                    value={task.description || ""}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                    rows="3"
                    required
                  ></textarea>
                </div>

                {/* Due Date */}
                <div>
                  <label className="text-gray-600 font-medium flex items-center">
                    <FaCalendarAlt className="mr-2 text-gray-500" /> Due Date
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    value={task.dueDate.slice(0, 10) || ""}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                {/* Priority & Status */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Priority */}
                  <div>
                    <label className="block text-gray-600 font-medium">Priority</label>
                    <select
                      name="priority"
                      value={task.priority || "Low"}
                      onChange={handleChange}
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                      required
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-gray-600 font-medium">Status</label>
                    <select
                      name="status"
                      value={task.status || "Pending"}
                      onChange={handleChange}
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                      required
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-600 transition"
                    onClick={() => navigate("/dashboard?tab=mytasks")}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
                  >
                    Update Task
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTask;

