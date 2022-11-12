import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";

import "../../../styles/chat.css";

import { MdVideocam, MdPersonAddAlt1, MdOutlineMoreHoriz } from "react-icons/md";

import { Messages } from "./chat-messages";
import { Input } from "./chat-input";

export const Chat = () => {
  const { store, actions } = useContext(Context)

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="chat-view">
      <div className="chat-info">
        <span>Brando</span>
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
