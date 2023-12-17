import { useState } from "react";

export default function DraggableButton({ title, onDragStart }) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      className={`bg-white ${
        isDragging
          ? "border border-black cursor-grabbing"
          : "border border-white rounded cursor-grab"
      }  flex flex-row items-center py-2 px-4 shadow-lg`}
      draggable
      onDragStart={(e) => {
        // e.preventDefault();
        setIsDragging(true);
        // console.log(e.target);
        // e.dataTransfer.setDragImage(e.target, 0, 0);
        onDragStart(e);
      }}
      onDragEnd={() => setIsDragging(false)}
    >
      <img
        src="/ic_grip_vertical.svg"
        alt="Drag"
        className="w-4 h-7"
        draggable="false"
      />
      <span className="font-normal text-base ml-3">{title}</span>
    </div>
  );
}
