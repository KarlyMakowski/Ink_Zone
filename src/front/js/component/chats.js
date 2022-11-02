import React from "react";

import "../../styles/chat.css";

export const Chats = () => {
  return (
    <div className="chats">
      <div className="user-list">
        <img
          src="https://images.pexels.com/photos/13984633/pexels-photo-13984633.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <div className="user-info">
          <span>Kat</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="user-list">
        <img
          src="https://images.pexels.com/photos/7130457/pexels-photo-7130457.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <div className="user-info">
          <span>Caipi</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};
