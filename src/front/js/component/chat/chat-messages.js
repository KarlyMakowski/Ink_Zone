import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import "../../../styles/chat.css";

import { Message } from "./chat-message";

export const Messages = () => {
  const { store } = useContext(Context);
  console.log('store.chat', store.chat)

  if (Array.isArray(store.chat) && store.chat.length > 0) {
    return (
      <div className="messages">
        {store.chat.map((msg) => {
          return (
            <Message {...msg} />
          );
        })}
      </div>
    );

  } else {
    return (
      <div className="messages">
        Empty chat
      </div>
    )
  }
};
