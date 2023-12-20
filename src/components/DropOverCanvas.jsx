import { useContext } from "react";
import { BlocksContext } from "../context/BlocksContext";
import DrawOnCanvas from "./DrawOnCanvas";

export default function DropOverCanvas() {
  const { blocksData, setBlocksData } = useContext(BlocksContext);

  const handleDrop = (x, y) => {
    const labelText =
      "This is a " +
      blocksData.currDragTitle.charAt(0).toUpperCase() +
      blocksData.currDragTitle.slice(1);
    setBlocksData({
      currDragTitle: undefined,
      blocks: [
        ...blocksData.blocks,
        {
          title: blocksData.currDragTitle,
          x,
          y,
          labelText,
          fontSize: undefined,
          fontWeight: undefined,
        },
      ],
    });
  };

  return (
    <div
      className="w-full h-full bg-[#f3f3f3]"
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
