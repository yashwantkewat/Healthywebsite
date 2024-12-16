import React, { useState } from 'react';
import { 
  Award, 
  Target, 
  Heart, 
  Users, 
  Trophy, 
  Star 
} from 'lucide-react';
import Navbar from './Navbar';
import ContactSection from '../pages/ContactSection';
import Footer from './Footer';
import VisionAbout from '../aboutPage/Visionabout';
// Team member data with more detailed information
const teamMembers = [
  {
    name: 'james Rodriguez',
    role: 'Head Trainer',
    bio: 'A certified strength and conditioning specialist with 10+ years of experience in professional fitness training.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Dw8cyeis6I7KtFNu4sDeIrsAUdkUMYsfJg&s',
    specialties: ['Strength Training', 'Weight Loss', 'Athletic Performance'],
    achievements: ['National Fitness Champion 2022', 'CrossFit Level 2 Trainer']
  },
  {
    name: 'Michael Chen',
    role: 'Nutrition Coach',
    bio: 'Registered dietitian with a passion for helping clients achieve optimal health through personalized nutrition plans.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsXq9rMepKOvAg9esNxcD4G9vW4058gecobQ&s',
    specialties: ['Sports Nutrition', 'Weight Management', 'Meal Planning'],
    achievements: ['Nutrition Educator of the Year', 'Published Nutrition Researcher']
  },
  {
    name: 'miyang Thompson',
    role: 'Yoga & Mindfulness Instructor',
    bio: 'Experienced yoga master specializing in holistic wellness and mental health through mindful movement.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpqAaS8uhK-okmRxyu6VDtMthpywFcgRE4JA&s',
    specialties: ['Vinyasa Yoga', 'Meditation', 'Stress Management'],
    achievements: ['Yoga Alliance Advanced Instructor', 'Mindfulness Conference Speaker']
  }
];

const GymAboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);
  const [activeSection, setActiveSection] = useState('story');

  const gymValues = [
    {
      icon: Target,
      title: 'Goal-Oriented Approach',
      description: 'Personalized fitness strategies tailored to individual objectives and potential.'
    },
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'Focusing on physical, mental, and emotional well-being beyond just physical training.'
    },
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'Creating a motivating and inclusive environment where every member feels empowered.'
    }
  ];

  return (
    <>  
    <Navbar/>
    <div className="min-h-screen bg-amber-200 py-16 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            About Our Fitness Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming lives through personalized fitness, expert guidance, and a supportive community dedicated to your wellness journey.
          </p>
        </div>

        {/* Story and Values Navigation */}
        <div className="flex justify-center mb-12 space-x-4">
          {['story', 'values', 'team'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`
                px-6 py-3 rounded-full capitalize text-lg font-semibold transition-all duration-300
                ${activeSection === section 
                  ? 'bg-blue-600 text-white shadow-xl' 
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'}
              `}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Conditional Rendering Based on Active Section */}
        {activeSection === 'story' && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Our Journey
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2010, our gym started with a simple mission: to create a transformative fitness experience that goes beyond traditional workouts. We believe in empowering individuals to unlock their full potential through personalized training, expert guidance, and a supportive community.
              </p>
              <div className="flex space-x-4">
                <div className="text-center" data-aos="zoom-in-down">
                  <Trophy className="w-12 h-12 mx-auto text-blue-600 mb-2" />
                  <span className="font-bold text-gray-800">10+ Years</span>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
                <div className="text-center" data-aos="zoom-in-down">
                  <Users className="w-12 h-12 mx-auto text-green-600 mb-2" />
                  <span className="font-bold text-gray-800">5000+</span>
                  <p className="text-sm text-gray-600">Members</p>
                </div>
                <div className="text-center" data-aos="zoom-in-down">
                  <Award className="w-12 h-12 mx-auto text-yellow-600 mb-2" />
                  <span className="font-bold text-gray-800">15+</span>
                  <p className="text-sm text-gray-600">Awards</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mKDadi-efi7_ooJ_MEJtbewnuA5r4bLc5w&s" 
                alt="Gym Facility" 
                className="w-full rounded-lg shadow-md transform transition-transform hover:scale-105"
              />
            </div>
          </div>
        )}

        {activeSection === 'values' && (
          <div className="grid md:grid-cols-3 gap-8">
            {gymValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105"
                  data-aos="zoom-in-up"
                >
                  <IconComponent className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {activeSection === 'team' && (
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className={`
                  bg-white rounded-xl shadow-lg p-6 text-center cursor-pointer transition-all duration-300
                  ${selectedMember.name === member.name 
                    ? 'scale-105 border-4 border-blue-500' 
                    : 'hover:scale-105'}
                `}
                data-aos="zoom-in-down"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
              </div>
            ))}
          </div>
        )}

        {/* Member Details Modal */}
        {selectedMember && activeSection === 'team' && (
          <div className="mt-12 bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              {selectedMember.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">{selectedMember.bio}</p>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Specialties
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  {selectedMember.specialties.map((specialty, index) => (
                    <li key={index}>{specialty}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Achievements
                </h3>
                <ul className="space-y-2">
                  {selectedMember.achievements.map((achievement, index) => (
                    <li 
                      key={index} 
                      className="flex items-center text-gray-600"
                    >
                      <Star className="w-5 h-5 mr-2 text-yellow-500" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    <VisionAbout/>
    <ContactSection/>
    <Footer/>
    </>
  );
};

export default GymAboutUs;