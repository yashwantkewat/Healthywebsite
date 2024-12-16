import React, { useState } from 'react';
import { 
  Target, 
  Star, 
  Quote, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle 
} from 'lucide-react';

// Vision statements with detailed descriptions
const visionStatements = [
  {
    icon: Target,
    title: 'Empowerment Through Fitness',
    description: 'Our vision is to transform lives by providing a holistic approach to fitness that goes beyond physical training. We believe in empowering individuals to unlock their full potential, both physically and mentally.',
    impactPoints: [
      'Personalized fitness journeys',
      'Comprehensive wellness approach',
      'Supportive and inclusive community'
    ]
  },
  {
    icon: CheckCircle,
    title: 'Continuous Growth and Innovation',
    description: 'We are committed to constant innovation in fitness methodology, technology, and personal training techniques. Our goal is to stay at the forefront of health and wellness trends.',
    impactPoints: [
      'Cutting-edge training methods',
      'Regular program updates',
      'Advanced fitness technology'
    ]
  },
  {
    icon: Star,
    title: 'Holistic Well-being',
    description: 'We focus on total well-being, integrating physical fitness, nutrition, mental health, and lifestyle coaching to create comprehensive wellness solutions for our members.',
    impactPoints: [
      'Mind-body connection',
      'Nutritional guidance',
      'Stress management programs'
    ]
  }
];

// User reviews for the last 5 months
const userReviews = [
  {
    name: 'Jessica Martinez',
    image: 'https://randomuser.me/api/portraits/women/45.jpg', // Example image URL
    date: 'November 2024',
    rating: 5,
    review: 'Absolutely transformed my fitness journey! The personalized training and supportive community have been incredible. I\'ve never felt more motivated and confident.',
    profession: 'Marketing Manager'
  },
  {
    name: 'Michael Thompson',
    image: 'https://randomuser.me/api/portraits/men/32.jpg', // Example image URL
    date: 'October 2024',
    rating: 4,
    review: 'Great facilities and knowledgeable trainers. The nutrition guidance has been a game-changer for my overall health and fitness goals.',
    profession: 'Software Engineer'
  },
  {
    name: 'Sarah Kim',
    image: 'https://randomuser.me/api/portraits/women/28.jpg', // Example image URL
    date: 'September 2024',
    rating: 5,
    review: 'The group classes are amazing! I\'ve made great friends and achieved fitness goals I never thought possible. Truly life-changing experience.',
    profession: 'Teacher'
  },
  {
    name: 'David Rodriguez',
    image: 'https://randomuser.me/api/portraits/men/15.jpg', // Example image URL
    date: 'August 2024',
    rating: 4,
    review: 'Excellent gym with top-notch equipment and friendly staff. The personal training sessions have been incredibly helpful in my fitness journey.',
    profession: 'Architect'
  },
  {
    name: 'Emily Chen',
    image: 'https://randomuser.me/api/portraits/women/50.jpg', // Example image URL
    date: 'July 2024',
    rating: 5,
    review: 'Found my fitness home! The holistic approach to wellness, combining physical training, nutrition, and mental health support, is exactly what I needed.',
    profession: 'Nurse'
  }
];

const VisionAbout = () => {
  const [currentVision, setCurrentVision] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  const handleNextVision = () => {
    setCurrentVision((prev) => (prev + 1) % visionStatements.length);
  };

  const handlePrevVision = () => {
    setCurrentVision((prev) => (prev - 1 + visionStatements.length) % visionStatements.length);
  };

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % userReviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev - 1 + userReviews.length) % userReviews.length);
  };

  return (
    <div className="min-h-screen bg-amber-600  py-16 px-4">
      <div className="container mx-auto">
        {/* Vision Section */}
        <section className="mb-16 ">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Vision
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
              {/* Navigation Buttons */}
              <button 
                onClick={handlePrevVision}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-all"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button 
                onClick={handleNextVision}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-all"
              >
                <ArrowRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Vision Content */}
              <div className="text-center">
                {visionStatements.map((vision, index) => (
                  <div 
                    key={vision.title}
                    className={`
                      transition-all duration-500 ease-in-out
                      ${currentVision === index ? 'block' : 'hidden'}
                    `}
                  >
                    <vision.icon className="w-16 h-16 mx-auto mb-6 text-blue-600" />
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {vision.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {vision.description}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      {vision.impactPoints.map((point, pointIndex) => (
                        <div 
                          key={pointIndex}
                          className="bg-blue-50 p-4 rounded-lg flex items-center"
                        >
                          <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                          <span className="text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* User Reviews Section */}
        <section className='bg-amber-500'>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 ">
            Member Experiences
          </h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
              {/* Navigation Buttons */}
              <button 
                onClick={handlePrevReview}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-all"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button 
                onClick={handleNextReview}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-all"
              >
                <ArrowRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Reviews Content */}
              {userReviews.map((review, index) => (
                <div 
                  key={review.name}
                  className={`
                    transition-all duration-500 ease-in-out text-center
                    ${currentReview === index ? 'block' : 'hidden'}
                  `}
                >
                  <Quote className="w-16 h-16 mx-auto mb-6 text-blue-600 opacity-20" />
                  <p className="text-xl text-gray-700 italic mb-6">
                    "{review.review}"
                  </p>
                  <div className="flex justify-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-6 h-6 text-yellow-400 fill-current" 
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">
                        {review.name}
                      </h4>
                      <p className="text-gray-600">{review.profession}</p>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VisionAbout;
