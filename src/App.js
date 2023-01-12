import "./App.css";
import { useState } from "react";
import Result from "./components/Result";

function App() {
  const [num, setNum] = useState(0);
  const handleAdd = () => {
    setNum(num + 1);
  };

  const handleSub = () => {
    setNum(num - 1);
  };
  return (
    <div className="Counter">
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <h1>{num}</h1>
      <Result />
    </div>
  );
}

export default App;
