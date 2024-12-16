import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Importing Social Icons

const Footer = () => {
    const [email, setEmail] = useState("");

    // Handle email change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Handle email subscription
    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle subscription logic here (e.g., send email to server)
        alert(`Subscribed with email: ${email}`);
    };

    return (
        <footer className="bg-amber-400 text-white py-10">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0">

                {/* Left Side: Email Subscription */}
                <div className="text-center lg:text-left">
                    <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                    <form onSubmit={handleSubscribe} className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className="w-full lg:w-72 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />

                        {/* Checkbox for subscription confirmation */}
                        <div className="flex items-center space-x-2 mt-4 lg:mt-0">
                            <input
                                type="checkbox"
                                id="subscribeCheckbox"
                                required
                                className="h-5 w-5"
                            />
                            <label htmlFor="subscribeCheckbox" className="text-sm text-white-700">
                                Yes, Subscribe for letter
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full lg:w-auto py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Right Side: Social Icons and Address */}
                <div className="text-center lg:text-right">
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex justify-center lg:justify-end space-x-6 mb-6">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                            <FaFacebookF className="w-6 h-6" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                            <FaLinkedinIn className="w-6 h-6" />
                        </a>
                    </div>

                    <p className="text-sm text-gray-400">1234 Street Name, City, Country</p>
                    <p className="text-sm text-gray-400">contact@company.com</p>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="text-center mt-8 text-sm text-gray-500">
                <p>&copy; 2024 Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
