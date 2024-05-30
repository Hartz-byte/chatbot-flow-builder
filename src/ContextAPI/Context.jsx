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
  const [nodeMessage, setNodeMessage] = useState("test message");
  const [initialMessage, setInitialMessage] = useState("test message");

  // initial nodes
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
      data: { message: "test message 2", id },
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
        data: { message: "textNode", id },
        type: "messageText",
      },
    ]);
  };

  const [initialEdges, setInitialEdges] = useState([]);
  const [active, setActive] = useState(false);
  const [nodeId, setNodeId] = useState("");
  // const [nodeMessage, setNodeMessage] = useState("test message");
  const [nodes, setNodes] = useState(initialNodes);

  // panel active status change
  const panelActive = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const clearNodeMessage = () => setNodeMessage("");

  const updateNodeMessage = (id, newMessage) => {
    const mess = newMessage;
    console.log(mess);

    setInitialNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === id ? { ...node, data: { message: newMessage } } : node
      )
    );
  };

  console.log("current message is: " + initialMessage);
  console.log("selected node id is: " + nodeId);

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
        nodeMessage,
        setNodeMessage,
        updateNodeMessage,
        clearNodeMessage,
        initialMessage,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export { FlowContext, FlowProvider };
