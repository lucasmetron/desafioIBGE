import styled from "styled-components";

export const ContainerEstados = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

   
`;

export const SelectCSS = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url('http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif') no-repeat #eeeeee;
    background-position: 218px center;
    width: 250px;
    height:30px;
    outline: 0;
    font-size: 1rem;
    align-self: flex-start;

    option{
        font-size: 1rem;
    }

`;

export const StatesTable = styled.div`
width: 100%;

    margin-top: 1rem;
    *{
        font-size: 1rem;
    }

`;