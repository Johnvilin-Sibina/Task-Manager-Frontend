import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navigationbar from "../Components/Navigationbar";

const Signup = () => {

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register-user',
        {
          method:"POST",
          headers:{            
          'Content-Type':"application/json",
          },
          body:JSON.stringify(formData)
        }
      )
     const data =  await response.json()

     if (!response.ok) {
      toast.error(data.message || "Something went wrong");
      return;
    }

      if(response.ok){
        toast.success(data.message);
        navigate('/signin')
      }

    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <>
    <Navigationbar />
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 shadow-xl w-96">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="userName"
            placeholder="Full Name"
            value={formData.userName}
            onChange={handleChange}
            className="w-full p-3 text-white bg-transparent border border-white rounded-lg focus:outline-none placeholder-gray-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 text-white bg-transparent border border-white rounded-lg focus:outline-none placeholder-gray-200"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 text-white bg-transparent border border-white rounded-lg focus:outline-none placeholder-gray-200"
          />
          <button
            type="submit"
            className="w-full p-3 bg-white text-indigo-600 font-bold rounded-lg shadow-md transition-all duration-300 hover:bg-indigo-700 hover:text-white"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-200 mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-white font-bold underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Signup;
