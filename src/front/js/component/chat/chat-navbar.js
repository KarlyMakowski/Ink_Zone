import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import "../../../styles/chat.css";

import skull from "../../../img/skull-profile.png";
import { GoPrimitiveDot } from "react-icons/go";

export const ChatNavbar = () => {
  const { store, actions } = useContext(Context);
  
  return (
    <div className="chat-navbar">
      <div className="user-chats">
        <img src={store.currentUser?.picture || skull} alt="user-picture" />
        <span>{store.currentUser?.username}</span>
      </div>
      <span className="chat-navbar-logo">
        <GoPrimitiveDot />
        Online
      </span>
    </div>
  );
};
