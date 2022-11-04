import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import "../../../styles/chat.css";

import skull from "../../../img/skull-profile.png";

export const ChatNavbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="chat-navbar">
      <span className="chat-navbar-logo">Ink Zone Chat</span>
      <div className="user-chats">
        <img src={store.currentUser?.picture || skull} alt="user-picture" />
        <span>{store.currentUser?.username}</span>
      </div>
    </div>
  );
};
