import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { handleAdd, handleSub } from "./redux/actions/counterAction";
import { handleLogin } from "./redux/actions/authAction";

function App() {
  // receive state from redux, get all state needed from rootreducer

  const { counter, login } = useSelector((rootReducer) => rootReducer);
  const dispatch = useDispatch();

  // receive function from redux

  const handleAdd = () => {
    dispatch(handleAdd(counter));
  };

  const handleSub = () => {
    dispatch(handleSub(counter));
  };
  const handleLoginButton = () => {
    dispatch(handleLogin(login));
  };

  return (
    <div className="Counter">
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <h1>{counter.total}</h1>
      {/* login condition message using ternary */}
      {login.isLogin ? <h1>You Have Logged In</h1> : <h1>Please Login</h1>}
      {/* login/logout button based on login state */}
      <button onClick={handleLoginButton}>
        {login.isLogin ? "LOGOUT" : "LOGIN"}{" "}
      </button>
    </div>
  );
}

export default App;
