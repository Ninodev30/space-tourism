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
gap:5vh;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${backgroundTechnologyMobile});
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
section{
    height: 75vh;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .image-portrait{
        display: none;
    }
    .image-landscape{
        width: 100%;
    }
    .container-circles{
        height: 3.5rem;
        width: 13rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        div{
            height: 100%;
            width: 3.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "Bellefair" , serif;
        }
    }
    article{
        height:30vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        h1,
        h3{
            font-weight: 400;
            font-family: "Bellefair" , serif;
            text-transform: uppercase;
        }
        h1{
            font-size: 2.2rem;
            margin-top: -2rem;
        }
        h3{
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
}

/* Tablet design */
@media (min-width:768px) and (max-width:1024px){
    background-image: url(${backgroundTechnologyTablet});
    h2{
        align-self: flex-start !important;
        padding: 7vh 0 2vh 7vw;
    }
    section{
        height:65vh !important;
        gap:5vh;
        .image-landscape{
            height:35vh;
        }
        .container-circles{
            div{
                height:4rem !important;
            }
        }
        article{
            justify-content: space-between !important;
            gap: 3vh !important;
            h1{
                margin-top: -1.5rem;
            }
            p{
                padding:0 20vw !important;
            }
        }
    }
}

/* Desktop design */
@media (min-width:1024px){
    background-image: url(${backgroundTechnologyDesktop});
    h2{
        align-self: start;
        padding: 4rem 0 0 10vw;
    }
    section{
        height:60vh !important;
        padding-left: 5rem;
        flex-direction: row !important;
        .image-landscape{
            display: none;
        }
        .image-portrait{
            display: block !important;
            width:35vw;
            order:1;
        }
        .container-circles{
            height: 18rem !important;
            flex-direction: column;
            div{
                height:5rem !important;
                width:5rem !important;
                font-size: 2rem !important;
            }
        }
        article{
            align-items: flex-start !important;
            height:35vh !important;
            padding-left: 5vw;
            h1{
                font-size: 3.5rem !important; 
                margin-top: -1rem;
            }
            h3{
                font-size: 1.2rem !important;
            }
            p{
                text-align: start !important;
                padding: 0 12rem 0 0 !important;
            }
        }
    }
}
`