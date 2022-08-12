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
gap:5vh;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${backgroundCrewMobile});
@media (min-width:768px) and (max-width:1024px){
    background-image: url(${backgroundCrewTablet});
    justify-content: flex-end !important;
    h2{
        align-self: flex-start;
        padding-left: 8vw;
    }
    figure{
        order: 1;
        border: none !important;
        img{
            height: 47vh !important;
        }
    }
    article{
        height:22vh !important;
        .container-circles{
            order: 1;
        }
        p{
            padding: 0 20vw !important;
        }
    }
};
@media (min-width:1024px){
    background-image: url(${backgroundCrewDesktop});
    flex-direction: row !important;
}
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
    width: 85vw;
    display:flex;
    justify-content: center;
    border-bottom:3px solid #383B4B;
    img{
        height:33.5vh;
    }
}
article{
    height: 33vh;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap:3vh;
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
    }
    h3{
        font-size:1.5rem;
        opacity: 49.51%;
        text-align: center;
        padding-bottom:0.4rem;
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