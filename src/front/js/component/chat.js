import React from "react";

import "../../styles/chat.css";

import { MdVideocam, MdPersonAddAlt1, MdOutlineMoreHoriz } from "react-icons/md";

import { Messages } from "./chat-messages";
import { Input } from "./chat-input";

export const Chat = () => {
  return (
    <div className="chat-view">
      <div className="chat-info">
        <span>Brandom</span>
        <div className="chat-icons">
          <MdVideocam style={{ height: "24px", width: "35px" }}/>
          <MdPersonAddAlt1 style={{ height: "24px", width: "35px" }}/>
          <MdOutlineMoreHoriz style={{ height: "24px", width: "35px" }}/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
