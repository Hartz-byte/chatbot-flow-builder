import React, { useCallback } from "react";
import ReactFlow, { addEdge, useEdgesState, useNodesState } from "reactflow";
import "reactflow/dist/style.css";
import {
  initialEdges,
  initialNodes,
} from "./FlowBuilderComponent/FlowBuilderConstants";
import MessageText from "./FlowBuilderComponent/NodeTypes/MessageText";

// node types
const nodeTypes = {
  messageText: MessageText,
};

const FlowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
