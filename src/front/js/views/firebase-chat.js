import React from "react";

import "../../styles/chat.css";

import { Sidebar } from "../component/chat/chat-sidebar";
import { Chat } from "../component/chat/chat";

export const FirebaseChat = () => {
  return (
    <div className="firebase-chat">
      <div className="firebase-chat-container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};
