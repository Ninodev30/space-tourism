import styled from 'styled-components';
import backgroundCrewMobile from '../../images/crew/background-crew-mobile.jpg'
import backgroundCrewTablet from '../../images/crew/background-crew-tablet.jpg'
import backgroundCrewDesktop from '../../images/crew/background-crew-desktop.jpg'

export const CrewContainer = styled.main`
height:100vh;
width: 100vw;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${backgroundCrewMobile});
@media (min-width:768px) and (max-width:1024px){
    background-image: url(${backgroundCrewTablet});
};
@media (min-width:1024px){
    background-image: url(${backgroundCrewDesktop});
    flex-direction: row !important;
};
section{
    height: 45vh;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    h2{
        font-size: 1.7rem;
        font-weight: 400;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        p{
            display: inline-block;
            padding-right: 1rem;
            font-weight: bold;
            opacity: 25%;
        }
    }
    figure{
        display:flex;
        flex-direction: column;
        align-items: center;
        img{
            height:33.5vh;
        }
        hr{
            background-color: #383B4B;
            opacity:30%;
            width:85vw;
        }
    }
}
article{
    height: 40vh;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .container-circles{
        height:1.5rem;
        width:23vw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        div{
            height:1rem;
            width:1rem;
            border-radius: 50%;
            background-color: #979797;
            opacity:17.44%;
        }
    }
    h1,
    h3{
        font-size: 2.4rem;
        font-weight: 400;
        font-family: "Bellefair" , serif;
        text-transform: uppercase;
        padding:0.2rem 0;
    }
    h3{
        font-size:1.5rem;
        opacity: 49.51%;
        text-align: center;
    }
    p{
        color:#D0D6F9;
        text-align: center;
        padding:0 3rem;
        font-size: 1.6rem;
        line-height: 2rem;
    }
}
`