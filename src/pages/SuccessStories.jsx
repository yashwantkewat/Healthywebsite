import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SuccessStories = () => {
  const [expandedStory, setExpandedStory] = useState(null);

  const stories = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1672046218042-d1561ad2df9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHNwb3J0fGVufDB8fDB8fHww",
      title: "Success Story 1",
      description: "This is a brief description of the first success story.",
      fullDescription:
        "This is the full success story. It demonstrates how persistence and hard work can lead to extraordinary results. Never give up, and you'll achieve your dreams!",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1672046218112-30a20c735686?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHNwb3J0fGVufDB8fDB8fHww",
      title: "Success Story 2",
      description: "This is a brief description of the second success story.",
      fullDescription:
        "This individual achieved remarkable success by overcoming obstacles and staying focused. Their journey proves that with the right mindset, anything is possible!",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1663134090418-b27e76a752fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHNwb3J0fGVufDB8fDB8fHww",
      title: "Success Story 3",
      description: "This is a brief description of the third success story.",
      fullDescription:
        "This success story highlights the importance of perseverance, consistency, and the willingness to learn. It is a testament to how resilience can lead to great achievements!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1485313260896-6e6edf486858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNwb3J0fGVufDB8fDB8fHww",
      title: "Success Story 4",
      description: "This is a brief description of the fourth success story.",
      fullDescription:
        "This is a motivational success story of someone who didn't let setbacks stop them. They learned from failure and used it to fuel their future success!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHNwb3J0fGVufDB8fDB8fHww",
      title: "Success Story 5",
      description: "This is a brief description of the fifth success story.",
      fullDescription:
        "This person worked hard against all odds and emerged victorious. Their journey is proof that with enough determination and focus, anything is achievable!",
    },
    {
      image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxzcG9ydHxlbnwwfHwwfHx8MA%3D%3D",   
      title: "Success Story 5",
      description: "This is a brief description of the fifth success story.",
      fullDescription:
        "This person worked hard against all odds and emerged victorious. Their journey is proof that with enough determination and focus, anything is achievable!",
    },
    // ...other stories
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default duration of animation
      once: true, // Animation occurs only once
    });
  }, []);

  const handleReadMore = (index) => {
    setExpandedStory((prev) => (prev === index ? null : index));
  };

  return (
    <div className=" py-10 bg-amber-500">
      <h2
        className="text-3xl font-bold text-center text-blue-500 mb-6"
        data-aos="fade-down"
      >
        Success Stories
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        data-aos="fade-up"
      >
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 text-center flex flex-col items-center space-y-4"
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`} // Delay for staggered animations
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-32 h-32 rounded-full object-cover"
              data-aos="flip-left"
            />
            <h3
              className="text-xl font-semibold text-gray-800"
              data-aos="fade-right"
            >
              {story.title}
            </h3>
            <p className="text-gray-600">{story.description}</p>
            {expandedStory === index && (
              <p
                className="mt-4 text-green-700"
                data-aos="fade-in"
              >
                {story.fullDescription}
              </p>
            )}
            <button
              onClick={() => handleReadMore(index)}
              className="mt-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500"
              data-aos="zoom-out"
            >
              {expandedStory === index ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
