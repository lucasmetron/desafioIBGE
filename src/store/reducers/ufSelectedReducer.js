export default function ufReducer(state = '', action) {
    switch (action.type) {
        case 'ADDUF':
            return state = action.payload;

        default:
            return state;
    }

}