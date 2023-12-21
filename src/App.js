import SideToolbar from "./components/SideToolbar";
import DropOverCanvas from "./components/DropOverCanvas";
import { BlocksContextProvider } from "./context/BlocksContext";

function App() {
  return (
    <div className="w-screen h-screen ">
      <BlocksContextProvider>
        <>
          <DropOverCanvas />
          <SideToolbar />
        </>
      </BlocksContextProvider>
    </div>
  );
}

export default App;
