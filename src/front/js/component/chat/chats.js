import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { db } from "../google-auth";
import { doc, onSnapshot } from "firebase/firestore";

import "../../../styles/chat.css";

export const Chats = () => {
  const { store } = useContext(Context);

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "userChats", store.currentUser.uid),
        (doc) => {
          setChats(doc.data());
        }
      );
      return () => {
        unsub();
      };
    };
    store.currentUser.uid && getChats();
  }, [store.currentUser.uid]);

  const selectChat = () => {
    // actions.handleChat()
  };

  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div
          className="user-list"
          key={chat[0]}
          onClick={() => selectChat(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="user-picture" />
          <div className="user-info">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
