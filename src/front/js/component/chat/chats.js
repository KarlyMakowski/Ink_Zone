import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { db } from "../google-auth";
import { doc, onSnapshot } from "firebase/firestore";

import "../../../styles/chat.css";

export const Chats = () => {
  const { store, actions } = useContext(Context);
  console.group('store')
  console.log('chats', chats)
  console.log('store.user', store.user)
  console.log('store.chatId', store.chatId)
  console.log('store.currentUser', store.currentUser)
  console.log('store.currentUser.uid', store.currentUser.uid)
  console.groupEnd()

  const [chats, setChats] = useState([]);

  // useEffect(() => {
  //   console.log('getChats')
  //   const unsub = onSnapshot(
  //     doc(db, "userChats", store.currentUser.uid),
  //     (doc) => {
  //       console.log('onSnapshot', doc.data())
  //       setChats(doc.data());
  //     }
  //   );
  //   return () => {
  //     unsub();
  //   };
  // }, [store.currentUser.uid]);
  // useEffect(() => {
  //   const getChats = () => {
  //     console.log('getChats')
  //     const unsub = onSnapshot(
  //       doc(db, "userChats", store.currentUser.uid),
  //       (doc) => {
  //         console.log('onSnapshot', doc.data())
  //         setChats(doc.data());
  //       }
  //     );
  //     return () => {
  //       unsub();
  //     };
  //   };
  //   store.currentUser.uid && getChats();
  // }, [store.currentUser.uid]);

  const selectChat = () => {
    // actions.handleChat()
  };
  return (
    <div className="chats">
      {store.currentUser.chats?.map((chat) => (
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
  // return (
  //   <div className="chats">
  //     {Object.entries(chats)?.map((chat) => (
  //       <div
  //         className="user-list"
  //         key={chat[0]}
  //         onClick={() => selectChat({ chatId: chat[0], userInfo: chat[1].userInfo }, chat)}
  //       >
  //         <img src={chat[1].userInfo.photoURL} alt="user-picture" />
  //         <div className="user-info">
  //           <span>{chat[1].userInfo.displayName}</span>
  //           <p>{chat[1].userInfo.lastMessage?.text}</p>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
};
