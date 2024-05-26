// Context.jsx
import React, { createContext, useState } from "react";

const FlowContext = createContext({
  initialNodes: [],
  initialEdges: [],
  addNode: () => {},
});

const FlowProvider = ({ children }) => {
  const [initialNodes, setInitialNodes] = useState([
    {
      id: "1",
      position: { x: -300, y: 0 },
      data: { message: "test message 1" },
      type: "messageText",
    },
    {
      id: "2",
      position: { x: -100, y: 0 },
      data: { message: "test message 2" },
      type: "messageText",
    },
  ]);

  const addNode = () => {
    setInitialNodes([
      ...initialNodes,
      {
        id: `new-${initialNodes.length + 1}`,
        position: { x: 0, y: 30 * (initialNodes.length + 1) },
        data: { message: "new node" },
        type: "messageText",
      },
    ]);
  };

  const [initialEdges, setInitialEdges] = useState([]);

  return (
    <FlowContext.Provider value={{ initialNodes, addNode, initialEdges }}>
      {children}
    </FlowContext.Provider>
  );
};

export { FlowContext, FlowProvider };
