import { useContext } from "react";
import { BlocksContext } from "../context/BlocksContext";

export default function Modal({ block, setOpenModal }) {
  const { x, y, title, labelText } = block;

  function handleSubmit(e) {}

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-5/6 md:w-[26rem] rounded-md shadow-sm">
        <div className="px-6 py-3 text-xl font-semibold border-b flex flex-row justify-between items-center">
          <span>Edit {title}</span>
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
                onChange={() => console.log("")}
                type="text"
                value={labelText}
              />
            </label>
            <label className="flex flex-col pt-6 gap-2">
              <span className="text-sm font-normal ">X:</span>
              <input
                className="px-3 py-2 border rounded-sm text-[#595959] font-normal text-base"
                onChange={() => console.log("")}
                type="number"
                value={x}
              />
            </label>
            <label className="flex flex-col pt-6 gap-2">
              <span className="text-sm font-normal ">Y:</span>
              <input
                className="px-3 py-2 border rounded-sm text-[#595959] font-normal text-base"
                onChange={() => console.log("")}
                type="number"
                value={y}
              />
            </label>
            <label className="flex flex-col pt-6 gap-2">
              <span className="text-sm font-normal ">Font Size:</span>
              <input
                className="px-3 py-2 border rounded-sm text-[#595959] font-normal text-base"
                onChange={() => console.log("")}
                type="number"
              />
            </label>
            <label className="flex flex-col pt-6 gap-2">
              <span className="text-sm font-normal ">Font Weight:</span>
              <input
                className="px-3 py-2 border rounded-sm text-[#595959] font-normal text-base"
                onChange={() => console.log("")}
                type="number"
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
