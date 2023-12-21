import { useContext, useState } from "react";
import { BlocksContext } from "../context/BlocksContext";
import DrawElementOnCanvas from "./DrawElementOnCanvas";
import { generateUID } from "../utils/static";

export default function DropOverCanvas() {
  const { blocksData, setBlocksData } = useContext(BlocksContext);

  const [selectedBlockUUID, setSelectedBlockUUID] = useState(undefined);

  const handleDrop = (x, y) => {
    if (blocksData.currDragBlock !== undefined) {
      setBlocksData({
        ...blocksData,
        blocks: blocksData.blocks.map((item) => {
          if (item.id === blocksData.currDragBlock) {
            return { ...item, x, y };
          }
          return item;
        }),
        currDragBlock: undefined,
      });
    } else if (blocksData.currDragTitle !== undefined) {
      const uuid = generateUID();
      const labelText =
        "This is a " +
        blocksData.currDragTitle.charAt(0).toUpperCase() +
        blocksData.currDragTitle.slice(1);

      setBlocksData({
        ...blocksData,
        blocks: [
          ...blocksData.blocks,
          {
            title: blocksData.currDragTitle,
            x,
            y,
            labelText,
            fontSize: undefined,
            fontWeight: undefined,
            id: uuid,
          },
        ],
        currDragTitle: undefined,
      });

      setSelectedBlockUUID({ id: uuid, openModal: true });
    }
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
      {blocksData.blocks.map((item) => {
        return (
          <DrawElementOnCanvas
            key={item.id}
            block={item}
            selectedBlockUUID={selectedBlockUUID}
            setSelectedBlockUUID={setSelectedBlockUUID}
          />
        );
      })}
    </div>
  );
}
