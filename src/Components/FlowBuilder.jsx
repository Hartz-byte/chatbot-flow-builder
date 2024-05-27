// FlowBuilder.jsx
import React, { useCallback, useContext, useEffect } from "react";
import ReactFlow, { addEdge, useEdgesState, useNodesState } from "reactflow";
import "reactflow/dist/style.css";
import MessageTextNode from "./FlowBuilderComponent/MessageTextNode";
import { FlowContext } from "../ContextAPI/Context";

// node types
const nodeTypes = {
  messageText: MessageTextNode,
};

const FlowBuilder = () => {
  const { initialNodes, initialEdges, addNode } = useContext(FlowContext);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // useEffect to reflect new node without refreshing
  useEffect(() => {
    handleNodeAdd();
  }, [initialNodes, addNode]);

  // new node
  const handleNodeAdd = () => {
    setNodes([...initialNodes]);
  };

  // onConnect
  const onConnect = useCallback((connection) => {
    const edge = { ...connection, id: `${edges.length} + 1` };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  });

  return (
    <div style={{ width: "73vw", height: "90vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  );
};

export default FlowBuilder;
