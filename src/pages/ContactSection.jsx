import React, { useState, useEffect } from "react";
import { FaAppleAlt } from "react-icons/fa"; // Import icons
import { BiLogoPlayStore } from "react-icons/bi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const validationErrors = {};
    if (!formData.firstName) validationErrors.firstName = "First name is required";
    if (!formData.lastName) validationErrors.lastName = "Last name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.message) validationErrors.message = "Message cannot be empty";

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      // Simulate form submission (e.g., send data to the server)
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      }, 2000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="relative bg-amber-250 py-10">
      {/* Fog Effect */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10"
        style={{
          pointerEvents: "none",
          filter: `blur(${(cursorPosition.x / window.innerWidth) * 10}px)`,
          opacity: `${(cursorPosition.y / window.innerHeight) * 0.3 + 0.1}`,
          transition: "filter 0.1s ease-out, opacity 0.1s ease-out",
        }}
      ></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 z-20 relative">
        {/* Left Side: App Store & Play Store Buttons */}
        <div className="flex flex-col items-center space-y-6 lg:space-y-4 lg:items-start">
          <h2 className="text-3xl font-bold text-center text-blue-500">Download Our App</h2>
          <div className="flex flex-col space-y-4 mt-6">
            {/* App Store Button */}
            <p className="text-center text-3xl ">Join us on mobile!</p>
            <h2 className="text-blue-500 font-bold">Download the Spaces by Wix app and join <br /> to easily stay updated on the go.</h2>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-50 p-3 bg-black text-white rounded-lg shadow-md text-center hover:bg-gray-800"
              style={{
                transform: `translateX(${(cursorPosition.x / window.innerWidth) * 20 - 10}px)`,
                transformOrigin: "center",
                transition: "transform 0.1s ease-out, background-color 0.2s ease-out",
                filter: `brightness(${(cursorPosition.x / window.innerWidth) + 0.5})`,
              }}
            >
              <FaAppleAlt className="w-8 h-8 mr-2" />
              Download from App Store
            </a>
            {/* Play Store Button */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-50 p-3 bg-black text-white rounded-lg shadow-md text-center hover:bg-gray-800"
              style={{
                transform: `translateY(${(cursorPosition.y / window.innerHeight) * 20 - 10}px)`,
                transformOrigin: "center",
                transition: "transform 0.1s ease-out, background-color 0.2s ease-out",
                filter: `brightness(${(cursorPosition.y / window.innerHeight) + 0.5})`,
              }}
            >
              <BiLogoPlayStore className="w-8 h-8 mr-2 text-[#FFD700]" />
              Download from Play Store
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-700"
                style={{
                  transform: `rotate(${(cursorPosition.x / window.innerWidth) * 15 - 7.5}deg)`,
                  transition: "transform 0.2s ease-out",
                }}
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                required
                style={{
                  borderColor: `${
                    cursorPosition.x > window.innerWidth / 2 ? "blue" : "green"
                  }`,
                  boxShadow: `0 0 ${Math.abs(cursorPosition.x / 100)}px rgba(0, 0, 255, 0.5)`,
                }}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-gray-700"
                style={{
                  transform: `rotate(${(cursorPosition.x / window.innerWidth) * 15 - 7.5}deg)`,
                  transition: "transform 0.2s ease-out",
                }}
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                required
                style={{
                  borderColor: `${
                    cursorPosition.y > window.innerHeight / 2 ? "blue" : "green"
                  }`,
                  boxShadow: `0 0 ${Math.abs(cursorPosition.y / 100)}px rgba(0, 0, 255, 0.5)`,
                }}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
                style={{
                  transform: `rotate(${(cursorPosition.x / window.innerWidth) * 15 - 7.5}deg)`,
                  transition: "transform 0.2s ease-out",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? "border-red-500" : ""
                }`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.message ? "border-red-500" : ""
                }`}
                required
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md focus:outline-none hover:bg-amber-200"
                disabled={isSubmitting}
                style={{
                  opacity: `${(cursorPosition.x / window.innerWidth) * 0.5 + 0.5}`,
                  transition: "opacity 0.2s ease-out",
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>

            {isSuccess && (
              <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
