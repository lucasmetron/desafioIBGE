export default function municipioReducer(state = [], action) {
    switch (action.type) {
        case 'ADDMUNICIPIO':
            return state = action.payload;

        default:
            return state;
    }

}