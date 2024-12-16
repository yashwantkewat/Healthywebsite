import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Locationshow = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 50 }); // Initialize AOS with optional settings
  }, []);

  const locations = [
    {
      name: 'Delhi',
      address: 'Connaught Place, New Delhi, Delhi 110001, India',
    },
    {
      name: 'Mumbai',
      address: 'Marine Drive, Mumbai, Maharashtra 400020, India',
    },
    {
      name: 'Bangalore',
      address: 'MG Road, Bangalore, Karnataka 560001, India',
    },
    {
      name: 'Chennai',
      address: 'Connaught Place,  chennai , tamilnadu 110001, India',
    },
    {
      name: 'Pune',
      address: ' Drive, pune, Maharashtra 400020, India',
    },
    {
      name: 'Hyderabad',
      address: 'MG Road, Hyderabad, Telangana 560001, India',
    },
    {
      name: 'Kolkata',
      address: 'MG Road, kolkata, west bengal 569001, India',
    },
  ];

  return (
    <div className="bg-amber-400 py-10 h-full">
      <h2
        className="text-3xl font-bold text-center text-blue-500 mb-6"
        data-aos="fade-down"
      >
        Our Locations
      </h2>
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-6 px-4"
        data-aos="fade-up"
      >
        {/* Locations List */}
        <div
          className="flex flex-col space-y-4 w-full md:w-1/3"
          data-aos="fade-right"
        >
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {location.name}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{location.address}</p>
            </div>
          ))}
        </div>

        {/* Map */}
        <div
          className="w-full md:w-3/6 relative"
          style={{ paddingBottom: '56.25%' }}
          data-aos="fade-left"
        >
          {/* Wrapper to maintain aspect ratio */}
          <div className="absolute top-0 left-0 w-full h-full">
            <iframe
              title="India Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.8650417498316!2d75.88777917477522!3d22.72523612735968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd7bc434f421%3A0x463ade4a637a0bcb!2sDebugshala!5e1!3m2!1sen!2sin!4v1732522054848!5m2!1sen!2sin"
              className="w-full h-full rounded-lg border-0 shadow-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locationshow;
