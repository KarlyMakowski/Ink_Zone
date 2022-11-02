import React from "react";

import "../../styles/chat.css";

import { MdAttachFile } from "react-icons/md";
import { BsImageFill } from "react-icons/bs";

export const Input = () => {
  return (
    <div className="chat-input">
      <input type="text" placeholder="Write a message here..." />
      <div className="send">
        <MdAttachFile className="send-icons"/>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <BsImageFill className="send-icons"/>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};
