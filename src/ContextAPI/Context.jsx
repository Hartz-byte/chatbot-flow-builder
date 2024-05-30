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
  const [initialEdges, setInitialEdges] = useState([]);
  const [active, setActive] = useState(false);
  const [nodeId, setNodeId] = useState("");
  const [messages, setMessages] = useState([]);

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
        id: `${initialNodes.length + 1}`,
        position: { x: 0, y: 30 * (initialNodes.length + 1) },
        data: { message: "textNode", id },
        type: "messageText",
      },
    ]);
  };

  // panel active status change
  const panelActive = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  // function to update all nodes messages in an object
  const updateNodeMessage = (id, newMessage) => {
    setMessages((prevMessages) => {
      const messageIndex = prevMessages.findIndex(
        (message) => message.id === id
      );

      if (messageIndex !== -1) {
        return [
          ...prevMessages.slice(0, messageIndex),
          { ...prevMessages[messageIndex], message: newMessage.message },
          ...prevMessages.slice(messageIndex + 1),
        ];
      } else {
        return [...prevMessages, { id, message: newMessage.message }];
      }
    });
  };

  console.log("selected node id is: " + nodeId);
  console.log(
    "messages data are: ",
    messages.map((message) => `id: ${message.id}, message: ${message.message}`)
  );

  // locally saving data
  const saveFlow = async () => {
    const flowData = {
      edges: initialEdges,
      messages,
    };

    localStorage.setItem("flowData", JSON.stringify(flowData));

    console.log("locally saved flow data");
  };

  return (
    <FlowContext.Provider
      value={{
        initialNodes,
        setInitialNodes,
        addNode,
        initialEdges,
        setInitialEdges,
        active,
        setActive,
        panelActive,
        nodeId,
        setNodeId,
        updateNodeMessage,
        messages,
        setMessages,
        saveFlow,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export { FlowContext, FlowProvider };
