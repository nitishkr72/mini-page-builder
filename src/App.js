import logo from "./logo.svg";
import "./App.css";

function DraggableButtons({item}) {
  return <div> {item.tittle}</div>;
}

const draggableBtnList = [
  { tittle: "Label" }, { tittle: "Input" }, { tittle: "Button" }
]

function App() {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-4/5 h-full bg-white">Heelpo</div>
      <div className="w-1/5 h-full bg-[#2D2D2D] px-6 py-5">
        <span className="text-white font-bold text-xl">BLOCKS</span>
        {draggableBtnList.map((item, index) => {
            return <DraggableButtons item={item}/>
        })}
      </div>
    </div>
  );
}

export default App;
