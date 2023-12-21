import { createContext, useEffect, useState } from "react";

export const BlocksContext = createContext();

export function BlocksContextProvider({ children }) {
  const [blocksData, setBlocksData] = useState({
    currDragTitle: undefined,
    currDragBlock: undefined,
    blocks: [],
  });

  useEffect(() => {
    const blocks = localStorage.getItem("blocks");
    if (
      JSON.stringify(blocksData.blocks) === JSON.stringify([]) &&
      blocks !== null
    ) {
      setBlocksData({
        ...blocksData,
        blocks: JSON.parse(blocks),
      });
    } else {
      localStorage.setItem("blocks", JSON.stringify(blocksData.blocks));
    }
  }, [blocksData]);

  return (
    <BlocksContext.Provider value={{ blocksData, setBlocksData }}>
      {children}
    </BlocksContext.Provider>
  );
}
