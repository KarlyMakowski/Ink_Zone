import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../google-auth";

import "../../../styles/chat.css";

import { BiSearchAlt } from "react-icons/bi";

export const Search = () => {
  const { actions, store } = useContext(Context);

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const searchUser = async () => {
    const q = query(collection(db, "chats"), where("username", "==", username));
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
    e.code === "Enter" && searchUser();
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
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="user-list">
          <img src={user.picture} alt="user-picture" />
          <div className="user-info">
            <span>{user.username}</span>
          </div>
        </div>
      )}
    </div>
  );
};
