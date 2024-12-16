import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Importing useDispatch from react-redux
import Footer from "./Footer";
import Navbar from "./Navbar";
import { MapPin, Mail, Clock, User, Phone, MessageCircle, Send } from 'lucide-react';
import { signUpAction } from '../redux/action'; // Import the action
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Contact = () => {
  const dispatch = useDispatch(); // Initialize dispatch function
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, phone, subject, message } = formData;
    if (!/^[A-Za-z\s]+$/.test(name)) newErrors.name = 'Name should only contain letters and spaces.';
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) newErrors.email = 'Invalid email.';
    if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Phone must be 10 digits.';
    if (!/^[A-Za-z\s]+$/.test(subject)) newErrors.subject = 'Subject should contain only letters.';
    if (!message.trim()) newErrors.message = 'Message cannot be empty.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate form before dispatching
    if (validateForm()) {
      // Dispatch the signUpAction with form data
      dispatch(signUpAction(formData)); // This will send form data to the Redux store
      console.log('Form Submitted', formData);
  
      // Clear form data after successful submission
      setFormData({name: '',email: '',phone: '',subject: '',message: ''});
  
      // Optionally, clear errors as well
      setErrors({name: '',email: '',phone: '',subject: '',message: ''});
    } else {
      console.log('Form has errors:', errors);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration for animations
  }, []);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-amber-200 py-16 mt-12">
        <div className="container mx-auto px-4">
          {/* Contact Info Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Address Info */}
            <div data-aos="fade-up" className="bg-[#071c34] text-center p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center">
                <MapPin className="text-[#fda40b] text-5xl mb-4" />
                <h2 className="text-white text-2xl uppercase font-semibold mb-4">Address</h2>
                <span className="text-gray-400 text-base">cs Naidu circle old Palasia 176080</span>
                <span className="text-gray-400 text-base">Indore MadhyaPradesh, INDIA</span>
              </div>
            </div>

            {/* Email Info */}
            <div data-aos="fade-up" className="bg-[#071c34] text-center p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center">
                <Mail className="text-[#fda40b] text-5xl mb-4" />
                <h2 className="text-white text-2xl uppercase font-semibold mb-4">E-mail</h2>
                <span className="text-gray-400 text-base">yashkewat78@gmail.com</span>
                <span className="text-gray-400 text-base">yashkewat78@gmail.com</span>
              </div>
            </div>

            {/* Office Time Info */}
            <div data-aos="fade-up" className="bg-[#071c34] text-center p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center">
                <Clock className="text-[#fda40b] text-5xl mb-4" />
                <h2 className="text-white text-2xl uppercase font-semibold mb-4">Office Time</h2>
                <span className="text-gray-400 text-base">Mon - Fri 9:00 am - 6:00 pm</span>
                <span className="text-gray-400 text-base">Sat - Sun 11:00 pm - 2:00 pm</span>
              </div>
            </div>
          </div>

          {/* Form and Map Row */}
          <div className="grid md:grid-cols-12 gap-6">
            {/* Contact Form */}
            <div data-aos="fade-up" className="md:col-span-8 bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-[#071c34] text-2xl font-bold mb-6 text-center">Get in Touch</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-blue-200 rounded-xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-lg"></div>
                    <div className="relative bg-white p-4 rounded-xl flex items-center space-x-3 border border-gray-200">
                      <User className="text-blue-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full outline-none text-gray-700 placeholder-gray-400"
                      />
                      {errors.name && <p className="text-red-500">{errors.name}</p>}
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-blue-200 rounded-xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-lg"></div>
                    <div className="relative bg-white p-4 rounded-xl flex items-center space-x-3 border border-gray-200">
                      <Mail className="text-blue-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail"
                        required
                        className="w-full outline-none text-gray-700 placeholder-gray-400"
                      />
                      {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-blue-200 rounded-xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-lg"></div>
                    <div className="relative bg-white p-4 rounded-xl flex items-center space-x-3 border border-gray-200">
                      <Phone className="text-blue-500" />
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full outline-none text-gray-700 placeholder-gray-400"
                      />
                      {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-blue-200 rounded-xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-lg"></div>
                    <div className="relative bg-white p-4 rounded-xl flex items-center space-x-3 border border-gray-200">
                      <MessageCircle className="text-blue-500" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full outline-none text-gray-700 placeholder-gray-400"
                      />
                      {errors.subject && <p className="text-red-500">{errors.subject}</p>}
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-blue-200 rounded-xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-lg"></div>
                  <div className="relative bg-white p-4 rounded-xl flex items-start space-x-3 border border-gray-200">
                    <MessageCircle className="text-blue-500 mt-2" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write Your Message"
                      className="w-full h-32 outline-none text-gray-700 placeholder-gray-400"
                    ></textarea>
                    {errors.message && <p className="text-red-500">{errors.message}</p>}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                    <Send className="mr-2 inline-block" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Google Map */}
            <div data-aos="fade-up" className="md:col-span-4">
              <div className="relative pt-[56.25%]">
                <iframe
                  src="https://maps.google.com/maps?q=Indore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  title="Google Map"
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
