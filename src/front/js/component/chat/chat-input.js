import React from "react";

import "../../../styles/chat.css";

import { MdAttachFile } from "react-icons/md";
import { BsImageFill } from "react-icons/bs";
import { HiPaperAirplane } from "react-icons/hi";

export const Input = () => {
  return (
    <div className="chat-input">
      <div className="attachments">
        <MdAttachFile />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <BsImageFill />
        </label>
      </div>
      <input type="text" placeholder="Write a message here..." />
      <div className="send-btn">
        <input type="submit" id="send-msg" value="" />
        <label htmlFor="send-msg">
          <HiPaperAirplane />
        </label>
      </div>
    </div>
  );
};
