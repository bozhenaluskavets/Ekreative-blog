import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        box-sizing: border-box;
    }

    a {
        color: ${COLORS.black};
        transition: 0.3s;
    }
`;
