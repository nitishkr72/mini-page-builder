export default function DropOverCanvas() {
  return (
    <div
      className="w-full h-full bg-white"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        console.log(e.clientX, e.clientY, e);
      }}
    >
      Hellp
    </div>
  );
}
