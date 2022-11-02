import React from "react";
import { Link } from "react-router-dom";

import "../../../styles/chat.css";

export const ChatButton = () => {
  return (
    <div className="chat-icon-container">
      <Link to="/chat">
        <div className="chat-button">
          <i className="fas fa-comments"></i>
        </div>
      </Link>
    </div>
  );
};
