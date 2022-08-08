import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import backgroundHomeMobile from '../images/home/background-home-mobile.jpg';
import backgroundHomeTablet from '../images/home/background-home-tablet.jpg';
import backgroundHomeDesktop from '../images/home/background-home-desktop.jpg';
import backgroundDestinationMobile from '../images/destination/background-destination-mobile.jpg'
import backgroundDestinationTablet from '../images/destination/background-destination-tablet.jpg'
import backgroundDestinationDesktop from '../images/destination/background-destination-desktop.jpg'
import backgroundCrewMobile from '../images/crew/background-crew-mobile.jpg'
import backgroundCrewTablet from '../images/crew/background-crew-tablet.jpg'
import backgroundCrewDesktop from '../images/crew/background-crew-desktop.jpg'
import backgroundTechnologyMobile from '../images/technology/background-technology-mobile.jpg'
import backgroundTechnologyTablet from '../images/technology/background-technology-tablet.jpg'
import backgroundTechnologyDesktop from '../images/technology/background-technology-desktop.jpg'


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
`

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    color:white;
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    background-image: ${({Size}) => (   
        (Size === 'Home' && `url(${backgroundHomeMobile})`) ||
        (Size === 'Destination' && `url(${backgroundDestinationMobile})`) || 
        (Size === 'Crew' && `url(${backgroundCrewMobile})`) || 
        (Size === 'Technology' && `url(${backgroundTechnologyMobile})`)
    )
    };
    @media (min-width:768px) and (max-width:1024px){
        background-image: ${({Size}) => 
        (Size === 'Home' && `url(${backgroundHomeTablet})`) ||
        (Size === 'Destination' && `url(${backgroundDestinationTablet})`) || 
        (Size === 'Crew' && `url(${backgroundCrewTablet})`) || 
        (Size === 'Technology' && `url(${backgroundTechnologyTablet})`)
        };
    }
    @media (min-width:1024px){
        background-image: ${({Size}) => 
        (Size === 'Home' && `url(${backgroundHomeDesktop})`) ||
        (Size === 'Destination' && `url(${backgroundDestinationDesktop})`) || 
        (Size === 'Crew' && `url(${backgroundCrewDesktop})`) || 
        (Size === 'Technology' && `url(${backgroundTechnologyDesktop})`)
        };
    }
`

export default GlobalStyle;