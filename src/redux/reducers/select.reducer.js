// const selectReducer = (state = {}, action) => {
//     switch (action.type) {
//         case 'SET_TASKS_SELECT':
//             return action.payload;
//             default:
//                 return state;
//     }
// };

const selectedTaskId = (state = {}, action) => {
    switch (action.type) {
        case 'SELECTED_TASK_TO_EDIT':
            return action.payload;
            default:
                return state;
    }
};

export default selectedTaskId;