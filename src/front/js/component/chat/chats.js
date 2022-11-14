import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { db } from "../google-auth";

import "../../../styles/chat.css";

export const Chats = () => {
  const { store, actions } = useContext(Context);

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

  console.log("chats", chats);

  const selectChat = () => {
    // actions.handleChat()
  };

  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div
          className="user-list"
          key={chat[0]}
          onClick={() => selectChat(chat[2].userInfo)}
        >
          <img src={chat[2].userInfo.photoURL} alt="user-picture" />
          <div className="user-info">
            <span>{chat[2].userInfo.displayName}</span>
            <p>{chat[2].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
