import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// MOBILE FIRST

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        outline:0;
        box-sizing: border-box;
    }

    html{
        font-size:calc(0.4vh + 0.4vw + 7px);
        font-family:'Barlow Condensed', sans-serif;
        color:white;
    }
`

export default GlobalStyle;