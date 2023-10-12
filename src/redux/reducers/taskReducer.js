//do we want this to be a {} instead of []??
const taskReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TASKS':
        return action.payload;
      default:
        return state;
    }
  };

export default taskReducer;

