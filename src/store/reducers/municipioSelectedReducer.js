export default function municipioSelectedReducer(state = '', action) {
    switch (action.type) {
        case 'ADDMUNICIPIOSELECIONADO':
            return state = action.payload;

        default:
            return state;
    }

}