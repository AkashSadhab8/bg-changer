import { useState } from "react";
// import "./App.css";
// import Card from "./components/Card";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div className="w-full h-screen outline-2 shadow-lg" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 py-5 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center shadow-lg gap-3 px-3 py-3 rounded-xl bg-white">
          <button onClick={ () => setColor("red") } className=" px-4 py-1 rounded-full outline-none text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={ () => setColor("green") } className=" px-4 py-1 rounded-full outline-none text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={ () => setColor("blue") } className=" px-4 py-1 rounded-full outline-none text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={ () => setColor("olive") } className=" px-4 py-1 rounded-full outline-none text-white shadow-lg" style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={ () => setColor("gray") } className=" px-4 py-1 rounded-full outline-none text-slate shadow-lg" style={{backgroundColor: "gray"}}>Gray</button>
          <button onClick={ () => setColor("lavender") } className=" px-4 py-1 rounded-full outline-none text-slate shadow-lg" style={{backgroundColor: "lavender"}}>Lavender</button>
          <button onClick={ () => setColor("pink") } className=" px-4 py-1 rounded-full outline-none text-slate shadow-lg" style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={ () => setColor("white") } className=" px-4 py-1 rounded-full outline-none text-slate shadow-lg" style={{backgroundColor: "white"}}>White</button>
          <button onClick={ () => setColor("purple") } className=" px-4 py-1 rounded-full outline-none text-white shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={ () => setColor("yellow") } className=" px-4 py-1 rounded-full outline-none text-slate shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={ () => setColor("black") } className="bg-green px-4 py-1 rounded-full outline-none text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={ () => setColor("aqua") } className=" px-4 py-1 rounded-full outline-none text-slate shadow-lg" style={{backgroundColor: "aqua"}}>Aqua</button>
        </div>
      </div>
    </div>
  );
}

export default App;
