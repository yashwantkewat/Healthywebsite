import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CarouselComponent() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const schedule = [
    { day: 'Monday', time: '1 hr', price: '$25', img: 'https://static.wixstatic.com/media/8489c8_23a87a36e27f4f01bd0f906ce92de77b~mv2_d_4498_2833_s_4_2.jpg/v1/fill/w_403,h_403,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/8489c8_23a87a36e27f4f01bd0f906ce92de77b~mv2_d_4498_2833_s_4_2.jpg' },
    { day: 'Tuesday', time: '1 hr', price: '$25', img: 'https://static.wixstatic.com/media/8489c8_8cb73bfe3cd649e9a2d128159a181f6e~mv2_d_4498_2833_s_4_2.jpg/v1/fill/w_403,h_403,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/8489c8_8cb73bfe3cd649e9a2d128159a181f6e~mv2_d_4498_2833_s_4_2.jpg' },
    { day: 'Wednesday', time: '1 hr', price: '$25', img: 'https://plus.unsplash.com/premium_photo-1661920538067-c48451160c72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fHww' },
    { day: 'Thursday', time: '1 hr', price: '$25', img: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D' },
    { day: 'Friday', time: '1 hr', price: '$25', img: 'https://media.istockphoto.com/id/542197958/photo/running-on-treadmill.webp?a=1&b=1&s=612x612&w=0&k=20&c=YVBDt6yWnggcib6drrK1Ym-10JEk5zjL4ZBKUqCI_EE=' },
    { day: 'Saturdayday', time: '1 hr', price: '$25', img: 'https://media.istockphoto.com/id/1152600336/photo/male-friends-exercising-at-health-club.webp?a=1&b=1&s=612x612&w=0&k=20&c=LTS9GLNDw7cHX77idydMc4-flDjGTefZ20bL8NAgsCo=' },
    { day: 'Sunday', time: '1 hr', price: '$25', img: 'https://media.istockphoto.com/id/2151051664/photo/two-young-happy-indian-fitness-adult-girls-holding-water-bottle-relaxing-after-workout-in-gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=wu6XnVkDiS3JbDHHTcolIsyKG6ZvbL_i08_N1BVqqUk=' },
  ];

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-gray-100 py-10 bg-amber-200">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-6" data-aos="fade-up">Weekly Schedule</h2>
      <div className="flex flex-wrap justify-center gap-6 bg-amber-400">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-lg p-4 w-64 text-center border border-gray-200 m-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.day}
              className="w-full h-40 object-cover rounded-md mb-4 transform transition-all duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transform transition-all duration-300 hover:text-blue-600">{item.day}</h3>
            <p className="text-gray-600">{item.time}</p>
            <p className="text-blue-500 font-bold">{item.price}</p>
            <button
              className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition duration-200 transform hover:scale-105"
            >
              <Link to="/sign-up">Book Now</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselComponent;
