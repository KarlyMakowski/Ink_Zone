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
      <div className="messageInfo">
        <img
          src={
            senderId === store.currentUser.uid
              ? store.currentUser.picture
              : store.user.photoURL
          }
          alt=""
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        {/* <span>Just now</span> */}
      </div>
      <div className="messageContent">
        <p>{text}</p>
      </div>
    </div>
  );
};
