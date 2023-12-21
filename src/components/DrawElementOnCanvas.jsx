import { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import { BlocksContext } from "../context/BlocksContext";
import { BlockView } from "./BlockView";

export default function DrawElementOnCanvas({
  block,
  selectedBlockUUID,
  setSelectedBlockUUID,
}) {
  const { title, X, Y, labelText, id } = block;

  const { blocksData, setBlocksData } = useContext(BlocksContext);

  const viewportH = window.innerHeight || document.documentElement.clientHeight;
  const viewportW = window.innerWidth || document.documentElement.clientWidth;

  const [openModal, setOpenModal] = useState(
    selectedBlockUUID && selectedBlockUUID.openModal
  );
  const [isSelected, setIsSelected] = useState(
    selectedBlockUUID && id === selectedBlockUUID.id
  );

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

  return (
    <>
      {openModal && <Modal block={block} setOpenModal={setOpenModal} />}
      <div
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onDragStart={handleDragStart}
        onClick={(e) => {
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
        <BlockView title={title} labelText={labelText} />
      </div>
    </>
  );
}
