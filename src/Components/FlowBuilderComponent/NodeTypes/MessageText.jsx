import React from "react";

const MessageText = ({ data: { amount } }) => {
  return (
    <div
      style={{
        width: "120px",
        height: "40px",
        backgroundColor: "red",
        borderRadius: "5px",
      }}
    >
      <div></div>
    </div>
  );
};

export default MessageText;
