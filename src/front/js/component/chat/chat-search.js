import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../google-auth";

import "../../../styles/chat.css";

import { BiSearchAlt } from "react-icons/bi";

export const Search = () => {
  const { actions, store } = useContext(Context);

  /*   const [username, setUsername] = useState(""); // FOR THE INPUT(SEARCH USER)
  const [currentUser, setCurrentUser] = useState(null); // CURRENT USER
  const [error, setError] = useState(false);

  const searchUser = async () => {
    const q = query(collection(db, "users"), where("username", "==", username));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setCurrentUser(doc.data());
      });
    } catch (error) {
      setError(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && searchUser();
  };

 */

  return (
    <div className="user-search">
      <div className="search-form">
        <BiSearchAlt />
        <input
          type="text"
          placeholder="Find an user..."
          //onKeyDown={handleKey}
          //onChange={e => setUsername(e.target.value)} // onChange={(e) => actions.handleChange(e)}
        />
      </div>
      <div className="user-list">
        <img
          src="https://images.pexels.com/photos/14028119/pexels-photo-14028119.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <div className="user-info">
          <span>Brandon</span>
        </div>
      </div>
      {/* {error && <span>User not found</span>}
      {user && (
        <div className="user-list">
          <img src={user.picture} alt="" />
          <div className="user-info">
            <span>{user.username}</span>
          </div>
        </div>
      )} */}
    </div>
  );
};
