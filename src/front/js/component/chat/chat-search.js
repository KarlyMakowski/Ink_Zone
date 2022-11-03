import React from "react";

import "../../../styles/chat.css";

import { BiSearchAlt } from "react-icons/bi";

export const Search = () => {
  return (
    <div className="user-search">
      <div className="search-form">
        <BiSearchAlt />
        <input type="text" placeholder="Find an expert..." />
      </div>
      <div className="user-list">
        <img
          src="https://images.pexels.com/photos/14028119/pexels-photo-14028119.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <div className="user-info">
          <span>Brandon</span>
        </div>
      </div>
    </div>
  );
};
