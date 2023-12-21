import { useContext } from "react";
import { BlocksContext } from "../context/BlocksContext";

export function BlockView({ title, labelText, isSelected }) {
  switch (title) {
    case "Input":
      return (
        <div
          className={`px-4 py-2 ${
            isSelected
              ? "border-2 border-red-500"
              : "border border-black border-opacity-5"
          } hover:border-2 hover:border-red-500 hover:border-opacity-100 rounded-sm bg-white text-[#595959] font-normal text-base`}
        >
          {labelText}
        </div>
      );
    case "Button":
      return (
        <div
          className={`${
            isSelected
              ? "border-2 border-red-500"
              : "border border-black border-opacity-5"
          } font-normal text-base bg-[#0044C1] text-white px-4 py-2 hover:border-red-500 hover:border-2`}
        >
          {labelText}
        </div>
      );
    default:
      return (
        <span
          className={`${
            isSelected ? "border-2 border-red-500" : ""
          } font-normal text-base text-black hover:border-red-500 hover:border-2 px-2 py-1 rounded-md`}
        >
          {labelText}
        </span>
      );
  }
}
