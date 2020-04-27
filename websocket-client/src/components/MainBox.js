import React from "react";
import InputBox from "./InputBox";
import MessageBox from "./MessageBox";

import "./MainBox.css";

const MainBox = () => {
  return (
    <div className="main-box">
      <TitleBox />
      <MessageBox />
      <InputBox />
    </div>
  );
};

const TitleBox = (title) => {
  return <div className="title-box">WebSocket Testing</div>;
};

export default MainBox;
