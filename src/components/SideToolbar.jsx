import { useContext } from "react";
import { draggableBtnList } from "../utils/static";
import DraggableButton from "./DraggableButton";
import { BlocksContext } from "../context/BlocksContext";

export default function SideToolbar() {
  const { blocksData, setBlocksData } = useContext(BlocksContext);

  function handleExport() {
    const jsonData = JSON.stringify(blocksData.blocks);

    const url = URL.createObjectURL(
      new Blob([jsonData], { type: "application/json" })
    );

    const link = document.createElement("a");
    link.href = url;
    link.download = "mini-page-builder.json";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  return (
    <div className="fixed top-0 right-0 z-10 h-auto md:w-60 xl:w-80 xl:h-full bg-[#2D2D2D] px-6 py-5">
      <span className="text-white font-bold text-xl">BLOCKS</span>
      <div className="mt-4 flex flex-col gap-2 w-full">
        {draggableBtnList.map((item, index) => {
          return (
            <DraggableButton
              title={item.title}
              onDragStart={(e) => {
                setBlocksData({ ...blocksData, currDragTitle: item.title });
              }}
              key={index}
            />
          );
        })}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 xl:grid-rows-1 gap-3 mt-4">
        <button
          className="text-white text-base bg-[#0044C1] px-4 py-2  rounded-sm"
          onClick={() => {
            localStorage.removeItem("blocks");
            setBlocksData({ ...blocksData, blocks: [] });
          }}
        >
          Clear Screen
        </button>
        <button
          className="text-white text-base bg-[#0044C1] px-4 py-2 rounded-sm"
          onClick={handleExport}
        >
          Export
        </button>
      </div>
      <button
        className="px-4 py-1 mt-4 bg-blue-500 text-white"
        onClick={() => {
          if (blocksData.undoObject.length > 0) {
            setBlocksData({
              ...blocksData,
              blocks: [...blocksData.blocks, blocksData.undoObject.pop()],
              undoObject: blocksData.undoObject,
            });
          }
        }}
      >
        Undo
      </button>
    </div>
  );
}
