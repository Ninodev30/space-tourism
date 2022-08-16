import styled from 'styled-components';

export const ModalContainer = styled.div`
height:100vh;
width:100vw;
position: absolute;
top:0;
left:0;
section{
    height:100%;
    width:68%;
    backdrop-filter: blur(30px);
    float: right;
    img{
        height:2rem;
        margin:2rem;
        float: right;
        cursor: pointer;
    }
    div{
        margin-top: 17.5vh;
        display: flex;
        flex-direction: column;
        .link{
            color:white;
            font-size: 1.7rem;
            letter-spacing: 0.3rem;
            text-decoration: none;
            text-transform: uppercase;
            p{
                display: inline-block;
                padding: 0 1rem 2rem 3rem;
                font-weight: bold;            
            }
        }
    }
}
`