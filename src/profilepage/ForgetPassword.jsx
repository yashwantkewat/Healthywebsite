// src/profilepage/ForgetPassword.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPasswordAction } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Corrected this line

  const handleResetPassword = () => {
    if (!email) {
      setError("Email is required.");
      setMessage('');
      return;
    }

    const newPassword = prompt("Enter your new password:");
    if (newPassword) {
      dispatch(resetPasswordAction(email, newPassword));
      setMessage("Password reset successful.");
      setError('');
      navigate("/"); // Navigates to the home page after successful reset
    } else {
      setError("Password reset cancelled.");
      setMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-300 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Forget Password</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleResetPassword}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
