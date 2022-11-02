import React from "react";
import { Link } from "react-router-dom";

import "../../styles/chat-button.css";

export const ChatButton = () => {

  return (
    <div className="chat-icon-container">
      <Link to="/chat">
        <div className="chat-button">
          <i class="fas fa-comment-dots"></i>
        </div>
      </Link>
    </div>
  );
};

