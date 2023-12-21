import { useContext } from "react";
import { BlocksContext } from "../context/BlocksContext";

export function BlockView({ block }) {
  const { title, labelText, fontSize, fontWeight } = block;

  switch (title) {
    case "Input":
      return (
        <div
          className={`px-4 py-2 rounded-sm bg-white text-[#595959]`}
          style={{
            fontSize: `${fontSize / 16}rem`,
            fontWeight: `${fontWeight}`,
          }}
        >
          {labelText}
        </div>
      );
    case "Button":
      return (
        <div
          className={`bg-[#0044C1] text-white px-4 py-2 `}
          style={{
            fontSize: `${fontSize / 16}rem`,
            fontWeight: `${fontWeight}`,
          }}
        >
          {labelText}
        </div>
      );
    default:
      return (
        <span
          className={`text-black  px-2 py-1 rounded-md`}
          style={{
            fontSize: `${fontSize / 16}rem`,
            fontWeight: `${fontWeight}`,
          }}
        >
          {labelText}
        </span>
      );
  }
}
