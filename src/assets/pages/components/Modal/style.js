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
        float: right;
        margin:2rem;
    }
    div{
        margin-top: 17.5vh;
        h2{
            font-weight: 100;
            font-size: 1.5rem;
            letter-spacing: 0.3rem;
            text-transform: uppercase;
            p{
                display: inline-block;
                padding: 0 1rem 2rem 3rem;
                font-weight: bold;            
            }
        }
        .link{
            color:white;
            text-decoration: none;
        }
    }
}
`