import styled from 'styled-components';
import backgroundCrewMobile from '../../images/crew/background-crew-mobile.jpg'
import backgroundCrewTablet from '../../images/crew/background-crew-tablet.jpg'
import backgroundCrewDesktop from '../../images/crew/background-crew-desktop.jpg'

export const CrewContainer = styled.main`
gap:5vh;
background-image: url(${backgroundCrewMobile});
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
    h2{
        display: none;
    }
    .container-circles{
        height:1.5rem;
        width:20vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        div{
            height:1rem;
            width:1rem;
            border-radius: 50%;
            cursor: pointer;
            &:hover{
                background-color: #FFFFFF50 !important;
            }
        }
    }
    .crew-info{
        height:25vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
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
        }
        p{
            color:#D0D6F9;
            text-align: center;
            padding:0 3rem;
            font-size: 1.6rem;
            line-height: 2rem;
        }
    }
}
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
            width: 15vw !important;
        }
        p{
            padding: 0 20vw !important;
        }
    }
}
@media (min-width:1024px){
    background-image: url(${backgroundCrewDesktop});
    flex-direction: row !important;
    align-items: flex-end !important;
    h2{
        display: none;
    }
    article{
        height:80vh !important;
        padding-left: 10vw;
        align-items: flex-start !important;
        order:-1;
        h2{
            display: block !important;
        }
        .container-circles{
            width: 10vw !important;
            order: 1;
        }
        .crew-info{
            height:30vh !important;
            align-items: flex-start !important;
            h1{
                font-size:3.5rem !important;
                padding-bottom: 1rem;
            }
            h3{
                font-size: 2rem !important;
                text-align: start !important;
            }
            p{
                padding:0 12rem 0 0!important;
                text-align: start !important;
            }
        }
    }
    figure{
        border: none !important;
        img{
            height:75vh !important;
        }
    }
}
`