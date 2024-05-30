import React, { useContext } from "react";
import { FlowContext } from "../ContextAPI/Context";

const SaveButton = () => {
  const { saveFlow } = useContext(FlowContext);

  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#F3F3F3",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <button style={{ color: "#6B7193", marginRight: 130 }} onClick={saveFlow}>
        Save Changes
      </button>
    </div>
  );
};

export default SaveButton;
