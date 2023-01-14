import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { handleAdd, handleSub } from "./redux/actions/counterAction";
import { handleLogin } from "./redux/actions/authAction";

function App() {
  const { counter, login } = useSelector((rootReducer) => rootReducer);
  const dispatch = useDispatch();

  console.log(login);

  const add = () => {
    dispatch(handleAdd(counter));
  };

  const sub = () => {
    dispatch(handleSub(counter));
  };
  const handleLoginButton = () => {
    dispatch(handleLogin(login));
  };
  return (
    <div className="Counter">
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <h1>{counter.total}</h1>
      {login.isLogin ? <h1>anda sudah login</h1> : <h1>silahkan login</h1>}
      <button onClick={handleLoginButton}>
        {login.isLogin ? "logout" : "login"}{" "}
      </button>
    </div>
  );
}

export default App;
