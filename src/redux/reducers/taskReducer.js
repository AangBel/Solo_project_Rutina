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

// function taskReducer(state = [], action) {
//   switch (action.type) {
//     case "EDIT_TASK_SUCCESS":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.payload.id ? action.payload : task
//         ),
//         task: action.payload,
//         successMessage: "Task updated successfully",
//       };
//     case "CLEAR_SUCCESS_MESSAGE":
//       return {
//         ...state,
//         successMessage: "",
//       };
//     default:
//       return state;
//   }
// }