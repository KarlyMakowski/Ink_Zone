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
        <span>12:15</span>
      </div>
      <div className="message-content">
        <p>Hello</p>
        {/* <img src="https://images.pexels.com/photos/14169804/pexels-photo-14169804.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""/> */}
      </div>
    </div>
  );
};
