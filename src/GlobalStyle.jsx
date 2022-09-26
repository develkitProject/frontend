import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        letter-spacing: -1.8px;
        overflow-x: hidden;
        min-height:100%;
    }
    /* button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;W
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    } */
`;

export default GlobalStyle;
