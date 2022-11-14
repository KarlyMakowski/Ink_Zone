import React, { useRef, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";

import "../../../styles/chat.css";

export const Message = (props) => {
  const ref = useRef();
  const { senderId, text, dateTime } = props
  const { store: { currentUser, user } } = useContext(Context);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [props]);

  return (
    <div
      ref={ref}
      className={`message ${senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            senderId === currentUser.uid
              ? currentUser.photoURL
              : user.photoURL
          }
          alt=""
        />
        <span>{dateTime.seconds}</span>
      </div>
      <div className="messageContent">
        <p>{text}</p>
      </div>
    </div>
  );
};
