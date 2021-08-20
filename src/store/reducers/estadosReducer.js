export default function estadosReducer(state = [], action) {
    switch (action.type) {
        case 'ADDESTADOS':
            return state = action.payload;


        default:
            return state;
    }

}