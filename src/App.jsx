import React from "react";
import MainScreen from "./MainScreen/MainScreen";
import { FlowProvider } from "./ContextAPI/Context";

function App() {
  return (
    <FlowProvider>
      <MainScreen />
    </FlowProvider>
  );
}

export default App;
