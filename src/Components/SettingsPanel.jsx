import React, { useState } from "react";

import MessageIcon from "../assets/Icons/MessageIcon.png";
import BackIcon from "../assets/Icons/BackIcon.png";

const SettingsPanel = () => {
  const [active, setActive] = useState("true");

  return (
    <div
      style={{
        width: "25vw",
        border: "1px solid #D9D9D9",
        borderRadius: "3px",
      }}
    >
      {active == "false" ? (
        // message button
        <button
          style={{
            width: "150px",
            height: "80px",
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={MessageIcon} alt="Message Icon" width="30" height="30" />
          Message
        </button>
      ) : (
        // message text input area
        <div>
          <div
            style={{
              height: "50px",
              borderBottom: "1px solid #D9D9D9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={BackIcon} alt="Message Icon" width="20" height="20" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPanel;
