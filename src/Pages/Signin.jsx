import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Signed In:", formData);
  };

  const handleGoogleSignin = () => {
    console.log("Google Signin Clicked");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 shadow-xl w-96">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            Sign In
          </button>
        </form>
        
        <div className="flex items-center my-4">
          <div className="w-full h-[1px] bg-gray-300"></div>
          <span className="px-2 text-white">OR</span>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleSignin}
          className="w-full flex items-center justify-center p-3 bg-white text-black font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-gray-200"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            className="w-6 h-6 mr-2"
          />
          Sign in with Google
        </button>

        <p className="text-center text-gray-200 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-white font-bold underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
