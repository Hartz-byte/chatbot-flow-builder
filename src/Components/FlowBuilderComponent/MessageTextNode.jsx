import React, { useContext, useEffect, useState } from "react";
import MessageIcon from "../../assets/Icons/MessageIcon.png";
import WhatsappIcon from "../../assets/Icons/WhatsappIcon.png";
import { Handle, Position } from "reactflow";
import { FlowContext } from "../../ContextAPI/Context";

const MessageTextNode = ({ id }) => {
  const { setActive, setNodeId, messages } = useContext(FlowContext);
  const [currentNodeMessage, setCurrentNodeMessage] = useState("");

  // node click handle
  const nodeClickHandle = () => {
    setActive(true);
    setNodeId(id);
  };

  // useEffect to render all node messages
  useEffect(() => {
    const message = messages.find((message) => message.id === id);

    setCurrentNodeMessage(message?.message || `test message ${id}`);
  }, [messages, id]);

  return (
    <div
      style={{
        width: "120px",
        height: "40px",
        borderRadius: "5px",
        boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.3)",
      }}
      onClick={nodeClickHandle}
    >
      {/* node head section */}
      <div
        style={{
          width: "100%",
          height: "15px",
          backgroundColor: "#B2F0E3",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* message icon and send message text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "5px",
            height: "15px",
          }}
        >
          <img src={MessageIcon} alt="Message Icon" width="8" height="8" />

          <p style={{ fontSize: "7px", fontWeight: "600", marginLeft: "5px" }}>
            Send Message
          </p>
        </div>

        {/* whatsapp icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "50%",
            padding: "1px",
            backgroundColor: "#fff",
            marginRight: "5px",
          }}
        >
          <img src={WhatsappIcon} alt="Message Icon" width="8" height="8" />
        </div>
      </div>

      {/* node message text section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginLeft: "7px",
          height: "25px",
        }}
      >
        <p style={{ fontSize: "8px", fontWeight: "400" }}>
          {currentNodeMessage}
        </p>
      </div>

      {/* handle */}
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default MessageTextNode;
