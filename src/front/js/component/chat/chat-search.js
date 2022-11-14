import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../google-auth";

import "../../../styles/chat.css";

import { BiSearchAlt } from "react-icons/bi";

export const Search = () => {
  const { store, actions } = useContext(Context);

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const searchUser = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.key === "Enter" && searchUser();
  };

  const selectUser = async () => {
    actions.getUser(username);
    // const combinedId = store.currentUser.uid + user.uid;

    // try {
    //   const res = await getDoc(doc(db, "chats", combinedId));

    //   if (!res.exists()) {
    //     await setDoc(doc(db, "chats", combinedId), { messages: [] });

    // await updateDoc(doc(db, "userChats", store.currentUser.uid), {
    //   [combinedId + ".userInfo"]: {
    //     uid: user.uid,
    //     displayName: user.displayName,
    //     photoURL: user.photoURL,
    //   },
    //   [combinedId + ".date"]: serverTimestamp(),
    // });
    // await updateDoc(doc(db, "userChats", user.uid), {
    //   [combinedId + ".userInfo"]: {
    //     uid: store.currentUser.uid,
    //     displayName: store.currentUser.username,
    //     photoURL: store.currentUser.picture,
    //   },
    //   [combinedId + ".date"]: serverTimestamp(),
    // });
    // }
    // } catch (err) {
    //   console.log("Error loading message from backend", err);
    // }
    // setUser(null);
    setUsername("");
  };

  return (
    <div className="user-search">
      <div className="search-form">
        <BiSearchAlt />
        <input
          type="text"
          placeholder="Find an user..."
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err ? <span>User not found!</span> : null}
      {user && (
        <div className="user-list" onClick={selectUser}>
          <img src={user.photoURL} alt="user-picture" />
          <div className="user-info">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};
