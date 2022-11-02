import React from "react";

import "../../styles/chat.css";

import { IoMdPower } from "react-icons/io";

export const ChatNavbar = () =>{
    return(
        <div className="chat-navbar">
            <span className="chat-navbar-logo">Ink Zone Chat</span>
            <div className="user-chats">
                <img src="https://images.pexels.com/photos/14169804/pexels-photo-14169804.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                <span>Karly_35</span>
                <button><IoMdPower style={{ height: "25px" }}/></button>
            </div>
        </div>
    )

}