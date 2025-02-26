import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/api/auth/forgot-password',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email})
            }            
        )
       const data = await response.json()
        if(response.ok){
            toast.success(data.message)
            navigate('/signin')
        }
        else{
            toast.error(data.message || "Cannot send mail")
        }
    } catch (error) {
        toast.error(error.message)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-white">Forgot Password</h2>
        <p className="text-sm text-gray-400 text-center">
          Enter your email address below, and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-2 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 transition"
          >
            Send Mail
          </button>
        </form>
        <p className="text-sm text-gray-400 text-center">
          Remember your password?{" "}
          <a href="/signin" className="text-purple-500 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
