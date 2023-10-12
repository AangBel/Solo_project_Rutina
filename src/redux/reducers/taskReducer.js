const initialState = {
    tasks: [],
};

// const tasksReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_TASK':
//             return {
//                 ...state,
//                 tasks: [...state.tasks, action.payload],
//             };
//         case 'REMOVE_TASK':
//             return {
//                 ...state,
//                 tasks: state.tasks.filter((task) => task.id !== action.payload),
//             };
//         case 'UPDATE_TASK':
//             return {
//                 ...state,
//                 tasks: state.tasks.map((task) =>
//                     task.id === action.payload.id ? { ...task, ...action.payload } : task
//                 ),
//             };
//         default:
//             return state;
//     }
// };


const taskReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TASKS':
        return action.payload;
      case 'ADD_TASK':
        return [...state, action.payload]; 
      default:
        return state;
    }
  };

export default taskReducer;

