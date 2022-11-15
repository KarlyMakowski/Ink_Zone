import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

import "../../../styles/chat.css";

export const ChatButton = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (store.currentUser === null) {
      navigate("/sign-in");
    }
  }, []);

  return (
    <div className="chat-icon-container">
      <Link to="/chat">
        <div className="chat-button">
          <i className="fas fa-comment-dots"></i>
        </div>
      </Link>
    </div>
  );
};
