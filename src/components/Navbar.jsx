import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  
  // Function to track cursor movement
  const handleMouseMove = (e) => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY
    });
  };

  // Adding mousemove event listener on component mount
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <nav className="bg-blue-500 text-white fixed top-0 left-0 w-screen z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              Health Tracker
            </a>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/Plan-Prices" className="hover:text-gray-200">Plans & Pricing</Link>
            <Link to="/class-schedule" className="hover:text-gray-200">Classes</Link>
            <Link to="/About-us" className="hover:text-gray-200">About</Link>
            <Link to="/contact-us" className=" hover:text-gray-200">Contact</Link>
            <Link to="/Profile" className="hover:text-gray-200">Profile</Link>
          
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 ">
            <Link to="/" className="block px-4 py-2 hover:bg-blue-600">Home</Link>
            <Link to="/Plan-Prices" className="block px-4 py-2 hover:bg-blue-600">Plans & Pricing</Link>
            <Link to="/class-schedule" className="block px-4 py-2 hover:bg-blue-600">Classes</Link>
            <Link to="/About-us" className="block px-4 py-2 hover:bg-blue-600">About</Link>
          <Link to="/contact-us" className="block px-4 py-2 hover:bg-blue-600">Contact</Link>
          <Link to="/Profile" className="block px-4 py-2 hover:bg-blue-600">Profile</Link>
       
        </div>
      )}

      {/* Fog Effect */}
      <div
        style={{
          position: 'absolute',
          top: `${cursorPos.y - 0}px`,  // Adjust position to follow the cursor
          left: `${cursorPos.x - 0}px`, // Adjust position to follow the cursor
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          pointerEvents: 'none',
          transition: 'all 0.1s ease-out',
          zIndex: '999',
        }}
      />
    </nav>
  );
};

export default Navbar;
