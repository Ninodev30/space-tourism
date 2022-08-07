import styled from "styled-components";

export const HomeContainer = styled.main`
height:90vh;
width:100vw;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
@media(min-width:1024px){
    flex-direction: row !important;
}
article{
    height:45vh;
    width:60vh;
    text-align: center;
    h1{
        font-family: 'Bellefair', serif;
        font-size: 7rem;   
        font-weight: 400;
        line-height: 10rem;
    }
    p{
        color:#D0D6F9;
        line-height: 2.5rem;
    }
    .firstParagraph{
        text-transform: uppercase;
        font-size: 1.4rem;
        letter-spacing: 0.25rem;
    }
    h1 + p{
        font-size:1.5rem;
    }
}
div{
    height:30vh;
    width:60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        height:15rem;
        width:15rem;
        background-color: white;
        color: #0b0d17;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-family: 'Bellefair', serif;
        font-size: 2.2rem;
    }
}
`