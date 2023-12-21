import { useContext, useState } from "react";
import { BlocksContext } from "../context/BlocksContext";

export default function Modal({ block, setOpenModal }) {
  const { blocksData, setBlocksData } = useContext(BlocksContext);

  const [formData, setFormData] = useState(block);
  function handleSubmit(e) {
    e.preventDefault();
    setBlocksData({
      ...blocksData,
      blocks: blocksData.blocks.map((item) => {
        if (item.id === block.id) {
          return formData;
        }
        return item;
      }),
    });
    setOpenModal(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-5/6 md:w-[26rem] rounded-md shadow-sm">
        <div className="px-6 py-3 text-xl font-semibold border-b flex flex-row justify-between items-center">
          <span>Edit {block.title}</span>
          <img
            src="/ic_cross.svg"
            alt="Close Form"
            onClick={() => {
              setOpenModal(false);
            }}
          />
        </div>

        <div className="px-6 pb-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label className="flex flex-col pt-6 gap-2">
              <span className="text-sm font-normal ">Text:</span>
              <input
                className="px-3 py-2 border rounded-sm text-[#595959] font-normal text-base"
                onChange={handleChange}
                type="text"
                value={formData.labelText}
                name="labelText"
              />
            </label>
            <label className="flex flex-col pt-6 gap-2">
              <span className="text-sm font-normal ">X:</span>
              <input
                className="px-3 py-2 border rounded-sm text-[#595959] font-normal text-base"
                onChange={handleChange}
                type="number"
                value={formData.X}
                name="X"
              />
            </label>
            <label className="flex flex-col pt-6 gap-2">
              <span className="text-sm font-normal ">Y:</span>
              <input
                className="px-3 py-2 border rounded-sm text-[#595959] font-normal text-base"
                onChange={handleChange}
                type="number"
                value={formData.Y}
                name="Y"
              />
            </label>
            <label className="flex flex-col pt-6 gap-2">
              <span className="text-sm font-normal ">Font Size:</span>
              <input
                className="px-3 py-2 border rounded-sm text-[#595959] font-normal text-base"
                onChange={handleChange}
                type="number"
                value={formData.fontSize}
                name="fontSize"
              />
            </label>
            <label className="flex flex-col pt-6 gap-2">
              <span className="text-sm font-normal ">Font Weight:</span>
              <input
                className="px-3 py-2 border rounded-sm text-[#595959] font-normal text-base"
                onChange={handleChange}
                type="number"
                value={formData.fontWeight}
                name="fontWeight"
              />
            </label>
            <button className="px-4 py-2 bg-[#0044C1] text-white">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}
