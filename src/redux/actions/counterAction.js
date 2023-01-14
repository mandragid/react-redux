export const handleAdd = (counter) => (dispatch) => {
  let newTotal = counter.total + 1;
  dispatch({
    type: "TAMBAH",
    payload: newTotal,
  });
};

export const handleSub = (counter) => (dispatch) => {
  let newTotal = counter.total - 1;
  dispatch({
    type: "KURANG",
    payload: newTotal,
  });
};
