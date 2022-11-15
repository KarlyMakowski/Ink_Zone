import React, { useRef, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";

import "../../../styles/chat.css";

export const Message = (props) => {
  const ref = useRef();
  const { senderId, text, dateTime } = props;
  const { store } = useContext(Context);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [props]);

  return (
    <div
      ref={ref}
      className={`message ${senderId === store.currentUser.uid && "owner"}`}
    >
      <div className="message-info">
        <img
          src={
            senderId === store.currentUser.uid
              ? store.currentUser.picture
              : store.user.photoURL
          }
          alt=""
        />
        {/* <span>Just now</span> */}
      </div>
      <div className="message-content">
        <p>{text}</p>
      </div>
    </div>
  );
};
