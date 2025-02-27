import React, { useContext, useState } from "react";
import { FaCalendarAlt, FaTasks, FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { MyContext } from "../Context/MyProvider";

const AddTask = () => {
  const {currentUser} = useContext(MyContext)
    const user = currentUser?._id
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
    status: "Pending",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/api/user/add-task',
            {
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    'token':localStorage.getItem('Token')
                },
                body:JSON.stringify({...task,user})
            }
        )
        const data = await response.json()
        if(!response.ok){
            toast.error(data.message)
        }
        else{
            toast.success(data.message)
            setTask({title:"",description:"",dueDate:"",priority:"Medium",status:"Pending"})
        }
    } catch (error) {
        toast.error(error.message)
    }
  };

  return (
    <>
      <div className="flex-1 flex flex-col">
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-indigo-600"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
          <h2 className="text-xl font-semibold text-gray-700">Add New Task</h2>
          <div></div>
        </nav>

        <div className="p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
              <FaTasks className="mr-2 text-indigo-600" /> Task Details
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block text-gray-600 font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  value={task.title}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

             
              <div>
                <label className="block text-gray-600 font-medium">Description</label>
                <textarea
                  name="description"
                  value={task.description}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                  rows="3"
                  required
                ></textarea>
              </div>

              <div>
                <label className="text-gray-600 font-medium flex items-center">
                  <FaCalendarAlt className="mr-2 text-gray-500" /> Due Date
                </label>
                <input
                  type="date"
                  name="dueDate"
                  value={task.dueDate}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label className="block text-gray-600 font-medium">Priority</label>
                  <select
                    name="priority"
                    value={task.priority}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                    required
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-600 font-medium">Status</label>
                  <select
                    name="status"
                    value={task.status}
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

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-600 transition"
                  onClick={() => window.history.back()}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
                >
                  Save Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
  );
};

export default AddTask;
