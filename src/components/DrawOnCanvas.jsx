import { useState } from "react";
import Modal from "./Modal";

export default function DrawOnCanvas({ block }) {
  const { title, x, y } = block;
  const viewportH = window.innerHeight || document.documentElement.clientHeight;
  const viewportW = window.innerWidth || document.documentElement.clientWidth;

  const [openModal, setOpenModal] = useState(false);

  const handleOnClick = (e, x, y, title, labelText) => {
    setOpenModal(true);
    console.log();
  };

  const labelText =
    "This is a " + title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <>
      {openModal && <Modal block={{ x, y, title, labelText }} />}
      <div
        className={`fixed text-black select-none cursor-grab`}
        style={{
          left: `${(x / viewportW) * 100}vw`,
          top: `${(y / viewportH) * 100}vh`,
        }}
        onClick={(e) => handleOnClick(e, x, y, title, labelText)}
        draggable
      >
        {labelText}
      </div>
    </>
  );
}
