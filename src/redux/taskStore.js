const taskStore = (state = {}, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;
    default:
      return state;
  }
};

export default taskStore;
