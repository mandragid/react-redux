import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { total } = useSelector((rootReducer) => rootReducer.counter);
  const dispatch = useDispatch();

  const handleAdd = () => {
    let newTotal = total + 1;
    dispatch({
      type: "TAMBAH",
      payload: newTotal,
    });
  };

  const handleSub = () => {
    let newTotal = total - 1;
    dispatch({
      type: "KURANG",
      payload: newTotal,
    });
  };
  console.log();
  return (
    <div className="Counter">
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <h1>{total}</h1>
    </div>
  );
}

export default App;
