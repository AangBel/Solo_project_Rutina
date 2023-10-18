
// // state = {} or []???
// const selectedTaskToEdit = (state = {}, action) => {
//     console.log('a message from the selectedTaskToEdit under reducers');
//     console.log('whats the action.payload?', action.payload);
//     switch (action.type) {
//         case "SET_EDIT_TASK":
//             return action.payload;
//             default:
//                 return state;
//     }
// }

const EditTaskStore = (state = {}, action) => {
    if (action.type === 'EDIT_TASK_ONCHANGE'){
        return {
            ...state, 
            [action.payload.property]: action.payload.value,
        };
    // } else if (action.type === 'CLEAR_EDIT_TASK') {
    //     return {};
    }
    return state;
    }



export default EditTaskStore;