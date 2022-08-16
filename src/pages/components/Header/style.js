import styled from "styled-components";

export const HeaderContainer = styled.header`
    height:10vh;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    position:absolute;
    padding:0 8%;
    img{
        width:3.5rem;
        cursor: pointer;
    }
    .header-mobile{
        width:2.5rem;
    }
    nav{
        display: none;
    }
@media(min-width: 768px){
    padding:0 0 0 8%;
    .header-mobile{
        display: none;
    }
    nav{
        background-color: #FFFFFF04;
        height:9vh;
        width:59vw;
        display: flex;
        align-self: flex-start;
        align-items: center;
        justify-content: space-evenly;
        backdrop-filter: blur(20px);
        .link{
            text-decoration: none;
            color: white;
            h2{
                font-size: 1rem;
                font-weight:400;
                letter-spacing: 0.2rem;
                text-transform: uppercase;
                &:hover{
                    border-bottom: 0.3vh solid #FFFFFF50;
                    padding-bottom: 3vh;
                    margin-top: 3.3vh;
                }
                p{
                    display: inline-block;
                    padding-right: 0.6rem;
                    font-weight: 700;
                }
            }
        }
    }
}
@media(min-width: 1024px){
height:18vh;
nav{
    justify-content: center;
    gap: 8%;
    align-self:center;
}
}
`