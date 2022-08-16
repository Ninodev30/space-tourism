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
        font-size:calc(0.4vh + 0.4vw + 6px);
        font-family:'Barlow Condensed', sans-serif;
        color:white;
    }

    .background{
        height:100vh;
        width:100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .error{
        background-color: white;
        color: black;
        position: absolute;
        font-size: 4rem;
    }
`

export default GlobalStyle;