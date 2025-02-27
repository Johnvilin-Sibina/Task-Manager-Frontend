import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {id,token} = useParams()
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:5000/api/auth/reset-password/${id}/${token}`,
            {
                method:"PUT",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({newPassword,confirmPassword})
            }
        )
        const data = await response.json()
        if(response.ok){
            toast.success(data.message)
            navigate('/signin')
        }
        else{
            toast.error(data.message || "Unable to reset password")
        }
    } catch (error) {
       toast.error(error.message)
       console.log(error.message) 
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-white">Reset Password</h2>
        <p className="text-sm text-gray-400 text-center">
          Enter a new password to reset your account.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">New Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-2 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 transition"
          >
            Set Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
