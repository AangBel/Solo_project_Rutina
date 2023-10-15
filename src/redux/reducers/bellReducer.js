
const bellReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BELL':
            return {
                ...state,
                bells: [...state.bells, action.payload]
            };
        default:
            return state;
    }
};

export default bellReducer;

// case 'REMOVE_BELL':
//             return {
//                 ...state,
//                 bells: state.bells.filter(bell => bell.id !== action.payload)
//             };
//         case 'UPDATE_BELL':
//             return {
//                 ...state,
//                 bells: state.bells.map(bell => {
//                     if (bell.id === action.payload.id) {
//                         return {
//                             ...bell,
//                             ...action.payload.updates
//                         };
//                     } else {
//                         return bell;
//                     }
//                 })
//             };