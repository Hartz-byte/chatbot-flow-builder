import React, { useContext, useEffect } from "react";
import FlowBuilder from "../Components/FlowBuilder";
import SaveButton from "../Components/SaveButton";
import SidePanel from "../Components/SidePanel";
import { FlowContext } from "../ContextAPI/Context";

const MainScreen = () => {
  const { setInitialEdges, setMessages } = useContext(FlowContext);

  // useEffect to get locally saved data
  useEffect(() => {
    const savedFlowData = localStorage.getItem("flowData");

    if (savedFlowData) {
      const parsedData = JSON.parse(savedFlowData);

      setInitialEdges(parsedData.edges);
      setMessages(parsedData.messages);
    }
  }, []);

  return (
    <div>
      {/* save button component */}
      <SaveButton />

      <div style={{ display: "flex" }}>
        {/* flow builder component */}
        <FlowBuilder />

        {/* node / settings panel component */}
        <SidePanel />
      </div>
    </div>
  );
};

export default MainScreen;
