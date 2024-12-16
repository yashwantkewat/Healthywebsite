import React, { useState } from 'react';
import Login from '../profilepage/Login'; // Adjust import paths as necessary
import SignUp from '../profilepage/SignUp';
import ForgetPassword from '../profilepage/ForgetPassword';
import {Link} from "react-router-dom"
const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const handleSignUp = (userData) => {
    setUser(userData); // Update user state
  };

  const handleLogout = () => {
    setUser(null); // Clear user state
    localStorage.removeItem('user'); // Remove user from local storage
  };

  const handlePasswordReset = () => {
    console.log("Password reset process complete.");
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-amber-600 px-4">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Welcome</h2>
          <Login />
          <SignUp onSignUp={handleSignUp} />
          <ForgetPassword onResetPassword={handlePasswordReset} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-300 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Your Profile</h2>
        <div className="text-center mb-6">
          <p className="text-lg font-medium text-gray-600">Name: <span className="text-gray-800">{user.name}</span></p>
          <p className="text-lg font-medium text-gray-600">Email: <span className="text-gray-800">{user.email}</span></p>
          <p className="text-lg font-medium text-gray-600">password: <span className="text-gray-800">{user.password}</span></p>

        </div>
        <button
          onClick={handleLogout}
          className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/sign-up" className="text-blue-500 hover:underline">
              sign up
            </Link>
          </p> <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/log-in" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      

      </div>
    </div>
  );
};

export default Profile;
