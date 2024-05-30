// Context.jsx
import React, { createContext, useState } from "react";

const FlowContext = createContext({
  initialNodes: [],
  initialEdges: [],
  addNode: () => {},
  active: false,
  setActive: () => {},
  panelActive: () => {},
  nodeId: "",
});

let id;

const FlowProvider = ({ children }) => {
  const [initialNodes, setInitialNodes] = useState([
    {
      id: "1",
      position: { x: -300, y: 0 },
      data: { message: "test message 1", id },
      type: "messageText",
    },
    {
      id: "2",
      position: { x: -100, y: 0 },
      data: { message: "test message 2" },
      type: "messageText",
    },
  ]);

  // add new node
  const addNode = () => {
    setInitialNodes([
      ...initialNodes,
      {
        id: `new-${initialNodes.length + 1}`,
        position: { x: 0, y: 30 * (initialNodes.length + 1) },
        data: { message: "textNode" },
        type: "messageText",
      },
    ]);
  };

  const [initialEdges, setInitialEdges] = useState([]);
  const [active, setActive] = useState(false);
  const [nodeId, setNodeId] = useState("");

  // panel active status change
  const panelActive = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <FlowContext.Provider
      value={{
        initialNodes,
        addNode,
        initialEdges,
        active,
        setActive,
        panelActive,
        nodeId,
        setNodeId,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export { FlowContext, FlowProvider };
