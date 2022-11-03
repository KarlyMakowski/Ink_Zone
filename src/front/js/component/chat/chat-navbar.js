import React from "react";

import "../../../styles/chat.css";

import { GoPrimitiveDot } from "react-icons/go";

export const ChatNavbar = () => {
  return (
    <div className="chat-navbar">
      <div className="user-chats">
        <img
          src="https://images.pexels.com/photos/14169804/pexels-photo-14169804.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <span>Karly_35</span>
      </div>
      <span className="chat-navbar-logo">
        <GoPrimitiveDot />
        Online
      </span>
    </div>
  );
};
