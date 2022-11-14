import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";

import "../../../styles/chat.css";

import { Message } from "./chat-message";

export const Messages = () => {
  const { store, actions } = useContext(Context);
  console.log('store.chat', store.chat)
  const [chat, setChat] = useState([
    {
      text: "Hola, que hase",
      dateTime: "12.15pm",
      img: "https://images.pexels.com/photos/14169804/pexels-photo-14169804.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      text: "Hola, que hase",
      dateTime: "12.15pm",
      img: "https://images.pexels.com/photos/14169804/pexels-photo-14169804.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      text: "Hola, que hase",
      dateTime: "12.15pm",
      img: "https://images.pexels.com/photos/14169804/pexels-photo-14169804.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      text: "Hola, que hase",
      dateTime: "12.15pm",
      img: "https://images.pexels.com/photos/14169804/pexels-photo-14169804.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      text: "Hola, que hase",
      dateTime: "12.15pm",
      img: "https://images.pexels.com/photos/14169804/pexels-photo-14169804.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ]);

  return (
    <div className="messages">
      {chat.map((msg) => {
        return (
          <Message text={msg.text} dateTime={msg.dateTime} img={msg.img} />
        );
      })}
    </div>
  );
};
