import React, { useState } from "react";
import "./MessageBox.css";

const MessageBox = () => {
  const [list, setList] = useState([]);

  return (
    <div className="message-box">
      <p>Message</p>
      <p>Message</p>
      <p>Message</p>
      <p>Message</p>
      <p>Message</p>
      <p>Message</p>
      <p>Message</p>
    </div>
  );
};

export default MessageBox;
