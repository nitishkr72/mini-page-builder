import { useContext } from "react";
import { BlocksContext } from "../context/BlocksContext";

export function BlockView({ title, labelText }) {
  switch (title) {
    case "Input":
      return (
        <div
          className={`px-4 py-2 rounded-sm bg-white text-[#595959] font-normal text-base`}
        >
          {labelText}
        </div>
      );
    case "Button":
      return (
        <div
          className={` font-normal text-base bg-[#0044C1] text-white px-4 py-2 `}
        >
          {labelText}
        </div>
      );
    default:
      return (
        <span
          className={` font-normal text-base text-black  px-2 py-1 rounded-md`}
        >
          {labelText}
        </span>
      );
  }
}
