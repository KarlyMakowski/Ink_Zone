import React, { useState, useContext } from "react";
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
  orderBy,
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
