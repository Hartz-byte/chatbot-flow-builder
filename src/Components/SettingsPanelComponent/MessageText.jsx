import React, { useContext, useState } from "react";
import BackIcon from "../../assets/Icons/BackIcon.png";
import { FlowContext } from "../../ContextAPI/Context";

const MessageText = ({ backBtnHandle }) => {
  const [inputValue, setInputValue] = useState("");
  const { updateNodeMessage, nodeId, messages } = useContext(FlowContext);

  // save btn click handle
  const handleBtnClick = () => {
    const existingMessage = messages.find((message) => message.id === nodeId);

    if (existingMessage) {
      updateNodeMessage(nodeId, inputValue);
      setInputValue("");
    } else {
      const newMessage = { id: nodeId, message: inputValue };
      updateNodeMessage(nodeId, newMessage);
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
            placeholder="Enter your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
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
          />

          <button
            style={{ marginLeft: "10px", marginBottom: "10px" }}
            onClick={handleBtnClick}
          >
            Save Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageText;
