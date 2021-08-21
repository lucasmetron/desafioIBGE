import { red } from "@material-ui/core/colors";
import React from "react";
import {
    Container,
    Card,
} from './styled'

export default function MunicipioFinal(props) {




    return (
        <Container>
            <Card>
                <h2>Município: <span>{ }</span> </h2>
                <div></div>
                <p>Microrregião: <span>Centro</span> </p>
                <p>Mesorregião: <span>C3</span> </p>
                <p>UF: <span>Distrito Federal</span> </p>
                <p>Região: <span>Centro Oeste</span> </p>
                <div></div>
                <button>Nova Pesquisa</button>

            </Card>
        </Container>
    );
}