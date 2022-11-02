import React from "react";

import "../../../styles/chat.css";

export const Message = () => {
  return (
    <div className="message owner">
      <div className="message-info">
        <img
          src="https://images.pexels.com/photos/14169804/pexels-photo-14169804.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="message-content">
        <p>hello</p>
        {/* <img src="https://images.pexels.com/photos/14169804/pexels-photo-14169804.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""/> */}
      </div>
    </div>
  );
};
