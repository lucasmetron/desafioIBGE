import React from 'react'
import {
    Container,
    Data,
    Logo,

} from './styled'
import BrazilFlag from '../../assets/BrazilFlag.png';


function getDate() {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let mounth = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    const dayOFWeek = (date) => {
        if (date.getDay() === 0) {
            return 'Dom'
        } else if (date.getDay() === 1) {
            return 'Seg'
        } else if (date.getDay() === 2) {
            return 'Ter'
        } else if (date.getDay() === 3) {
            return 'Qua'
        } else if (date.getDay() === 4) {
            return 'Qui'
        } else if (date.getDay() === 5) {
            return 'Sex'
        } else if (date.getDay() === 6) {
            return 'Sab'
        } else {
            return 'N/A'
        }
    }

    return `${dayOFWeek(date)},  ${day}/${mounth}/${year}`
}


export default function Header(props) {

    return (
        <Container>
            <Logo>
                <img src={BrazilFlag} alt="Bandeir do Brasil" />
                <h2>IBGE - By Lucas Rosa</h2>
            </Logo>



            <Data>
                <h2>{getDate()}</h2>
            </Data>

        </Container>
    );
}