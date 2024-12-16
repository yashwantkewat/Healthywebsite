import React, { useEffect } from 'react';
import Navbar from './Navbar'; // Adjust the import path based on your file structure
import CarouselComponent from '../pages/CarouselComponent';
import Locationshow from "../pages/Location";
import UserReviews from '../pages/UserReviews';
import SuccessStories from "../pages/SuccessStories";
import ContactSection from '../pages/ContactSection';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Home Section with Image and Gradient Background */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white px-4"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/542197958/photo/running-on-treadmill.webp?a=1&b=1&s=612x612&w=0&k=20&c=YVBDt6yWnggcib6drrK1Ym-10JEk5zjL4ZBKUqCI_EE=')`,
         backgroundSize:"cover",marginTop:"50px"
        }}
      >
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-t from-black via-transparent to-transparent">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
            Welcome to Our Service
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6" data-aos="fade-up" data-aos-delay="200">
            Discover amazing plans and features that suit your needs. Join us to start your journey today!
          </p>
          <button
            className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link to="/sign-up">Book Now</Link>
          </button>
        </div>
      </section>

      {/* Scroll Animations for Other Sections */}
      <section className="" data-aos="fade-right">
        <CarouselComponent />
      </section>

      <section className="bg-amber-500" data-aos="fade-left">
        <Locationshow />
      </section>

      <section className="bg-amber-500" data-aos="zoom-in">
        <UserReviews />
      </section>

      <section className="bg-amber-600" data-aos="flip-left">
        <SuccessStories />
      </section>

      <section className="py-16" data-aos="zoom-in-up">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
