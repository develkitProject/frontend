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
`;

export default GlobalStyle;
