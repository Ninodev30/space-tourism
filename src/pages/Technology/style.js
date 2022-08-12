import styled from "styled-components";
import backgroundTechnologyMobile from '../../images/technology/background-technology-mobile.jpg'
import backgroundTechnologyTablet from '../../images/technology/background-technology-tablet.jpg'
import backgroundTechnologyDesktop from '../../images/technology/background-technology-desktop.jpg'

export const TechnologyContainer = styled.main`
height:100vh;
width: 100vw;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${backgroundTechnologyMobile});
@media (min-width:768px) and (max-width:1024px){
    background-image: url(${backgroundTechnologyTablet});
    section{
        height:calc(25vh + 20vw) !important;
        h2{
            align-self: flex-start !important;
            padding-left: 7vw;
        }
    }
    article{
        height:34vh !important;
        p{
            padding:0 20vw !important;
        }
    }
};
@media (min-width:1024px){
    background-image: url(${backgroundTechnologyDesktop});
};
section{
    height:calc(30vh + 15vw) ;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    h2{
        font-size: 2rem;
        font-weight: 400;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        p{
            display: inline-block;
            margin-right: 1rem;
            font-weight: bold;
            opacity: 25%;
        }
    }
    img{
        width: 100%;
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
        height: 3.5rem;
        width: 15rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        div{
            height: 100%;
            width: 24%;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "Bellefair" , serif;
        }
    }
    h1,
    h3{
        font-size: 2.2rem;
        font-weight: 400;
        font-family: "Bellefair" , serif;
        text-transform: uppercase;
    }
    h3{
        margin:1vh 0;
        color: #D0D6F9;
        text-align: center;
        font-size: 1rem;
        letter-spacing: 0.2rem;
    }
    p{
        color: #D0D6F9;
        text-align: center;
        font-size: 1.5rem;
        line-height: 2rem;
        padding:0 10vw;
    }
}
`