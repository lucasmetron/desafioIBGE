export const addMunicipios = (value) => { return { type: 'ADDMUNICIPIO', payload: value || '' } }

export const selectedMunicipio = (value) => { return { type: 'ADDMUNICIPIOSELECIONADO', payload: value || '' } }