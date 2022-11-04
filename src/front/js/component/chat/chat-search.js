import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../google-auth";

import "../../../styles/chat.css";

export const Search = () => {
  const { actions, store } = useContext(Context);

  const [user] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(false);

  const handleKey = (e) => {
    e.code === "Enter" && handleExpert();
  };

  const handleExpert = async () => {
    const q = query(collection(db, "experts"), where("username", "==", expert));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setCurrentUser(doc.data());
      });
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="user-search">
      <div className="search-form">
        <input
          type="text"
          placeholder="Find an expert..."
          onKeyDown={handleKey}
          onChange={(e) => actions.handleChange(e)}
        />
      </div>
      {error && <span>Expert not found</span>}
      {expert && (
        <div className="user-list">
          <img src={expert.picture} alt="" />
          <div className="user-info">
            <span>{expert.username}</span>
          </div>
        </div>
      )}
    </div>
  );
};
