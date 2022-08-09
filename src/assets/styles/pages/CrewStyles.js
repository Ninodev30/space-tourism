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
`