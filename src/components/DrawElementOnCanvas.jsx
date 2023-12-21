import { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import { BlocksContext } from "../context/BlocksContext";
import { BlockView } from "./BlockView";

export default function DrawElementOnCanvas({
  block,
  selectedBlockUUID,
  setSelectedBlockUUID,
}) {
  const { title, x, y, labelText, id } = block;

  const { blocksData, setBlocksData } = useContext(BlocksContext);

  const viewportH = window.innerHeight || document.documentElement.clientHeight;
  const viewportW = window.innerWidth || document.documentElement.clientWidth;

  const [openModal, setOpenModal] = useState(selectedBlockUUID.openModal);
  const [isSelected, setIsSelected] = useState(id === selectedBlockUUID);

  useEffect(() => {
    setIsSelected(id === selectedBlockUUID);
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

  return (
    <>
      {openModal && (
        <Modal block={{ x, y, title, labelText }} setOpenModal={setOpenModal} />
      )}
      <div
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={(e) => {
          setSelectedBlockUUID(id === selectedBlockUUID ? "" : id);
        }}
        className={`fixed text-black select-none cursor-grab `}
        style={{
          left: `${(x / viewportW) * 100}vw`,
          top: `${(y / viewportH) * 100}vh`,
          outline: "none",
        }}
        draggable
      >
        <BlockView
          title={title}
          labelText={labelText}
          isSelected={isSelected}
        />
      </div>
    </>
  );
}
