const loginState = {
  isLogin: true,
};

export const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...loginState,
        isLogin: action.payload,
      };

    default:
      return state;
  }
};
