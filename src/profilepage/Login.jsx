// src/profilepage/SignIn.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../redux/action';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignIn = () => {
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    if (user && user.email === email && user.password === password) {
      dispatch(loginAction(user));
      navigate('/');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-400 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Sign In</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
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
          onClick={handleSignIn}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Sign In
        </button>
        <div className="mt-4 text-center">
          <Link to="/sign-up" className="text-blue-500 hover:underline">
            Don't have an account? Sign Up
          </Link>
        </div>
        <div className="mt-2 text-center">
          <Link to="/forget-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
