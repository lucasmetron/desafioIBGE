import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApiService } from '../../service/ApiService';
import { addMunicipios, selectedMunicipio } from '../../store/actions/municipiosAction'
import {
    Container,
    SelectCSS,
    Table,
} from './styled'
import { DataGrid } from '@material-ui/data-grid';


export default function Municipos(props) {
    const dispatch = useDispatch();
    const redux = useSelector(state => state)
    const [allMunicipios, setAllMunicipios] = useState([]);
    const [selectedMunicipios, setSelectedMunicipios] = useState('');
    const [ufSelecionadaRedux, setUfSelecionadaRedux] = useState('');

    const columns = [

        { field: 'muni', headerName: 'Município', width: 250 },
        { field: 'microRegion', headerName: 'Microrregião', width: 250 },
        { field: 'uf', headerName: 'UF', width: 250 },
    ];

    const rows = allMunicipios.map(item => {
        return {
            id: item.id,
            muni: item.nome,
            microRegion: item.microrregiao.nome,
            uf: item.microrregiao.mesorregiao.UF.nome,
        }
    })

    useEffect(() => {
        getMunicipios();
    }, [ufSelecionadaRedux])

    useEffect(() => {
        dispatch(addMunicipios(allMunicipios))
    }, [allMunicipios, redux])

    useEffect(() => {
        setUfSelecionadaRedux(redux.ufSelecionada)
        console.log(ufSelecionadaRedux)
        console.log(ufSelecionadaRedux == '')
        console.log(redux)
    }, [redux.ufSelecionada])

    useEffect(() => {
        dispatch(selectedMunicipio(selectedMunicipios))
    }, [selectedMunicipios])

    async function getMunicipios() {
        setAllMunicipios(await ApiService.get(`estados/${ufSelecionadaRedux}/municipios`))
    }

    function municipioSelected(event) {
        setSelectedMunicipios(event.target.value)
    }

    return (
        <>
            {ufSelecionadaRedux == '' ?

                ''
                :
                <Container>

                    <SelectCSS name='Municipios' id='Municipios' onChange={municipioSelected}>

                        <option selected>Escolha o Município</option>

                        {allMunicipios.length != 0 ?

                            allMunicipios.map((state) => {
                                return <option key={state.id} value={state.id} >{state.nome}</option>
                            })

                            :

                            ''
                        }
                    </SelectCSS>

                    <Table>
                        <DataGrid autoHeight rows={rows} columns={columns} pageSize={5} />
                    </Table>

                </Container>
            }

        </>



    );
}