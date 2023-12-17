import "./App.css";
import { useRef, useState } from "react";

function DraggableButton({ title, onDragStart }) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      className={`bg-white ${
        isDragging
          ? "border border-black cursor-grabbing"
          : "border border-white rounded cursor-grab"
      }  flex flex-row items-center py-2 px-4 shadow-lg`}
      draggable
      onDra
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

const draggableBtnList = [
  { title: "Label" },
  { title: "Input" },
  { title: "Button" },
];

function App() {
  const draggedItem = useRef();

  const draggingStarted = (e) => {
    draggedItem.current = e.target.id;
  };

  return (
    <div className="w-screen h-screen md:flex md:flex-row">
      <div
        className="w-full h-full bg-white"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          console.log(e.clientX, e.clientY, e);
        }}
      >
        Hellp
      </div>
      <div className="fixed top-0 right-0 z-10 h-auto md:w-60 xl:w-80 xl:h-full bg-[#2D2D2D] px-6 py-5">
        <span className="text-white font-bold text-xl">BLOCKS</span>
        <div className="mt-4 flex flex-col gap-2 w-full">
          {draggableBtnList.map((item, index) => {
            return (
              <DraggableButton
                title={item.title}
                onDragStart={draggingStarted}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
