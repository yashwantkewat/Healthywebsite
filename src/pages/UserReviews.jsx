import React, { useState } from 'react';

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    review: '',
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddReview = () => {
    if (formData.name && formData.image && formData.review && formData.rating) {
      setReviews([...reviews, formData]);
      setFormData({ name: '', image: '', review: '', rating: 0 }); // Reset the form
    } else {
      alert('Please fill all fields before submitting!');
    }
  };

  return (
    <div className="bg-gray-100 py-10 px-4 bg-amber-200">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">User Reviews</h2>
      <div className="max-w-3xl mx-auto">
        {/* Add Review Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add Your Review</h3>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="Image URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <textarea
              name="review"
              value={formData.review}
              onChange={handleInputChange}
              placeholder="Your Review"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              rows="3"
            ></textarea>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              placeholder="Rating (1-5)"
              min="1"
              max="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              onClick={handleAddReview}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            >
              Submit Review
            </button>
          </div>
        </div>

        {/* Display Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {reviews.length > 0 ? (
    reviews.map((review, index) => (
      <div
        key={index}
        className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4"
      >
        <img
          src={review.image}
          alt={review.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="text-xl font-semibold text-gray-800">{review.name}</h4>
          <p className="text-gray-600">{review.review}</p>
          <p className="text-yellow-500">Rating: {review.rating} / 5 ⭐</p>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-500 text-center col-span-full">No reviews yet. Be the first to review!</p>
  )}
</div>

      </div>
    </div>
  );
};

export default UserReviews;
