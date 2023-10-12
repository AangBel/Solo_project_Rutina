const initialState = {
    tasks: [],
};

const taskReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TASKS':
        return action.payload;
      case 'ADD_TASK':
        return [...state, action.payload]; 
        // case 'FETCH_TASKS':
        // return action.payload;
        // case 'DELETE_TASK':
        // return action.payload;
        // case 'EDIT_TASK':
        // return action.payload;
      default:
        return state;
    }
  };

export default taskReducer;

