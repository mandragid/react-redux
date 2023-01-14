export const handleLogin = (login) => (dispatch) => {
  // negation boolean
  let loginState = login.isLogin;
  loginState = !loginState;
  dispatch({
    type: "AUTH",
    payload: loginState,
  });
};
