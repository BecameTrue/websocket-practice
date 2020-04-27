import React from "react";
import "./App.css";
import MainBox from "./components/MainBox";

const App = () => {
  return (
    <AppLayout>
      <MainBox />
    </AppLayout>
  );
};

const AppLayout = (props) => {
  return <div className="app-layout">{props.children}</div>;
};

export default App;
