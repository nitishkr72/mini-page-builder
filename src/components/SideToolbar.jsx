import { useContext } from "react";
import { draggableBtnList } from "../utils/static";
import DraggableButton from "./DraggableButton";
import { BlocksContext } from "../context/BlocksContext";

export default function SideToolbar() {
  const { blocksData, setBlocksData } = useContext(BlocksContext);

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
      <div>
        <button
          className="text-white text-base bg-[#0044C1] px-4 py-2 mt-4 rounded-sm"
          onClick={() => {
            localStorage.removeItem("blocks");
            setBlocksData({ ...blocksData, blocks: [] });
          }}
        >
          Clear Screen
        </button>
      </div>
    </div>
  );
}
