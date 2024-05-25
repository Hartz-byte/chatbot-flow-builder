import React from "react";
import FlowBuilder from "../Components/FlowBuilder";
import SaveButton from "../Components/SaveButton";
import SettingsPanel from "../Components/SettingsPanel";

const MainScreen = () => {
  return (
    <div>
      {/* save button component */}
      <SaveButton />

      <div style={{ display: "flex" }}>
        {/* flow builder component */}
        <FlowBuilder />

        {/* settings panel component */}
        <SettingsPanel />
      </div>
    </div>
  );
};

export default MainScreen;
