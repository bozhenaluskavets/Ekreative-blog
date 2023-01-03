import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        font-family: Quicksand;
        text-decoration: none;
        background-color: #252525;
    }

    a {
        color: #fff;
        transition: 0.3s;
    }

    a:hover {
        color: rgb(177, 190, 159);
    }
`;

export const Container = styled.div`
    height: 100vh;
    width: 80%;
    margin: 0 auto;
`

export const Title = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 40px;
    font-weight: 200;
    width: 100%;
`

export const Input = styled.input`
    color: #fff;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    margin-bottom: 20px;
    border: solid 1px rgba(177, 190, 159, 0.665);
    border-radius: 5px;
    :focus {
        outline: none;
        border: solid 1px rgba(204, 215, 188, 1);
    }
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }  
`

export const Button = styled.button`
    color: #fff;
    border-radius: 5px;
    font-size: 25px;
    padding: 20px;
    cursor: pointer;
    border: solid 1px rgba(204, 215, 188, 1);
    transition: 0.3s;
    background-color:  rgba(174, 190, 150, 1);

    :disabled {
        color: rgba(204, 215, 188, 0.375);
        background-color:  rgba(208, 218, 193, 0.444);
        border: solid 1px transparent;
    }
`