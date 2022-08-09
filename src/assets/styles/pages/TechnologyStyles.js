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
};
@media (min-width:1024px){
    background-image: url(${backgroundTechnologyDesktop});
};
`