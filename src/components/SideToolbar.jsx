import { draggableBtnList } from "../utils/static";
import DraggableButton from "./DraggableBuuton";

export default function SideToolbar({ handleDragStart }) {
  return (
    <div className="fixed top-0 right-0 z-10 h-auto md:w-60 xl:w-80 xl:h-full bg-[#2D2D2D] px-6 py-5">
      <span className="text-white font-bold text-xl">BLOCKS</span>
      <div className="mt-4 flex flex-col gap-2 w-full">
        {draggableBtnList.map((item, index) => {
          return (
            <DraggableButton
              title={item.title}
              onDragStart={handleDragStart}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
