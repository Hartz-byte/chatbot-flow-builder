// MessageText.jsx
import React, { useContext, useState } from "react";
import BackIcon from "../../assets/Icons/BackIcon.png";
import { FlowContext } from "../../ContextAPI/Context";

const MessageText = ({ backBtnHandle, nodeId }) => {
  const { nodeMessage, setNodeMessage, updateNodeMessage, clearNodeMessage } =
    useContext(FlowContext);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveMessage = () => {
    if (inputValue) {
      updateNodeMessage(nodeId, inputValue);
      clearNodeMessage();
      setInputValue("");
    }
  };

  return (
    <div>
      {/* top nav */}
      <div
        style={{
          height: "50px",
          borderBottom: "1px solid #D9D9D9",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* back button */}
        <img
          src={BackIcon}
          alt="Message Icon"
          width="20"
          height="20"
          style={{ cursor: "pointer", marginLeft: "10px" }}
          onClick={backBtnHandle}
        />

        {/* message text */}
        <p style={{ fontWeight: "600", fontSize: 18, marginLeft: "140px" }}>
          Message
        </p>
      </div>

      {/* text area */}
      <div style={{ borderBottom: "1px solid #D9D9D9" }}>
        <p
          style={{
            color: "#B7B7B7",
            fontSize: 18,
            margin: "30px 0 0 10px",
          }}
        >
          Text
        </p>

        <textarea
          value={inputValue}
          onChange={handleInputChange}
          style={{
            fontSize: 16,
            margin: "20px 10px 30px 10px",
            width: "370px",
            height: "80px",
            resize: "vertical",
            border: "1px solid #D9D9D9",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
          }}
          placeholder="Enter your message..."
        />

        <button onClick={handleSaveMessage}>Save Update</button>
      </div>
    </div>
  );
};

export default MessageText;
