import { useState } from "react";
import Modal from "./Modal";

export function BlockView({ title, labelText }) {
  switch (title) {
    case "Input":
      return (
        <div className="px-4 py-2 border border-black border-opacity-5 hover:border-2 hover:border-red-500 hover:border-opacity-100 rounded-sm bg-white text-[#595959] font-normal text-base">
          {labelText}
        </div>
      );
    case "Button":
      return (
        <div className="font-normal text-base bg-[#0044C1] text-white px-4 py-2 hover:border-red-500 hover:border-2">
          {labelText}
        </div>
      );
    default:
      return (
        <span className="font-normal text-base text-black hover:border-red-500 hover:border-2 px-2 py-1 rounded-md">
          {labelText}
        </span>
      );
  }
}

export default function DrawOnCanvas({ block }) {
  const { title, x, y, labelText } = block;

  const viewportH = window.innerHeight || document.documentElement.clientHeight;
  const viewportW = window.innerWidth || document.documentElement.clientWidth;

  const [openModal, setOpenModal] = useState(false);

  const handleOnClick = (e, x, y, title, labelText) => {
    setOpenModal(true);
    console.log();
  };

  return (
    <>
      {<Modal block={{ x, y, title, labelText }} isOpen={openModal} />}
      <div
        className={`fixed text-black select-none cursor-grab`}
        style={{
          left: `${(x / viewportW) * 100}vw`,
          top: `${(y / viewportH) * 100}vh`,
        }}
        onClick={(e) => handleOnClick(e, x, y, title, labelText)}
        draggable
      >
        <BlockView title={title} labelText={labelText} />
      </div>
    </>
  );
}
