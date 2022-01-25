import React from "react";

const Notification = ({ message }) => {
  const msgStyle = {
    color: "black",
    fontSize: "30px",
    border: "2px solid green",
    background: "lightgray",
  };

  if (message === null) {
    return null;
  } else {
    return <div style={msgStyle}>{message}</div>;
  }
};

export default Notification;
