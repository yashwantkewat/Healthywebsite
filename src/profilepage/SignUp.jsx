// src/profilepage/SignUp.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../redux/action';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }
    const user = { name, email, password };
    dispatch(signUpAction(user));
    navigate('/profile');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleSignUp}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Sign Up
        </button>
        <div className="mt-4 text-center">
          <Link to="/log-in" className="text-blue-500 hover:underline">
            Already have an account? Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
