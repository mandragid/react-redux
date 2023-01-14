import { counterReducer } from "./counterReducer";
import { combineReducers } from "redux";
import { loginReducer } from "./authReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  login: loginReducer,
});

export default rootReducer;
