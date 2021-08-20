import styled from 'styled-components'

export const Container = styled.div`
    position: sticky;
    top: 0;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    gap: 0.2rem;
    border-bottom: 1px solid #99989b34 ;
    z-index: 2;
    background-color: white;
    -webkit-box-shadow: 0px 7px 14px -6px rgba(0,0,0,0.53); 
    box-shadow: 0px 7px 14px -6px rgba(0,0,0,0.53);

    p{
        font-size: 1rem;
        color: #99989B;
    }

`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
   

    img{
        width: 50px;
    }
    h2{
        color: #99989B;
        font-size: 1rem;
    }
`;

export const Data = styled.div`
    h2{
        color: #99989B;
        font-size: 1rem;
    }
`;
