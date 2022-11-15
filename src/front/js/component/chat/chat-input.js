import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { arrayUnion, doc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "../../component/google-auth";

import "../../../styles/chat.css";

import { MdAttachFile } from "react-icons/md";
import { BsImageFill } from "react-icons/bs";
import { HiPaperAirplane } from "react-icons/hi";

export const Input = () => {
  const { store } = useContext(Context);

  const [text, setText] = useState("");

  const handleSend = async () => {
    await updateDoc(doc(db, "chats", text), {
      text: arrayUnion({
        text,
        senderId: store.currentUser.uid,
        dateTime: Timestamp.now(),
      }),
    });
    setText("");
  };

  return (
    <div className="chat-input">
      <div className="attachments">
        <MdAttachFile />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <BsImageFill />
        </label>
      </div>
      <input
        type="text"
        placeholder="Write a message here..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send-btn">
        <input type="submit" id="send-msg" value="" onClick={handleSend} />
        <label htmlFor="send-msg">
          <HiPaperAirplane />
        </label>
      </div>
    </div>
  );
};
