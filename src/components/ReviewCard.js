// components/ReviewCard.js

import React from 'react';

function ReviewCard({ customerName, reviewText, starRating }) {
  return (
    <div className="review-card">
      <h3>{customerName}</h3>
      <p>{reviewText}</p>
      <div className="star-rating">
        {/* Display stars based on starRating */}
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <span key={index} className={index <= starRating ? "on" : "off"}>
              ★
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ReviewCard;
