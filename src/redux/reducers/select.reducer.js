const selectReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TASKS_SELECT':
            return action.payload;
            default:
                return state;
    }
};

export default selectReducer;