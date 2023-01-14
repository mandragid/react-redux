export const handleLogin = (login) => (dispatch) => {
  let loginState = login.isLogin;

  loginState = !loginState;

  dispatch({
    type: "AUTH",
    payload: loginState,
  });
};
