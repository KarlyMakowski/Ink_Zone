import React, { useEffect } from "react";

import "../../../styles/chat.css";

import { MdVideocam, MdPersonAddAlt1, MdOutlineMoreHoriz } from "react-icons/md";

import { Messages } from "./chat-messages";
import { Input } from "./chat-input";

export const Chat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="chat-view">
      <div className="chat-info">
        <span>Brandon</span>
        <div className="chat-icons">
          <MdVideocam />
          <MdPersonAddAlt1 />
          <MdOutlineMoreHoriz />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
