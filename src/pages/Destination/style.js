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
        justify-content: space-around !important;
        h2{
            align-self: flex-start;
            padding-left: 4rem;
        }
        img{
            width:calc(18vh + 10vw) !important;
        }
        .titles{
            width:45% !important;
        }
    }
    article{
        height: calc(30vh + 10vw) !important;
        width:70% !important;
        .titles{
            width:80% !important;
        }
        .info-planets{
        height:10vh !important; 
        flex-direction: row !important;
        justify-content: center !important;
        gap:15%;
    }
    }
}
@media (min-width:1024px){
    background-image: url(${backgroundDestinationDesktop});
    flex-direction: row !important;
    gap:8%;
    section{
        height:75vh !important;
        width: 40% !important;
        margin: 0 !important;
        justify-content:flex-end !important;
        gap:10vh;
        h2{
            align-self: start;
        }
        img{
            width:50vh !important;
        }
    }
    article{
        height:65vh !important;
        width:30% !important;
        align-items: flex-start !important;
        justify-content: flex-end !important;
        gap:5%;
        .titles{
            justify-content: flex-start !important; 
            gap: 5%;
        }
        h1{
            font-size: 6rem !important;
            padding:0 !important;
            margin: 0 !important;
        }
        p{
            text-align: start !important;
        }
        .info-planets{
        height:10vh !important; 
        flex-direction: row !important;
        justify-content: flex-start !important;
        gap:15%;
    }
    }
}
section{
    height:40vh;
    width:100%; 
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:12vh;
    img{
        width: calc(24vh + 10vw);
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
}
article{
    height: 45vh;
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .titles{
        height:7%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        h3{
            font-size: 1.2rem;
            letter-spacing: 0.2rem;
            text-transform: uppercase;
        }
    }
    h1{
        font-size: 4rem;
        font-family: "Bellefair" , serif;
        font-weight: 400;
        text-transform: uppercase;
    }
    p{
        color: #d0d6f9;
        font-size: 1.4rem;
        text-align: center;
    }
    .info-planets{
        height: 17vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding-top: 2vh;
        border-top: .2vh solid #383B4B;
        margin-top: 2.2vh;
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
}

`