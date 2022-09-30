import React from "react";

import "../../styles/contact-us.css";

export const Review = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-us review">
      <div className="contact contact-form">
        <h3>Leave a review</h3>
        <form onSubmit={handleSubmit}>
              <textarea
                placeholder="Write your review here..."
                className="form-control"
              ></textarea>
              <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
