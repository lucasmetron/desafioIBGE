import { red } from "@material-ui/core/colors";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiService } from '../../service/ApiService';
import {
    Container,
    Card,
} from './styled'
import { selectedMunicipio } from '../../store/actions/municipiosAction'
import { addUF } from '../../store/actions/ufAction'


export default function MunicipioFinal(props) {

    const dispatch = useDispatch()
    const redux = useSelector(state => state)
    const [municipio, setMunicipio] = useState(0);

    useEffect(() => {
        getMunicipio()
    }, [redux.municipioSelecionado])



    async function getMunicipio() {
        setMunicipio(await ApiService.get(`/municipios/${redux.municipioSelecionado}/distritos`))
    }

    function reset() {
        setMunicipio(0);
        dispatch(selectedMunicipio(''))
        dispatch(addUF(''))
    }

    return (
        <Container>

            {municipio == 0 ?
                ''
                :
                <Card>
                    <h2>Município: <span>{municipio[0].nome}</span> </h2>
                    <div></div>
                    <p>Microrregião: <span>{municipio[0].municipio.microrregiao.nome}</span> </p>
                    <p>Mesorregião: <span>{municipio[0].municipio.microrregiao.mesorregiao.nome}</span> </p>
                    <p>UF: <span>{municipio[0].municipio.microrregiao.mesorregiao.UF.nome}</span> </p>
                    <p>Região: <span>{municipio[0].municipio.microrregiao.mesorregiao.UF.regiao.nome}</span> </p>
                    <div></div>
                    <button onClick={reset}>Nova Pesquisa</button>

                </Card>
            }

        </Container>
    );
}