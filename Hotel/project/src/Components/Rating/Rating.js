import React, { useState } from 'react';

const Rating = ({ onChange, selectedColor }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
    onChange(value);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'active' : ''}
          onClick={() => handleRatingChange(star)}
          style={{ color: star <= rating ? selectedColor : 'black' }} // Apply selectedColor when star is selected
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Rating;
