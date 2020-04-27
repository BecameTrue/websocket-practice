import React from "react";
import "./InputBox.css";

const InputBox = () => {
  return (
    <div className="input-box">
      <input type="text" className="user-input" placeholder="Message here..." />
      <SendButton />
    </div>
  );
};

const SendButton = () => {
  return <div className="send-button">SEND</div>;
};

export default InputBox;
