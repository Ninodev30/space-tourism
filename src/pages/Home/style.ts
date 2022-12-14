import styled from "styled-components";
import backgroundHomeMobile from '../../images/home/background-home-mobile.jpg';
import backgroundHomeTablet from '../../images/home/background-home-tablet.jpg';
import backgroundHomeDesktop from '../../images/home/background-home-desktop.jpg';

export const HomeContainer = styled.main`
justify-content: space-evenly !important;
padding-top: 15vh;
background-image: url(${backgroundHomeMobile});
article{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1{
        font-family: 'Bellefair', serif;
        font-size: 7rem;
        font-weight: 400;
        line-height: 10rem;
    }
    p{
        color:#D0D6F9;
        font-size:1.5rem;
        line-height: 2.5rem;
        padding: 0 10%;
    }
    .firstParagraph{
        text-transform: uppercase;
        font-size: 1.4rem;
        letter-spacing: 0.25rem;
    }
}
.container-white-circle{
    border-radius: 50%;
    height: 22rem;
    width: 22rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 250ms ease-in-out 50ms;
    &:hover{
        background-color: #FFFFFF15;
    }
    .white-circle{
        height:13rem;
        width:13rem;
        background-color: white;
        color: #0b0d17;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-family: 'Bellefair', serif;
        font-size: 1.7rem;
        cursor: pointer;
    }
}
@media (min-width:768px) and (max-width:1024px){
    background-image: url(${backgroundHomeTablet});
    article p{
        padding:0 20% !important;
    }
}
@media (min-width:1024px){
    background-image: url(${backgroundHomeDesktop});
    flex-direction: row !important;
    align-items: flex-end !important;
    justify-content: space-evenly;
    padding: 0 !important;
    article{
        height:25rem;
        width:30rem;
        margin-bottom: 15vh;
        align-items: flex-start !important;
        text-align: start !important;
        .firstParagraph{
            font-size: 1.6rem !important;
        }
        h1{
            font-size: 8rem !important;
        }
        p{
            font-size:1.2rem !important;
            padding:0 6rem 0 0!important;
        }
    }
    .container-white-circle{
        margin-bottom: 20vh;
        .white-circle{
            height: 16rem !important;
            width: 16rem !important;
            font-size: 2rem !important;
        }
    }
}
`