import React from "react";

import "../../styles/chat.css";

import { Message } from "./chat-message";

export const Messages = () => {
    return (
        <div className="messages">
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    )
}