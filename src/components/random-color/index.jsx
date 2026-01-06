import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomcolorutility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomcolorutility(hex.length)];


    }
setColor(hexColor)
  }
  
  function handleCreateRandomRgbColor() {
    const r=randomcolorutility(256)
    const g=randomcolorutility(256)
    const b=randomcolorutility(256)
    setColor(`rgb(${r},${g},${b})`)
  }
  return (
    <div   style={{ backgroundColor: color }}
 className="text-center bg-slate-500 h-96">
      <h1 className="border-blue-300 text-yellow-100 ">
        Random Color Generator
      </h1>
      <button
        onClick={() => setTypeOfColor("rgb")}
        className="bg-blue-300 p-2 rounded-md m-2 border-r-4"
      >
        Create RGB Color
      </button>
      <button
        onClick={() => setTypeOfColor("hex")}
        className="bg-blue-300 p-2 rounded-md m-2 border-r-4"
      >
        Create HEX color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
        className="bg-blue-300 p-2 rounded-md m-2 border-r-4"
      >
        Create Random Color
      </button>
      <div className="flex justify-center text-white text-[40px] mt-16">
<h3>{typeOfColor ==='rgb'?'RGB Color':"HEX Color"}</h3>
<h3>{color}</h3>
      </div>
    </div>
  );
}
