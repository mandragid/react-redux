import React from "react";
import { createStore } from "redux";

const counterState = {
  total: 20,
};

const counterReducer = (result = counterState) => {
  return result;
};

const store = createStore(counterReducer);

export default store;
