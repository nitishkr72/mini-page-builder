import { createContext } from "react";

export const BlocksContext = createContext({
  currDragTitle: undefined,
  blocks: [],
});
