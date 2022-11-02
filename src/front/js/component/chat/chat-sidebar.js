import React from "react";

import "../../../styles/chat.css";

import { ChatNavbar } from './chat-navbar';
import { Search } from "./chat-search";
import { Chats } from "./chats";

export const Sidebar = () => {
  return (
    <div className="firebase-chat-sidebar">
      <ChatNavbar />
      <Search />
      <Chats />
    </div>
  )
}