import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

import "../../../styles/chat.css";

export const Message = (props) => {
  return (
    <div className="message owner">
      <div className="message-info">
        <img src={props.img} alt="" />
        <span>{props.dateTime}</span>
      </div>
      <div className="message-content">
        <p>{props.text}</p>
        {/* <img src="https://images.pexels.com/photos/14169804/pexels-photo-14169804.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""/> */}
      </div>
    </div>
  );
};
