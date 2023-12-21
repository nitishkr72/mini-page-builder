import { useContext, useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { BlocksContext } from "../context/BlocksContext";
import { BlockView } from "./BlockView";

export default function DrawElementOnCanvas({
  block,
  selectedBlockUUID,
  setSelectedBlockUUID,
}) {
  const { title, X, Y, labelText, id } = block;
  const viewportH = window.innerHeight || document.documentElement.clientHeight;
  const viewportW = window.innerWidth || document.documentElement.clientWidth;

  const { blocksData, setBlocksData } = useContext(BlocksContext);

  const [openModal, setOpenModal] = useState(
    selectedBlockUUID && selectedBlockUUID.openModal
  );
  const [isSelected, setIsSelected] = useState(
    selectedBlockUUID && id === selectedBlockUUID.id
  );

  const divFocus = useRef(null);

  useEffect(() => {
    setIsSelected(selectedBlockUUID && id === selectedBlockUUID.id);
  }, [id, selectedBlockUUID]);

  function handleKeyDown(e) {
    if (isSelected) {
      if (e.key === "Enter") {
        setOpenModal(true);
      } else if (e.key === "Delete") {
        setBlocksData({
          ...blocksData,
          blocks: blocksData.blocks.filter((item) => {
            return !(item.id === id);
          }),
        });
      }
    }
  }

  function handleDragStart() {
    setBlocksData({
      ...blocksData,
      currDragBlock: id,
    });
  }

  function handleModal(isOpen) {
    setOpenModal(isOpen);
    if (isSelected) {
      divFocus.current.focus();
    }
  }

  return (
    <>
      {openModal && <Modal block={block} setOpenModal={handleModal} />}
      <div
        ref={divFocus}
        tabIndex={0}
        role="button"
        onKeyDown={handleKeyDown}
        onDragStart={handleDragStart}
        onClick={() => {
          if (selectedBlockUUID && selectedBlockUUID.id === id) {
            setSelectedBlockUUID(undefined);
          } else setSelectedBlockUUID({ id, openModal: false });
        }}
        className={`fixed text-black select-none cursor-grab
        hover:border-red-500 hover:border-2
         ${
           isSelected
             ? "border-2 border-red-500"
             : title === "Label" || title === "Button"
             ? ""
             : "border border-black border-opacity-5"
         }`}
        style={{
          left: `${(X / viewportW) * 100}vw`,
          top: `${(Y / viewportH) * 100}vh`,
          outline: "none",
        }}
        draggable
      >
        <BlockView block={block} />
      </div>
    </>
  );
}
