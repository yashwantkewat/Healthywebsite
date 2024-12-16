import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import Navbar from './Navbar';
import ContactSection from '../pages/ContactSection';
import Footer from './Footer';
import BenefitsPrice from "../PlanPricePage/benefitCategories"
const memberships = [
  {
    tier: 'Silver',
    price: 29.99,
    duration: '1 Month',
    features: [
      'Basic Gym Access',
      'Standard Equipment',
      'Limited Group Classes',
      'Locker Room Access'
    ],
    durationMonths: 1,
    color: 'bg-gray-100 border-gray-300'
  },
  {
    tier: 'Gold',
    price: 149.99,
    duration: '6 Months',
    features: [
      'Full Gym Access',
      'Premium Equipment',
      'Unlimited Group Classes',
      'Personal Trainer Consultation (1 session)',
      'Nutrition Guidance',
      'Sauna & Steam Room'
    ],
    durationMonths: 6,
    color: 'bg-yellow-50 border-yellow-300'
  },
  {
    tier: 'Platinum',
    price: 279.99,
    duration: '1 Year',
    features: [
      'Unlimited Gym Access',
      'All Premium Equipment',
      'Unlimited Group Classes',
      '4 Personal Trainer Sessions',
      'Comprehensive Nutrition Plan',
      'Spa & Recovery Center Access',
      'Priority Class Booking',
      'Monthly Body Composition Analysis'
    ],
    durationMonths: 12,
    color: 'bg-blue-50 border-blue-300'
  }
];

const MembershipPricing = () => {
  const [selectedMembership, setSelectedMembership] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!selectedMembership) {
      newErrors.membership = 'Please select a membership';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process membership registration
      alert(`Membership Registered: ${selectedMembership.tier} Tier`);
      // Here you would typically send data to backend
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>  
    <Navbar/>
    <div className="min-h-screen bg-amber-200 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Gym Membership Plans
        </h1>

        {/* Membership Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {memberships.map((membership) => (
            <div 
              key={membership.tier}
              className={`
                border-2 rounded-xl p-6 transform transition-all duration-300
                ${selectedMembership === membership 
                  ? 'scale-105 shadow-2xl border-blue-500' 
                  : 'hover:shadow-xl hover:scale-105'}
                ${membership.color}
              `}
              onClick={() => setSelectedMembership(membership)}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {membership.tier}
                </h2>
                {selectedMembership === membership && (
                  <Check className="text-green-500" />
                )}
              </div>
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-gray-900">
                  ${membership.price}
                </span>
                <span className="text-gray-600 ml-2">
                  / {membership.duration}
                </span>
              </div>
              <ul className="space-y-2 mb-6">
                {membership.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="text-green-500 mr-2 w-5 h-5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Registration Form */}
        <form 
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Register for Membership
          </h2>

          {selectedMembership && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="font-bold">Selected Plan:</p>
              <p className="text-xl text-blue-700">
                {selectedMembership.tier} Membership
              </p>
              <p className="text-gray-600">
                ${selectedMembership.price} for {selectedMembership.duration}
              </p>
            </div>
          )}

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`
                w-full p-3 border rounded-lg
                ${errors.name ? 'border-red-500' : 'border-gray-300'}
              `}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <X className="mr-2 w-4 h-4" /> {errors.name}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`
                w-full p-3 border rounded-lg
                ${errors.email ? 'border-red-500' : 'border-gray-300'}
              `}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <X className="mr-2 w-4 h-4" /> {errors.email}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`
                w-full p-3 border rounded-lg
                ${errors.phone ? 'border-red-500' : 'border-gray-300'}
              `}
              placeholder="Enter 10-digit phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <X className="mr-2 w-4 h-4" /> {errors.phone}
              </p>
            )}
          </div>

          <button
            type="submit"
            className={`
              w-full p-3 rounded-lg text-white font-bold transition-all duration-300
              ${selectedMembership 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-gray-400 cursor-not-allowed'}
            `}
            disabled={!selectedMembership}
          >
            {selectedMembership 
              ? `Select ${selectedMembership.tier} Membership` 
              : 'Select a Membership Plan'}
          </button>
        </form>
      </div>
    </div>
    <BenefitsPrice/>
    <ContactSection/>
    <Footer/>
    </>
  );
};

export default MembershipPricing;