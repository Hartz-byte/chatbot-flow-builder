// SettingsPanel.jsx
import React, { useCallback, useContext, useState } from "react";
import MessageIcon from "../assets/Icons/MessageIcon.png";
import MessageText from "./SettingsPanelComponent/MessageText";
import { FlowContext } from "../ContextAPI/Context";

const SidePanel = () => {
  const { addNode } = useContext(FlowContext);
  const [active, setActive] = useState("false");

  // back btn handle
  const backBtnHandle = () => {
    setActive("false");
  };

  const addMessageNode = () => {
    addNode();
  };

  return (
    <div
      style={{
        width: "27vw",
        border: "1px solid #D9D9D9",
        borderRadius: "3px",
      }}
    >
      {active == "false" ? (
        // message node button
        <button
          style={{
            width: "150px",
            height: "80px",
            margin: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={addMessageNode}
        >
          <img src={MessageIcon} alt="Message Icon" width="30" height="30" />
          Message
        </button>
      ) : (
        // message text input area component
        <>
          <MessageText backBtnHandle={backBtnHandle} />
        </>
      )}
    </div>
  );
};

export default SidePanel;
