import styled from "styled-components";
import backgroundHomeMobile from '../../images/home/background-home-mobile.jpg';
import backgroundHomeTablet from '../../images/home/background-home-tablet.jpg';
import backgroundHomeDesktop from '../../images/home/background-home-desktop.jpg';

export const HomeContainer = styled.main`
height:100vh;
width:100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap:10vh;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${backgroundHomeMobile});
@media (min-width:768px) and (max-width:1024px){
    background-image: url(${backgroundHomeTablet});
    article p{
        padding:0 20% !important;
    }
}
@media (min-width:1024px){
    background-image: url(${backgroundHomeDesktop});
    flex-direction: row !important;
}
article{
    text-align: center;
    h1{
        font-family: 'Bellefair', serif;
        font-size: 7rem;
        font-weight: 400;
        line-height: 10rem;
    }
    p{
        color:#D0D6F9;
        font-size:1.5rem;
        line-height: 2.5rem;
        padding: 0 10%;
    }
    .firstParagraph{
        text-transform: uppercase;
        font-size: 1.4rem;
        letter-spacing: 0.25rem;
    }
}
div{
    height:13rem;
    width:13rem;
    background-color: white;
    color: #0b0d17;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-family: 'Bellefair', serif;
    font-size: 1.7rem;
}
`