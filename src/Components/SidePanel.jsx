// SettingsPanel.jsx
import React, { useContext } from "react";
import MessageIcon from "../assets/Icons/MessageIcon.png";
import MessageText from "./SettingsPanelComponent/MessageText";
import { FlowContext } from "../ContextAPI/Context";

const SidePanel = () => {
  const { addNode, active, panelActive } = useContext(FlowContext);

  return (
    <div
      style={{
        width: "27vw",
        border: "1px solid #D9D9D9",
        borderRadius: "3px",
      }}
    >
      {!active ? (
        // node panel
        <>
          {/* message node button */}
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
            onClick={addNode}
          >
            <img src={MessageIcon} alt="Message Icon" width="30" height="30" />
            Message
          </button>
        </>
      ) : (
        // settings panel
        <>
          <MessageText backBtnHandle={panelActive} />
        </>
      )}
    </div>
  );
};

export default SidePanel;
