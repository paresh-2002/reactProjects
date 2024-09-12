import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
function App() {
  const color = [
    "Orange",
    "Red",
    "Blue",
    "Purple",
    "Pink",
    "Yellow",
    "Cyan",
    "Green",
    "White",
    "Gray",
  ];
  const [colors, setColors] = useState(color);

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: colors }}
      >
         <h1 className="text-3xl pt-5 text-center">Change the Background Color</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
         
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 px-2 rounded-2xl">
            {color.map((color) => (
              <Button key={color} color={color} setColors={setColors} />
            ))}
            {/* <button className="outline-none shadow-lg px-4 py-1 rounded-full text-white" style={{backgroundColor:'red'}} onClick={() =>setColors('red')}>Red</button>
          <button className="outline-none shadow-lg px-4 py-1 rounded-full" style={{backgroundColor:'white'}} onClick={() =>setColors('white')}>White</button>
          <button className="outline-none shadow-lg px-4 py-1 rounded-full text-white"  style={{backgroundColor:'black'}} onClick={() =>setColors('black')}>Black</button>
          <button className="outline-none shadow-lg px-4 py-1 rounded-full text-white" style={{backgroundColor:'blue'}} onClick={() =>setColors('blue')}>Blue</button>
          <button className="outline-none shadow-lg px-4 py-1 rounded-full text-white"  style={{backgroundColor:'green'}} onClick={() =>setColors('green')}>Green</button>
          <button className="outline-none shadow-lg px-4 py-1 rounded-full " style={{backgroundColor:'cyan'}} onClick={() =>setColors('cyan')}>Cyan</button>
          <button className="outline-none shadow-lg px-4 py-1 rounded-full "  style={{backgroundColor:'yellow'}} onClick={() =>setColors('yellow')}>Yellow</button>
          <button className="outline-none shadow-lg px-4 py-1 rounded-full " style={{backgroundColor:'pink'}} onClick={() =>setColors('pink')}>Pink</button>
          <button className="outline-none shadow-lg px-4 py-1 rounded-full "  style={{backgroundColor:'purple'}} onClick={() =>setColors('purple')}>Purple</button>
          <button className="outline-none shadow-lg px-4 py-1 rounded-full " style={{backgroundColor:'gray'}} onClick={() =>setColors('gray')}>Gray</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;