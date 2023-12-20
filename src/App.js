import "./App.css";
import { useState } from "react";
import SideToolbar from "./components/SideToolbar";
import DropOverCanvas from "./components/DropOverCanvas";
import { BlocksContext } from "./context/BlocksContext";

function App() {
  const [blocksData, setBlocksData] = useState({
    currDragTitle: undefined,
    blocks: [],
  });

  return (
    <div className="w-screen h-screen md:flex md:flex-row">
      <BlocksContext.Provider value={{ blocksData, setBlocksData }}>
        <>
          <DropOverCanvas />
          <SideToolbar />
        </>
      </BlocksContext.Provider>
    </div>
  );
}

export default App;
