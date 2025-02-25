import React, { useEffect, useState } from "react";
import DashboardNavbar from "../Components/DashboardNavbar";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  // Fetch task details from backend using id
  const fetchTask = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/user/get-task/${id}`,
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
        `http://localhost:5000/api/user/edit-task/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("Token"),
          },
          body: JSON.stringify(task),
        }
      );
      const data = response.json();

      if (response.ok) {
        toast.success(data.message);
        navigate("/dashboard?tab=mytasks");
      } else {
        toast.error("Failed to update task");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-gray-100">
      <DashboardNavbar />
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Edit Task</h2>
        {/* Show loading message if task is still being fetched */}
        {!task ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={task.title || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Description</label>
              <textarea
                name="description"
                value={task.description || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              ></textarea>
            </div>
            <div>
              <label className="block font-medium">Priority</label>
              <select
                name="priority"
                value={task.priority || "Low"}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Status</label>
              <select
                name="status"
                value={task.status || "Pending"}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={task.dueDate.slice(0, 10) || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Update Task
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditTask;
