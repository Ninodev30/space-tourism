import { createGlobalStyle } from 'styled-components';
import backgroundHomeMobile from '../images/home/background-home-mobile.jpg';
import backgroundHomeTablet from '../images/home/background-home-tablet.jpg';
import backgroundHomeDesktop from '../images/home/background-home-desktop.jpg';

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
    }

    body{
        color:white;
        background-image: url(${backgroundHomeMobile});
        background-repeat: no-repeat;
        background-size: 100vw 100vh;
        @media (min-width:768px) and (max-width:1024px){
            background-image: url(${backgroundHomeTablet}); 
        }
        @media (min-width:1024px){
            background-image: url(${backgroundHomeDesktop}); 
        }
    }

`

export default GlobalStyle;