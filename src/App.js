import "./App.css";
import { useRef } from "react";
import SideToolbar from "./components/SideToolbar";
import DropOverCanvas from "./components/DropOverCanvas";

function App() {
  const draggedItem = useRef();

  const handleDragStart = (e) => {
    draggedItem.current = e.target.id;
  };

  return (
    <div className="w-screen h-screen md:flex md:flex-row">
      <DropOverCanvas />
      <SideToolbar handleDragStart={handleDragStart} />
    </div>
  );
}

export default App;
