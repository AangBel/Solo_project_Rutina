const selectedBellId = (state = {}, action) => {
    switch (action.type) {
        case 'SELECTED_BELL_TO_EDIT':
            return action.payload;
            default:
                return state;
    }
};

export default selectedBellId;