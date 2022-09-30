import React, { useEffect } from "react";

import "../../styles/user-reviews.css";

export const PostReview = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <form onSubmit={handleSubmit} className="">
      <textarea name="text" idName="text" className="d-flex container-fluid justify-content-center mt-5 " style={{ width: 30 + "rem", height: 10 + "rem" }}></textarea>
      <br />
      <div className="text-center">
        <button type="submit" className="btn btn-lg btn-primaty">Post</button>
      </div>
    </form>
  )
}