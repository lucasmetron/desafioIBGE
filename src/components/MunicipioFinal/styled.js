import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    max-width: 80%;
    min-width: 50%;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 1rem;
    padding-right: 1rem;
   
    -webkit-box-shadow: 0px 0px 14px -4px rgba(0,0,0,0.92); 
box-shadow: 0px 0px 14px -4px rgba(0,0,0,0.92);

    div{
        margin-top: 10px;
        margin-bottom: 10px;
        height: 1px;
        width: 100%;
        background-color: #E0E0E0;
    }

    h2{
        margin: 0;
        text-align: center;
    }

    p{
        font-weight: 700;
    }

    span{
        font-weight: 400;
        color: #99989B;
    }

    button{
        width: 100%;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
        transition: all ease .5s;
        background-color: #0DB854;
        font-size: 1rem;
        cursor: pointer;
        &:hover{
            background-color: #1ED44E;
        }
    }

    
`;