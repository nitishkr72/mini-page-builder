import { useContext, useState } from "react";
import Modal from "./Modal";
import { BlocksContext } from "../context/BlocksContext";
import DrawOnCanvas from "./DrawOnCanvas";

export default function DropOverCanvas() {
  const { blocksData, setBlocksData } = useContext(BlocksContext);

  const handleDrop = (x, y) => {
    setBlocksData({
      currDragTitle: undefined,
      blocks: [...blocksData.blocks, { title: blocksData.currDragTitle, x, y }],
    });
  };

  return (
    <div
      className="w-full h-full bg-white"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        handleDrop(e.clientX, e.clientY);
      }}
    >
      {blocksData.blocks.map((item, index) => {
        return <DrawOnCanvas key={index} block={item} />;
      })}
    </div>
  );
}
