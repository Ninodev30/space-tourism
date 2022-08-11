import styled from 'styled-components';
import backgroundDestinationMobile from '../../images/destination/background-destination-mobile.jpg'
import backgroundDestinationTablet from '../../images/destination/background-destination-tablet.jpg'
import backgroundDestinationDesktop from '../../images/destination/background-destination-desktop.jpg'

export const DestinationContainer = styled.main`
height:100vh;
width: 100vw;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${backgroundDestinationMobile});
@media (min-width:768px) and (max-width:1024px){
    background-image: url(${backgroundDestinationTablet});
    section{
        justify-content: space-between !important;
        h2{
            align-self: flex-start;
            padding-left: 4rem;
        }
        img{
            width:30% !important;
        }
        .titles{
            width:45% !important;
        }
    }
    article{
        height: 18vh !important;
        margin: 4vh 0 !important;
        p{
            padding: 0 10rem !important;
        }
    }
    .info-planets{
        height:10vh !important; 
/*         background-color: red; */
        flex-direction: row !important;
        justify-content: center !important;
        gap:15%;
/*         div{
            background-color: red !important;
        } */
    }
};
@media (min-width:1024px){
    background-image: url(${backgroundDestinationDesktop});
    flex-direction: row !important;
};
section{
    height:40vh;
    width:100%; 
/*     background-color: red; */
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:12vh;
    img{
        width: 45%;
        margin:2vh 0;
    }
    h2{
        font-size:1.7rem;
        letter-spacing: 0.3rem;
        font-weight: 400;
        text-transform: uppercase;
        p{
            display: inline-block;
            font-weight: bold;
            opacity: 25%;
            margin-right: 1rem;
        }
    }
    .titles{
        height:7%;
        width:80%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        h3{
            font-size: 1.2rem;
            letter-spacing: 0.2rem;
            text-transform: uppercase;
        }
    }
}
article{
    height: 21vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 2vh 0;
/*     background-color: red; */
    h1{
        font-size: 4rem;
        font-family: "Bellefair" , serif;
        font-weight: 400;
        text-transform: uppercase;
    }
    p{
        color: #d0d6f9;
        font-size: 1.4rem;
        padding: 0 5rem;
        text-align: center;
    }
}
.info-planets{
    height: 19vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 2vh 0;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height:40%;
        h2{
            font-size: 2.3rem;
            font-family: "Bellefair" , serif;
            font-weight: 400;
            text-transform: uppercase;
        }
        h3{
            color: #d0d6f9;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
        }
    }
}
hr{
    width: 85vw;
    background-color: #383B4B;
    opacity: 30%;
}
`