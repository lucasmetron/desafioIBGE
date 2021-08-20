import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApiService } from '../../service/ApiService';
import { addEstados } from '../../store/actions/estadosAction'
import {
    ContainerEstados,
    SelectCSS,
    StatesTable,
} from './styled'
import { DataGrid } from '@material-ui/data-grid';




export default function Estados(props) {
    const dispatch = useDispatch();
    const redux = useSelector(state => state)
    const [allStates, setAllStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');

    const columns = [

        { field: 'UF', headerName: 'UF', width: 100 },
        { field: 'state', headerName: 'Estado', width: 250 },
        { field: 'region', headerName: 'Região', width: 150 },
    ];

    const rows = allStates.map(item => {
        return {
            id: item.id,
            UF: item.sigla,
            state: item.nome,
            region: item.regiao.nome
        }
    })

    console.log(rows)

    useEffect(() => {
        getEstados();
    }, [])

    useEffect(() => {
        dispatch(addEstados(allStates))
        console.log(redux)
    }, [allStates, redux])


    async function getEstados() {
        setAllStates(await ApiService.get('estados'))
    }

    function stateSelected(event) {

        console.log(event.target.value)
    }

    return (
        <ContainerEstados>

            <SelectCSS autoFocus name='estados' id='estados' onChange={stateSelected}>

                <option selected>Escolha um estado</option>

                {allStates.length != 0 ?

                    allStates.map((state) => {
                        return <option onClick={() => { console.log('teste') }} key={state.id} value={state.sigla} >{state.nome}</option>
                    })

                    :

                    ''
                }
            </SelectCSS>

            <StatesTable>
                <DataGrid autoHeight rows={rows} columns={columns} pageSize={5} style={{ fontSize: '20px' }} />
            </StatesTable>

        </ContainerEstados>
    );
}